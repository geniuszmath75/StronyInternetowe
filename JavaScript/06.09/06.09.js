// Tworzenie ciasteczka

// document.cookie = "username=Adam; expires=Mon, 06 Sep 2021 13:00:00 UTC;";
// var x = document.cookie;
// document.write(x);

// Ustawianie ciasteczek

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + (exdays * 1000));
//   let expires = "expires=" + d.toGMTString();
//   document.cookie = cname + "=" + cvalue + "; " + expires + ";path/";
// }

// Odczytywanie ciasteczek

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i <ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// Licznik ciasteczek
// function checkCookie() {
//   let licznik = getCookie("licznik");
//   if (licznik != 0) {
//     alert("Witaj " + licznik + " raz")
//     setCookie("licznik ", ++licznik, 30)
//   } else {
//     alert("Witaj 1 raz");
//     licznik += 2;
//     setCookie("licznik", licznik, 30);
//   }
// }

// Walidacja formularza

function waliduj() {
	let imie = document.getElementById("imie").value;
	console.log(imie);
	let nazwisko = document.getElementById("nazwisko").value;
	console.log(nazwisko);
	let data = document.getElementById("data").value;
	console.log(data);
	const wzor1 = /^[A-Z]{1}[A-Za-z]{2,}$/;
	const wzor2 = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[-](0[1-9]|1[1-2])[-]([1-9]{1}[0-9]{1,3})$/;
	const wynik1 = wzor1.test(imie);
	const wynik2 = wzor1.test(nazwisko);
	const wynik3 = wzor2.test(data);

	if (wynik1 === false || wynik2 === false || wynik3 === false) 
	{
		document.getElementById("tekst").style.display = "block";
		document.getElementById("tekst2").style.display = "none";
	}
	else
	{
		document.getElementById("tekst2").style.display = "block";
		document.getElementById("tekst").style.display = "none";
	}
}

// Walidacja daty(znak po znaku)

function waliduj2() {
	let dane = document.getElementById("data2");
	let text = document.getElementById("text");
	let text2 = document.getElementById("text2");
	let data2 = dane.value;
	console.log(data2);

	const wzor = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[-](0[1-9]|1[1-2])[-]([1-9]{1}[0-9]{0,3})$/;
	const wynik = wzor.test(data2);

	if(wynik === false)
	{
		dane.style.backgroundColor = "rgb(255, 61, 61)";
		text.style.display = "block";
		text2.style.display = "none";
	}else
	{
		dane.style.backgroundColor = "rgb(50, 189, 68)";
		text2.style.display = "block";
		text.style.display = "none";
	}

}
// Zdarzenia myszy
let klik = document.getElementById("mysz");
function zmien() {
    klik.style.backgroundColor = "green";
}

klik.onclick = zmien;
