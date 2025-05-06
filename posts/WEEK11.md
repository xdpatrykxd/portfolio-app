---
title: "Week 11: C# Integratie en NUnit-tests"
date: "2025-04-21"
excerpt: "De C#-integratie werd uitgebreid getest, en we implementeerden NUnit-tests voor de gegenereerde code."
image: "/post11.png"
tags: 
    - week11
    - C#
    - NUnit
    - testing
    - codegeneratie
---

## Maandag 14 april – C# integratie en NUnit-tests

De week begon met een stevige testfase voor het C#-deel van onze applicatie. We hebben de automated code generator uitvoerig getest met meerdere scenario's om na te gaan of de gegenereerde C#-code correct compileert, logisch opgebouwd is, en foutloos uitvoerbaar is in de Brightest testing omgeving. De generator werkt nu zoals we het oorspronkelijk voor ogen hadden.

We hebben besloten om de gegenereerde tests te structureren volgens de NUnit-stijl, wat ideaal is gezien dit het meest gebruikte testframework is binnen .NET-omgevingen. Hierdoor sluiten onze gegenereerde bestanden perfect aan bij wat gebruikers verwachten, en dit verhoogt de kans dat ze er meteen mee aan de slag kunnen.

Tijdens het testen kwamen we nog enkele kleine bugs tegen: o.a. foutieve namespaces in specifieke gevallen, of methodes die dubbele imports bevatten. We hebben deze direct aangepakt en opgelost.

## Dinsdag 15 april – Feedbackmoment en heroriëntering

Vandaag hadden we een presentatiemoment met onze stagebegeleider waarin we een overzicht gaven van de testen die we tot dan toe hebben kunnen opstellen. We hebben laten zien hoe de generator werkt, hoe de gegenereerde tests er uitzien, en welke technologieën we gebruiken (TypeScript en C#).

Onze stagebegeleidster was vooral enthousiast over hoe goed ik en mijn collega Jesus samenwerken. Ook al hebben we soms verschillende meningen of botsen we over bepaalde keuzes, we slagen er altijd in om via open communicatie tot een oplossing te komen. Dit werd heel positief onthaald.

Daarnaast kregen we ook input van onze technische mentor i.v.m. de interne presentatie van volgende week. Opvallend was dat we eigenlijk al meer hebben gerealiseerd dan verwacht werd. Eén feature die we recent aan het bouwen waren – het automatisch asserten van outputs – zou eigenlijk te veel controle overnemen van de gebruiker, en dat is niet de bedoeling binnen deze tool. De keuze is dus gemaakt om deze functionaliteit te verwijderen en de nadruk te leggen op gebruikers die een basisniveau van technische kennis bezitten.

## Woensdag 16 april – Herstructurering door verwijderen van assert-functie

Vandaag hebben we gewerkt aan het verwijderen van de assert-functionaliteit die we eerder toegevoegd hadden. Op papier leek dit simpel, maar in de praktijk bracht dit complexe afhankelijkheden met zich mee, vooral in de codegeneratie-flow waar outputs automatisch gekoppeld werden aan assertions.

De assert-code zat verweven in meerdere delen van de builder, waardoor het niet eenvoudig was om deze los te trekken zonder andere logica te breken. We hebben samen debug-werk verricht om:
- De oorspronkelijke logica te reconstrueren zonder assertions.
- Te controleren of er geen logische inconsistenties zijn ontstaan.
- De UI te herstructureren zodat de optie niet meer zichtbaar is.

We zijn er nog niet helemaal uit of alle gevolgen van het weghalen van deze feature verholpen zijn. We plannen dus nog een extra code-audit later deze week.

## Donderdag 17 april – File testing en commentaargevoeligheid

Vandaag stond in het teken van uitgebreid testen met verschillende voorbeeldbestanden. We hebben meerdere testbestanden geschreven en gebruikt in onze UI om te simuleren hoe eindgebruikers de tool zouden gebruiken.

Een belangrijke ontdekking: de gegenereerde logica is sterk afhankelijk van de commentaren in de testbestanden. De parser haalt metadata uit commentaarregels, en een klein foutje daarin (zoals een tikfout in een parameternaam of een foute structuur) kan leiden tot verkeerde waarden of zelfs crashende flows.

Op basis hiervan zijn we tot de conclusie gekomen dat we in de toekomst een duidelijke handleiding of tutorial moeten aanbieden waarin uitgelegd wordt:
- Hoe je correcte commentaren schrijft.
- Welke structuur de parser verwacht.
- Wat de meest voorkomende fouten zijn.

Zo willen we toekomstige gebruikers wapenen tegen verwarrende bugs en ongewenst gedrag.

## Vrijdag 18 april – Testcases documenteren en uitbreiden

Vandaag heb ik gewerkt aan het opstellen van een gestructureerd Test Case Document dat onze volledige flow beschrijft aan de hand van concrete scenario’s. Het document is gebaseerd op een flowchart van onze app en beschrijft alle belangrijke testcases onderverdeeld in verschillende secties:
- Authenticatie
- Navigatie
- Repository management
- Testflowbeheer
- Validaties & edge cases

Het document bevat 20 gedetailleerde testcases zoals:
- Login met foutieve Microsoft-credentials (verwachte foutmelding).
- Aanmaken van een repository en koppeling met GitHub.
- Interactie met de testflowbuilder en validatie van parameters.
- Gebruik van gegenereerde testcode zonder eerst op te slaan.
- Foutafhandeling bij ontbrekende inputs.

Dit document zal een waardevolle basis vormen voor zowel handmatige als geautomatiseerde testen, en is meteen ook een stuk documentatie voor onze eindpresentatie.
