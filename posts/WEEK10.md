---
title: "Week 10: Verbeteren van de Gebruikerservaring en Codegeneratie"
date: "2025-04-14"
excerpt: "Verbeteringen in de gebruikersinterface, codegeneratie voor testcode en het verbeteren van de applicatiestructuur."
image: "/post10.png"
tags: 
    - week10
    - gebruikerservaring
    - codegeneratie
    - testautomatisering
---

## Maandag 7 april

De week is gestart met het verbeteren van de gebruikservaring (UI) in onze applicatie. Specifiek hebben we de weergave van TestFlowCards aangepakt. Deze component toonde initieel te veel technische details, wat voor verwarring zorgde bij niet-technische gebruikers. We hebben daarom de layout opgeschoond, overbodige info verborgen achter toggles en meer focus gelegd op de kerninformatie: naam van de testflow, geselecteerde methodes en timestamp.

Daarnaast ben ik begonnen met het aanpassen van onze codegeneratie-functionaliteit. Het doel is dat gebruikers met één klik testcode kunnen laten genereren die bruikbaar is binnen Brightest’s eigen testing framework. De huidige implementatie richt zich op TypeScript. Hiervoor moest ik code schrijven die:
- De testflow-gegevens vertaalt naar typespecifieke assertions.
- Variabelen en methodes correct naamgeeft.
- Standaardtesten aanvult met commentaar voor duidelijkheid.

Op het einde van de dag was de basis gelegd: een gegenereerde TypeScript file kon succesvol gekopieerd en geplakt worden in het testproject van Brightest.

## Dinsdag 8 april

Vandaag heb ik samen met mijn collega de gegenereerde TypeScript tests verder getest in een sandbox-omgeving. We hebben geverifieerd dat de output:
- Correct compileert zonder fouten.
- De juiste inputwaarden gebruikt.
- De verwachte assertions uitvoert.

In de namiddag hadden we een technische meeting met onze mentor. Hij was positief verrast over de snelheid waarmee we de generator hebben opgezet, maar gaf ook een belangrijk aandachtspunt: we waren te strikt aan het definiëren wat een test precies moest doen, door automatisch assertions op te bouwen op basis van het datatype van de input.

Zijn advies was om meer vrijheid te geven aan de gebruiker. Bijvoorbeeld: als een gebruiker een string als input geeft, is het niet altijd nodig om daar automatisch een .toBe() van te maken – misschien wil de gebruiker een andere validatie uitvoeren. We zijn het hier volledig mee eens en hebben daarom beslist om de generator minder opiniegericht te maken, en zo een breder gebruik mogelijk te maken voor gevorderde testers.

## Woensdag 9 april

De focus van vandaag lag op het organiseren van onze codebase en documentatie, iets wat de voorbije weken wat verwaterd was door snelle iteraties. We merkten dat:
- Sommige componenten nog experimentele props hadden die nergens meer gebruikt werden.
- Testdata verspreid zat over meerdere bestanden.
- De documentatie verouderde voorbeelden toonde.

Ik heb samen met mijn collega een grote cleanup gedaan:
- Componenten opgeschoond en gemigreerd naar duidelijke mappen.
- Een nieuw document gemaakt waarin we de structuur van de testflow uitleggen.
- Herbruikbare functies uit elkaar getrokken en ondergebracht in een /utils map.
- De README.md herschreven met een heldere flow: installatie → login → repositories → testgeneratie.

Door deze opruiming kunnen nieuwe developers sneller instappen in het project en is de technische schuld merkbaar verminderd.

## Donderdag 10 april

Vandaag zijn we echt begonnen met het testen van onze eigen applicatie via automated testing. We hebben gekozen voor een Page Object Model structuur, wat het mogelijk maakt om componenten als aparte objecten aan te spreken en de tests leesbaar en onderhoudbaar te houden.

Ik heb onder andere:
- De loginflow (via Microsoft popup) geautomatiseerd. Hiervoor was wat extra timingcontrole nodig omdat popups soms trager openen.
- Pagina-objecten opgezet voor MainPage, ResultPage en Repositories.
- Tests opgezet om het gedrag van de homepage en repositories lijst te verifiëren.

Daarnaast heb ik de eerste lijnen geschreven voor C# codegeneratie, gebaseerd op de code dat we al gebruiken voor TypeScript. De gegenereerde C# code werkt al met een voorbeeldbestand, maar moet nog verder getest worden met echte gebruikersinput. We verwachten dat hier nog veel debugging aan te pas zal komen omdat typeafhandeling in C# strikter is dan in TypeScript.

## Vrijdag 11 april

Vandaag heb ik me volledig gefocust op het uitbreiden van de teststructuur in ons PageObject-model. De bedoeling is dat we elk belangrijk interactiepunt in onze UI kunnen testen. Dit is belangrijk met het oog op regressietests en toekomstige uitbreidingen. Ik heb extra page-objects toegevoegd voor:
- Navigatie tussen repositories.
- Verifiëren van zichtbaarheid en content van testflows.
- Click-interacties en state-veranderingen.

Daarnaast hebben we ons even gebogen over een ambitieus idee: onze app testen via zijn eigen UI. Dat wil zeggen, we willen een flow bouwen waarin een gebruiker via onze UI een test kan genereren die... onze UI test. Dit zou een grote stap zijn richting een zelftestende applicatie – iets wat in veel professionele omgevingen een grote meerwaarde biedt.

Ik heb alvast onderstaande structuur opgezet in TypeScript:

```typescript
export class TestAutomationUIGeneratorPages {
    Main: MainPage;
    Result: ResultPage;
    Login: LoginPage;
    Repositories: RepositoriesPage;

    constructor(browser: Browser) {
        this.Main = new MainPage(browser);
        this.Result = new ResultPage(browser);
        this.Login = new LoginPage(browser);
        this.Repositories = new RepositoriesPage(browser);
    }

    static async init(): Promise<TestAutomationUIGeneratorPages> {
        const browser = Browser.fetchMainBrowser();
        return new TestAutomationUIGeneratorPages(browser);
    }
}
```

De week eindigde met veel voldoening: er is stevige vooruitgang geboekt op vlak van testing, structuur en gebruikersgericht denken.