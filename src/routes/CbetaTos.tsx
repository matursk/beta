import React from "react";
import Navbar from "../components/Navbar";

export default function CbetaTos() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <div className="container mx-auto px-4 py-10 prose">
        <h1>Podmienky účasti v uzavretej beta verzii (CBETA)</h1>
        <p>
          Tieto zmluvné podmienky účasti v uzavretej beta verzii aplikácie Matur
          (ďalej len „<strong>Podmienky CBETA</strong>“) upravujú vzťahy medzi
          prevádzkovateľom aplikácie Matur (ďalej len „<strong>Prevádzkovateľ</strong>“)
          a osobou priradenou do uzavretého testovania (ďalej len „<strong>Tester</strong>“).
          Vstupom do CBETA, inštaláciou testovacích buildov alebo poskytovaním
          spätnej väzby Tester potvrdzuje, že sa s Podmienkami CBETA oboznámil,
          rozumie im a bez výhrad s nimi súhlasí.
        </p>

        <h2>1. Definície</h2>
        <ul>
          <li>
            <strong>CBETA</strong>: uzavretá (neverejná) fáza testovania produktu,
            dostupná len vybranému okruhu osôb na základe pozvania Prevádzkovateľa.
          </li>
          <li>
            <strong>Testovacia verzia / build</strong>: experimentálna verzia aplikácie,
            ktorá môže obsahovať chyby, nedokončené funkcie a diagnostické nástroje.
          </li>
          <li>
            <strong>Spätná väzba</strong>: akékoľvek podnety, komentáre, opis chýb,
            návrhy vylepšení, logy, snímky obrazovky a iné informácie poskytnuté Testerom.
          </li>
          <li>
            <strong>Neverejné informácie</strong>: informácie týkajúce sa produktu,
            jeho funkcií, dizajnu, roadmapy, cenotvorby, interných procesov a údajov
            poskytnutých v rámci testovania, ktoré nie sú všeobecne známe.
          </li>
        </ul>

        <h2>2. Oprávnenie a prístup</h2>
        <ul>
          <li>
            Prístup do CBETA udeľuje Prevádzkovateľ individuálne. Prevádzkovateľ
            je oprávnený prístup neudeliť alebo ho kedykoľvek odobrať bez uvedenia dôvodu.
          </li>
          <li>
            Tester potvrdzuje, že je spôsobilý na právne úkony. Ak Tester nedosiahol
            plnoletosť, vyžaduje sa súhlas zákonného zástupcu.
          </li>
          <li>
            Prístup je neprenosný; Tester nesmie zdieľať inštalačné súbory ani prístupové
            údaje tretím osobám.
          </li>
        </ul>

        <h2>3. Dôvernosť (NDA) a mlčanlivosť</h2>
        <ul>
          <li>
            Tester sa zaväzuje zachovávať mlčanlivosť o všetkých Neverejných informáciách.
            Povinnosť mlčanlivosti trvá počas účasti v CBETA a 3 roky po jej skončení,
            alebo do momentu, kedy sa daná informácia stane verejne dostupnou bez porušenia
            týchto Podmienok CBETA.
          </li>
          <li>
            Bez predchádzajúceho písomného súhlasu Prevádzkovateľa nie je dovolené
            zverejňovať, distribuovať ani inak sprístupňovať Neverejné informácie, vrátane
            screenshotov, videí, popisov funkcií či výkonových meraní.
          </li>
          <li>
            V prípade porušenia tejto povinnosti je Tester povinný nahradiť škodu a
            Prevádzkovateľ je oprávnený Testerovi okamžite zrušiť prístup do CBETA.
          </li>
        </ul>

        <h2>4. Spätná väzba a licencia k spätnej väzbe</h2>
        <ul>
          <li>
            Tester bude primerane aktívne poskytovať Spätnú väzbu vrátane krokov
            reprodukcie, verzie aplikácie a informácií o zariadení, a to prostredníctvom
            určených kanálov alebo na <a href="mailto:podpora@matur.sk">podpora@matur.sk</a>.
          </li>
          <li>
            Tester udeľuje Prevádzkovateľovi nevýhradnú, bezodplatnú, celosvetovú,
            trvalú, neodvolateľnú, prevoditeľnú a sublicencovateľnú licenciu na použitie,
            úpravu, reprodukciu a iné nakladanie so Spätnou väzbou na akýkoľvek účel,
            bez povinnosti uvádzať autora či poskytovať akúkoľvek náhradu.
          </li>
        </ul>

        <h2>5. Používanie testovacích verzií</h2>
        <ul>
          <li>
            Testovacie verzie sú poskytované výhradne na účely hodnotenia, interného testovania
            a zlepšovania produktu. Nie sú určené na produkčné použitie.
          </li>
          <li>
            Tester nesmie vykonávať reverzné inžinierstvo, dekompiláciu, obchádzať bezpečnostné
            mechanizmy, zasahovať do kódu ani testovacie verzie redistribuovať.
          </li>
          <li>
            Aktualizácie testovacích verzií je Tester povinný nainštalovať bez zbytočného odkladu.
            Staršie buildy môžu byť kedykoľvek deaktivované.
          </li>
        </ul>

        <h2>6. Kompatibilita a technické požiadavky</h2>
        <ul>
          <li>
            CBETA môže byť obmedzená na vybrané verzie Androidu a zariadení. Kompatibilita nie je
            garantovaná a môže sa meniť.
          </li>
          <li>
            Tester zodpovedá za zálohovanie vlastných dát a za zabezpečenie svojho zariadenia.
          </li>
        </ul>

        <h2>7. Ochrana osobných údajov</h2>
        <p>
          Spracúvanie osobných údajov v CBETA prebieha v súlade s platnou <a href="/beta-policy">Beta policy</a>
          a príslušnými právnymi predpismi. Okrem údajov uvedených v Beta policy môže CBETA spracúvať aj
          rozšírené diagnostické údaje (pády aplikácie, výkonnostné metriky, agregované interakčné dáta)
          výlučne za účelom zlepšovania kvality a stability produktu.
        </p>
        <h3>Právny základ a doba uchovávania</h3>
        <ul>
          <li>
            Právny základ: súhlas Testera a/alebo oprávnený záujem Prevádzkovateľa na zlepšovaní produktu.
          </li>
          <li>
            Doba uchovávania: po dobu trvania CBETA a primeranú dobu následne, najneskôr do ukončenia
            vyhodnocovania CBETA, ak zákon nevyžaduje dlhšiu lehotu.
          </li>
        </ul>
        <h3>Príjemcovia a prenosy</h3>
        <ul>
          <li>
            Údaje môžu byť sprístupnené zmluvným spracovateľom (hosting, e‑mail, analytika) na základe
            písomných zmlúv a len podľa pokynov Prevádzkovateľa. Prenosy do tretích krajín prebiehajú len
            pri zabezpečení primeraných záruk.
          </li>
        </ul>
        <h3>Práva dotknutej osoby</h3>
        <ul>
          <li>právo na prístup, opravu, vymazanie, obmedzenie spracúvania a namietanie,</li>
          <li>právo odvolať súhlas, bez vplyvu na zákonnosť spracúvania pred odvolaním,</li>
          <li>právo podať sťažnosť na dozorný orgán.</li>
        </ul>
        <p>
          Kontakt: <a href="mailto:podpora@matur.sk">podpora@matur.sk</a>.
        </p>

        <h2>8. Duševné vlastníctvo</h2>
        <ul>
          <li>
            Všetky práva k aplikácii, testovacím verziám, materiálom a značkám prislúchajú Prevádzkovateľovi
            alebo jeho partnerom. Tester nezískava k nim žiadne práva okrem obmedzenej licencie podľa týchto
            Podmienok CBETA.
          </li>
          <li>
            Ak Tester vytvorí obsah špecificky pre CBETA (napr. testovacie skripty), poskytuje Prevádzkovateľovi
            nevýhradnú licenciu na jeho použitie na účely testovania a zlepšovania produktu.
          </li>
        </ul>

        <h2>9. Záruky, vylúčenie zodpovednosti</h2>
        <p>
          Testovacie verzie sa poskytujú „tak ako sú“ bez akýchkoľvek výslovných alebo predpokladaných záruk,
          najmä bez záruk vhodnosti na konkrétny účel, neporušenia práv tretích osôb či nepretržitej dostupnosti.
        </p>

        <h2>10. Obmedzenie zodpovednosti</h2>
        <p>
          V maximálnom rozsahu povolenom právom Prevádzkovateľ nezodpovedá za ušlý zisk, stratu dát, prerušenie
          podnikania, nepriamu, následnú alebo mimoriadnu škodu. Celková zodpovednosť Prevádzkovateľa voči Testerovi
          je obmedzená na 50 EUR, pokiaľ kogentné predpisy neustanovujú inak.
        </p>

        <h2>11. Odškodnenie</h2>
        <p>
          Tester sa zaväzuje odškodniť Prevádzkovateľa za nároky tretích osôb vyplývajúce z porušenia týchto
          Podmienok CBETA Testerom alebo z porušenia práv tretích osôb konaním Testera.
        </p>

        <h2>12. Trvanie a ukončenie</h2>
        <ul>
          <li>
            Podmienky CBETA nadobúdajú účinnosť prijatím Testera do CBETA a platia do ukončenia jeho účasti.
          </li>
          <li>
            Prevádzkovateľ môže účasť kedykoľvek ukončiť s okamžitou účinnosťou; Tester môže účasť ukončiť
            odinštalovaním testovacích verzií a oznámením ukončenia.
          </li>
          <li>
            Po ukončení účasti Tester odstráni testovacie verzie zo svojich zariadení a zdrží sa ďalšieho
            používania Neverejných informácií.
          </li>
        </ul>

        <h2>13. Správa práva a príslušnosť</h2>
        <p>
          Tieto Podmienky CBETA sa riadia právnym poriadkom Slovenskej republiky. Na riešenie sporov sú príslušné
          všeobecné súdy Slovenskej republiky podľa sídla Prevádzkovateľa.
        </p>

        <h2>14. Zmeny Podmienok CBETA</h2>
        <p>
          Prevádzkovateľ je oprávnený tieto Podmienky CBETA kedykoľvek zmeniť. Zmeny nadobúdajú účinnosť zverejnením
          na tejto stránke; o podstatných zmenách bude Tester primerane informovaný. Pokračovaním v účasti po zmene
          vyjadruje Tester súhlas s novým znením.
        </p>

        <h2>15. Záverečné ustanovenia</h2>
        <ul>
          <li>
            Neplatnosť alebo nevymáhateľnosť jednotlivého ustanovenia nemá vplyv na platnosť zvyšných ustanovení;
            namiesto neplatného sa použije ustanovenie, ktoré najviac zodpovedá účelu.
          </li>
          <li>
            Tieto Podmienky CBETA predstavujú úplnú dohodu medzi zmluvnými stranami vo veci CBETA a nahrádzajú
            všetku predchádzajúcu komunikáciu a dohody v tejto veci.
          </li>
          <li>
            Tester nesmie postúpiť práva ani previesť povinnosti z týchto Podmienok CBETA bez predchádzajúceho
            písomného súhlasu Prevádzkovateľa.
          </li>
        </ul>

        <p>
          Účinnosť: odo dňa zverejnenia. Kontakt pre otázky: <a href="mailto:podpora@matur.sk">podpora@matur.sk</a>.
        </p>
      </div>
    </div>
  );
}



