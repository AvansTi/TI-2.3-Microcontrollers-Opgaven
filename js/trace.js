var tracelog = [{
	"stack": [{
		"variables": [{
			"name": "args",
			"type": "java.lang.String[]",
			"value": "instance of java.lang.String[0] (id=103)"
		}],
		"file": "TestTrace.java",
		"method": "main(String[] args)",
		"line": 3
	}],
	"out": ""
}, {
	"stack": [{
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "10"
		}],
		"file": "TestTrace.java",
		"method": "method1(int value)",
		"line": 7
	}, {
		"variables": [{
			"name": "args",
			"type": "java.lang.String[]",
			"value": "instance of java.lang.String[0] (id=103)"
		}],
		"file": "TestTrace.java",
		"method": "main(String[] args)",
		"line": 3
	}],
	"out": ""
}, {
	"stack": [{
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "11"
		}],
		"file": "TestTrace.java",
		"method": "method2(int value)",
		"line": 11
	}, {
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "10"
		}],
		"file": "TestTrace.java",
		"method": "method1(int value)",
		"line": 7
	}, {
		"variables": [{
			"name": "args",
			"type": "java.lang.String[]",
			"value": "instance of java.lang.String[0] (id=103)"
		}],
		"file": "TestTrace.java",
		"method": "main(String[] args)",
		"line": 3
	}],
	"out": ""
}, {
	"stack": [{
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "5"
		}],
		"file": "TestTrace.java",
		"method": "method3(int value)",
		"line": 15
	}, {
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "11"
		}],
		"file": "TestTrace.java",
		"method": "method2(int value)",
		"line": 11
	}, {
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "10"
		}],
		"file": "TestTrace.java",
		"method": "method1(int value)",
		"line": 7
	}, {
		"variables": [{
			"name": "args",
			"type": "java.lang.String[]",
			"value": "instance of java.lang.String[0] (id=103)"
		}],
		"file": "TestTrace.java",
		"method": "main(String[] args)",
		"line": 3
	}],
	"out": ""
}, {
	"stack": [{
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "5"
		}],
		"file": "TestTrace.java",
		"method": "method3(int value)",
		"line": 16
	}, {
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "11"
		}],
		"file": "TestTrace.java",
		"method": "method2(int value)",
		"line": 11
	}, {
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "10"
		}],
		"file": "TestTrace.java",
		"method": "method1(int value)",
		"line": 7
	}, {
		"variables": [{
			"name": "args",
			"type": "java.lang.String[]",
			"value": "instance of java.lang.String[0] (id=103)"
		}],
		"file": "TestTrace.java",
		"method": "main(String[] args)",
		"line": 3
	}],
	"out": "5\r\n"
}, {
	"stack": [{
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "11"
		}],
		"file": "TestTrace.java",
		"method": "method2(int value)",
		"line": 12
	}, {
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "10"
		}],
		"file": "TestTrace.java",
		"method": "method1(int value)",
		"line": 7
	}, {
		"variables": [{
			"name": "args",
			"type": "java.lang.String[]",
			"value": "instance of java.lang.String[0] (id=103)"
		}],
		"file": "TestTrace.java",
		"method": "main(String[] args)",
		"line": 3
	}],
	"out": "5\r\n"
}, {
	"stack": [{
		"variables": [{
			"name": "value",
			"type": "int",
			"value": "10"
		}],
		"file": "TestTrace.java",
		"method": "method1(int value)",
		"line": 8
	}, {
		"variables": [{
			"name": "args",
			"type": "java.lang.String[]",
			"value": "instance of java.lang.String[0] (id=103)"
		}],
		"file": "TestTrace.java",
		"method": "main(String[] args)",
		"line": 3
	}],
	"out": "5\r\n"
}, {
	"stack": [{
		"variables": [{
			"name": "args",
			"type": "java.lang.String[]",
			"value": "instance of java.lang.String[0] (id=103)"
		}],
		"file": "TestTrace.java",
		"method": "main(String[] args)",
		"line": 4
	}],
	"out": "5\r\n"
}];

window.onload = function(){
	$("div.interactive").each(function(index, element)
	{
		var animationFrame = 0;

		$(this).find(".btn").remove();
		var row = $('<div class="row"></div>');

		$(this).wrap(row);
		$(this).addClass("col")
		var line = 1;

		var code = $(this).find("code");

		var el = $(this).find("code")[0].firstChild;
		
		while(el != null)
		{
			$(el).attr("linenr", line);

			if(el.nodeType == 3)
				line += (el.nodeValue.split("\n").length - 1);

			el = el.nextSibling;
		};

		
		var col2 = $(`<div class="col" style="border-radius: 10px; border: 1px solid #181712; padding: 10px; background-color: white; margin-bottom: 16px;"></div>`);
		$(this).after(col2);

		var prev = $(`<input type="button" class="btn btn-primary" value="<">`);
		var step = $(`<input value="0">`);
		var next = $(`<input type="button" class="btn btn-primary" value=">">`);

		var controls = $(`<div style="margin-bottom: 10px;"></div>`);
		controls.append(prev);
		controls.append(step);
		controls.append(next);
		col2.append(controls);

		var stack = $(`<ul class="list-group" style="margin-bottom: 10px;"></ul>`);
		col2.append(stack);	
		var variables = $(`<ul class="list-group"></ul>`);
		col2.append(variables);	

		var console = $(`<div class="language-output"></div>`)
		$(this).parent().after(console);

		var setVars = function(f)
		{
			variables.empty();
			for(var i in f.variables)
			{
				var item = $(`<li class="list-group-item">` + f.variables[i].name + ` -> ` + f.variables[i].value + `</li>`);
				variables.append(item);
			}
		}

		var buildAnimationFrame = function()
		{
			console.text(tracelog[animationFrame].out);
			stack.empty();
			var frame = tracelog[animationFrame].stack;
			for(var i in frame)
			{
				var item = $(`<li class="list-group-item">` + frame[i].method + `</li>`);
				stack.append(item);
			}
			stack.find("li:first").addClass("active");
			setVars(frame[0]);
			code.find(".lineback").children().unwrap();
			code.find(".lineback").remove();
			code.find("[linenr='"+frame[0].line+"']").wrapAll(`<span style="background-color: #eee;" class="lineback"></span>`);
		}
		buildAnimationFrame();

		next.click(function(){
			step.val((1*step.val()) + 1);
			animationFrame = 1*step.val();
			buildAnimationFrame();
		})
		prev.click(function(){
			step.val((1*step.val()) - 1);
			animationFrame = 1*step.val();
			buildAnimationFrame();
		})
	});
};