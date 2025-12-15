const form = document.getElementById("kviz");

form.addEventListener("submit", function (e) {
    e.preventDefault()

    for (let i = 1; i <= 11; i++) {
        if (!form.querySelector(`input[name="otazka${i}"]:checked`)) {
            alert(`Chybi odpoved u otazecky #${i}\nnechtelo se mi delat pop up...`);
            return;
        }
    }

    checkAnswers();
});

function checkAnswers() {
    const form = document.querySelector("form");
    const data = new FormData(form);
    let output = "";

    for (const entry of data) {
        output = `${output}${entry[0]}=${entry[1]}\r`;
    }

    output = output.toLowerCase();
    const answers = output.split('\r');
    let skore = 0;

    if (answers[0] === "otazka1=d") {
        document.getElementById("odpoved1").innerText = "Vase odpoved: '" + answers[0].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved1").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved1").innerText = "Vase odpoved: '" + answers[0].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved1").style.color = "red";
    }

    if (answers[1] === "otazka2=b") {
        document.getElementById("odpoved2").innerText = "Vase odpoved: '" + answers[1].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved2").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved2").innerText = "Vase odpoved: '" + answers[1].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved2").style.color = "red";
    }

    if (answers[2] === "otazka3=c") {
        document.getElementById("odpoved3").innerText = "Vase odpoved: '" + answers[2].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved3").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved3").innerText = "Vase odpoved: '" + answers[2].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved3").style.color = "red";
    }
    
    if (answers[3] === "otazka4=c") {
        document.getElementById("odpoved4").innerText = "Vase odpoved: '" + answers[3].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved4").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved4").innerText = "Vase odpoved: '" + answers[3].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved4").style.color = "red";
    }
    if (answers[4] === "otazka5=b") {
        document.getElementById("odpoved5").innerText = "Vase odpoved: '" + answers[4].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved5").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved5").innerText = "Vase odpoved: '" + answers[4].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved5").style.color = "red";
    }
    if (answers[5] === "otazka6=c") {
        document.getElementById("odpoved6").innerText = "Vase odpoved: '" + answers[5].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved6").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved6").innerText = "Vase odpoved: '" + answers[5].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved6").style.color = "red";
    }
    if (answers[6] === "otazka7=c") {
        document.getElementById("odpoved7").innerText = "Vase odpoved: '" + answers[6].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved7").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved7").innerText = "Vase odpoved: '" + answers[6].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved7").style.color = "red";
    }
    if (answers[7] === "otazka8=a") {
        document.getElementById("odpoved8").innerText = "Vase odpoved: '" + answers[7].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved8").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved8").innerText = "Vase odpoved: '" + answers[7].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved8").style.color = "red";
    }
    if (answers[8] === "otazka9=d") {
        document.getElementById("odpoved9").innerText = "Vase odpoved: '" + answers[8].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved9").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved9").innerText = "Vase odpoved: '" + answers[8].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved9").style.color = "red";
    }
    if (answers[9] === "otazka10=b") {
        document.getElementById("odpoved10").innerText = "Vase odpoved: '" + answers[9].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved10").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved10").innerText = "Vase odpoved: '" + answers[9].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved10").style.color = "red";
    }
    if (answers[10] === "otazka11=c") {
        document.getElementById("odpoved11").innerText = "Vase odpoved: '" + answers[10].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved11").style.color = "green";
        skore++;
    }
    else {
        document.getElementById("odpoved11").innerText = "Vase odpoved: '" + answers[10].split('=')[1].toUpperCase() + "'";
        document.getElementById("odpoved11").style.color = "red";
    }

    document.getElementById("skore").innerText = "Spravne odpovedi: " + skore + " / 11";

    let procent = (skore / 11) * 100;
    document.getElementById("procenta").innerText = "Uspesnost: " + procent.toFixed(2) + " %(testy VYT vyhodnoceni)";

    open_pop_up();
}
function open_pop_up() {
    document.getElementById("pop-up").style.display = "block";
}

function close_pop_up() {
    document.getElementById("pop-up").style.display = "none";
}
