>> ### Opgave B.4: ADC temperatuur
>>
>> - *School*{: .badge .badge-primary }
>>{: .tags }
>>
>> LM35 is een temperatuurgevoelige sensor met een lineaire spanningsafgifte van 10mV/°C. Als de deze LM35 aansluit op een ADC kan je de temperatuur aflezen. 
>>
>> Gebruik het easy protoboard. Dit is de adapter van 10 pins IDC naar breadboard. Bouw de schakeling op het breadboard. De sensor is rechtstreeks aan te sluiten op VCC(+5V),  ground (0V) en de ADC-ingang. Zie het schema hieronder en ook de foto die op Brightboard staat.
>> LM35 geeft een spanning af van 10mV per °C. Bij een temperatuur van bijvoorbeeld 35 °C  geeft deze sensor een spanning af van 350mV. 
>> Stel de ADC zo in dat voor de referentiespanning de interne spanning van 2,56 V wordt gebruikt.  Als je dan de hoogste 8 bits van de ADC gebruikt, dan komt 1 bit precies overeen met 10 mV = 1 °C.
>>
>> - Laat de waarde van ADCH op de LED’s van een poort zien.
>> - Laat de waarde van temperatuur op het LCD-display verschijnen.
>>
>> ![BIG-AVR](exercises/images/lm35a.png)
>> ![BIG-AVR](exercises/images/lm35b.png)
>>
>{: .exercise}