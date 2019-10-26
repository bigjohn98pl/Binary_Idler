var BIN_COIN = localStorage.getItem("save_BIN_COIN");
var CLICKING = localStorage.getItem("save_CLICKING");
var ZEROS = localStorage.getItem("save_ZEROS");
var ONES = localStorage.getItem("save_ONES");
window.onload = function () {

	document.getElementById("number0").innerHTML = localStorage.getItem("save_number0");
	document.getElementById("price0").innerHTML = localStorage.getItem("save_price0");
	if(BIN_COIN == null)
	{
		alert("Save file error");
		BIN_COIN = 0;
		alert("Save file error2");
		document.getElementById("number0").innerHTML = 0;
		alert("Save file error3");
		document.getElementById("price0").innerHTML = 10;
		ZEROS = 0;
		ONES = 0;
		CLICKING = 0;
		document.getElementsByClassName("counter")[3].innerHTML =0;
		document.getElementsByClassName("counter")[4].innerHTML =0;
		document.getElementsByClassName("counter")[5].innerHTML =0;
	}

	document.getElementById("click_catcher").addEventListener("mouseup", buttonup);
	document.getElementById("click_catcher").addEventListener("mousedown", buttonpress);
	document.getElementById("container").addEventListener("mouseover", buttonup);
	
	document.getElementById("converter_b").addEventListener("click", convert)

	document.getElementById("pressenter").addEventListener("keydown", buttonpress);
	document.getElementById("pressenter").addEventListener("keyup", buttonup);
	var input = document.getElementById("pressenter");
    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("sub").click();
      }
    });

	//document.getElementById("item0").addEventListener("click", item());
}
		function naliczaj(k)
		{
			text = number_appear(k);
            CLICKING++;
			if (text == "0")
			{
				ZEROS++;
			}
			else if (text =="1")
			{
				ONES++;
			}
		}
		function naliczaj1()
        		{
        			//wartosci x i y w momecie klikniecia
        			var x = 370;
                    var y = 470;

        			var text = Math.floor(Math.random() * 2); 					//llossowa liczba z zakresu 0-1
        			var one = document.createTextNode("+"+text); 			//dodanie znaku "+" do zmiennej text

        			var number = document.createElement("div") 			//tworzenie elementu html
        			number.setAttribute("class","anime") 								//ustawienie id elementu dla zmiany wygladu elementu html
        			document.body.appendChild(number); 						//dołączenie elementu number do elementu body
        			number.appendChild(one); 										//wstawienie elementu one do number


        			number.style.left = x - 40  + 'px';
        			number.style.top = y  + 'px';
        			setTimeout(del, 750)

        			if (text == "0")
        			{
        				ZEROS++;
        			}
        			else if (text =="1")
        			{
        				ONES++;
        			}

        		}
		
		function convert()
		{
			var BC = document.getElementById("converter2").innerHTML;
			ONES = +ONES - +BC;
			ZEROS = +ZEROS - +BC;
			BIN_COIN = +BIN_COIN + +BC;
			localStorage.setItem("save_ZEROS", ZEROS);
			localStorage.setItem("save_ONES", ONES);
			
		}
		
		function show()
		{
		   document.getElementsByClassName("counter")[1].innerHTML= Math.round(BIN_COIN)+" Binnary Coins";
		   document.getElementsByClassName("counter")[3].innerHTML= "zeros:"+ZEROS;
		   document.getElementsByClassName("counter")[4].innerHTML= "ones:"+ONES;
		   document.getElementsByClassName("counter")[5].innerHTML= "cliks:"+CLICKING;
			if (ZEROS < ONES)
			{
				document.getElementById("converter2").innerHTML =  ZEROS;
			}
			else
			{
				document.getElementById("converter2").innerHTML =  ONES;
			}
		}
		setInterval(show, 1);

		function save()
		{
			localStorage.setItem("save_BIN_COIN", BIN_COIN);
			localStorage.setItem("save_ZEROS", ZEROS);
			localStorage.setItem("save_ONES", ONES);
			localStorage.setItem("save_CLICKING", CLICKING);

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
				console.log("o ty kurde")
			}
			else
			console.log("achievement")
		}

		function stats()
		{
	        alert("Save file error");
    		BIN_COIN = 0;
    		alert("Save file error2");
    		document.getElementById("number0").innerHTML = 0;
    		alert("Save file error3");
    		document.getElementById("price0").innerHTML = 10;
    		ZEROS = 0;
    		ONES = 0;
    		CLICKING = 0;
    		document.getElementsByClassName("counter")[3].innerHTML =0;
    		document.getElementsByClassName("counter")[4].innerHTML =0;
    		document.getElementsByClassName("counter")[5].innerHTML =0;
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
			if  (BIN_COIN <= 0 || BIN_COIN < prc)
			{
				BIN_COIN = BIN_COIN;
				amount = +amount + +0;
				prc = prc;
			}
			else
			{
				
				BIN_COIN = BIN_COIN - prc;
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

			BIN_COIN = +BIN_COIN + +((amo_0*0.1)+(amo_1*0.2)+(amo_2*0.4)+(amo_3*1.2));
		}
		setInterval(work, 1000);
		
		function upgrade()
		{
			alert("lel");
		}




