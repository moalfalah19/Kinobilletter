let personliste = [];

function kjop() {

    document.getElementById("err0").innerHTML = "";
    document.getElementById("err1").innerHTML = "";
    document.getElementById("err2").innerHTML = "";
    document.getElementById("err3").innerHTML = "";
    document.getElementById("err4").innerHTML = "";
    document.getElementById("err5").innerHTML = "";

    let ut = "";
    let billett = {
        film: document.getElementById("velg film her").value,
        antall: document.getElementById("antall").value,
        fornavn: document.getElementById("navn").value,
        etternavn: document.getElementById("navn1").value,
        telefonnr: document.getElementById("tlnr").value,
        epost: document.getElementById("email").value,
    }
    ut += "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";
    document.getElementById("uttt").innerHTML = ut;

    if (billett.film === ""||billett.antall === "" || billett.fornavn === "" || billett.etternavn === "" || billett.telefonnr === "" || billett.epost === "") {

        if (billett.film === ""){
            document.getElementById("err0").innerHTML = "Velg en film";
        }
        if (billett.antall === "") {
            document.getElementById("err1").innerHTML = "Skriv noe inn i antall";
        }
        if (billett.fornavn === "") {
            document.getElementById("err2").innerHTML = "Skriv noe inn i fornavnet";
        }
        if (billett.etternavn === "") {
            document.getElementById("err3").innerHTML = "Skriv noe inn i etternavnet";
        }
        if (billett.telefonnr === "") {
            document.getElementById("err5").innerHTML = "Skriv noe inn i telefonnr";
        }
        if (billett.epost === "") {
            document.getElementById("err4").innerHTML = "Skriv noe inn i epost";
        }
    } else {


        personliste.push(billett);
        for (let p of personliste) {
            ut += "<tr>";
            ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fornavn + "</td><td>" + p.etternavn + "</td><td>" + p.telefonnr + "</td><td>" + p.epost + "</td>"
            ut += "</tr>";
        }
        ut += "</table>"
        document.getElementById("uttt").innerHTML = ut;

        document.getElementById("err0").value= "";
        document.getElementById("antall").value = "";
        document.getElementById("navn").value = "";
        document.getElementById("navn1").value = "";
        document.getElementById("tlnr").value = "";
        document.getElementById("email").value = "";
    }

}


function nullstil() {
    personliste = [];
    personliste.film = document.getElementById("velg film her").value = "";
    personliste.navn = document.getElementById("navn").value = "";
    personliste.etternavn = document.getElementById("navn1").value = "";
    personliste.antall = document.getElementById("antall").value = "";
    personliste.telefonnr = document.getElementById("tlnr").value = "";
    personliste.epost = document.getElementById("email").value = "";

    let ut = "<table><tr>" + "<th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>epost</th><th>Antall</th><th>film</th>" + "</tr>";


    ut += "</table>";
    document.getElementById("uttt").innerHTML = ut;

}









