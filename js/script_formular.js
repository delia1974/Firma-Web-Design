let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("Tastează adresa de email:");
  let phone = document.getElementById("Tastează nr. de telefon:");
  let firstname = document.getElementById("Tastează numele:");
  let lastname = document.getElementById("Tastează prenumele:");
  let date = document.getElementById("Introdu data:");
  let code = document.getElementById("Tastează codul promoțional:");


  function formvalid()
  {
    var a=document.forms["myform"]["firstname"].value;
    if (a.length<3)
      {
        alert("Write your name correctly");
        return false;
      }
    var a=document.forms["myform"]["firstname"].value;
    if(a==null||a=="")
      {
        alert("please fill the feald");
        return false;
      }
    
    var b=document.forms["myform"]["lastname"].value;
    if (b.length<2)
      {
        alert("Write your last name correctly");
        return false;
      }
    var b=document.forms["myform"]["lastname"].value;
    if(b==null||b=="")
      {
        alert("please fill the feald");
        return false;
      }
    var c=document.forms["myform"]["email"].value;
    if(c==null||c=="")
      {
        alert("please fill the feald");
        return false;
      }
    var c=document.forms["myform"]["email"].value;
    var at= c.indexOf("@");
    var dot=c.lastIndexOf(".");
    var dot2=c.indexOf(".");
    if(at<1||dot<2||dot+2>=c.length||at+2>=dot2||at+3>=dot2)
      {
        alert("Write your email correctly");
        return false;
      }
    var d=document.forms["myform"]["phone"].value;
    if(d==null||d=="")
      {
        alert("please fill the feald");
        return false;
      }
    var d=document.forms["myform"]["phone"].value;
    if(d.length>11)
      {
        alert("Write your phone number correctly");
        return false;
      }
  }

<script type="text/javascript"><!--// verifica buton checkbox - marplo.net

function checkButons(frm) {
var re = false;           // folosita pt a determina când un buton e bifat
var err = '';             // reține erorile

var alege = frm.alege;          // contine un array cu toate butoanele radio "alege"

// crează un Array în  format JSon cu butoanele checkbox. Notatia JSON (JavaScript Object Notation) este un format simplu de date folosit pentru schimbul de informatii.
var servicii = [frm.check1, frm.check2];

// traverseaza array-ul
// daca unul e bifat, seteaza "re" true, și oprește parcurgerea cu "break"
for(var i=0; i<alege.length; i++) {
  if(alege[i].checked == true) {
    re = true;
    break;
  }
}

const s = document.getElementById("s");
const options = ["zero", "one", "two"];

options.forEach((element, key) => {
  if (element === "zero") {
    s[key] = new Option(element, s.options.length, false, false);
  }
  if (element === "one") {
    s[key] = new Option(element, s.options.length, true, false); // Will add the "selected" attribute
  }
  if (element === "two") {
    s[key] = new Option(element, s.options.length, false, true); // Just will be selected in "view"
  }
});


// face iar "re" false si parcurge array-ul cu checkbox
// daca unul e bifat, seteaza "re" true, si opreste parcurgerea cu "break"
re = false
for(var i=0; i<bifa.length; i++) {
  if(bifa[i].checked == true) {
    re = true;
    break;
  }
}

// dacă "re" e false înseamna că nici un checkbox nu e bifat, adaugă eroare în "err" 
if (re == false) err += '\n - Trebuie să alegeți cel puțin un checkbox';

// daca "err" nu e gol, afișează erorile și returnează False, oprind trimiterea formularului
if(err != "") {
  alert(err);
  return false;
}
else return re;
}
-->
</script>

