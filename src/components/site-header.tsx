import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Languages, LogIn, Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { copy, languageNames, type Language } from '@/lib/albaa-content';

export function SiteHeader({ lang, onLanguage, portal = false }: { lang: Language; onLanguage: (lang: Language) => void; portal?: boolean }) {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const t = copy[lang];
  const themeLabel = theme === 'light' ? t.controls.dark : t.controls.light;
  const sections: Array<[string, string]> = [['features', t.nav.features], ['for-you', t.nav.roles], ['how-it-works', t.nav.process]];
  return <header className="site-header relative z-20"><div className="page-width header-layout">
    <Link to="/" search={{ lang }} className="wordmark" aria-label="Albaa"><span className="brand-mark"><Languages size={30} strokeWidth={2.2} /></span>Albaa<span className="text-primary">.</span></Link>
    <nav className="header-nav" aria-label={t.nav.menu}>{sections.map(([hash, label]) => <Link key={hash} to="/" search={{ lang }} hash={hash} className="nav-link">{label}</Link>)}</nav>
    <div className="header-controls"><div className="flex items-center gap-1" aria-label="Language / Kieli / Språk">{(['fi', 'sv', 'en'] as Language[]).map(code => <Button key={code} size="sm" variant={lang === code ? 'default' : 'ghost'} aria-label={{ fi: 'Suomi', sv: 'Svenska', en: 'English' }[code]} aria-pressed={lang === code} onClick={() => onLanguage(code)}>{languageNames[code]}</Button>)}</div>
      <Button variant="ghost" size="icon" onClick={toggle} aria-label={themeLabel} title={themeLabel}>{theme === 'light' ? <Moon /> : <Sun />}</Button>
      {!portal && <Button asChild size="sm"><Link to="/myportal" search={{ lang }}><LogIn />{t.controls.login}</Link></Button>}
    </div>
    <div className="header-menu"><Button variant="ghost" size="icon" aria-label={open ? t.nav.close : t.nav.menu} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
  </div>{open && <nav className="mobile-nav" aria-label={t.nav.menu}>{sections.map(([hash, label]) => <Link key={hash} to="/" search={{ lang }} hash={hash} className="nav-link" onClick={() => setOpen(false)}>{label}</Link>)}</nav>}</header>;
}
