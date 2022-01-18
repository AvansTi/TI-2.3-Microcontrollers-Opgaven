>> ### Keuze B.7b: I/O smart control, tri-state (experienced)
>>
>> Ondanks het grote aantal I/O poorten van de AtMega128 (met beperkingen en vaak dubbele functies) is er soms/vaak behoefte aan een (veel) groter aantal I/O poorten. Bijvoorbeeld bij het aansturen van matrix displays en/of het aansturen van de 60 ‘seconden leds’ in klok applicaties.
>>
>> Onderstaande schakeling laat zien hoe je 6 LEDs kunt aansturen met 3 I/O pinnen (de pinnen Pin 1 t/m Pin 3). Deze manier van aansluiten staat ook bekend onder de naam charlieplexing (1995, Charlie Allen). Charlieplexing maakt het bijvoorbeeld mogelijk om 90 LEDs aan te sturen met slechts 10 I/O pinnen!
>>
>> ![Seriele schakeling](exercises/images/exercise_b7b.jpg)
>>
>> Maak in C een functie die LED1 t/m LED6 individueel kan aansturen. De functie heeft als signatuur:
>> `void setCharliePlexingLed(int lednr) { }`
>> 
>> Voordat je de functie kunt implementeren moet je het principe van charlieplexing begrijpen. Voor meer informatie over dit onderwerp: [https://en.wikipedia.org/wiki/Charlieplexing](https://en.wikipedia.org/wiki/Charlieplexing). Zonder bespreking van de noodzakelijke elektrische voorwaarden werkt het ongeveer als volgt:
>>
>> Om alleen LED1 aan te sturen moet Pin 2 laag (‘0’ of 0 Volt of GND) zijn, Pin 1 hoog (‘1’ of 5V of Vcc) en Pin 3 mag ‘niet meedoen’. Waarom niet? Het ‘niet meedoen’ betekent dat Pin 3 geen stroom mag leveren (to source) of opnemen (to sink).
>>
>> Dit kun je bewerkstellingen door Pin 3 als input te schakelen (tri-state). Pin 3 wordt dan ‘hoog-impedant of hoog-ohmig’ en kan dan geen stroom sink’en of source’en. Denk hier maar even over na!
>>
>> (In bovenstaand schema is de aanname gemaakt dat een LED niet oplicht als er meerdere in serie staan, de drempelspanning per LED is dan te laag. Zie ook de Wikipedia pagina)
>> 
>> Maar onderstaande tabel af:
>>
>>|      | Pin 1 | Pin 2     | Pin 3     |
>>|------|-------|-----------|-----------|
>>| LED1 |       | Laag      | Tri-state |
>>| LED2 | Laag  |           | Tri-state |
>>| LED3 |       |           |           |
>>| LED4 |       |           |           |
>>| LED5 | Laag  | Tri-state |           |
>>| LED6 |       |           |           |
>>
>> Implementeer nu de gevraagde functie. Gebruik een if-then of switch-case functie om de gewenste LED te selecteren. Bouw de schakeling op een prototype (gaatjes) board en sluit deze aan op de PORTD header van het BIGAVR/ UNI-DS6 board. Test de gemaakte functie door bijvoorbeeld een looplicht te implementeren.
>>
>{: .exercise}