---
title: "Week 13 – Refactoring, Postman optimalisatie en migratie naar Playwright"
excerpt: "Tijdens week 13 werkte ik solo aan de verdere opsplitsing van grote codebestanden, optimaliseerde ik onze API-tests met Postman en begon ik aan de uitdagende migratie van Selenium naar het moderne testframework Playwright."
date: "2025-05-11"
image: "/post13.png"
tags: 
    - week13
    - testing
    - API
    - Playwright
    - Selenium
---

*Let op: de week voorafgaand aan deze was een vakantieperiode. Mijn collega en projectpartner is nog met verlof, waardoor ik deze week alleen aan het project werk.*

## Maandag 5 april – Refactoring en intervisie

Vandaag ben ik gestart met het opsplitsen van een aantal grote bestanden binnen onze repository. Het bestand `FlowBuilder.ts` bevatte meer dan 1.400 lijnen code, wat het erg moeilijk maakte om te onderhouden en testen. Ik heb dit bestand succesvol opgesplitst in zeven kleinere modules, die nu duidelijk gescheiden verantwoordelijkheden hebben:

```
├── builder/
│   ├── useCodeGeneration.ts
│   ├── useFileProcessing.ts
│   ├── useParameterHandling.ts
│   ├── useStepManagement.ts
│   ├── useTestFlowPersistence.ts
│   ├── useTestFlowStateManagement.ts
│   └── useTestFlowBuilder.ts
├── types/
│   └── testFlowBuilder.ts
```

Om 16:30 vond er een intervisiemoment met onze lector van AP Hogeschool plaats. Tijdens dit gesprek kwamen onderwerpen aan bod zoals urenregistratie, verwachte werkduur per week en hoe we dit best bijhouden voor ons stageverslag.

## Dinsdag 6 april – Refactor afronden en Postman optimalisatie

Vandaag heb ik de refactor van de testbestanden verder afgewerkt. Vervolgens heb ik uitgebreid getest of alles nog correct werkt na de opsplitsing. Gelukkig bleken alle functionaliteiten nog te werken zoals verwacht. We hebben de definitieve wijzigingen doorgevoerd op de `main` branch.

Daarnaast had ik een technisch overleg met onze mentor, die mij zeer nuttige inzichten gaf over het gebruik van Postman voor API-tests. Hij toonde hoe je een **Postman Collection** kunt opstellen zodat meerdere API-calls automatisch in volgorde worden uitgevoerd. Een bijkomende tip was het gebruik van **Newman**, een command line tool van Postman waarmee je API-tests kunt integreren in CI/CD-pijplijnen en automatisch kunt laten uitvoeren bij bijvoorbeeld een release of deployment.

## Woensdag 7 april – Introductie tot Playwright

Vandaag kregen we toegang tot het nieuwe testframework, dat gebruikmaakt van **Playwright** in plaats van **Selenium**. Dit bracht een aantal nieuwe uitdagingen met zich mee:

- De structuur en configuratie van Playwright zijn anders en uitgebreider.
- Ik moest uitzoeken hoe de testruns werden opgezet (o.a. via `package.json` scripts).
- Er zijn nieuwe configuratiebestanden en terminologieën om mee vertrouwd te raken.

Mijn eerste doel vandaag was het opzetten van een werkende Playwright-omgeving. Na wat experimenteren is het gelukt om de basisconfiguratie correct in te stellen.

## Donderdag 8 april – Eerste testen in Playwright

Ik heb mijn testomgeving volledig geconfigureerd en ben begonnen aan de herschrijving van de bestaande testen naar Playwright-syntaxis. Dit is noodzakelijk omdat Playwright fundamenteel verschilt van Selenium:

- Andere functies en commando's
- Geen ondersteuning voor klassieke XPath-notatie zoals in Selenium
- Asynchrone aanpak en andere structuur van assertions

Mijn eerste succes was het correct uitvoeren van de login-test, die nu volledig werkt in Playwright. Dit geeft vertrouwen dat de rest van de testen met voldoende aanpassing ook zullen werken.

## Vrijdag 9 april – Verdere migratie en uitdagingen

Vandaag ben ik verder gegaan met het omzetten van de resterende testen. Het proces verloopt moeizaam, voornamelijk door:

- De volledige herschrijving die vereist is vanwege syntactische verschillen
- Verlies van XPath-ondersteuning, waardoor selectors manueel herschreven moeten worden
- Sommige methodes die in Selenium bestonden zijn niet beschikbaar of werken anders in Playwright

Kortom, het is veel meer werk dan initieel gedacht, maar ik maak goede vorderingen en leer ondertussen veel bij over moderne testing frameworks.
