/**
 * Rate Limiting - Persistent with Upstash Redis, fallback to in-memory
 * Max 10 analyses per IP per 24 hours
 */

import { Redis } from '@upstash/redis'

// Use Upstash Redis in production, fallback to in-memory for local dev
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null

const localStore = new Map<string, { count: number; resetAt: number }>()

const LIMIT = 10
const WINDOW = 86400 // 24 hours in seconds

export async function checkRateLimit(ip: string): Promise<{
  allowed: boolean
  remaining: number
  resetAt: number
}> {
  if (redis) {
    // Persistent rate limiting with Upstash
    const key = `rate-limit:${ip}`
    const current = await redis.get<number>(key)

    if (current === null) {
      await redis.set(key, 1, { ex: WINDOW })
      return { allowed: true, remaining: LIMIT - 1, resetAt: Date.now() + WINDOW * 1000 }
    }

    if (current >= LIMIT) {
      const ttl = await redis.ttl(key)
      return { allowed: false, remaining: 0, resetAt: Date.now() + ttl * 1000 }
    }

    await redis.incr(key)
    const ttl = await redis.ttl(key)
    return { allowed: true, remaining: LIMIT - 1 - current, resetAt: Date.now() + ttl * 1000 }
  }

  // Fallback: in-memory (for local development)
  const now = Date.now()
  const record = localStore.get(ip)

  if (!record || now > record.resetAt) {
    localStore.set(ip, { count: 1, resetAt: now + WINDOW * 1000 })
    return { allowed: true, remaining: LIMIT - 1, resetAt: now + WINDOW * 1000 }
  }

  if (record.count >= LIMIT) {
    return { allowed: false, remaining: 0, resetAt: record.resetAt }
  }

  record.count++
  return { allowed: true, remaining: LIMIT - record.count, resetAt: record.resetAt }
}
