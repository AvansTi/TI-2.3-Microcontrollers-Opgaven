>> ### Opgave A2 - Kennismaken met de LCD module
>>
>> - *Thuis*{: .badge .badge-primary }
>>{: .tags }
>>
>> Op [http://www.dinceraydin.com/djlcdsim/djlcdsim.html](http://www.dinceraydin.com/djlcdsim/djlcdsim.html) is een goede LCD module simulator gegeven. Met behulp van deze simulator kun je relatief eenvoudig de werking bestuderen om later C functies te kunnen ontwikkelen.
>>
>> Belangrijk:
>> - Het LCD werkt op het AVR board werkt in 4-bits mode
>> - De backlight heeft niets met besturing van het LCD te maken, de backlight is slechts een LED aangesloten op een output-pin.
>>
>> Bestudeer (nogmaals) de relevante dia’s uit de presentatie, de LCD datasheet en bekijk de instructie op [YouTube](https://youtu.be/aKXw20HkV-0).
>>
>> Realiseer in de simulator:
>> - **1.** De initialisatiecode om het LCD in 4-bits mode te initialiseren. Welke data, commando’s en instellingen moet je maken om het LCD te initialiseren? Maak een tabel en vertaal deze handelingen in een C functie.
>> - **2.** Verklaar de functie van de *D0-D7* pinnen, de *E* pin en de *RS* pin.
>> - **3.** Het afbeelden van enkele karakters op het display. Welke data, commando’s en/of instellingen moet je maken? Vertaal deze handelingen in een C functie.
>> - **4.** Het schuiven van alle tekst naar rechts. Welke data, commando’s en/of instellingen moet je maken? Vertaal deze handelingen in een C functie.
>>
>{: .exercise}