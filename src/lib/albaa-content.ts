export type Language = 'fi' | 'sv' | 'en';
export type RoleKey = 'clients' | 'interpreters' | 'administrators';

type Copy = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  nav: { features: string; roles: string; process: string; soon: string; menu: string; close: string };
  hero: { pill: string; line1: string; line2: string; accent: string; body: string; primary: string; secondary: string; note: string; alt: string };
  trust: string[];
  featuresIntro: { eyebrow: string; title1: string; title2: string; body: string; label: string };
  features: Array<{ title: string; text: string }>;
  rolesIntro: { eyebrow: string; title: string; previewNote: string; allInOne: string };
  roleLabels: Record<RoleKey, string>;
  roles: Record<RoleKey, { title: string; text: string; items: string[]; heading: string; portal: string; rows: string[][] }>;
  process: { eyebrow: string; title: string; body: string; steps: Array<{ title: string; text: string }> };
  closing: { pill: string; title1: string; title2: string; body: string; cta: string };
  faqIntro: { eyebrow: string; title1: string; title2: string };
  faqs: Array<[string, string]>;
  controls: { login: string; light: string; dark: string };
  vision: { eyebrow: string; title: string; body: string };
  portal: { title: string; description: string; badge: string; back: string };
  footer: string; back: string;
};

export const languageNames: Record<Language, string> = { fi: 'FI', sv: 'SV', en: 'EN' };

export const copy: Record<Language, Copy> = {
  fi: {
    meta: { title: 'Albaa — Tulkkauspalvelut Suomessa', description: 'Tulossa: tulkkausalusta asiakkaille, tulkeille ja palveluntarjoajille Suomessa.', ogTitle: 'Albaa — Sujuvampaa tulkkausta Suomessa', ogDescription: 'Tutustu tulevan Albaa-alustan varauksiin, toimeksiantoihin, raportointiin ja laskutuksen valmisteluun.' },
    nav: { features: 'Tulossa', roles: 'Kenelle', process: 'Näin se toimii', soon: 'Tulossa pian', menu: 'Avaa valikko', close: 'Sulje valikko' },
    hero: { pill: 'Uusi tapa hallita tulkkausta', line1: 'Tulkkausta.', line2: 'Ihmisten välillä.', accent: 'Helposti hallittuna.', body: 'Rakennamme Suomeen sujuvamman tavan varata, toteuttaa ja hallita ammattitulkkausta. Yksi alusta. Enemmän ymmärrystä. Vähemmän esteitä.', primary: 'Tutustu tulevaan', secondary: 'Löydä oma näkymäsi', note: 'Kehitystyö on käynnissä. Huolellisesti tulevaa varten.', alt: 'Ammattitulkki auttaa kahta asiakasta keskustelussa' },
    trust: ['Luottamus tavoitteena', 'Suunniteltu Suomeen', 'Tietosuoja ytimessä', 'Ajanvaraus ja kiirepyynnöt'],
    featuresIntro: { eyebrow: 'Katse tulevaan', title1: 'Vähemmän vaivaa.', title2: 'Enemmän ymmärrystä.', body: 'Tarvittavat työkalut yhdessä paikassa. Nämä ominaisuudet ovat suunnitteilla ensimmäiseen julkaisuun.', label: 'SUUNNITELTU JULKAISUUN' },
    features: [
      { title: 'Varaus ilman edestakaista viestittelyä', text: 'Valitse kieli, aika ja tulkkaustapa. Pyyntö välitetään sopiville, vapaille tulkeille.' },
      { title: 'Kun asia ei voi odottaa', text: 'Kiirepyyntö tavoittaa vapaat tulkit kerralla. Ensimmäinen hyväksyntä vahvistaa toimeksiannon.' },
      { title: 'Oikeat ihmiset kohtaavat', text: 'Selkeä hyväksymis- tai hylkäysprosessi yhdistää toimeksiannon sopivaan tulkkiin.' },
      { title: 'Jokainen istunto kirjataan', text: 'Toteutuneet ajat, pidennykset ja poikkeamat tallennetaan selkein muistiinpanoin.' },
      { title: 'Selkeä näkymä palveluun', text: 'Päivä-, viikko- ja kuukausiraportit kielistä, tunneista ja toimeksiannoista PDF- tai CSV-muodossa.' },
      { title: 'Vähemmän hallintoa', text: 'Laskutustiedot valmistellaan toteutuneista istunnoista asiakkaille ja tulkeille erikseen.' },
    ],
    rolesIntro: { eyebrow: 'Eri roolit. Yksi yhteinen alusta.', title: 'Rakennettu sinua varten.', previewNote: 'Havainnollistava esikatselu. Lopullinen sovellus voi näyttää erilaiselta.', allInOne: 'Kaikki yhdessä paikassa.' },
    roleLabels: { clients: 'Asiakkaat', interpreters: 'Tulkit', administrators: 'Ylläpito' },
    roles: {
      clients: { title: 'Seuraava keskustelusi alkaa tästä.', text: 'Varauksesta loppuraporttiin kaikki tulkkausasiat löytyvät yhdestä paikasta.', items: ['Varaa tavallinen tai kiireellinen tulkkaus', 'Tarkastele, siirrä ja hallitse varauksia', 'Avaa raportit ja laskutettavat summat'], heading: 'Tulevat varauksesi', portal: 'Asiakasnäkymä', rows: [['12', 'Suomi → arabia', 'Videotulkkaus · 10.00', 'Vahvistettu'], ['14', 'Ruotsi → somali', 'Puhelin · 14.30', 'Odottaa tulkkia'], ['16', 'Englanti → suomi', 'Paikan päällä · 09.00', 'Vahvistettu']] },
      interpreters: { title: 'Enemmän aikaa olennaiseen.', text: 'Oma näkymä toimeksiantoihin, kalenteriin ja tehdyn työn raportointiin.', items: ['Hyväksy tai hylkää sopivat toimeksiannot', 'Kirjaa ajat ja poikkeamat', 'Tarkastele raportteja ja korvauksia'], heading: 'Toimeksiantosi', portal: 'Tulkin näkymä', rows: [['12', 'Suomi → arabia', 'Videotulkkaus · 10.00', 'Hyväksytty'], ['14', 'Ruotsi → suomi', 'Puhelin · 11.30', 'Uusi pyyntö'], ['18', 'Englanti → suomi', 'Videotulkkaus · 15.00', 'Hyväksytty']] },
      administrators: { title: 'Koko toiminta yhdessä näkymässä.', text: 'Hallinnoi ihmisiä, varauksia ja palvelua keskitetysti.', items: ['Hallinnoi käyttäjiä, kieliä ja toimeksiantoja', 'Määritä hinnat ja peruutusehdot', 'Valmistele raportit ja laskutustiedot'], heading: 'Palvelun yleiskuva', portal: 'Ylläpidon näkymä', rows: [['12', 'Suomi → arabia', 'Asiakasvaraus · 10.00', 'Vahvistettu'], ['12', 'Ruotsi → somali', 'Kiirepyyntö · 12.00', 'Odottaa tulkkia'], ['14', 'Englanti → suomi', 'Asiakasvaraus · 09.00', 'Vahvistettu']] },
    },
    process: { eyebrow: 'Pyynnöstä yhteyteen', title: 'Sujuvampi tapa eteenpäin.', body: 'Selkeä työnkulku ensimmäisestä varauksesta loppuraporttiin.', steps: [{ title: 'Kerro, mitä tarvitset', text: 'Valitse kieli, aika ja tulkkaustapa. Varaa ennakkoon tai tee kiirepyyntö.' }, { title: 'Yhdisty tulkin kanssa', text: 'Pyyntösi välitetään sopiville tulkeille. Hyväksynnän jälkeen istunto vahvistetaan.' }, { title: 'Pidä kaikki näkyvissä', text: 'Istuntotiedot, raportit ja laskutustiedot pitävät seuraavat vaiheet selkeinä.' }] },
    closing: { pill: 'Tulossa pian', title1: 'Hyvä keskustelu alkaa', title2: 'ymmärryksestä.', body: 'Me hiomme yksityiskohdat, jotta sinä voit keskittyä ihmisiin. Albaa on matkalla Suomeen.', cta: 'Tutustu ominaisuuksiin' },
    faqIntro: { eyebrow: 'Hyvä tietää', title1: 'Kohti tulevaa,', title2: 'selkeästi.' },
    faqs: [['Milloin Albaa julkaistaan?', 'Alustaa kehitetään parhaillaan. Julkaisupäivää ei ole vielä ilmoitettu. Tämä sivusto esittelee ensimmäiseen julkaisuun suunniteltuja ominaisuuksia.'], ['Kenelle Albaa rakennetaan?', 'Suomessa toimiville tulkkauspalvelujen asiakkaille, ammattitulkeille ja palvelua koordinoiville ylläpitäjille. Jokaiselle tulee oma näkymä.'], ['Mikä on Albaan tekoälyvisio?', 'Tavoitteenamme on rakentaa täysin luotettava tekoälytulkki Suomessa, kaikki sen resurssit Suomessa. Kyseessä on tulevaisuuden visio; tekoälytulkkaus ei ole vielä käytettävissä.'], ['Voinko varata tulkkauksen nyt?', 'En vielä. Varaus ja muut sovelluspalvelut ovat vielä kehityksessä, eivätkä ne ole käytettävissä tällä sivustolla.']],
    controls: { login: 'Kirjaudu', light: 'Vaalea tila', dark: 'Tumma tila' },
    vision: { eyebrow: 'Tulevaisuuden visiomme', title: 'Luotettava tekoälytulkki. Suomesta.', body: 'Tavoitteenamme on rakentaa täysin luotettava tekoälytulkki Suomessa siten, että kaikki sen resurssit — data, mallit ja infrastruktuuri — sijaitsevat Suomessa. Tämä on tulevaisuuden tavoitteemme, ei vielä käytettävissä oleva palvelu.' },
    portal: { title: 'Oma portaali on kehitteillä.', description: 'Rakennamme Albaa-portaalia asiakkaille, tulkeille ja ylläpidolle. Kirjautuminen ja portaali eivät ole vielä käytettävissä. Tulemme takaisin, kun kaikki on valmista.', badge: 'Kehitteillä', back: 'Takaisin Albaa-sivustolle' },
    footer: '© 2026 Albaa. Tulkkauksen tulevaisuus on tekeillä.', back: 'Takaisin alkuun ↑',
  },
  sv: {
    meta: { title: 'Albaa — Tolktjänster i Finland', description: 'Kommer snart: en tolkningsplattform för kunder, tolkar och tjänsteleverantörer i Finland.', ogTitle: 'Albaa — Smidigare tolkning i Finland', ogDescription: 'Upptäck Albaas kommande funktioner för bokning, uppdrag, rapportering och fakturaunderlag.' },
    nav: { features: 'På väg', roles: 'För dig', process: 'Så fungerar det', soon: 'Kommer snart', menu: 'Öppna menyn', close: 'Stäng menyn' },
    hero: { pill: 'Ett nytt sätt att hantera tolkning', line1: 'Tolkning.', line2: 'Mellan människor.', accent: 'Enkelt hanterad.', body: 'Vi bygger ett smidigare sätt att boka, genomföra och hantera professionell tolkning i Finland. En plattform. Mer förståelse. Färre hinder.', primary: 'Se vad som kommer', secondary: 'Hitta din vy', note: 'Under utveckling. Omsorgsfullt byggd för framtiden.', alt: 'En professionell tolk hjälper två kunder att samtala' },
    trust: ['Tillit som mål', 'Utvecklad för Finland', 'Integritet i centrum', 'Bokade och brådskande uppdrag'],
    featuresIntro: { eyebrow: 'En blick framåt', title1: 'Mindre krångel.', title2: 'Mer förståelse.', body: 'Verktygen du behöver på ett ställe. De här funktionerna planeras för den första lanseringen.', label: 'PLANERAD FÖR LANSERING' },
    features: [
      { title: 'Bokning utan omvägar', text: 'Välj språk, tid och tolkningsform. Förfrågan skickas till lämpliga, tillgängliga tolkar.' },
      { title: 'När det inte kan vänta', text: 'Brådskande förfrågningar når tillgängliga tolkar samtidigt. Första godkännandet säkrar uppdraget.' },
      { title: 'Rätt personer möts', text: 'Ett tydligt flöde för att godkänna eller avböja kopplar uppdraget till en lämplig tolk.' },
      { title: 'Varje session registreras', text: 'Faktiska tider, förlängningar och avvikelser dokumenteras med tydliga anteckningar.' },
      { title: 'En tydligare servicebild', text: 'Dagliga, veckovisa och månatliga rapporter om språk, timmar och uppdrag i PDF eller CSV.' },
      { title: 'Mindre administration', text: 'Faktureringsunderlag för kunder och tolkersättningar förbereds separat från slutförda sessioner.' },
    ],
    rolesIntro: { eyebrow: 'Olika roller. En gemensam plattform.', title: 'Byggd kring dig.', previewNote: 'En illustrativ förhandsvisning. Den slutliga appen kan se annorlunda ut.', allInOne: 'Allt på ett ställe.' },
    roleLabels: { clients: 'Kunder', interpreters: 'Tolkar', administrators: 'Administration' },
    roles: {
      clients: { title: 'Ditt nästa samtal börjar här.', text: 'Från första bokningen till slutrapporten samlas dina tolkningsärenden på ett ställe.', items: ['Boka planerade eller brådskande sessioner', 'Se, flytta och hantera bokningar', 'Öppna rapporter och debiterbara belopp'], heading: 'Dina kommande bokningar', portal: 'Kundvy', rows: [['12', 'Finska → arabiska', 'Videotolkning · 10.00', 'Bekräftad'], ['14', 'Svenska → somaliska', 'Telefon · 14.30', 'Väntar på tolk'], ['16', 'Engelska → finska', 'På plats · 09.00', 'Bekräftad']] },
      interpreters: { title: 'Mer tid för det viktiga.', text: 'En egen vy för uppdrag, kalender och rapportering av utfört arbete.', items: ['Godkänn eller avböj lämpliga uppdrag', 'Registrera tider och avvikelser', 'Se rapporter och ersättningar'], heading: 'Dina uppdrag', portal: 'Tolkvy', rows: [['12', 'Finska → arabiska', 'Videotolkning · 10.00', 'Godkänt'], ['14', 'Svenska → finska', 'Telefon · 11.30', 'Nytt uppdrag'], ['18', 'Engelska → finska', 'Videotolkning · 15.00', 'Godkänt']] },
      administrators: { title: 'Hela verksamheten i en vy.', text: 'Hantera människor, bokningar och service centralt.', items: ['Hantera användare, språk och uppdrag', 'Ange priser och avbokningsregler', 'Förbered rapporter och fakturaunderlag'], heading: 'Serviceöversikt', portal: 'Administrationsvy', rows: [['12', 'Finska → arabiska', 'Kundbokning · 10.00', 'Bekräftad'], ['12', 'Svenska → somaliska', 'Brådskande · 12.00', 'Väntar på tolk'], ['14', 'Engelska → finska', 'Kundbokning · 09.00', 'Bekräftad']] },
    },
    process: { eyebrow: 'Från förfrågan till kontakt', title: 'En enklare väg framåt.', body: 'Ett genomtänkt flöde från första bokningen till slutrapporten.', steps: [{ title: 'Berätta vad du behöver', text: 'Välj språk, tid och tolkningsform. Boka i förväg eller gör en brådskande förfrågan.' }, { title: 'Anslut med en tolk', text: 'Din förfrågan når lämpliga tolkar. När någon godkänner bekräftas sessionen.' }, { title: 'Ha allt inom räckhåll', text: 'Sessionsuppgifter, rapporter och fakturaunderlag gör nästa steg tydligt.' }] },
    closing: { pill: 'Kommer snart', title1: 'Goda samtal börjar', title2: 'med förståelse.', body: 'Vi tar hand om detaljerna så att du kan fokusera på människorna. Albaa är på väg till Finland.', cta: 'Upptäck funktionerna' },
    faqIntro: { eyebrow: 'Bra att veta', title1: 'Framåt,', title2: 'med tydlighet.' },
    faqs: [['När lanseras Albaa?', 'Plattformen utvecklas just nu. Inget lanseringsdatum har meddelats. Den här webbplatsen visar funktioner som planeras för den första versionen.'], ['Vem byggs Albaa för?', 'Kunder som behöver tolkning i Finland, professionella tolkar och administratörer som samordnar servicen. Varje grupp får en egen vy.'], ['Vad är Albaas AI-vision?', 'Vårt mål är att bygga en fullt pålitlig AI-tolk i Finland, med alla dess resurser i Finland. Det är en framtidsvision; AI-tolkning är ännu inte tillgänglig.'], ['Kan jag boka tolkning nu?', 'Inte ännu. Bokning och övriga apptjänster utvecklas fortfarande och är inte tillgängliga via den här webbplatsen.']],
    controls: { login: 'Logga in', light: 'Ljust läge', dark: 'Mörkt läge' },
    vision: { eyebrow: 'Vår framtidsvision', title: 'En pålitlig AI-tolk. Från Finland.', body: 'Vårt mål är att bygga en fullt pålitlig AI-tolk i Finland, med alla dess resurser — data, modeller och infrastruktur — i Finland. Det är vår framtidsvision, inte en tjänst som är tillgänglig ännu.' },
    portal: { title: 'Min portal är under utveckling.', description: 'Vi bygger Albaa-portalen för kunder, tolkar och administratörer. Inloggning och portalen är inte tillgängliga ännu. Vi återkommer när allt är klart.', badge: 'Under utveckling', back: 'Tillbaka till Albaa' },
    footer: '© 2026 Albaa. Framtidens tolkning tar form.', back: 'Till början ↑',
  },
  en: {
    meta: { title: 'Albaa — Interpreting services in Finland', description: 'Coming soon: a interpreting platform for clients, interpreters and service teams in Finland.', ogTitle: 'Albaa — A better way to manage interpreting in Finland', ogDescription: 'Explore upcoming booking, assignment, reporting and billing preparation features from Albaa.' },
    nav: { features: 'What’s coming', roles: 'Built for you', process: 'How it will work', soon: 'Coming soon', menu: 'Open menu', close: 'Close menu' },
    hero: { pill: 'A new chapter in interpreting', line1: 'Interpreting.', line2: 'Human connection.', accent: 'Simply managed.', body: 'We’re building a better way to book, deliver and manage professional interpreting in Finland. One platform. More understanding. Fewer barriers.', primary: 'Explore what’s coming', secondary: 'Find your place', note: 'In development. Thoughtfully built for what’s next.', alt: 'A professional interpreter helping two clients have a conversation' },
    trust: ['Trust as our ambition', 'Built for Finland', 'Privacy at the core', 'Scheduled and urgent requests'],
    featuresIntro: { eyebrow: 'A look ahead', title1: 'Less friction.', title2: 'More understanding.', body: 'The tools you need, brought together. Here’s what we’re building for our first release.', label: 'PLANNED FOR LAUNCH' },
    features: [
      { title: 'Booking, without the back-and-forth', text: 'Choose your language, time and interpreting method. Suitable, available interpreters will receive your request.' },
      { title: 'When it just can’t wait', text: 'Urgent requests will reach available interpreters at once. The first acceptance secures your assignment.' },
      { title: 'The right people, connected', text: 'A clear accept-or-decline workflow will connect each assignment with a suitable interpreter.' },
      { title: 'Every session, accounted for', text: 'Record actual session times, extended sessions and exceptions, with clear notes.' },
      { title: 'A clearer view of your service', text: 'Explore daily, weekly and monthly reports across languages, hours and assignments in PDF or CSV.' },
      { title: 'Less admin. More clarity.', text: 'Prepare billing data from completed sessions, with client charges and interpreter compensation kept separate.' },
    ],
    rolesIntro: { eyebrow: 'Different roles. One connected platform.', title: 'Built around you.', previewNote: 'An illustrative preview. The final app may look different.', allInOne: 'Everything in one place.' },
    roleLabels: { clients: 'Clients', interpreters: 'Interpreters', administrators: 'Administrators' },
    roles: {
      clients: { title: 'Your next conversation starts here.', text: 'From the first request to the final report, your interpreting bookings will live in one place.', items: ['Book scheduled or urgent sessions', 'View, reschedule and manage bookings', 'Access reports and billable amounts'], heading: 'Your upcoming sessions', portal: 'Client portal', rows: [['12', 'Finnish → Arabic', 'Video interpreting · 10:00', 'Confirmed'], ['14', 'Swedish → Somali', 'Telephone · 14:30', 'Awaiting interpreter'], ['16', 'English → Finnish', 'In person · 09:00', 'Confirmed']] },
      interpreters: { title: 'More time for what you do best.', text: 'A dedicated space to manage assignments, your calendar and session reporting.', items: ['Accept or decline suitable assignments', 'Record session times and exceptions', 'View reports and compensation'], heading: 'Your assignments', portal: 'Interpreter portal', rows: [['12', 'Finnish → Arabic', 'Video interpreting · 10:00', 'Accepted'], ['14', 'Swedish → Finnish', 'Telephone · 11:30', 'New assignment'], ['18', 'English → Finnish', 'Video interpreting · 15:00', 'Accepted']] },
      administrators: { title: 'The whole operation. In one view.', text: 'Bring your people, bookings and business together in one central workspace.', items: ['Manage users, languages and assignments', 'Set pricing and cancellation policies', 'Prepare reports and billing data'], heading: 'Service overview', portal: 'Administrator portal', rows: [['12', 'Finnish → Arabic', 'Client booking · 10:00', 'Confirmed'], ['12', 'Swedish → Somali', 'Urgent request · 12:00', 'Awaiting interpreter'], ['14', 'English → Finnish', 'Client booking · 09:00', 'Confirmed']] },
    },
    process: { eyebrow: 'From request to connection', title: 'A simpler way forward.', body: 'A thoughtful workflow, from the first booking to the final report.', steps: [{ title: 'Tell us what you need', text: 'Choose a language, time and interpreting method. Schedule ahead or make an urgent request.' }, { title: 'Connect with an interpreter', text: 'Your request will reach suitable interpreters. Once accepted, your session will be confirmed.' }, { title: 'Keep everything in view', text: 'Session records, reports and billing details will keep the next steps clear.' }] },
    closing: { pill: 'Coming soon', title1: 'Good conversations start', title2: 'with understanding.', body: 'We’re working on the details, so you can focus on the people. Albaa is on its way to Finland.', cta: 'Discover the planned features' },
    faqIntro: { eyebrow: 'A few things to know', title1: 'Looking ahead,', title2: 'with clarity.' },
    faqs: [['When will Albaa be available?', 'We’re currently developing the platform. A launch date has not been announced. This website introduces features planned for the first release.'], ['Who is Albaa being built for?', 'Clients who need interpreting services in Finland, professional interpreters and administrators who coordinate the service. Each will have a dedicated view.'], ['What is Albaa’s AI vision?', 'Our ambition is to build a fully trusted AI interpreter in Finland, with all its assets in Finland. This is a future vision; AI interpreting is not available yet.'], ['Can I book a session today?', 'Not yet. Booking and other app services are still in development and are not available through this website.']],
    controls: { login: 'Log in', light: 'Light mode', dark: 'Dark mode' },
    vision: { eyebrow: 'Our future vision', title: 'A trusted AI interpreter. From Finland.', body: 'Our ambition is to build a fully trusted AI interpreter in Finland, with all its assets — data, models and infrastructure — located in Finland. This is our future vision, not a service available today.' },
    portal: { title: 'My portal is under development.', description: 'We’re building the Albaa portal for clients, interpreters and administrators. Login and portal services are not available yet. We’ll be back when everything is ready.', badge: 'Under development', back: 'Back to Albaa' },
    footer: '© 2026 Albaa. The future of interpreting, in the making.', back: 'Back to top ↑',
  },
};
