---
title: "Week 5: Verbeteringen in Structuur en UI/UX"
date: "2025-03-07"
excerpt: "Deze week richtte zich op structurele verbeteringen, UI/UX-optimalisaties en het refactoren van componenten om de gebruikerservaring te verbeteren en de code onderhoudsvriendelijker te maken."
image: "/post5.png"
tags:
    - week5
    - refactoren
    - gebruikerservaring
    - UI-verbeteringen
    - componenten
---

# Week 5: Verbeteringen in Structuur en UI/UX

## Maandag 03/03 – Dev Dagboek

Vandaag hebben we een aantal structurele wijzigingen doorgevoerd in onze applicatie, met als doel de staat van de gebruiker beter te behouden en de code onderhoudsvriendelijker te maken. Een van de grootste problemen die we wilden oplossen, was het verlies van data wanneer de modal werd gesloten.

### Belangrijkste Wijzigingen

#### Verplaatsen van de staat naar Home.tsx
- De gehele staat van de modal (zoals de huidige stap, repositorygegevens en geselecteerde bestanden) is nu verplaatst naar `Home.tsx`.
- Dit voorkomt dat gegevens verloren gaan zodra de modal wordt gesloten.

#### Doorgeven van de Staat als Props
- `Home.tsx` geeft nu alle relevante gegevens door aan `GeneratorModal` via props.
- Dit zorgt ervoor dat de applicatie een enkele bron van waarheid heeft, wat beter is voor onderhoud en debugging.

#### GeneratorModal omgezet naar een gecontroleerd component
- Alle interne `useState()` calls in `GeneratorModal` zijn verwijderd, omdat de modal nu volledig wordt aangestuurd via props.
- Dit maakt de modal eenvoudiger te debuggen en beter testbaar.

#### Modal-knop gepositioneerd in de linkerbovenhoek
- We hebben de class `absolute top-5 left-5` toegevoegd om de knop op een vaste positie te plaatsen.
- Dit zorgt ervoor dat gebruikers altijd makkelijk de modal kunnen openen, ongeacht waar ze zich bevinden in de applicatie.

### Impact van deze Wijzigingen

- **Betere gebruikerservaring**: Gebruikers kunnen hun werk hervatten zonder gegevens te verliezen.
- **Verbeterde codekwaliteit**: De modal is nu een puur gecontroleerd component, wat de architectuur van de applicatie helderder maakt.
- **Meer flexibiliteit**: Door de modal-state op een hoger niveau te beheren, kunnen we in de toekomst makkelijker extra functionaliteiten toevoegen, zoals het opslaan van de voortgang in een database.

De volgende stap is om de nieuwe structuur verder te testen en te zorgen dat alle functionaliteiten stabiel blijven werken.

## Dinsdag 04/03 – Dev Dagboek

Vandaag heb ik gewerkt aan het refactoren van verschillende componenten, met name de `KeywordsSelection` en `SmallKeywordsSelection` componenten. Het doel was om de logica voor bestands- en methodekeuze te centraliseren en de gebruikerservaring te verbeteren.

### Belangrijkste Wijzigingen

#### Refactor de KeywordsSelection Component
- Ik heb de functionaliteiten van de `ActionSelector` component geïntegreerd in de `KeywordsSelection` component om alles binnen één component te beheren.
- Dit omvatte de logica voor zowel bestands- als methodekeuze.
- Er zijn hoverbeschrijvingen toegevoegd voor zowel bestanden als methoden, zodat gebruikers context krijgen wanneer ze over een element zweven.
- Stapnavigatie werd geïmplementeerd, zodat gebruikers door het proces van het kiezen van bestanden en methoden kunnen stappen.
- State-overgangen werden beheerd met `useState` en `useEffect`, zodat de geselecteerde bestanden en methoden correct worden bijgehouden en de gebruikersflow soepel verloopt.

#### State Management
- Ik heb `useState` gebruikt om de geselecteerde bestanden en methoden te beheren, evenals om de stappen te controleren (bijvoorbeeld het heen en weer navigeren tussen de stappen).
- De functie `setSelectedMethods` werd gebruikt om de `selectedMethods` state bij te werken, zodat de geselecteerde methoden altijd goed worden vastgelegd.

### Impact van de Wijzigingen

- **Betere code-onderhoudbaarheid**: Door de logica in één component te centraliseren, is het makkelijker om de applicatie in de toekomst verder uit te breiden.
- **Verbeterde gebruikerservaring**: Hover beschrijvingen bieden meer context en de stapnavigatie maakt het proces intuïtiever.
- **Betere state-beheer**: De flow tussen bestands- en methode keuze wordt nu efficiënter en gebruiksvriendelijker.

## Woensdag 05/03 – Dev Dagboek

Vandaag heb ik verder gewerkt aan de integratie van componenten op de homepagina en het oplossen van enkele typefouten. De focus lag vooral op het verbeteren van de staatsovergangen en het zorgen dat de componenten correct met elkaar communiceren.

### Belangrijkste Wijzigingen

#### Refactor de SmallKeywordsSelection Component
- Ik heb de logica van de `ActionSelector` component uit de `SmallKeywordsSelection` component verwijderd en geïntegreerd in de `KeywordsSelection` component voor een betere onderhoudbaarheid.

#### Componenten Integreren in de Homepagina
- In de `Home` component heb ik de benodigde props doorgegeven aan de `SelectedFiles`, `SmallKeywordsSelection`, en `CodeGeneration` componenten.
- Dit vereiste het beheren en doorgeven van de bijgewerkte state om ervoor te zorgen dat de flow tussen de componenten correct functioneert.

#### Fix TypeScript Fouten
- Ik heb typefouten opgelost die voortkwamen uit verkeerde props-doorsluizen, zoals het niet correct definiëren of doorgeven van `selectedFiles` in de componenten.
- Props-validatie en type-toewijzing werden uitgevoerd om een soepele integratie van de componenten te waarborgen.

### Impact van de Wijzigingen

- **Verbeterde integratie tussen componenten**: Door de props correct door te geven, kan de applicatie nu beter communiceren tussen de verschillende onderdelen.
- **Betere codekwaliteit**: Typefouten zijn opgelost, wat zorgt voor een betrouwbaardere en stabielere code.
- **Naadloze gebruikersflow**: De state-overgangen tussen componenten werken nu zoals bedoeld, waardoor de applicatie stabieler en gebruiksvriendelijker is.

## Donderdag 06/03 – Dev Dagboek

Vandaag heb ik gewerkt aan de UI en het refactoren van de functionaliteit voor het opslaan van testconfiguraties. Het belangrijkste doel was om de gebruikerservaring te verbeteren door pagina-herladingen te vermijden en de testflow beter te synchroniseren.

### Belangrijkste Wijzigingen

#### Refactor Saved Test Configurations – Remove Full Page Reload
- Voorheen werd de volledige pagina herladen bij het opslaan of laden van een testconfiguratie, wat zorgde voor een trage en minder gebruiksvriendelijke ervaring.
- Ik heb de logica aangepast zodat testconfiguraties nu direct worden geladen en geüpdatet zonder dat de pagina opnieuw hoeft te laden.
- Dit werd bereikt door de state direct bij te werken in plaats van de applicatie te forceren om volledig opnieuw te renderen.

#### Synchronisatie van de Test Flow
- De testflow werd geoptimaliseerd zodat wijzigingen in een opgeslagen testconfiguratie direct zichtbaar zijn in de UI.
- Dit zorgt ervoor dat gebruikers niet handmatig de pagina hoeven te verversen om hun laatste wijzigingen te zien.
- Ik heb ervoor gezorgd dat de juiste componenten automatisch opnieuw renderen wanneer een testconfiguratie wordt gewijzigd.

### Impact van de Wijzigingen

- **Verbeterde snelheid en gebruikservaring**: Geen onnodige pagina-herladingen meer.
- **Directe feedback voor de gebruiker**: Wijzigingen in testconfiguraties worden onmiddellijk weergegeven.
- **Minder afhankelijkheid van volledige her-rendering**: Alleen de relevante componenten worden opnieuw gerenderd, wat de applicatie efficiënter maakt.

## Vrijdag 07/03 – Dev Dagboek

Vandaag lag de focus op het verbeteren van de layout en het aanpassen van de componenten voor een betere UI/UX-ervaring.

### Belangrijkste Wijzigingen

#### Refactor Home & SmallKeywordsSelection voor een Full-Width Layout
- De oorspronkelijke lay-out was beperkt in breedte, wat ervoor zorgde dat sommige UI-elementen minder ruimte hadden dan gewenst.
- Ik heb de `Home` en `SmallKeywordsSelection` componenten aangepast naar een full-width layout, waardoor er meer ruimte is voor content.
- Dit verbetert de leesbaarheid en maakt de UI overzichtelijker.

#### UI-Optimalisaties
- Aanpassingen aan marges en paddings om de interface beter uit te lijnen.
- Consistente styling toegepast op de knoppen en invoervelden.
- Verbeteringen aan de zichtbaarheid van geselecteerde items binnen de `SmallKeywordsSelection`.

### Impact van de Wijzigingen

- **Beter gebruik van schermruimte**: Content wordt nu optimaal weergegeven zonder onnodige beperkingen.
- **Consistentere UI**: De interface ziet er strakker en professioneler uit.
- **Verbeterde gebruikerservaring**: Navigeren en werken met de applicatie voelt natuurlijker en intuïtiever aan.

Volgende week gaan we verder met het implementeren van een manier om testconfiguraties persistent op te slaan, waarschijnlijk met een externe database. Maandag zullen we hierover beslissen met de project owner