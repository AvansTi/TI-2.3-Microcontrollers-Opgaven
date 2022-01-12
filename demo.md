# Demo van dingen

## Standaard

* eerste
* tweede
* derde

Normaal, *italic*, **bold**, ***bolditalic***, ~~strikethrough~~

[link](https://www.avans.nl)

[documentatie over markdown in kramdown](https://kramdown.gettalong.org/quickref.html#block-attributes) (bijvoorbeeld over classes, md in html elementen etc)


## Code

```java
System.out.println("Hello World");
```

and we can have code linked with an online IDE?

```java
System.out.println("Hello World, try me");
```
{: .tryme}


```java
public class TestTrace {
    public static void main(String[] args) {
        method1(10);
    }

    public static void method1(int value) {
        method2(value+1);
    }

    public static void method2(int value) {
        method3(value/2);
    }

    public static void method3(int value) {
        System.out.println(value);
    }
}
```
{: .interactive #voorbeeldDemo }

## Output

```output
Hello World
```

```output
This will have a ~~red~~ text to indicate this was typed by the user
```

## Youtube

<iframe width="560" height="315" src="https://www.youtube.com/embed/ixJCo0cyAuA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## MathJax

[documentatie](https://www.mathjax.org/#docs), zet mathjax tussen dubbele $'s

When $$a \ne 0$$, there are two solutions to $$(ax^2 + bx + c = 0)$$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

## Tips

You can add a small tip inbetween

> You can do cool stuff with java
{: .tip}

> You can do cool stuff with java. Even if this is a longer text like Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats eat too much then proceed to regurgitate all over living room carpet while humans eat dinner chase imaginary bugs, or get video posted to internet for chasing red dot so kitty kitty or annoy kitten brother with poking but licks your face. Make plans to dominate world and then take a nap eat an easter feather as if it were a bird then burp victoriously, but tender. Jump around on couch, meow constantly until given food, stare at the wall, play with food and get confused by dust. Eat plants, meow, and throw up because i ate plants kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff or toilet paper attack claws fluff everywhere meow miao french ciao litterbox yet hide at bottom of staircase to trip human. Try to jump onto window and fall while scratching at wall mewl for food at 4am so it's 3am, time to create some chaos yet somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock or litter kitter kitty litty little kitten big roar roar feed me proudly present butt to human or hit you unexpectedly. 
{: .tip}

<!-- Modal -->
<div class="modal fade" id="codePopup" tabindex="-1" role="dialog" aria-labelledby="codePopupTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="codePopupTitle">Code Example</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm"><div id="editor"></div></div>
                <div class="col-sm"><div id="codeOutput"></div></div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Compile &amp; Run</button>
      </div>
    </div>
  </div>
</div>

<script src="js/ace/ace.js"></script>
<script src="js/ace/ext-language_tools.js"></script>
<script>
window.onload = function()
{
    //add tryme button
    $("div.tryme").each(function(index, element)
    {
        var text = $(this).find("code").text();
        var btn = $('<a class="btn btn-primary" href="#" style="float: right; margin-top: -10px; margin-right: -10px;">Try Me</a>');
        $(this).prepend(btn);
        btn.click(function()
        {
            $('#codePopup').modal({})
             ace.require("ace/ext/language_tools");
             var editor = ace.edit("editor");
            editor.session.setMode("ace/mode/java");
            editor.setShowPrintMargin(false);
            editor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: false
            });
        
            if(text.indexOf("public class") == -1)
            {
                text = "public class Application\n\tpublic static void main(String[] args) {\n" + text.trim() + "\n\t}\n}";
            }
            editor.setValue(text);
            editor.gotoLine(1);
        });
    });

}


</script>
<style>
#editor {
    width: 100%;
    height: 400px;
}

#codeOutput {
    background-color: #181712;
    color: white;
    width: 100%;
    height: 100%;
}
.modal-lg {
    width: 95%;
    max-width: none;
    min-height: none;
}
</style>