---
title: "Week 3: Verbeteringen en Verfijningen"
date: "2025-02-22"
excerpt: "Deze week stond in het teken van het verbeteren van de Generator Modal, het oplossen van navigatieproblemen en het implementeren van UI-aanpassingen voor een betere gebruikerservaring."
image: "/post3.png"
tags:
    - week3
    - UI
    - bugfixes
    - generator-modal
---

# Week 3: Verbeteringen en Verfijningen

## Maandag 17/02 – Dagoverzicht

Vandaag ben ik om 8:00 begonnen en blijf ik tot 17:00. De dag startte met een meeting met Cat, waarin we de voortgang van ons project bespraken en de planning op Trello doornamen. Een belangrijke feedbackpunt was dat we code review-taken niet zelf moeten claimen, maar open moeten laten, zodat onze technische lead, Frederick, deze kan oppakken. Zo verloopt het reviewproces correct en blijft de kwaliteit gewaarborgd.

Na de meeting was er even tijd om te ontspannen en te lachen met Cat, die altijd voor een goede sfeer zorgt. Vervolgens heb ik me gericht op de UI en de functionaliteit om alle bestanden en directories uit een Git-repository op te halen en weer te geven in de frontend. In eerste instantie was alles hardcoded, maar ik heb het dynamisch gemaakt zodat de bestanden nu correct worden ingeladen. De volgende stap is om alleen directories te tonen en irrelevante bestanden te negeren. We wachten nog op feedback over hoe de configuratiebestanden precies verwerkt moeten worden en hoeveel dit er zullen zijn. Ook is er nog onduidelijkheid over hoe de ‘big’ en ‘small’ keywords gedefinieerd en uitgelezen moeten worden. Morgen verder!

## Dinsdag 18/02 – Dev Dagboek

Vandaag heb ik gewerkt aan een probleem met het doorgeven van de repositorynaam (repoName) tussen de stappen in het modale venster. Het probleem ontstond vooral in de overgang van de GitHub-verbinding naar de bestandsselectie. Wanneer een gebruiker een project-URL direct invoerde, werd de repositoryselectie overgeslagen en werd de naam niet correct doorgegeven.

Om dit op te lossen, heb ik een nieuwe status toegevoegd voor repoName, zodat de naam van de repository consistent beschikbaar is in elke stap. Daarnaast wordt de repoName nu als prop doorgegeven aan het FileSelection-component, zodat de juiste bestanden geladen kunnen worden. De grootste verandering zat in de onNext-functie van het GitHubConfig-component: als een gebruiker een repository-URL opgeeft, wordt de repositoryselectiestap overgeslagen en gaan we direct naar de bestandsselectie.

Tot slot heb ik ervoor gezorgd dat de repoName correct wordt bijgewerkt in de repositoryselectiestap, zodat de naam in alle stappen goed wordt weergegeven. Hierdoor werkt de bestandsselectie nu zoals bedoeld, ongeacht hoe de repository is gekozen. Een grote verbetering!

## Woensdag 19/02 – Dev Dagboek

Vandaag lag de focus op het fixen van de navigatieproblemen in de Generator Modal, vooral met de Back-knop. Deze werkte niet zoals verwacht en leidde soms tot een verkeerde weergave van data, vooral in de stappen ‘Selecteer Bestand’ en ‘Kies Actie’.

Om dit te verbeteren:

- **Navigatielogica aangepast**: De Back-knop checkt nu of de repositoryselectie is overgeslagen en past de navigatie hierop aan.
- **Bestandselectie-status behouden**: Geselecteerde bestanden blijven nu correct opgeslagen, zodat je niet alles opnieuw hoeft te selecteren bij terugnavigeren.
- **Actielijst blijft consistent**: Wanneer je tussen ‘Selecteer Bestand’ en ‘Kies Actie’ wisselt, blijven bestandsnamen, paden en metadata correct behouden.
- **Back-knop logica versimpeld**: Overbodige controles verwijderd, waardoor de code eenvoudiger te onderhouden is.
- **Automatische stapovergangen voorkomen**: De gebruiker heeft nu volledige controle over wanneer ze verder willen gaan, in plaats van dat de modal automatisch doorspringt.

Deze verbeteringen maken de Generator Modal veel betrouwbaarder en gebruiksvriendelijker. De gebruiker kan nu zonder frustratie door de stappen navigeren en teruggaan zonder belangrijke gegevens te verliezen.

## Donderdag 20/02 – UI Verbeteringen

Naast de navigatieproblemen heb ik ook gewerkt aan de stap ‘Kies Actie’. De originele implementatie had een simpele div, maar ik heb dit omgezet naar een kaartcomponent. Dit zorgt voor een betere visuele hiërarchie en maakt de lay-out overzichtelijker.

De kaart bevat:
- Een koptekst met de titel van de stap.
- Een hoofdtekst waarin de geselecteerde bestanden worden weergegeven.
- Een voettekst met de ‘Volgende’ knop.

Daarnaast heb ik een consistent kleurenschema doorgevoerd, zodat knoppen zoals ‘Volgende’ uniforme kleuren en hover-effecten hebben. Ook heb ik ervoor gezorgd dat de actieknoppen op een vaste plek onderaan het scherm blijven staan. Dit voorkomt dat gebruikers moeten scrollen om verder te kunnen gaan, wat de navigatie soepeler maakt.

Door deze UI-aanpassingen voelt de modal nu een stuk strakker en logischer aan!

## Vrijdag 21/02 – Laatste tweaks en afronding

Vandaag heb ik de laatste puntjes op de i gezet. De focus lag op het testen van alle wijzigingen van de afgelopen dagen en het oplossen van kleine bugs die nog opdoken.

Ik heb een paar kleine UI-bugs gefixt, waaronder:
- Een probleem waarbij de ‘Volgende’ knop soms buiten beeld viel op kleinere schermen.
- Een edge case waarbij een gebruiker een repository kon invoeren zonder dat de naam correct werd doorgegeven.
- Een visueel probleem in de bestandslijst waarbij sommige items niet correct werden uitgelijnd.

Na een paar tests met het team lijkt alles nu stabiel en werkt de Generator Modal zoals bedoeld. Navigatie voelt soepel, bestanden laden correct in en de UI ziet er strak uit. Dit was een flinke verbetering ten opzichte van hoe het eerder werkte!

Volgende week gaan we verder met extra features, maar voor nu ben ik tevreden met de progressie. Tijd om het weekend in te gaan!
