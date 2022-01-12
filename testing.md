# General stuff

- Tests annoteren met @Test
- Klassen annoteren met @Points("2-10")
- @Points is een space-seperated lijst met te behalen punten voor deze opgaven... "week1 1" is dus punt "week1" en punt "1"
- @Rule wordt uitgevoerd voordat tests uitgevoerd worden


# Tests

## Running main method and catching std output

```java
import org.junit.Test;
import org.junit.Rule;

import static org.junit.Assert.*;
import fi.helsinki.cs.tmc.edutestutils.Points;
import fi.helsinki.cs.tmc.edutestutils.MockStdio;

@Points("1")
public class NameTest {
    @Rule
    public MockStdio io = new MockStdio();

    @Test
    public void test() {
        Name.main(new String[0]);
        String out = io.getSysOut();
        assertTrue("You did not print anything!",out.length()>0);
    }
}
```

## Running method with std input

```java
    ReflectionUtils.newInstanceOfClass(PositiveValue.class);
    io.setSysIn("100\n200\n");
    PositiveValue.main(new String[0]);

    String out = io.getSysOut();
```

## Assertions

```java
    assertTrue("Message", condition);
    assertFalse("Message", condition);
    assertEquals(object1, object2, condition);
    assertNotEquals(object1, object2, condition);
    //....
```


## Recursion

```java
// one class needs to have a main() method
public class HelloWorld
{
  // arguments are passed using the text field below this editor
  public static void main(String[] args)
  {
    TestRecurse r = new TestRecurse();
    
    r.recurse(10);
    System.out.println("Recursion: " + r.c);
  }
}

public class TestRecurse extends BadRecurse
{
  public int c = 0;
  @Override
 public void recurse(int count)
 {
   c++;
   super.recurse(count);
 }
}

// you can add other public classes to this editor in any order
public class Recurse
{
  public void recurse(int count)
  {
    if(count < 0)
      return;
    System.out.println(count);
    recurse(count-1);
  }
}

// you can add other public classes to this editor in any order
public class BadRecurse
{
  public void recurse(int count)
  {
    for(int i = 10; i >= 0; i--)
      System.out.println(i);
  }
}
```