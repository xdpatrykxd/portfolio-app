---
title: "Week 4: Verbeteringen en Nieuwe Functionaliteiten"
date: "2025-02-28"
excerpt: "Deze week richtte zich op het verfijnen van methodeselectie, codegeneratie en het verbeteren van de gebruikerservaring, evenals brainstormen over de opslagopties voor voortgang."
image: "/post4.png"
tags:
    - week4
    - codegeneratie
    - objectparameters
    - gebruikerservaring
    - opslagopties
---

# Week 4: Verbeteringen en Nieuwe Functionaliteiten

## Maandag 24/02 – Dev Dagboek

Vandaag lag de focus op het verfijnen van de methodeselectie en codegeneratie. Ondanks eerdere verbeteringen waren er nog enkele edge cases die opgelost moesten worden. De belangrijkste aandachtspunten waren het robuuster maken van de dataflow en het verbeteren van de gebruikerservaring.

### Fixes & Verbeteringen

#### TypeScript Fixes in KeywordsSelection.tsx

Afgelopen vrijdag zijn er al een aantal TypeScript-fouten verholpen, maar er bleken nog enkele inconsistenties te zijn in de verwerking van methodes.

- De `methodsByFile` state sloeg methodes soms op zonder alle verplichte eigenschappen.
- De `extractMethods()` functie is verder verfijnd zodat methodes nu altijd een volledig object bevatten met naam, beschrijving, code en helperSnippet.
- Extra typevalidaties toegevoegd om te voorkomen dat onvolledige data in de state terechtkomt.

#### Verbeteringen aan ActionSelector.tsx

De selectie van methodes werkte nog niet volledig correct, vooral bij de ‘Select All’ en ‘Deselect All’-functionaliteit.

- Wanneer methodes buiten het zicht vielen, werden ze niet altijd correct geselecteerd. Dit is nu opgelost.
- `selectedMethods` bevat nu niet alleen de methodenamen, maar de volledige methode-objecten. Hierdoor kan later eenvoudiger extra informatie worden opgehaald.
- Extra logging toegevoegd om beter inzicht te krijgen in de manier waarop methodes worden geselecteerd en welke acties daarop volgen.

#### Dynamische Parameter Extractie & Codegeneratie

De functionaliteit voor het genereren van invoervelden op basis van functieparameters is verder verfijnd.

- `@param` tags worden nu nauwkeuriger uit beschrijvingen gehaald, ook wanneer ze gecombineerd zijn met andere tekst.
- Meerdere `@param` annotaties per methode worden correct verwerkt.
- Dynamische invoervelden worden gegenereerd op basis van de parameters, waarbij `number` en `string` types correct worden toegewezen.
- De gegenereerde testcode maakt nu gebruik van de ingevulde waarden, wat de uitvoer realistischer en beter bruikbaar maakt.

Voorbeeld van verbeterde codegeneratie:

```javascript
// File: cart.js

// Method: getCartItem

getCartItem("swag", true);
```
# Dinsdag 25/02 - Dev Dagboek

Vandaag hebben we gewerkt aan een verbetering rondom de verwerking van objectparameters in de codegeneratie. Het probleem was dat objecten met meerdere parameters niet intuïtief ingevuld konden worden, waardoor de gegenereerde testcode soms onvolledig was.

## Verbeteringen in Object Parameter Handling

- We hebben een toggle-gebaseerde invoeroptie toegevoegd, waarmee gebruikers objectparameters kunnen uitklappen en individueel invullen.
- Voorheen werd een object als één enkele string weergegeven, maar nu worden de afzonderlijke eigenschappen correct herkend en weergegeven als invoervelden.
- De UI past zich dynamisch aan, afhankelijk van of een parameter een object is of een primitieve waarde zoals een string of number.
- Bij het genereren van testcode worden alleen ingevulde objectvelden meegenomen, zodat lege waarden niet per ongeluk worden gegenereerd.

Met deze aanpassingen is de gebruikerservaring bij het invullen van objectparameters aanzienlijk verbeterd en werkt de testcodegeneratie nu efficiënter en nauwkeuriger.

---

# Woensdag 26/02 - Jobbeurs "Moving Forward"

Vandaag stond grotendeels in het teken van een uitstap naar de jobbeurs **Moving Forward**. Dit event richt zich op studenten en professionals die hun volgende carrièrestap willen zetten. Er waren tal van workshops, infosessies en netwerkmogelijkheden met bedrijven.

- Zelf heb ik een aantal interessante gesprekken gehad met bedrijven en enkele cv’s achtergelaten.
- Verder heb ik niet deelgenomen aan de andere activiteiten, zoals de talks of speeddates met werkgevers.
- De beurs bood een uitgebreid programma met inspirerende verhalen en praktisch advies over de arbeidsmarkt.
  - Er was onder andere de mogelijkheid om cv’s te laten screenen, speeddates te doen met werkgevers via de **JOBAT-app** en een professionele foto te laten maken bij **Shine Online**.

Hoewel ik niet alles heb meegedaan, was het een nuttige ervaring om met bedrijven in gesprek te gaan en te kijken naar mogelijke toekomstige carrièremogelijkheden.

Morgen pakken we de technische taken weer op en gaan we verder met de openstaande verbeteringen.

---

# Donderdag 27/02 & Vrijdag 28/02 - Dev Dagboek

De afgelopen twee dagen hebben we gebrainstormd over de volgende stappen voor onze applicatie. Een van de belangrijkste nieuwe functionaliteiten waar we aan gaan werken, is het **onthouden van de voortgang van de gebruiker**. Dit betekent dat we ervoor moeten zorgen dat een gebruiker zijn laatst bewerkte test kan heropenen en verder kan gaan waar hij gebleven was.

## Opslagopties: Local Storage vs. Externe Database

Tijdens de brainstormsessies hebben we twee mogelijke benaderingen besproken:

### Local Storage

**Voordelen:**
- Snel
- Eenvoudig te implementeren
- Geen externe afhankelijkheden

**Nadelen:**
- Beperkt tot de browser van de gebruiker
- Geen synchronisatie tussen apparaten

### Externe Database

**Voordelen:**
- Betere schaalbaarheid
- Gebruikers kunnen op meerdere apparaten verder werken
- Data blijft behouden bij browsercache-verwijdering

**Nadelen:**
- Meer setup en onderhoud vereist
- Afhankelijk van een backend

Op dit moment neigen we naar een **externe database** als de betere oplossing, omdat het meer flexibiliteit biedt en toekomstbestendig is. We gaan dit maandag verder bespreken en uiteindelijk een keuze maken.

Daarnaast moeten we ook input vragen aan onze project owner om zeker te zijn dat onze aanpak aansluit bij de verwachtingen en de langetermijnvisie van het project.

**Maandag** starten we met het uitwerken van een concreet plan voor de implementatie en bepalen we hoe we de opslag gaan structureren.
