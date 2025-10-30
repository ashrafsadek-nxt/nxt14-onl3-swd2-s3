function showData() {
    const outputDv = document.getElementById('output');
    let firstname = "ahmed";
    let age = 24;
    let weight = 65.32;
    let isMarried = true;
    let salary = { amount: 14523, currency: "EGP" };
    let address = { street: "nasr st.", city: "cairo" };
    let children = ["ola", "aly", "alaa"];
    let anotherInfo = 123;
    let data = "hello";
    let data2 = "welcome";
    // Non-null assertion operator !
    outputDv.innerHTML = `
        <p>${firstname}</p>
        <p>${age}</p>
        <p>${weight}</p>
        <p>Is married:- ${isMarried}</p>
        <p>salary:- ${salary.amount}${salary.currency}</p>
        <p>address:- ${address.street}${address.city}</p>
        <p>children:- ${children.join(", ")}</p>
        <p>info:- ${anotherInfo}</p>
        <p>data:- ${data}</p>
        <p>data2:- ${data2}</p>
    `;
}
export {};
//# sourceMappingURL=task1.js.map