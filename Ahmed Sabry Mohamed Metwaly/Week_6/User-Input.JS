function Calculator() {
    let n1 = parseFloat(document.getElementById("FirstNumber").value);
    let n2 = parseFloat(document.getElementById("SecendNumber").value);
    let n3 = parseFloat(document.getElementById("ThirdNumber").value);
    let operation = document.getElementById("operation").value;

    let Resultt;
    if (operation === 'sum') {
        Resultt = n1 + n2 + n3;
    } else if (operation === 'multiply') {
        Resultt = n1 * n2 * n3;
    }

    document.getElementById("Result").innerText = "Result = " + Resultt;
}
