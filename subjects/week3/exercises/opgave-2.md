>> ### Opgave 2 - IR basis programma
>>
>> Neem het onderstaande programma over:
>> ```java
>> public static void main(String[] args) {
>>    BoeBot.setMode(0, PinMode.Input);
>>    BoeBot.setMode(9, PinMode.Output);
>>    System.out.println("Listening....");
>>
>>    while (true) {
>>      int pulseLen = BoeBot.pulseIn(0, false, 6000);
>>      if (pulseLen > 2000) {
>>        int lengths[] = new int[12];
>>        for (int i = 0; i < 12; i++) {
>>          lengths[i] = BoeBot.pulseIn(0, false, 20000);
>>        }
>>        for (int length : lengths) {
>>          System.out.print(length + ", ");
>>        }
>>        System.out.println("");
>>      }       
>>      BoeBot.wait(10);
>>  }
>>}
>> ```
>>
>> - **A** Probeer het programma, en kijk wat voor resultaten er komen met verschillende knoppen. Zie je ook meetfouten?
>> - **B** Schrijf nu een methode om de array met meetwaarden van de afstandsbediening om te zetten naar *1* getal. Als het signaal niet valide is, moet de methode *-1* teruggeven
>>
>> De code om de pulsjes uit te lezen (de eerst forloop in de voorbeeldcode) is tijd-kritisch. Dit betekent dat deze code zo snel mogelijk, zonder interrupties uitgevoerd moet worden, omdat anders een pulsje gemist kan worden. Als je hier System.out.println() regels inzet, zal deze niet werken. Daarom dat deze alleen direct in een array schrijft
>>{: .tip}
>>
>{: .exercise}