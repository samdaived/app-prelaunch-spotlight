import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, Check, CheckCheck, ChevronRight, Clock3, FileChartColumn, Globe2, Headphones, Languages, Plus, ShieldCheck, Users, Wallet, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/site-header';
import heroImage from '@/assets/interpreting-hero.jpg';
import { copy, type Language, type RoleKey } from '@/lib/albaa-content';
import { resolveLanguage } from '@/lib/albaa-language';

export const Route = createFileRoute('/')({
  component: Index,
  validateSearch: (search: Record<string, unknown>): { lang: Language } => ({ lang: resolveLanguage(search['lang']) }),
  head: ({ match }) => {
    const lang = resolveLanguage(match.search.lang);
    const meta = copy[lang].meta;
    const url = lang === 'fi' ? '/' : `/?lang=${lang}`;
    return { meta: [
      { title: meta.title }, { name: 'description', content: meta.description },
      { property: 'og:title', content: meta.ogTitle }, { property: 'og:description', content: meta.ogDescription },
      { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, { property: 'og:url', content: url },
    ], links: [{ rel: 'canonical', href: url }, ...(['fi', 'sv', 'en'] as Language[]).map(code => ({ rel: 'alternate', hrefLang: code, href: code === 'fi' ? '/' : `/?lang=${code}` }))] };
  },
});
const featureIcons = [CalendarDays, Zap, Users, Clock3, FileChartColumn, Wallet];
const roleKeys: RoleKey[] = ['clients', 'interpreters', 'administrators'];
function Brand() { return <a href="#" className="wordmark" aria-label="Albaa"><span className="brand-mark"><Languages size={30} strokeWidth={2.2} /></span>Albaa<span className="text-primary">.</span></a>; }
function Index() {
  const [role, setRole] = useState<RoleKey>('clients');
  const { lang } = Route.useSearch();
  const navigate = Route.useNavigate();
  const t = copy[lang];
  const selected = t.roles[role];
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <>
    <SiteHeader lang={lang} onLanguage={code => navigate({ search: { lang: code }, hash: '', resetScroll: false })} />
    <main>
      <section className="hero"><img src={heroImage} alt={t.hero.alt} width={1920} height={1024} className="hero-photo" fetchPriority="high" /><div className="page-width hero-content reveal"><span className="launch-pill"><span className="status-dot" />{t.hero.pill}</span><h1>Albaa.<br />{t.hero.line1}<br /><span className="text-primary">{t.hero.accent}</span></h1><p className="hero-copy">{t.hero.body}</p><div className="mt-8 flex flex-wrap items-center gap-4"><Button asChild size="lg"><a href="#features">{t.hero.primary} <ArrowRight /></a></Button><a href="#for-you" className="flex items-center gap-2 text-sm font-medium">{t.hero.secondary} <ChevronRight size={15} /></a></div><p className="hero-note"><Clock3 size={13} />{t.hero.note}</p></div></section>
      <div className="trust-strip"><div className="page-width grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4"><div className="trust-item"><Users />{t.trust[0]}</div><div className="trust-item"><Globe2 />{t.trust[1]}</div><div className="trust-item"><ShieldCheck />{t.trust[2]}</div><div className="trust-item"><Headphones />{t.trust[3]}</div></div></div>
      <section id="features" className="section page-width"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">{t.featuresIntro.eyebrow}</p><h2 className="section-heading">{t.featuresIntro.title1}<br />{t.featuresIntro.title2}</h2></div><p className="section-copy max-w-sm">{t.featuresIntro.body}</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{t.features.map(({ title, text }, index) => { const Icon = featureIcons[index] ?? CalendarDays; return <article className="feature-card" key={title}><div className="feature-icon"><Icon size={22} strokeWidth={1.6} /></div><h3>{title}</h3><p>{text}</p><span className="feature-label">{t.featuresIntro.label}</span></article>; })}</div></section>
      <section id="for-you" className="section role-section"><div className="page-width"><p className="eyebrow">{t.rolesIntro.eyebrow}</p><h2 className="section-heading">{t.rolesIntro.title}</h2><div className="grid items-center gap-12 pt-2 md:grid-cols-2 md:gap-20"><div><div className="role-tabs" role="tablist" aria-label={t.rolesIntro.title}>{roleKeys.map(item => <Button key={item} variant={role === item ? 'default' : 'ghost'} role="tab" id={`tab-${item}`} aria-selected={role === item} aria-controls="role-panel" onClick={() => setRole(item)}>{t.roleLabels[item]}</Button>)}</div><div id="role-panel" role="tabpanel" aria-labelledby={`tab-${role}`} className="pt-7"><h3 className="font-display text-2xl font-semibold">{selected.title}</h3><p className="section-copy mt-4">{selected.text}</p><ul className="mt-6 space-y-4">{selected.items.map(item => <li key={item} className="flex items-start gap-3 text-sm"><Check size={17} className="mt-0.5 shrink-0 text-primary" />{item}</li>)}</ul></div></div><div><div className="role-preview"><div className="preview-topbar"><span className="flex items-center gap-2 text-sm font-semibold"><Languages size={19} className="text-primary" />Albaa.</span><span className="text-xs text-muted-foreground">{selected.portal}</span></div><div className="p-6"><div className="mb-3 flex items-center justify-between"><h4 className="text-sm font-semibold">{selected.heading}</h4><CalendarDays size={17} className="text-muted-foreground" /></div>{selected.rows.map(([day, language, detail, status], index) => <div className="preview-row" key={`${role}-${index}`}><div className="preview-date"><div className="text-[9px] text-muted-foreground">{lang === 'fi' ? 'KESÄ' : 'JUN'}</div><div className="text-lg font-semibold">{day}</div></div><div><p className="text-xs font-semibold">{language}</p><p className="mt-1 text-[10px] text-muted-foreground">{detail}</p></div><span className="preview-status">{status}</span></div>)}<div className="mt-5 flex items-center gap-2 text-[11px] text-muted-foreground"><CheckCheck size={15} className="text-primary" />{t.rolesIntro.allInOne}</div></div></div><p className="mt-3 text-center text-[11px] text-muted-foreground">{t.rolesIntro.previewNote}</p></div></div></div></section>
      <section id="how-it-works" className="section page-width"><div className="text-center"><p className="eyebrow">{t.process.eyebrow}</p><h2 className="section-heading">{t.process.title}</h2><p className="section-copy mt-4">{t.process.body}</p></div><div className="mt-12 grid gap-9 md:grid-cols-3">{t.process.steps.map(({ title, text }, index) => <div key={index}><div className="step-number">{String(index + 1).padStart(2, '0')}</div><h3 className="font-display text-lg font-semibold">{title}</h3><p className="section-copy mt-3">{text}</p></div>)}</div></section>
      <section className="vision-section section"><div className="page-width"><p className="eyebrow">{t.vision.eyebrow}</p><h2 className="section-heading max-w-2xl">{t.vision.title}</h2><p className="section-copy mt-5 max-w-2xl">{t.vision.body}</p></div></section>
      <section className="closing"><div className="page-width flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><span className="launch-pill bg-secondary text-primary"><span className="status-dot" />{t.closing.pill}</span><h2 className="section-heading">{t.closing.title1}<br />{t.closing.title2}</h2><p className="section-copy mt-4 max-w-lg">{t.closing.body}</p></div><Button variant="secondary" asChild size="lg"><a href="#features">{t.closing.cta} <ArrowRight /></a></Button></div></section>
      <section className="section page-width grid gap-8 md:grid-cols-[1fr_1.5fr]"><div><p className="eyebrow">{t.faqIntro.eyebrow}</p><h2 className="section-heading">{t.faqIntro.title1}<br />{t.faqIntro.title2}</h2></div><div>{t.faqs.map(([question, answer]) => <details key={question} className="faq-row"><summary>{question}<Plus size={18} className="shrink-0 text-primary transition-transform" /></summary><p>{answer}</p></details>)}</div></section>
    </main><footer className="border-t border-border py-8"><div className="page-width flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><Brand /><p className="text-xs text-muted-foreground">{t.footer}</p><a href="#" className="nav-link">{t.back}</a></div></footer>
  </>;
}
