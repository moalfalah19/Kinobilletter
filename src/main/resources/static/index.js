// Array to store purchased tickets
let personliste = [];

// Function triggered when the "Kjøp billett" button is clicked
function kjop() {
    // Clear previous error messages
    document.getElementById("err0").innerHTML = "";
    document.getElementById("err1").innerHTML = "";
    document.getElementById("err2").innerHTML = "";
    document.getElementById("err3").innerHTML = "";
    document.getElementById("err4").innerHTML = "";
    document.getElementById("err5").innerHTML = "";

    let ut = "";
    // Create a ticket object from the user input
    let billett = {
        film: document.getElementById("velg film her").value,
        antall: document.getElementById("antall").value,
        fornavn: document.getElementById("navn").value,
        etternavn: document.getElementById("navn1").value,
        telefonnr: document.getElementById("tlnr").value,
        epost: document.getElementById("email").value,
    }

    // Display a table header
    ut += "<table><tr><th>Film</th><th>Antall</th><th>Fornavn" +
        "</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";

    // Display the user's ticket information
    document.getElementById("uttt").innerHTML = ut;

    // Check if any required fields are empty
    if (billett.film === "" || billett.antall === "" || billett.fornavn === "" ||
        billett.etternavn === "" || billett.telefonnr === "" || billett.epost === "") {

        // Display specific error messages for each field
        if (billett.film === "") {
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
        // Add the ticket to the array and display all tickets
        personliste.push(billett);
        for (let p of personliste) {
            ut += "<tr>";
            ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fornavn + "</td><td>" + p.etternavn + "</td><td>" + p.telefonnr + "</td><td>" + p.epost + "</td>"
            ut += "</tr>";
        }
        ut += "</table>"
        document.getElementById("uttt").innerHTML = ut;

        // Clear input fields after successful purchase
        document.getElementById("err0").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("navn").value = "";
        document.getElementById("navn1").value = "";
        document.getElementById("tlnr").value = "";
        document.getElementById("email").value = "";
    }
}

// Function triggered when the "Slett alle billettene" button is clicked
function nullstil() {
    // Clear the array and input fields
    personliste = [];
    document.getElementById("velg film her").value = "";
    document.getElementById("navn").value = "";
    document.getElementById("navn1").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("tlnr").value = "";
    document.getElementById("email").value = "";

    // Display an empty table
    let ut = "<table><tr>" + "<th>Fornavn</th><th>Etternavn</th><th>Telefonnr" +
        "</th><th>epost</th><th>Antall</th><th>film</th>" + "</tr>";
    ut += "</table>";
    document.getElementById("uttt").innerHTML = ut;
}
