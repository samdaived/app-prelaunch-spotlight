import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { ArrowLeft, Construction, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/site-header';
import { copy, type Language } from '@/lib/albaa-content';
import { resolveLanguage } from '@/lib/albaa-language';

export const Route = createFileRoute('/myportal')({
  validateSearch: (search: Record<string, unknown>): { lang: Language } => ({ lang: resolveLanguage(search['lang']) }),
  head: ({ match }) => {
    const lang = resolveLanguage(match.search.lang);
    const t = copy[lang].portal;
    return { meta: [{ title: `Albaa — ${t.title}` }, { name: 'description', content: t.description }, { property: 'og:title', content: `Albaa — ${t.title}` }, { property: 'og:description', content: t.description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, { property: 'og:url', content: `/myportal?lang=${lang}` }], links: [{ rel: 'canonical', href: `/myportal?lang=${lang}` }] };
  },
  component: MyPortal,
});
function MyPortal() {
  const { lang } = Route.useSearch();
  const navigate = Route.useNavigate();
  const t = copy[lang].portal;
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <><SiteHeader lang={lang} onLanguage={code => navigate({ search: { lang: code }, resetScroll: false })} portal /><main className="portal-page page-width"><Languages className="text-primary" size={52} strokeWidth={1.4} /><span className="launch-pill mt-8"><Construction size={14} />{t.badge}</span><h1 className="section-heading mt-6">{t.title}</h1><p className="section-copy mt-5 max-w-lg">{t.description}</p><Button asChild size="lg" className="mt-8"><Link to="/" search={{ lang }}><ArrowLeft />{t.back}</Link></Button></main></>;
}
