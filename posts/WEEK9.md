---
title: "Week 9: Implementatie van Microsoft Login en Verfijning van de Homepage"
date: "2025-04-14"
excerpt: "Toevoegen van Microsoft login voor beveiliging en verfijning van de homepage voor een verbeterde gebruikerservaring."
image: "/post9.png"
tags: 
    - week9
    - microsoft-login
    - homepage
    - gebruikerservaring
---

## Maandag 31/03 – Implementatie van Microsoft Login en Verfijning van de Homepage

Vandaag heb ik de MsalProvider toegevoegd rondom de AppWrapper. Dit zorgt ervoor dat de gebruiker alleen toegang heeft tot de applicatie als hij/zij is ingelogd met Brightest credentials. De authenticatie gebeurt volledig via de state van de applicatie zelf, wat betekent dat er geen externe opslag van inloggegevens nodig is. Deze aanpak is zowel veiliger als eenvoudig, omdat we de login-informatie nergens anders hoeven bij te houden. Het stelt ons ook in staat om verder te werken aan andere functionaliteiten zonder ons zorgen te maken over beveiligingsissues met betrekking tot inloggen.

Naast de authenticatie heb ik een minimalistische login flow gecreëerd. In plaats van een aparte inlogpagina heb ik gekozen voor een popup-login via Microsoft, die de gebruiker snel en eenvoudig kan gebruiken. De login- en uitlogfunctionaliteit is eenvoudig te beheren en wordt via een Microsoft OAuth-proces afgehandeld.

Wat betreft de homepage, hebben we de layout verder verfijnd. We hebben minder informatie op de voorpagina getoond, zodat de gebruikersinterface rustiger en overzichtelijker wordt. De logoutknop is nu alleen zichtbaar in het configuratiescherm, zodat deze niet per ongeluk wordt ingedrukt terwijl de gebruiker nog actief aan het werk is in de applicatie.

Met deze veranderingen hebben we de beveiliging van de applicatie verbeterd en de gebruikerservaring vereenvoudigd, wat ons in staat stelt om verder te gaan met andere features en verbeteringen in de komende dagen.

## Dinsdag 1/04 – Eerste poging om over te schakelen naar MongoDB + Tussentijdse Evaluatie

Vandaag hebben we afzonderlijk gewerkt, en ik heb de dag gespendeerd aan een vrij technische uitdaging: proberen om onze backend over te zetten van de lokale db.json naar een MongoDB database. Deze overstap zou ons meer schaalbaarheid en flexibiliteit bieden voor toekomstige uitbreidingen van het project. Ik kreeg hiervoor van mijn collega’s één dag de tijd: als het zou lukken, zouden we verdergaan met MongoDB; als het niet zou lukken, dan zouden we fallbacken naar de lokale JSON-oplossing.

Ondanks de beperkte tijd kon ik al een groot deel van de API-endpoints migreren naar MongoDB-logica. De basisfunctionaliteiten (GET, POST) werkten al redelijk goed, maar PATCH gaf op het einde van de dag nog een foutmelding die ik nog niet kon traceren.

Daarnaast hadden we vandaag onze tussentijdse evaluatie, met een bezoek van onze AP-stagebegeleider. De algemene feedback was positief: onze applicatie maakt goede vooruitgang en onze technische kennis zit goed. Het enige werkpunt dat naar voren kwam, was het verbeteren van onze communicatie en integratie binnen het team en het werkritme van het bedrijf beter overnemen.

## Woensdag 2/04 – Verdere migratie van de API + hardnekkige PATCH-bug

Vandaag ben ik verdergegaan met de migratie naar MongoDB. De meeste endpoints werkten inmiddels zoals verwacht, maar de PATCH-route – die gebruikt wordt om bestaande repositories te updaten – bleef problemen geven. De server gaf constant een 500 error, zonder duidelijke foutmelding.

Samen met mijn collega hebben we de hele logica van de PATCH-route nog eens overlopen, alle checks herbekeken en de response logs toegevoegd, maar we geraakten er vandaag nog niet helemaal uit. De frustratie was groot, maar we besloten om onze aandacht te verdelen: ik zou verder zoeken naar de bug, en mijn collega focuste zich op de integratie van de aangepaste API in de frontend.

Donderdag 3/04 – Bugfix voor PATCH + betere foutafhandeling

Vandaag hebben we uiteindelijk de bug in de PATCH-route opgelost. De oorzaak bleek een foutieve controle in de backend:

```ts
if (!result || !result.value) {
  return NextResponse.json({ error: "Update failed, repository not found" }, { status: 500 });
}
```
Deze check ging verkeerd om met de structuur van de updateOne-response van MongoDB, waardoor er ten onrechte een 500-error werd gegooid, zelfs bij een succesvolle update. We hebben de logica aangepast zodat hij correct omgaat met matchedCount, modifiedCount, en acknowledged. Na deze fix werkte de PATCH-route zoals verwacht, en konden we voor het eerst succesvol een repository updaten via de nieuwe database!

## Vrijdag 4/04 – Finaliseren van context & routes + Mongo live

Vandaag hebben we de volledige backendlogica geüpdatet naar MongoDB, inclusief aanpassing van onze React-contexten en dataflows. Alle relevante data zoals repos, testflows en geselecteerde methodes worden nu niet langer in localStorage of een lokale JSON bewaard, maar worden rechtstreeks in MongoDB opgeslagen.

We hebben de contextproviders aangepast zodat ze de data ophalen via fetch calls naar de vernieuwde API-routes, en deze correct opslaan in de globale app-state. De hele applicatie maakt nu gebruik van onze MongoDB-setup, waardoor we officieel kunnen zeggen dat we zijn overgeschakeld naar een meer professionele dataopslag.

Deze migratie betekent een belangrijke stap vooruit voor ons project en biedt ons nu de mogelijkheid om verder te werken aan features zoals gebruikersspecifieke data, versiebeheer van testflows en schaalbaarheid richting productie.