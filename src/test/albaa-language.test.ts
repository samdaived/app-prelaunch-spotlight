import { describe, expect, it } from 'vitest';
import { resolveLanguage, supportedLanguages } from '@/lib/albaa-language';

describe('Albaa language selection', () => {
  it('defaults to Finnish when no language is chosen', () => {
    expect(resolveLanguage(undefined)).toBe('fi');
  });
  it('offers Finnish, Swedish and English in that order', () => {
    expect(supportedLanguages).toEqual(['fi', 'sv', 'en']);
  });
  it('accepts Swedish as the selected language', () => {
    expect(resolveLanguage('sv')).toBe('sv');
  });
  it('accepts English as the selected language', () => {
    expect(resolveLanguage('en')).toBe('en');
  });
  it('falls back to Finnish for unsupported languages', () => {
    expect(resolveLanguage('de')).toBe('fi');
  });
});