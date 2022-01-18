>> ### Keuze B.7a Coding Finite State Machines (experienced) [Kan op simulator] 
>>
>> - *School*{: .badge .badge-primary }
>>{: .tags }
>>
>> Implementeer onderstaande ‘eindige toestandsmachine’ (eng: finite state machine of fsm) . Een fsm is de basis van bijna elke embedded applicatie. Koffiemachines, televisies, pacemakers, ABS computers, alarmsystemen enz. zijn voorbeelden van applicaties waar de main-loop vaak bestaat uit een (ingewikkelde) eindige toestandsmachine.
>>
>> Een fsm machine kan uitgroeien tot iets ingewikkelds en het is van belang dat software engineers (jij!) grip hebben op een correcte werking. Denk ook aan uitbreidbaarheid en onderhoudbaarheid. Interessant is ook het artikel op Blackboard over het aantal regels code in alledaagse apparaten.
>> 
>> Hoe zou je een fsm implementeren? Met een hele uitgebreide switch/case of if/then loop? Probeer het maar!
>>
>> ![Seriele schakeling](exercises/images/exercise_b7a.jpg)
>>
>> (In een volgende bijeenkomst zal ik laten zien hoe je een fsm vanuit een tabel stuurt. De fsm is dan goed onderhoudbaar en uitbreidbaar. Tevens is de code (logica) goed gescheiden van applicatie specifiek gedrag. Als je al een sneak preview wilt, kijk dan in de repository voor een mogelijke oplossing. Dit type oplossingen maakt gebruik van functiepointers en die zijn nog niet uitgelegd in de C lessen. Functiepointers zijn de basis voor het begrip interface uit de OO-programmeertalen. Interfaces kun je run-time binden aan code (business logica) en dat is precies wat een fsm doet) 
>>
>{: .exercise}