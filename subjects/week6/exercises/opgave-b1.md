>> ### Opgave B.1: SPI
>>
>> - *School*{: .badge .badge-primary }
>>{: .tags }
>>
>> SPI is een synchroon communicatieprotocol waarmee met periferie gecommuniceerd kan worden. Het is een master-slave configuratie. De master is altijd de baas en neemt het initiatief.
>> Voorbeelden van SPI-toepassingen zijn: MP3 decoder, displays, memory card reader.
>> Als voorbeeld van SPI gebruiken we tijdens het practicum een SPI-device waarnaar je kan schrijven: Een 4-digit LED-display met de chip MAX7219 display driver.
>> Zie de datasheets op Brightspace.
>>
>> Opdracht:
>>
>> **A)** Sluit het 4-digit display aan op poort B van het ontwikkelbord.
>> PB0 = slave select
>> PB1 = SCLK
>> PB2 = MOSI
>> Op github staat [SPI_demo code](https://github.com/AvansTi/TI2.3-Microcontrollers-examples/tree/main/Les-5/Lesvoorbeeld-Les-3/spi_demo) voor het schrijven naar dit display, maar slechts voor de eerste twee digits. Laat het programma draaien en constateer dit.
>>
>> **B)** Vul de code aan met de aanpassingen zoals hieronder aangegeven en test het na elke aanpassing.
>> Geef in je verslag duidelijk aan waar je de code hebt aangepast en waarom en hoe. Geef ook commentaar in de code. Lat ook de uitvoer zien.
>> Bekijk de Datasheet voor de aansturing van de registers.
>> 
>> **b1.**	Stuur alle vier digits aan en laat daar de cijfers 1-2-3-4 verschijnen.
>>
>> **b2.**	Zet het display op maximale intensiteit
>>
>> **C)** Voor het schrijven van een waarde naar het 4-digit display zijn telkens 4 acties nodig:
>> Slave select
>> Schrijven van een adres naar het display
>> Schrijven van een waarde naar de inhoud op dit adres
>> Slave deselect
>>
>> Bijvoorbeeld:
>>>```c
>>> spi_slaveSelect(0);				// Select dispaly chip
>>> spi_write(0x0A);      			// Register 0A: Intensity
>>> spi_write(0x04);    			//  -> Level 4 (in range [1..F])
>>> spi_slaveDeSelect(0);			// Deselect display chip
>>>```
>>
>> Maak een functie die deze vier acties achtereenvolgens uitvoert. Deze functie heeft de volgende header:
>>
>>>```c
>>>// Write a word = address byte + data byte from master to slave
>>>void spi_writeWord ( unsigned char adress, unsigned char data )
>>>```
>>
>{: .exercise}