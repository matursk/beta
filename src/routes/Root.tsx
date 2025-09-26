import React from "react";
import PlatformNotice from "../components/PlatformNotice";
import QRForAndroid from "../components/QRForAndroid";
import Navbar from "../components/Navbar";

export default function Root() {
  const todayStr = (() => {
    const d = new Date();
    const dd = d.getDate();
    const mm = d.getMonth() + 1;
    const yyyy = d.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  })();

  const betaStart = new Date(2025, 9, 15, 0, 0, 0); // 15.10.2025
  function getRemaining() {
    const now = new Date().getTime();
    const diff = Math.max(0, betaStart.getTime() - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }
  const [remaining, setRemaining] = React.useState(getRemaining());
  React.useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      <main className="container mx-auto px-4 py-10 space-y-16">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Zmaturuj s ľahkosťou</h1>
            <p className="text-lg opacity-80 mb-6">
              Prihlás sa do Android beta programu – pomôžeme ti pripraviť sa na maturity
              jednoducho a rýchlo.
            </p>
            <div className="flex items-center gap-4">
              <a href="/beta" className="btn btn-primary">Požiadať o prístup</a>
              <QRForAndroid url={"https://beta.matur.sk"} />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a
                className="text-current hover:opacity-80"
                href="https://www.instagram.com/pr.matur.sk"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"></circle>
                </svg>
              </a>
              <a
                className="text-current hover:opacity-80"
                href="https://x.com/prmatursk"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h2.772l-6.066 6.93 7.34 10.57h-6.451l-4.045-5.72-4.632 5.72H4.39l6.243-7.71L3.672 2.25h6.606l3.777 5.28 4.189-5.28z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/logo.png" alt="Matur logo" className="max-h-64" />
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Zamerané na maturitu</h3>
              <p>
                Obsah a cvičenia sú priamo k maturitným okruhom: modelové otázky, postupy krok za krokom,
                vysvetlenia riešení a tipy na stratégiu. Krátke kvízy s okamžitou spätnou väzbou ti pomôžu
                rýchlo zistiť, čo už ovládaš a čo treba ešte precvičiť.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Prispôsobené študentom</h3>
              <p>
                Krátke a zrozumiteľné lekcie, jazyk bez zbytočného „balastu“, adaptívne opakovanie podľa tvojich
                chýb, pripomenutia pred dôležitými termínmi a režimy učenia na 10/20/30 minút. Všetko tak, aby si sa
                vedel učiť aj popri iných povinnostiach.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Pomôže ti uspieť</h3>
              <p>
                Prehľad pokroku, denné ciele, série (streaks) a odznaky pre motiváciu. Odporúčania tém podľa výsledkov,
                inteligentné pripomenutia a počas bety aj podpora pri nahlasovaní chýb — nech sa appka zlepšuje spolu s tebou.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h2 className="card-title">Plán a kapacita</h2>
                <div className="badge badge-primary">Kapacita: 10 miest</div>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-2">
                <div className="text-center p-3 rounded-box bg-base-200">
                  <div className="text-3xl font-bold tabular-nums">{remaining.days}</div>
                  <div className="opacity-70 text-sm">dni</div>
                </div>
                <div className="text-center p-3 rounded-box bg-base-200">
                  <div className="text-3xl font-bold tabular-nums">{remaining.hours.toString().padStart(2, '0')}</div>
                  <div className="opacity-70 text-sm">hod</div>
                </div>
                <div className="text-center p-3 rounded-box bg-base-200">
                  <div className="text-3xl font-bold tabular-nums">{remaining.minutes.toString().padStart(2, '0')}</div>
                  <div className="opacity-70 text-sm">min</div>
                </div>
                <div className="text-center p-3 rounded-box bg-base-200">
                  <div className="text-3xl font-bold tabular-nums">{remaining.seconds.toString().padStart(2, '0')}</div>
                  <div className="opacity-70 text-sm">sek</div>
                </div>
              </div>
              <p className="mt-3 opacity-80">
                Spúšťame <strong>15.10.2025</strong>. Beta potrvá do <strong>1.11.2025</strong>.
              </p>
            </div>
          </div>
        </section>

        <section>
          <PlatformNotice />
          <div className="card bg-base-100 shadow mt-6">
            <div className="card-body">
              <h2 className="card-title">Ako funguje beta</h2>
              <p>
                Vybraní používatelia dostanú aplikáciu (APK). Po inštalácii sa prihlásia svojím e‑mailom
                uvedeným v prihláške. Následne majú aplikáciu používať na učenie sa na maturity a chyby
                nahlasovať priamo v appke cez <strong>Nastavenia → Nahlásiť chybu</strong>. Za každú
                potvrdenú nahlásenú chybu je pripravená odmena – je teda v tvojom záujme chyby hlásiť.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Roadmapa</h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-800 bg-blue-700/10 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-[40%] bg-blue-600"></div>
                </div>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <div className="font-mono opacity-70">1.9.2025</div>
                <div className="text-lg font-semibold">1. Idea</div>
                <p>Vznikol nápad vytvoriť aplikáciu, ktorá pomôže maturantom.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-800 bg-blue-700/10 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-[40%] bg-blue-600"></div>
                </div>
              </div>
              <div className="timeline-end mb-10">
                <div className="font-mono opacity-70">5.9.2025</div>
                <div className="text-lg font-semibold">2. Prvé kroky</div>
                <p>Vznikla prvá kostra aplikácie. Zatiaľ len základ.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-800 bg-blue-700/10 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-[40%] bg-blue-600"></div>
                </div>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <div className="font-mono opacity-70">11.9.2025</div>
                <div className="text-lg font-semibold">3. Prototyp</div>
                <p>Prvý funkčný prototyp. Aplikácia má nastavenia a základné funkcie.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-800 bg-blue-700/10 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-[40%] bg-blue-600"></div>
                </div>
              </div>
              <div className="timeline-end mb-10">
                <div className="font-mono opacity-70">20.9.2025</div>
                <div className="text-lg font-semibold">4. Alfa</div>
                <p>Prvá alfa spätná väzba od kamarátov. Vznikla admin konzola na lekcie, otázky a ďalšie.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-300 bg-blue-200/40 flex items-center justify-center">
                  <div className="w-8 h-8 rotate-45 rounded-lg bg-blue-400"></div>
                </div>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <div className="font-mono opacity-70">{todayStr}</div>
                <div className="text-lg font-semibold">5. Teraz</div>
                <p>Aplikácia je vo vývoji. Pripravujeme odmeny za chyby (5 € za nájdený bug) a chystáme prvú betu.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-gray-300 bg-gray-50 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full overflow-hidden" style={{backgroundImage: "repeating-linear-gradient(45deg, #d1d5db 0, #d1d5db 4px, #f3f4f6 4px, #f3f4f6 8px)"}}></div>
                </div>
              </div>
              <div className="timeline-end mb-10">
                <div className="font-mono opacity-70">15.10.2025 – 1.11.2025</div>
                <div className="text-lg font-semibold">6. Prvá beta (uzavretá)</div>
                <p>Uzavretý beta program pre prihlásených používateľov. Zbierame a vyhodnocujeme spätnú väzbu.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-gray-300 bg-gray-50 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full overflow-hidden" style={{backgroundImage: "repeating-linear-gradient(45deg, #d1d5db 0, #d1d5db 4px, #f3f4f6 4px, #f3f4f6 8px)"}}></div>
                </div>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <div className="font-mono opacity-70">December 2025 – Q1 2026</div>
                <div className="text-lg font-semibold">8. Verejná beta</div>
                <p>Verejné sprístupnenie bety, plný prístup, popritom pracujeme na finálnej verzii.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-gray-300 bg-gray-50 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full overflow-hidden" style={{backgroundImage: "repeating-linear-gradient(45deg, #d1d5db 0, #d1d5db 4px, #f3f4f6 4px, #f3f4f6 8px)"}}></div>
                </div>
              </div>
              <div className="timeline-end mb-10">
                <div className="font-mono opacity-70">Q2 – Q3 2026</div>
                <div className="text-lg font-semibold">9. Plné vydanie</div>
                <p>Oficiálne vydanie aplikácie.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-gray-300 bg-gray-50 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full overflow-hidden" style={{backgroundImage: "repeating-linear-gradient(45deg, #d1d5db 0, #d1d5db 4px, #f3f4f6 4px, #f3f4f6 8px)"}}></div>
                </div>
              </div>
              <div className="timeline-start md:text-end">
                <div className="font-mono opacity-70">Budúcnosť</div>
                <div className="text-lg font-semibold">10. Ďalšie predmety</div>
                <p>Aplikácie pre viac maturitných predmetov, aby sme pokryli všetky aspekty prípravy.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="prose max-w-none">
          <h2>FAQ</h2>
          <div className="space-y-2">
            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Ako dostanem prístup?</div>
              <div className="collapse-content">
                <p>Vybraných účastníkov kontaktujeme e‑mailom s odkazom na stiahnutie APK.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Je beta len pre Android?</div>
              <div className="collapse-content">
                <p>
                  Áno. Aktuálne aplikáciu distribuujeme iba ako APK a ešte nie sme na Google Play ani v App Store,
                  preto iOS nepodporujeme.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Je beta zdarma?</div>
              <div className="collapse-content">
                <p>Áno, účasť v bete je bezplatná. Pomôžeš nám spätnou väzbou.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Ako nainštalujem APK?</div>
              <div className="collapse-content">
                <p>
                  Najprv povoľ inštaláciu z neznámych zdrojov v nastaveniach zariadenia, potom otvor odkaz z nášho e‑mailu a
                  nainštaluj APK. Podrobný návod pošleme spolu s odkazom.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Aké sú minimálne požiadavky?</div>
              <div className="collapse-content">
                <p>Android 8.0+ a aspoň 100 MB voľného miesta. Staršie zariadenia môžu mať nižší výkon.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Ako nahlásim chybu a získam odmenu?</div>
              <div className="collapse-content">
                <p>
                  Chyby hlás priamo v aplikácii cez <strong>Nastavenia → Nahlásiť chybu</strong>. Pridaj čo najpresnejší popis a
                  kroky reprodukcie. Za potvrdené chyby plánujeme odmenu 5 €.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Ako dlho trvá výber do bety?</div>
              <div className="collapse-content">
                <p>Výber robíme priebežne podľa kapacity a potrieb testovania. O výsledku dáme vedieť e‑mailom.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Čo sa stane s mojimi údajmi?</div>
              <div className="collapse-content">
                <p>
                  Údaje používame len na organizáciu bety a komunikáciu. Pozri <a href="/beta-policy">Beta policy</a>.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Budú sa moje dáta mazať po skončení bety?</div>
              <div className="collapse-content">
                <p>
                  Áno, po skončení bety údaje zlikvidujeme podľa podmienok v <a href="/beta-policy">Beta policy</a>, najneskôr do uvedeného termínu.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Môžem pozvať kamarátov?</div>
              <div className="collapse-content">
                <p>Môžeš im poslať odkaz na prihlásenie do bety. Výber je však kapacitne obmedzený.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Na ktorú adresu sa môžem obrátiť s otázkami?</div>
              <div className="collapse-content">
                <p>Napíš na <a href="mailto:podpora@matur.sk">podpora@matur.sk</a>. Radi pomôžeme.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 text-sm flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-between">
          <div>© {new Date().getFullYear()} Matur</div>
          <div className="flex gap-4">
            <a className="link" href="/beta-policy">Beta policy</a>
            <a className="link" href="mailto:podpora@matur.sk">Kontakt: podpora@matur.sk</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


