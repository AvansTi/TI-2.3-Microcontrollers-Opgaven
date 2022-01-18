>> ### Opgave B.2: I/O interrupts (intermediate)
>>
>> - *School*{: .badge .badge-primary }
>>{: .tags }
>>
>> Implementeer een looplicht applicatie waarbij de `main()` bestaat uit een initialisatie gedeelte met daarna een lege `while(true)` loop. In `ISR_INT1` en `ISR_INT2` maakt het looplicht steeds 1 stap. Het looplicht wordt dus gestuurd vanuit de ISR’s, niet vanuit de `main()`.
>>
>{: .exercise}