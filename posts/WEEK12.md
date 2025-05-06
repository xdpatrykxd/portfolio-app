---
title: "Week 12 – Testontwikkeling, API-validatie en Projectpresentatie"
excerpt: "Een week vol technische verdieping: automatische testen, API-validatie via Postman en inzichten uit een Brownbag-sessie. Ook presenteerden we onze voortgang aan de stagementor en wisselden we ideeën uit met andere studententeams."
date: "2025-04-27"
image: "/post12.png"
tags: 
    - week12
    - testing
    - API
    - MSAL
    - brownbag
    - presentatie
    - samenwerking
---

# Week 12 – Maandag 21 maart t.e.m. vrijdag 25 maart

## Maandag 21 maart – Testontwikkeling en bestandsstructurering

Vandaag heb ik mij voornamelijk verder verdiept in het schrijven van automatische testen.  
Een tweede focuspunt was het herstructureren van ons project: we wilden een aantal grote bestanden opsplitsen in kleinere, beter beheersbare modules.  
Dit bleek echter complexer dan verwacht. Veel van onze code zit sterk gekoppeld, waardoor het niet eenvoudig was om zaken te isoleren zonder afhankelijkheden te breken.

Na enkele pogingen hebben we besloten om dit gefaseerd aan te pakken. Intussen heb ik de happy flow van de applicatie verder getest via het in-house testing framework, om zeker te zijn dat de kernfunctionaliteit stabiel blijft na onze wijzigingen.

---

## Dinsdag 22 maart – API Testing research & Brownbag-sessie

Vandaag heb ik me gefocust op hoe ik best kan beginnen aan het schrijven van geautomatiseerde API-testen.  
In het bijzonder heb ik onderzocht hoe ik via ons **MSAL-authenticatiesysteem** (Microsoft Authentication Library) een bearer token kan verkrijgen en gebruiken voor testdoeleinden.

Hoewel het opzetten van een bearer token op zich niet moeilijk is, was het integreren hiervan in het Brightest framework niet evident.  
Veel documentatie is beperkt of gefragmenteerd, waardoor ik meerdere bronnen moest raadplegen.  
Het blijft een open punt dat ik de komende dagen verder zal uitwerken.

In de namiddag hebben we ook een interessante **Brownbag-sessie** gevolgd, getiteld _Legacy Regression Automation & Long-Term Maintainability_, gegeven door Sepp Van Cauwenbergh.  
Hierin leerden we hoe je kritisch moet evalueren of automation wel geschikt is voor legacy-projecten.  
Een belangrijk inzicht voor mij was dat niet elk project nood heeft aan automatisering — het hangt af van de schaal, levensduur en complexiteit van de applicatie.  
Deze sessie bracht nieuwe inzichten die ik zeker zal meenemen in mijn aanpak.

Tot slot hebben we in team nog even gezeten om een laatste stabiliteitscheck van onze app te doen ter voorbereiding van de presentatie van morgen.

---

## Woensdag 23 maart – Presentaties en samenwerking met andere groepen

Vandaag vond een grote presentatie- en demo-ochtend plaats, waarbij we ons project moesten tonen aan onze stagementor en ook deelnamen aan een online meeting met twee andere studentengroepen die aan vergelijkbare opdrachten werken.

Elke groep presenteerde zijn eigen oplossing op basis van dezelfde initiële opdracht. Wat interessant was:

- De **eerste groep** bouwde een UI die via prompts keywords kan genereren (groot en klein) met behulp van AI.
- De **tweede groep** ontwikkelde een zogenaamde **DOM Raider**: een tool die via DOM-analyse elementen detecteert en hieruit testcode genereert via LLM.
- **Onze groep** combineert deze elementen: wij focussen op codegeneratie en het correct structureren, opslaan én integreren van deze testcode in een reëel testframework.

De verscheidenheid aan oplossingen toonde mooi aan hoe flexibel zo'n opdracht ingevuld kan worden.  
We kregen nuttige feedback over gebruiksvriendelijkheid, documentatie en het afbakenen van features.

---

## Donderdag 24 maart – Technisch overleg & aanpak API-tests

Na de presentatie van gisteren hadden we vandaag een technisch follow-upgesprek met onze mentor.  
We kregen opnieuw waardevolle input over wat nog beter kon en wat er nog verwacht wordt van onze toepassing richting eindfase.  
Een belangrijk punt dat besproken werd, was mijn API testing probleem met MSAL-authenticatie.

Samen bespraken we mogelijke oplossingen, waaronder:

- Het tijdelijk uitzetten van loginvereisten tijdens test runs.
- Het hardcoden van tokens in een testomgeving.
- Of gewoon alles testen via **Postman**, aangezien dat een robuuste en flexibele tool blijft.

Dit gaf mij voldoende richting om verder te gaan met mijn onderzoek en voorbereiding.

---

## Vrijdag 25 maart – Postman tests en API-validatie

Vandaag heb ik een volledig overzicht gemaakt van alle API-endpoints in onze applicatie.  
Ik heb deze endpoints één voor één getest in **Postman** met realistische inputs en authenticatie via tokens.

De tests verliepen over het algemeen goed — alles werkt zoals verwacht.  
De volgende stap is nu om deze tests om te zetten naar code in ons automated testing framework, zodat we dit ook **CI/CD-proof** kunnen maken en bij elke push kunnen valideren dat de API nog werkt.

Door dit proces heb ik ook een duidelijk stappenplan opgesteld voor API-validatie, dat ik de komende week verder ga uitwerken en documenteren.
