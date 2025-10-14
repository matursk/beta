import React from "react";
import Navbar from "../components/Navbar";

export default function CbetaTos() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <div className="container mx-auto px-4 py-10 prose">
        <h1>Podmienky uzavretej beta verzie (CBETA)</h1>
        <p>
          Toto rozšírené znenie podmienok sa vzťahuje na testerov, ktorí už boli
          prijatí do uzavretej beta verzie aplikácie Matur (ďalej len „CBETA").
          Účasťou v CBETA potvrdzujete, že ste si tieto podmienky prečítali,
          porozumeli im a súhlasíte s nimi.
        </p>

        <h2>1. Dôvernosť a mlčanlivosť</h2>
        <ul>
          <li>
            Ste povinní zachovávať dôvernosť o všetkých neverejných informáciách
            súvisiacich s aplikáciou, funkciami, návrhmi a procesmi testovania.
          </li>
          <li>
            Zdieľanie screenshotov, videí alebo detailov o nepublikovaných
            funkciách mimo určených komunikačných kanálov je zakázané bez
            predchádzajúceho písomného súhlasu.
          </li>
        </ul>

        <h2>2. Feedback a hlásenie chýb</h2>
        <ul>
          <li>
            Zaväzujete sa poskytovať vecnú spätnú väzbu vrátane krokov na
            reprodukciu problému, verzie aplikácie a informácií o zariadení.
          </li>
          <li>
            Chyby a návrhy odosielajte cez určený formulár alebo kontaktný e‑mail
            <a href="mailto:podpora@matur.sk">podpora@matur.sk</a>.
          </li>
        </ul>

        <h2>3. Testovacie buildy a aktualizácie</h2>
        <ul>
          <li>
            CBETA buildy môžu byť neúplné, nestabilné a môžu sa často meniť.
          </li>
          <li>
            Aktualizácie je potrebné inštalovať bez zbytočného odkladu; staršie
            buildy môžu byť kedykoľvek znefunkčnené.
          </li>
        </ul>

        <h2>4. Kompatibilita zariadenia</h2>
        <ul>
          <li>
            Testovanie prebieha na podporovaných verziách Androidu a vybraných
            modeloch zariadení; kompatibilita nie je garantovaná.
          </li>
          <li>
            Ste zodpovední za zálohovanie dát vo svojom zariadení pred
            inštaláciou testovacích verzií.
          </li>
        </ul>

        <h2>5. Zber diagnostických údajov</h2>
        <p>
          V rámci CBETA môžeme zbierať rozšírené diagnostické a prevádzkové
          údaje (napr. pády, výkonnostné metriky, agregované interakcie), a to
          výlučne za účelom zlepšovania kvality a stability. Osobné údaje spracúvame
          v súlade s platnou Beta policy a platnou legislatívou.
        </p>

        <h2>6. Licencia a používanie</h2>
        <ul>
          <li>
            Aplikáciu môžete používať iba na účely testovania a poskytovania
            spätnej väzby v rozsahu, ktorý vám bol udelený.
          </li>
          <li>
            Reverzné inžinierstvo, dekompilácia alebo iné zasahovanie do kódu je
            zakázané.
          </li>
        </ul>

        <h2>7. Dočasnosť prístupu</h2>
        <ul>
          <li>
            Prístup do CBETA je dobrovoľný a môže byť kedykoľvek zrušený
            z našej strany bez udania dôvodu.
          </li>
          <li>
            Po ukončení prístupu ste povinní odstrániť testovacie buildy zo
            svojich zariadení.
          </li>
        </ul>

        <h2>8. Zodpovednosť</h2>
        <p>
          CBETA buildy sa poskytujú „tak ako sú“ bez záruk akéhokoľvek druhu.
          Nezodpovedáme za žiadne priame či nepriame škody spôsobené používaním
          testovacích verzií, v rozsahu povolenom právnymi predpismi.
        </p>

        <h2>9. Komunikácia</h2>
        <p>
          Primárnym komunikačným kanálom je e‑mail a prípadne ďalšie kanály,
          ktoré vám explicitne oznámime. Pre podporu kontaktujte
          <a href="mailto:podpora@matur.sk">podpora@matur.sk</a>.
        </p>

        <h2>10. Zmeny týchto podmienok</h2>
        <p>
          Podmienky CBETA môžeme aktualizovať. Aktuálne znenie bude vždy
          dostupné na tejto stránke. O významných zmenách vás primerane
          informujeme.
        </p>

        <h2>11. Účinnosť</h2>
        <p>
          Tieto podmienky nadobúdajú účinnosť dňom zverejnenia alebo dňom
          poskytnutia prístupu do CBETA, podľa toho, čo nastane skôr.
        </p>
      </div>
    </div>
  );
}


