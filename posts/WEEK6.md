---
title: "Week 6: Selenium WebDriver Testscript"
date: "2025-03-16"
excerpt: "Opzetten van een Selenium WebDriver testscript om de interactie met GitHub-repositories in onze webapplicatie te automatiseren."
image: "/post6.png"
tags: 
    - week6
    - Selenium
    - testautomatisering
    - webapplicatie
---

## Maandag 10/03 – Dev Dagboek

Vandaag heb ik gewerkt aan het opzetten van een Selenium WebDriver testscript voor onze webapplicatie, waarmee we de interactie met GitHub-repositories automatiseren. Het doel was om de verschillende gebruikersacties in de applicatie te simuleren en te verifiëren of de applicatie goed werkt. Dit is wat ik heb gedaan:

### 1. Selenium WebDriver Setup en Testscript

De basis van ons testscript is opgezet met Selenium WebDriver, een krachtige tool voor het automatiseren van browsers (in dit geval Google Chrome). Deze tool stelt ons in staat om browserinteracties te automatiseren, zoals het invullen van formulieren en het klikken op knoppen. Het testscript is bedoeld om verschillende gebruikersacties in onze applicatie te simuleren.

**Imports en Dependencies**:
- Selenium WebDriver werd geïmporteerd vanuit het selenium-webdriver pakket, wat essentieel is voor het controleren van de browser.
- Verschillende helpers zoals By, until, enzovoort, zijn geïmporteerd om specifieke elementen op de pagina te lokaliseren en ermee te interageren.

### 2. Helper Functies

Ik heb verschillende helper functies gedefinieerd om veelvoorkomende taken tijdens de test uit te voeren:
- **fillGitForm()**: Deze functie vult automatisch een formulier in met een GitHub-project-URL en een toegangstoken.
- **clickButton()**: Hiermee kan een knop op de pagina worden aangeklikt op basis van de XPath.
- **waitForProgressCompletion()**: Deze functie wacht totdat een voortgangsbalk of ander progressie-element is voltooid of verdwenen.
- **countChildElements()**: Hiermee tel je het aantal directe kinder-elementen in een gegeven element op de pagina.
- **fillFilterInput()**: Hiermee vul je een filterinvoerveld in (bijv. “test” of “src”).

De voorbereiding voor de testfase is nu bijna afgerond. Morgen ga ik verder met het daadwerkelijke testproces, waarbij ik de test stap voor stap zal uitvoeren en verificaties zal doen.

## Dinsdag 11/03 – Dev Dagboek

Vandaag ben ik verder gegaan met het uitvoeren van het Selenium WebDriver testscript en heb ik de testlogica verder uitgewerkt. Het testscript is nu klaar om verschillende stappen in onze applicatie automatisch te testen en te verifiëren.

### 3. Hoofd Teststappen (runTest() functie)

De teststappen zijn georganiseerd in de runTest() functie. Deze zorgt ervoor dat de test vloeiend door de applicatie kan worden uitgevoerd. Hier is hoe het testproces eruit ziet:
- **WebDriver Initialisatie**: Ik heb een WebDriver instantie voor Google Chrome gecreëerd. Dit zorgt ervoor dat de test kan worden uitgevoerd in een echte browseromgeving.
- **Teststappen Uitvoeren**: De executeStep() helperfunctie wordt gebruikt om elke teststap uit te voeren. Elke stap wordt gelogd, en het resultaat (geslaagd of mislukt) wordt vastgelegd.
- **Website Laden**: De test begint door de website te laden (http://localhost:3000/).
- **GitHub Formulier Invullen**: Het script vult automatisch het GitHub-projectformulier in met een URL en token.
- **Repository Laden**: Het script wacht op en klikt vervolgens op de elementen die betrekking hebben op het laden van repositories.
- **Filtering en Verificatie**: Er worden verschillende filters toegepast op repositories, bijvoorbeeld het filteren op zoektermen zoals “test” of “src”. Na het filteren wordt gecontroleerd of het aantal repositories overeenkomt met de verwachte waarde.
- **Assertions**: Er worden assertions uitgevoerd om te verifiëren of de repositories en bestanden correct worden weergegeven en of de filtering werkt zoals verwacht.

### 4. Gedetailleerde Testflow

Het testproces bestaat uit kleinere, logische stappen, die elke stap één voor één uitvoeren:
- Starten en configureren van de testomgeving.
- Invullen van GitHub-project-URL’s.
- Interactie met formulierelementen en knoppen.
- Repository-navigatie en filtering.
- Verifiëren van de verwachte uitkomsten, zoals het aantal repositories en bestanden.
- Navigeren door de stappen om te zorgen dat de applicatie zich gedraagt zoals verwacht.

### 5. Foutenafhandeling en Resultaten

Als een stap mislukt, wordt de fout gelogd en toegevoegd aan een lijst van mislukte stappen. Aan het einde van de test wordt een recap van de resultaten weergegeven, met een lijst van geslaagde en gefaalde stappen.

**Samenvatting van de Belangrijkste Kenmerken**:
- **Automatisering**: De test automatiseert gebruikersinteracties zoals het invullen van formulieren en het klikken op knoppen.
- **Dynamische Wachtfuncties**: Het script gebruikt Selenium’s wachtfuncties om ervoor te zorgen dat elementen zichtbaar en interactief zijn voordat ze worden gebruikt.
- **Verificaties**: Het script controleert of het juiste aantal repositories en bestanden wordt weergegeven na het filteren.
- **Foutenlogboek**: Alle fouten die tijdens de uitvoering optreden, worden gelogd, zodat je gemakkelijk kunt zien wat er misging.
- **Testresultaten**: Na afloop van de test wordt er een samenvatting gegeven van de geslaagde en gefaalde stappen.

Morgen kunnen we de test verder verfijnen en de resultaten analyseren om te zorgen dat de applicatie goed functioneert en voldoet aan de vereisten. Het testscript biedt een goede basis om de functionaliteit van de applicatie op grote schaal te verifiëren.

## Woensdag 12/03 – Selenium Testuitbreidingen

Vandaag heb ik verder gewerkt aan het verfijnen en uitbreiden van onze Selenium-testen. De focus lag op het verbeteren van de testlogica, het toevoegen van extra verificaties en het optimaliseren van de bestaande teststappen.

### 1. Optimaliseren van Testflows

Teststappen zijn beter gestructureerd om herhaling te minimaliseren.
- executeStep() aangepast zodat fouten direct worden gelogd en de test verder kan gaan zonder direct af te breken.
- Dynamische wachttijden geoptimaliseerd om tests sneller en stabieler te maken.

### 2. Uitbreiding van Testcases

Extra validaties toegevoegd voor elementen die op het scherm moeten verschijnen na interactie.
- Nieuwe teststap: Controle of de lijst met repositories correct geüpdatet wordt na het filteren.
- Formuliercontroles: Gecontroleerd of ongeldige invoer correct wordt afgehandeld.

De verbeteringen zorgen ervoor dat onze testen robuuster zijn en ons sneller feedback geven over mogelijke issues in de applicatie.

## Donderdag 13/03 – Vrije Dag

Vandaag niet gewerkt.

## Vrijdag 14/03 – Debugging en Stabilisatie van Selenium Testen

De focus lag op het debuggen en stabiliseren van de Selenium-testen, zodat ze betrouwbaarder worden en minder vaak falen door timing- of renderingproblemen.

### 1. Verbeteren van Wachtmechanismen

Sommige tests faalden omdat elementen soms niet direct beschikbaar waren.
- Oplossing: waitForElement() aangepast met langere wachttijden en betere foutafhandeling.

### 2. Debugging van Faalgevoelige Teststappen

Sommige klikken werkten inconsistent. Dit is opgelost door de clickButton() helperfunctie aan te passen met extra checks.
- Test voor het selecteren van repositories verbeterd door het gebruik van expliciete waitForElement() calls.

### 3. Betere Logging en Analyse

Verbeterde foutmeldingen toegevoegd om snel te kunnen zien waar een test faalt.
Testresultaten worden nu in een gestructureerd overzicht gelogd.

De tests draaien nu stabieler en geven duidelijkere feedback. Dit zal helpen om toekomstige wijzigingen sneller te valideren zonder handmatige controles.
