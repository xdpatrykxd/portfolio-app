---
title: "Week 8: Feedback en Structuur in de Werkwijze"
date: "2025-03-30"
excerpt: "Evaluatiegesprek met stagebegeleider en focus op het verbeteren van technische communicatie en een gestructureerdere aanpak."
image: "/post8.png"
tags: 
    - week8
    - feedback
    - structuur
    - planning
---

## Maandag 24/03 – Feedback en Structuur in de Werkwijze

De week begon met een evaluatiegesprek met onze stagebegeleider. Over het algemeen was de feedback positief, maar er waren enkele aandachtspunten waar we op moesten letten. Eén van de belangrijkste punten was dat ik mijn ideeën beter moet kunnen uitleggen, vooral in technische discussies en tijdens het presenteren van oplossingen. Dit is iets waar ik de komende weken bewuster mee aan de slag wil gaan.

Daarnaast werd aangeraden om een gestructureerdere aanpak te hanteren bij het ontwikkelen van nieuwe features. In plaats van direct edge cases te behandelen, is het beter om eerst een basisfunctionaliteit correct werkend te krijgen en daarna pas optimalisaties door te voeren. Dit voorkomt dat we vastlopen in details terwijl de kern van de applicatie nog niet volledig werkt.

Na het gesprek hebben we een planning opgesteld om onze taken deze week beter te organiseren en ervoor te zorgen dat we methodischer te werk gaan.

## Dinsdag 25/03 – UI Verbeteringen en Keyword Selection Opslaan

Vandaag hebben we gewerkt aan het opslaan van de keyword selection in onze lokale database. Dit was een belangrijke stap in het proces, omdat gebruikers nu niet telkens opnieuw hun keyword filters hoeven in te stellen wanneer ze de applicatie heropenen.

Daarnaast hebben we verder gewerkt aan de UI van de applicatie. Een belangrijke opmerking die we vorige week kregen, was dat de interface te geel was en daardoor minder professioneel oogde. We hebben de kleuren en layout aangepast zodat de applicatie overzichtelijker en rustiger aanvoelt.

Onze technische mentor gaf ook feedback dat we goed op schema zitten. Hij was tevreden over de vooruitgang en gaf aan dat we nu de focus kunnen leggen op testing en documentatie, zodat de applicatie niet alleen goed werkt, maar ook toekomstbestendig is.

## Woensdag 26/03 – Bugfixes in de Database

Vandaag lag de focus op het oplossen van een aantal bugs in de database. Een van de belangrijkste problemen was dat oude waardes onbedoeld werden overschreven door nieuwe testflows. Dit zorgde ervoor dat eerder opgeslagen data niet betrouwbaar was.

De oplossing hiervoor was het toevoegen van een unieke ID per flow, zodat nieuwe flows niet meer per ongeluk bestaande entries konden aanpassen. Dit lijkt nu stabiel te werken en voorkomt dat testflows elkaar beïnvloeden.

Daarnaast hebben we ook een paar kleinere optimalisaties gedaan in de manier waarop data wordt opgehaald en weergegeven, waardoor de applicatie efficiënter werkt.

## Donderdag 27/03 – Testing Voorbereiden en Eerste Selenium Testen

In de voormiddag hadden we opnieuw een kort overleg met onze mentor over testing. Ze gaf ons meer inzicht in hoe we onze applicatie kunnen testen in de volgende fase van de stage. Dit was erg nuttig, want hoewel we al enkele tests hadden geschreven, moeten we nog een duidelijke strategie opstellen over hoe we de verschillende componenten van de applicatie gaan valideren.

Ik ben ook mijn eten vergeten te bestellen, dus bleef het bij een appeltje vandaag. In de namiddag heb ik me verdiept in Selenium, omdat we willen kijken of we dit kunnen gebruiken voor automatische UI-tests. Brightest, het testbedrijf waar we mee samenwerken, heeft een in-house testing framework, en ik wilde begrijpen hoe dit werkt.

Ik heb documentatie doorgenomen en enkele kleine tests geschreven om te zien of ik het framework correct kon laten draaien. Dit is gelukt, wat betekent dat we binnenkort geautomatiseerde tests kunnen implementeren om onze applicatie grondiger te valideren.

## Vrijdag 28/03 – Login Functionaliteit met Microsoft MsalProvider

Vandaag heb ik me gefocust op het implementeren van een login systeem voor onze applicatie. We willen ervoor zorgen dat enkel medewerkers van ons bedrijf kunnen inloggen, en later willen we dit uitbreiden zodat elke gebruiker zijn eigen testflows, testbestanden en repositories kan opslaan.

Ik heb gekozen voor MsalProvider van Microsoft, omdat dit goed integreert met de bestaande infrastructuur van het bedrijf en veilige authenticatie biedt via Azure Active Directory.

De basisimplementatie staat nu op poten, en gebruikers kunnen zich authenticeren met hun bedrijfsaccount. De volgende stap is om gebruikersrechten te beheren en ervoor te zorgen dat de testdata correct wordt gekoppeld aan specifieke gebruikers.

Volgende week gaan we verder met testing, login-verfijning en database-optimalisaties om de applicatie robuuster en veiliger te maken.
