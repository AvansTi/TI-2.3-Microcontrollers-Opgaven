>> ### Opgave 4 - RGB LED met HUE
>>
>> Sluit een RGB LED aan volgens het schema in de sheets uit de les (gebruik de juiste weerstanden op de juiste pinnen). 
>>
>> ![HUE color model](exercises/images/hue.jpg)
>>
>> - **A** Maak een programma dat de 3 kleuren aan en uit zet door middel van ```digitalWrite```. Welke kleuren kun je maken? Is het witte licht ook echt wit?
>> - **B** Schrijf nu een programma dat de RGB LED laat faden (geleidelijk verlopen) door verschillende kleuren. Hiervoor kun je het beste niet het RGB-kleurmodel gebruiken, maar het HSB-kleurmodel. Hierin kun je de kleurtoon (hue), verzadiging (saturation) en helderheid (brightness) instellen. Java heeft hiervoor de methode ```Color.getHSBColor(hue, saturation, brightness)```. Deze methode zal een nieuw Color-object teruggeven waar je de rood, groen en blauwcomponenten uit kunt halen. Door de hue te laten lopen van 0° tot 360° kun je alle kleuren voorbij laten komen.
>> - **C** Wat valt je op aan het resultaat bij opgave b? Komen alle kleuren even lang voor? Zijn er kleuren sterker dan andere kleuren?
>>
>{: .exercise}