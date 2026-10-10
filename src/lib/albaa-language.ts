import type { Language } from './albaa-content';

export const supportedLanguages: Language[] = ['fi', 'sv', 'en'];

export function resolveLanguage(value: unknown): Language {
  return value === 'sv' || value === 'en' ? value : 'fi';
}