var click = localStorage.getItem("save_click");
var zeros = localStorage.getItem("save_zeros");
var ones = localStorage.getItem("save_ones");
window.onload = function () {
	
	click = localStorage.getItem("save_click");
	document.getElementById("number0").innerHTML = localStorage.getItem("save_number0");
	document.getElementById("price0").innerHTML = localStorage.getItem("save_price0");
	if(click == null)
	{
		alert("Save file error");
		click = 0;
		alert("Save file error2");
		document.getElementById("number0").innerHTML = 0;
		alert("Save file error3");
		document.getElementById("price0").innerHTML = 10;
		zeros = 0;
		ones = 0;
		document.getElementById("counter_ones").innerHTML =0;
		document.getElementById("counter_zeros").innerHTML = 0;
	}
	
	document.getElementById("click_catcher").addEventListener("click", naliczaj);
	document.getElementById("click_catcher").addEventListener("contextmenu", naliczaj);

	document.getElementById("click_catcher").addEventListener("mouseup", buttonup);
	document.getElementById("click_catcher").addEventListener("mousedown", buttonpress);
	document.getElementById("container").addEventListener("mouseover", buttonup);
	
	document.getElementById("converter_b").addEventListener("click", convert)

	document.getElementById("pressenter").addEventListener("keydown", buttonpress);
	document.getElementById("pressenter").addEventListener("keyup", buttonup);
	document.getElementById("pressenter").addEventListener("input", naliczaj);

	//document.getElementById("item0").addEventListener("click", item());
}

		function naliczaj()
		{
			//wartosci x i y w momecie klikniecia
			var x = event.clientX;
			var y = event.clientY;
			
			var text = Math.floor(Math.random() * 2); 					//llossowa liczba z zakresu 0-1
			var one = document.createTextNode("+"+text); 			//dodanie znaku "+" do zmiennej text
			
			var number = document.createElement("div") 			//tworzenie elementu html
			number.setAttribute("id","anime") 								//ustawienie id elementu dla zmiany wygladu elementu html
			document.body.appendChild(number); 						//dołączenie elementu number do elementu body 
			number.appendChild(one); 										//wstawienie elementu one do number
			

			number.style.left = x //-30 + Math.floor(Math.random() * 30)-15 + 'px';
			number.style.top = y //-20 + Math.floor(Math.random() * 30)-15 + 'px';
			setTimeout(del, 750)
			
			if (text == "0")
			{
				zeros++;
			}
			else if (text =="1")
			{
				ones++;
			}
		
		}
		
		function convert()
		{
			var BC = document.getElementById("converter3").innerHTML;
			ones = +ones - +BC;
			zeros = +zeros - +BC;
			click = +click + +BC;
			localStorage.setItem("save_zeros", zeros);
			localStorage.setItem("save_ones", ones);
			
		}
		
		function del()
		{
			var x = document.getElementById("anime");
			x.parentNode.removeChild(x);
		}
		
		function show()
		{
		   document.getElementById("counter2").innerHTML=click.toFixed()+" Binnary Coins";
		   document.getElementById("counter_zeros").innerHTML= "zeros<br><br> "+zeros;
		   document.getElementById("counter_ones").innerHTML= "ones<br><br> "+ones;
			if (zeros < ones)
			{
				document.getElementById("converter3").innerHTML = zeros;
			}
			else
			{
				document.getElementById("converter3").innerHTML = ones;
			}
		}
		setInterval(show, 1);

		function save()
		{
			localStorage.setItem("save_click", click);
			localStorage.setItem("save_zeros", zeros);
			localStorage.setItem("save_ones", ones);
			
			number0 = document.getElementById("number0").innerHTML;
			localStorage.setItem("save_number0", number0);
			
			price0 = document.getElementById("price0").innerHTML;
			localStorage.setItem("save_price0", price0);
		}
		setInterval(save, 60000);
		function opctions()
		{
			//alert("opctions")
		}

		function achievement()
		{
			var input = document.getElementById("pressenter").value;
			if(input == "dupa")
			{
				alert("o ty kurde")
			}
			else
			alert("achievement")
		}

		function stats()
		{
			alert("stats")
			localStorage.clear();
		}

		function buttonpress()
		{
			var button = document.getElementById("button");
			button.classList.add("button_down");
			button.classList.remove("button_up");
		}
		function buttonup()
		{
			var button = document.getElementById("button");
			button.classList.add("button_up");
			button.classList.remove("button_down");
		}
		function item(id)
		{
			var prc = document.getElementById('price'+id).innerHTML ;
			var amount = document.getElementById('number'+id).innerHTML ;
			if  (click <= 0 || click < prc)
			{
				click = click;
				amount = +amount + +0;
				prc = prc;
			}
			else
			{
				
				click = click - prc;
				prc= +prc + Math.round(0.2*prc);
				amount++;
			}
			
			document.getElementById("number"+id).innerHTML = amount;
			document.getElementById("price"+id).innerHTML =prc;
			}
		//var number = document.getElementById('number'+id).innerHTML
		function work()
		{
			var amo_0 = document.getElementById("number0").innerHTML ;
			var amo_1 = document.getElementById("number1").innerHTML ;
			var amo_2 = document.getElementById("number2").innerHTML ;
			var amo_3 = document.getElementById("number3").innerHTML ;

			click = +click + +((amo_0*0.1)+(amo_1*0.2)+(amo_2*0.4)+(amo_3*1.2));
		}
		setInterval(work, 1);
		
		function upgrade()
		{
			alert("lel");
		}




