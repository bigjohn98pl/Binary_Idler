function make_div(name){
    name = document.createElement("div") ;
    return name;
}
function del()
{
	var x = document.getElementsByClassName("anime");
	x[0].parentNode.removeChild(x[0]);
}
function number_appear(k){
    var x = event.clientX ,x0 =340;
    var y = event.clientY ,y0 =370;

    var text = Math.floor(Math.random() * 2); 					//llossowa liczba z zakresu 0-1
    var one = document.createTextNode("+"+text); 			//dodanie znaku "+" do zmiennej text

    var number = make_div(number);		                    //tworzenie elementu html
    number.setAttribute("class","anime") 								//ustawienie id elementu dla zmiany wygladu elementu html
    document.body.appendChild(number); 						//dołączenie elementu number do elementu body
    number.appendChild(one); 										//wstawienie elementu one do number

    if (k == 0)
    {
        number.style.left = x - 40  + 'px';
        number.style.top = y  + 'px';
        setTimeout(del, 750)
        return text;
    }
    else if (k == 1)
    {
        number.style.left = x0  + 'px';
        number.style.top = y0  + 'px';
        setTimeout(del, 750)
        return text;
    }
}
