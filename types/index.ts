/**
 * AssessAI Type Definitions
 * Typdeklarationer för hela applikationen
 */

// Betygsnivåer enligt Skolverkets betygsskala
export type GradeLevel = 'E' | 'D' | 'C' | 'B' | 'A' | 'F';

// Ämnen som stöds
export type Subject =
  | 'Svenska'
  | 'Engelska'
  | 'Historia'
  | 'Samhällskunskap'
  | 'Geografi'
  | 'Religionskunskap'
  | 'Matematik';

// Utbildningsnivå
export type EducationLevel =
  | 'Grundskola'
  | 'Gymnasiet';

// Gymnasiekurser per ämne (officiella kurskoder från Skolverket)
export type SwedishCourse =
  | 'Svenska 1'    // SVESVE01, 100p
  | 'Svenska 2'    // SVESVE02, 100p
  | 'Svenska 3';   // SVESVE03, 100p

export type EnglishCourse =
  | 'Engelska 5'   // ENGENG05, 100p
  | 'Engelska 6'   // ENGENG06, 100p
  | 'Engelska 7';  // ENGENG07, 100p

export type HistoryCourse =
  | 'Historia 1a1' // HISHIS01a1, 50p (yrkesprogram)
  | 'Historia 1a2' // HISHIS01a2, 50p (yrkesprogram)
  | 'Historia 1b'  // HISHIS01b, 100p (högskoleförberedande)
  | 'Historia 2a'  // HISHIS02a, 100p
  | 'Historia 2b - kultur'  // HISHIS02b, 100p
  | 'Historia 3';  // HISHIS03, 100p

export type CivicsCourse =
  | 'Samhällskunskap 1a1' // SAMSAM01a1, 50p
  | 'Samhällskunskap 1a2' // SAMSAM01a2, 50p
  | 'Samhällskunskap 1b'  // SAMSAM01b, 100p
  | 'Samhällskunskap 2'   // SAMSAM02, 100p
  | 'Samhällskunskap 3';  // SAMSAM03, 100p

export type GeographyCourse =
  | 'Geografi 1'   // GEOGEO01, 100p
  | 'Geografi 2';  // GEOGEO02, 100p

export type ReligionCourse =
  | 'Religionskunskap 1'  // RELREL01, 50p
  | 'Religionskunskap 2'; // RELREL02, 50p

export type MathCourse =
  | 'Matematik 1a' // MATMAT01a, 100p
  | 'Matematik 1b' // MATMAT01b, 100p
  | 'Matematik 1c' // MATMAT01c, 100p
  | 'Matematik 2a' // MATMAT02a, 100p
  | 'Matematik 2b' // MATMAT02b, 100p
  | 'Matematik 2c' // MATMAT02c, 100p
  | 'Matematik 3b' // MATMAT03b, 100p
  | 'Matematik 3c' // MATMAT03c, 100p
  | 'Matematik 4'  // MATMAT04, 100p
  | 'Matematik 5'; // MATMAT05, 100p

// Union av alla gymnasiekurser
export type GymnasiumCourse =
  | SwedishCourse
  | EnglishCourse
  | HistoryCourse
  | CivicsCourse
  | GeographyCourse
  | ReligionCourse
  | MathCourse;

// Highlight från AI-analys
export interface Highlight {
  text: string;
  grade: 'E' | 'C' | 'A'; // Endast betygssteg med kunskapskrav
  motivation: string;
}

// Analysresultat
export interface Analysis {
  highlights: Highlight[];
  assessment: string;
  feedback: string;
  suggestedGrade?: GradeLevel;
}

// Request för analys
export interface AnalyzeRequest {
  studentText: string;
  subject: Subject;
  educationLevel: EducationLevel;
  course?: GymnasiumCourse; // Endast för gymnasiet
  contextMaterials?: string;
  className?: string;  // Valfritt - för organisation (endast alias!)
  studentId?: string;  // Valfritt - för organisation (endast alias!)
}

// Response från analys
export interface AnalyzeResponse {
  success: boolean;
  analysis?: Analysis;
  error?: string;
  provider?: string;
}

// Kunskapskrav-struktur
export interface KunskapskravEntry {
  E: string;
  C: string;
  A: string;
  aspects: string[];
}

// Mappning av kurser per ämne
export const COURSES_BY_SUBJECT: Record<Subject, GymnasiumCourse[]> = {
  Svenska: ['Svenska 1', 'Svenska 2', 'Svenska 3'],
  Engelska: ['Engelska 5', 'Engelska 6', 'Engelska 7'],
  Historia: ['Historia 1a1', 'Historia 1a2', 'Historia 1b', 'Historia 2a', 'Historia 2b - kultur', 'Historia 3'],
  Samhällskunskap: ['Samhällskunskap 1a1', 'Samhällskunskap 1a2', 'Samhällskunskap 1b', 'Samhällskunskap 2', 'Samhällskunskap 3'],
  Geografi: ['Geografi 1', 'Geografi 2'],
  Religionskunskap: ['Religionskunskap 1', 'Religionskunskap 2'],
  Matematik: ['Matematik 1a', 'Matematik 1b', 'Matematik 1c', 'Matematik 2a', 'Matematik 2b', 'Matematik 2c', 'Matematik 3b', 'Matematik 3c', 'Matematik 4', 'Matematik 5'],
};
