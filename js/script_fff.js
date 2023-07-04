//vom folosi două expresii regulare pentru a valida câmpul numelui și câmpul de e-mail
var filtrare_nume = /^[A-Za-z0-9 ]{3,20}$/;
var filtrare_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//facem functia de validare
function ValidareForm(form)
{
	//tragem valorile fiecarui camp si le stocam in variabile 
    var nume = form.nume.value;
    var email = form.email.value;
    var mesaj = form.mesaj.value;
    //facem un array numit erori pentru a stoca erorile care se produc
    var erori = [];
    
    //daca numele introdus nu se potriveste cu expresia atunci ...
    if (!filtrare_nume.test(nume))
    	{
        	//Adaugam in array-ul erori , eroarea "Numele nu este valid"
        	erori[erori.length] = "Numele nu este valid";
        }
    //daca e-mail-ul introdus nu se potriveste cu expresia atunci ...
    if (!filtrare_email.test(email))
    	{
        	erori[erori.length] = "Trebuie sa introduci o adresa de e-mail valida";
        }    
    //daca campul mesajului este gol atunci ....
    if (mesaj == "")
       {
       		erori[erori.length] = "Trebuie sa ne scrieti un mesaj";
       } 
    //Daca "marimea" array-ului erori este mai mare de 0 atunci ...
    if (erori.length > 0)
    	{
        	//chemam functia raportErori si ii trecem ca parametru array-ul
        	raportErori(erori);
            //deasemenea evaluam toata functia ca fiind falsa
            return false;
        }
        //daca marimea array-ului NU este mai mare decat 0 atunci ...
        return true ;   
}
//facem functia raportErori
function raportErori(erori)
{
	var atentiune = "Ceva ati gresit ...";
    for(var i = 0; i<erori.length; i++)
    	{
        	var numarErori= i + 1;
            atentiune += "\n" + numarErori + ". " + erori[i];
        }
        alert(atentiune);
}