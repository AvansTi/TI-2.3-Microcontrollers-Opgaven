>> ### Opgave 6 - Rijden met BoeBot
>>
>> Schrijf een aantal methoden om de boebot een aantal dingen te laten doen (je mag Engelse methodenamen gebruiken).
>>
>> - **A** ```void gaNaarSnelheid(int snelheid)```
>> Laat de BoeBot rustig optrekken naar een bepaalde snelheid. Negatieve getallen gaan achteruit, positieve getallen vooruit, 0 laat de BoeBot rustig stoppen. De methode returned pas nadat de BoeBot op snelheid is gekomen.
>> *Let op, de BoeBot moet hiervoor dus de huidige snelheid onthouden.*
>> - **B** ```void noodRem()```
>> Laat de BoeBot meteen stoppen.
>> - **C** ```void draaien(int draaiSnelheid)```
>> Laat de BoeBot met een bepaalde snelheid linksom of rechtsom draaien. 0 is geen draaiing, negatieve getallen laten de boebot naar links draaien, positieve getallen laten de BoeBot naar rechts draaien.
>> - **D** ```void draaiGraden(int graden, int draaiSnelheid)```
>> Deze methode gebruikt de ```draaien()``` methoden om de BoeBot een bepaald aantal graden te laten draaien.
>>
>{: .exercise}