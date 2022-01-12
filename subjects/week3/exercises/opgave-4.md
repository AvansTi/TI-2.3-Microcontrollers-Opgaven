>> ### Opgave 4 - Ultrasonic 2-pin mode
>>
>> - *School*{: .badge .badge-primary }
>>{: .tags }
>>
>> Sluit de ultrasoon afstandsdetector aan, in 2-pin mode.
>>
>>```java
>>public static void main(String[] args) {
>>  BoeBot.setMode(11, PinMode.Input);
>>  BoeBot.setMode(10, PinMode.Output);
>>
>>  System.out.println("Starting....");
>>  while (true) {
>>    BoeBot.digitalWrite(10, true);
>>    BoeBot.wait(1);
>>    BoeBot.digitalWrite(10, false);
>>    int pulse = BoeBot.pulseIn(11, true, 10000);
>>    System.out.println("Pulse: " + pulse);
>>    BoeBot.wait(50);
>>  }
>>}
>>```
>>
>> - **A** Neem het bovenstaande progrmma over, om de lengte van de puls te meten en weer te geven
>> - **B** Sluit een oscilloscoop aan op de signaalpinnen van de detector. Laat een aantal verschillende afbeeldingen van het signaal zien, met verschillende afstanden
>>    - Klopt de gemeten tijd met de tijd van de applicatie?
>>    - Wat is de tijd tussen de uitgezonden puls van de BoeBot en het ontvangen signaal?
>>
>> Als de code het niet doet, meet met de oscilloscoop of de `BoeBot.wait(1)` niet te lang duurt. Dit kun je zien doordat het signaal op pin 10 nog steeds hoog is, als het signaal op pin 11 al laag wordt. Indien dit het geval is, verlaag dan de vertraging tot zo ver nodig
>>{: .tip}
>>
>{: .exercise}