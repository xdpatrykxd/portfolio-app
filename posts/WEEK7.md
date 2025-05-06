---
title: "Week 7: Gesprek met Begeleider en Problemen met Local Storage"
date: "2025-03-23"
excerpt: "Overleg met begeleider en problemen met localStorage, waardoor gebruikersdata inconsistent werd opgeslagen."
image: "/post7.png"
tags: 
    - week7
    - localstorage
    - debugging
    - database
---

## Maandag 17/03 – Gesprek met Begeleider en Problemen met Local Storage

De week begon met een overleg met onze begeleider, waarin we meer duidelijkheid kregen over hoe zij de verdere evolutie van ons project zien. Dit gaf ons een beter beeld van welke functionaliteiten op korte termijn prioriteit moesten krijgen en waar we nog verbeteringen konden doorvoeren.

Na het gesprek hebben we verder gewerkt aan de implementatie van localStorage om gebruikersdata tijdelijk op te slaan. In eerste instantie leek dit een goede oplossing, maar al snel kwamen we meerdere problemen tegen. We merkten dat data niet altijd correct werd opgeslagen en dat bepaalde informatie soms werd overschreven zonder duidelijke oorzaak. Dit zorgde ervoor dat gebruikersdata verloren ging of inconsistente resultaten gaf.

Een van de grootste problemen was dat verschillende testflows elkaar begonnen te overschrijven, waardoor gebruikers niet altijd hun laatste bewerkingen terugvonden. Dit was een fundamenteel probleem dat opgelost moest worden, omdat een testflow betrouwbaar opgeslagen en hersteld moest kunnen worden.

We hebben geprobeerd de manier waarop we data opsloegen en ophaalden te verbeteren, maar ondanks enkele aanpassingen bleef het probleem bestaan. Tegen het einde van de dag begonnen we ons af te vragen of localStorage wel de juiste oplossing was voor ons project.

## Dinsdag 18/03 – Verdere Debugging van Local Storage

Vandaag hebben we verder geprobeerd de issues met localStorage op te lossen. We hebben meerdere benaderingen getest om de data op een consistente manier op te slaan, zoals:

- Het opdelen van de data in verschillende sleutels (keys) in localStorage om conflicten te vermijden.
- Het introduceren van unieke identifiers voor elke testflow om overschrijving tegen te gaan.
- Het bijhouden van een logica die de huidige status controleert voordat er iets wordt opgeslagen.

Hoewel deze aanpassingen enigszins hielpen, loste het niet alle problemen op. Een andere grote beperking van localStorage is dat het gebonden is aan één apparaat en browser, wat betekent dat gebruikers hun testflows niet konden openen op een ander toestel.

Na een lange dag debugging kwamen we tot de conclusie dat localStorage niet schaalbaar genoeg was voor ons project. We moesten op zoek naar een alternatieve oplossing.

## Woensdag 19/03 – Overschakeling naar een Database

Na de problemen van de afgelopen dagen hebben we besloten om localStorage volledig te laten vallen en alle data voortaan in een database op te slaan. Dit betekende dat we een nieuwe manier moesten implementeren om gegevens te bewaren en op te halen, maar het gaf ons ook de mogelijkheid om data op een veel betrouwbaardere en persistente manier te beheren.

De belangrijkste veranderingen die we hebben doorgevoerd:
- Database connectie opgezet voor het opslaan van testflows en repository-gegevens.
- API-endpoints aangemaakt om gebruikersdata te kunnen opslaan en opvragen.
- State-management aangepast, zodat we niet langer afhankelijk waren van localStorage.
- Opzet van een synchronisatieproces, zodat wijzigingen in de database automatisch werden doorgevoerd in de UI.

Dit was een grote stap vooruit, omdat het niet alleen de stabiliteit verbeterde, maar ook de mogelijkheid gaf om gebruikersdata apparaat- en browser onafhankelijk op te slaan.

## Donderdag 20/03 – Persistente Repository Selectie

Met de database-oplossing op zijn plaats, hebben we vandaag gewerkt aan een specifieke functionaliteit: de persistente repository selectie. Dit betekent dat als een gebruiker een bepaalde repository selecteert, deze keuze behouden blijft, zelfs als:

- De gebruiker de pagina verlaat en later terugkomt.
- De gebruiker de applicatie op een ander toestel opent.

Hiervoor hebben we de volgende verbeteringen geïmplementeerd:
- State-initiëren met useState om selectedRepo en repoNameChangerValue te beheren.
- Data ophalen bij paginalaad met useEffect, zodat de laatst geselecteerde repository automatisch wordt ingesteld.
- Een formulier toegevoegd waarmee gebruikers hun repository-naam kunnen aanpassen.
- Validatie ingebouwd, zodat een gebruiker niet per ongeluk een lege repositorynaam opslaat.
- Update-functie geïmplementeerd om de repository in de database aan te passen.

Met deze aanpassingen konden gebruikers hun laatste repository selecteren en blijven gebruiken, zonder dat ze deze telkens opnieuw moesten kiezen.

## Vrijdag 21/03 – Verdere Uitwerking en Edge Cases Oplossen

Vandaag hebben we de laatste verfijningen aangebracht en enkele edge cases opgelost. We merkten bijvoorbeeld dat er nog scenario’s waren waarin een gebruiker zonder geselecteerde testflow in een foutieve staat kon belanden. Dit hebben we opgelost door:
- Een standaard testflow te genereren als er nog geen bestaat.
- Gebruikers te informeren met een melding als ze zonder testflow verder willen gaan.
- Foutafhandeling toegevoegd, zodat verkeerde invoer niet leidt tot crashes.

Daarnaast hebben we de repository-wijzigingen beter geïntegreerd:
- Bij een succesvolle update werd de database direct bijgewerkt.
- Een melding toegevoegd om gebruikers te laten weten dat hun wijziging is opgeslagen.
- Zorgen dat de UI de wijzigingen direct reflecteert, zonder een volledige herlaad.

Door deze verbeteringen is de applicatie nu gebruiksvriendelijker en stabieler, en kunnen gebruikers zonder problemen hun test flows beheren en hun laatste status behouden.

Volgende week zullen we verder werken aan de integratie van test flows met de database, zodat niet alleen repositories maar ook individuele testsessies correct opgeslagen en hersteld kunnen worden.
