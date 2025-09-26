import React from "react";
import Navbar from "../components/Navbar";

export default function Policy() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <div className="container mx-auto px-4 py-10 prose">
        <h1>Beta policy</h1>
        <p>
          Tento dokument upravuje podmienky účasti v beta testovaní aplikácie
          Matur (ďalej len „Beta“). Účasťou v Beta potvrdzujete, že ste si
          prečítali, porozumeli a súhlasíte s nižšie uvedenými podmienkami.
        </p>

        <h2>1. Účel Beta testovania</h2>
        <p>
          Účelom Beta je overiť funkčnosť, stabilitu, výkon a používateľskú
          prístupnosť aplikácie Matur pred jej širším sprístupnením.
        </p>

        <h2>2. Oprávnené osoby</h2>
        <p>
          Beta je určená prednostne pre študentov stredných škôl pripravujúcich
          sa na maturitné skúšky (cca 17–19 rokov). Účasť je limitovaná
          kapacitne a prístup udeľujeme manuálne.
        </p>

        <h2>3. Rozsah spracúvaných údajov</h2>
        <ul>
          <li>Identifikačné údaje: meno a priezvisko</li>
          <li>Kontaktné údaje: e‑mail</li>
          <li>Študijné údaje: škola, ročník, mesto/kraj</li>
          <li>Technické údaje: model zariadenia a operačný systém</li>
          <li>Voliteľné údaje: predmety maturít, dôvod záujmu</li>
          <li>Prevádzkové údaje: dátum a čas prihlášky</li>
        </ul>

        <h2>4. Účel spracúvania a doba uchovávania</h2>
        <p>
          Údaje spracúvame výhradne na účely organizácie Beta, komunikácie s
          účastníkmi, testovacích analytík a zlepšovania produktu. Údaje budú
          uchovávané počas trvania Beta, najneskôr do 1.11.2025, pokiaľ zákon
          alebo oprávnený záujem nevyžaduje dlhšie uchovanie.
        </p>

        <h2>5. Právny základ</h2>
        <p>
          Právnym základom spracúvania je váš súhlas vyjadrený odoslaním
          prihlášky do Beta. Súhlas môžete kedykoľvek odvolať, čo však nemá vplyv
          na zákonnosť spracúvania pred odvolaním.
        </p>

        <h2>6. Poskytovanie údajov tretím stranám</h2>
        <p>
          Na prevádzku Beta môžeme využívať poskytovateľov služieb (napr.
          hosting, e‑mail). Títo spracúvatelia spracúvajú údaje len na základe
          našich pokynov a pri dodržaní primeraných bezpečnostných opatrení.
        </p>

        <h2>7. Vaše práva</h2>
        <ul>
          <li>Právo na prístup k údajom</li>
          <li>Právo na opravu nepresných údajov</li>
          <li>Právo na vymazanie („zabudnutie“)</li>
          <li>Právo namietať a právo na obmedzenie spracúvania</li>
          <li>Právo odvolať súhlas</li>
        </ul>
        <p>
          Svoje práva môžete uplatniť kontaktovaním nás na
          <a href="mailto:podpora@matur.sk">podpora@matur.sk</a>.
        </p>

        <h2>8. Zodpovednosť a obmedzenia</h2>
        <p>
          Beta verzia môže obsahovať chyby a môže byť nestabilná. Funkcie a
          obsah sa môžu meniť bez predchádzajúceho upozornenia. Beta nie je
          určená na produkčné použitie.
        </p>

        <h2>9. Správca údajov</h2>
        <p>
          Správcom osobných údajov je Matur. Kontakt:
          <a href="mailto:podpora@matur.sk">podpora@matur.sk</a>.
        </p>

        <h2>10. Účinnosť</h2>
        <p>
          Táto Beta policy nadobúda účinnosť dňom zverejnenia a môže byť
          aktualizovaná. Aktuálne znenie je dostupné na tejto stránke.
        </p>
      </div>
    </div>
  );
}


