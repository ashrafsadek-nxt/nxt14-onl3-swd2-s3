function showData(): void {
    const outputDv = document.getElementById('output');
    let firstname: string = "ahmed";
    let age: number = 24;
    let weight: number = 65.32;
    let isMarried: boolean = true;
    let salary: { amount: number, currency: string } = { amount: 14523, currency: "EGP" };
    let address: { street: string, city: string } = { street: "nasr st.", city: "cairo"};
    let children: string[] = ["ola", "aly", "alaa"];
    let anotherInfo: any = 123;
    let data: string = "hello";
    let data2: string = "welcome";
    
    outputDv!.innerHTML = `
        <p>${firstname}</p>
        <p>${age}</p>
        <p>${weight}</p>
        <p>Is married:- ${isMarried}</p>
        <p>salary:- ${salary.amount} ${salary.currency}</p>
        <p>address:- ${address.street}, ${address.city}</p>
        <p>children:- ${children.join(", ")}</p>
        <p>info:- ${anotherInfo}</p>
        <p>data:- ${data}</p>
        <p>data2:- ${data2}</p>
    `;
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('showButton');
    button?.addEventListener('click', showData);
});
