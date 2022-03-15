>> ### Opgave B.1: Coding ADC
>>
>> - *School*{: .badge .badge-primary }
>>{: .tags }
>>
>> De ATmega128 is voorzien van 8 analoge kanalen voor analoog-digitaal-conversie. Om deze kanalen te kunnen gebruiken moeten er de nodige instellingen gemaakt worden.
>> Bij BIGAVR6 –board zijn er alle kanalen naar buiten uitgevoerd, ga na welke poort dit betreft. Vier kanalen zijn boven het LCD display uitgevoerd en dmv een jumper kan je het kanaal kiezen waarvan de potentiometer een spanning kan lezen.
>> Let er bij UNI-DS bord op dat je een losse potmeter nodig hebt!
>>
>> ![BIG-AVR](exercises/images/adc-bigavr.jpg)
>> ![BIG-AVR](exercises/images/schema-adc.png)
>>
>> Stappenplan voor de free running mode:
>>
>> **A.** Volgens de datasheet moet de ADC input frequentie tussen de 50kHz en 200kHz liggen. De clock hiervoor is afgeleid van de systeemklok. Bij een systeem van 8,000 MHz moet je een deelfactor van tussen 40 en 160 toepassen. Volgens de tabel  bij het *ADCSRA*-register zou je hiervoor deelfactor 64 kunnen gebruiken. Dit geeft een frequentie van 125 kHz.
>>
>> **B.** Stel dus *ADCSRA* in met de juiste deelfactor (prescaler).
>>
>> **C.** Stel de ADC referentiespanning in met register *ADMUX*.  Bijvoorbeeld *Vref =VCC*.
>>
>> **D.** De manier waarop de AD waarden opgeslagen worden. Kies 'hoge byte gevuld’: *ADLAR=1*
>>
>> **E.** Kies in *ADMUX* één van de 8 kanalen.
>>
>> **F.** Stel in *ADCSRA* register de freerunning mode in (wat betekent dit?)
>>
>> **G.** Enable de ADC in *ADCSRA*.
>>
>> **H.** Set startbit voor start ADC.
>>
>> Opmerking: Zorg dat de jumper van kanaalkeuze van de potentiometer niet op hetzelfde kanaal staat van de LM35.
>>
>{: .exercise}