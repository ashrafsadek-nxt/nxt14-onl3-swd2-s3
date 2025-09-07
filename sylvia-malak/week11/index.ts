class Player {
    forward: string = "aaa";
    backward: string = "bbb";
    left: string = "ccc";
    right: string = "ddd";
    distance: number = 0.0;
}

class Player2 {
    forward: string = "forward";
    backward: string = "backward";
    left: string;
    right: string;
    distance: number;

    constructor(l: string, r: string, d: number) {
        this.left = l;
        this.right = r;
        this.distance = d;
    }
    
    sum(): number {
        return this.distance * 2;
    }
    
    total(c: number): number {
        let amount = this.distance * 8 / c;
        return amount;
    }
}

class Player3 {
    forward: string = "forward";
    backward: string = "backward";
    left: string;
    right: string;
    private distance: number;
    private result: number = 0;

    constructor(l: string, r: string, d: number) {
        this.left = l;
        this.right = r;
        this.distance = d;
    }
    
    // setter
    set setResult(rr: number) {
        this.result = rr;
    }
    
    // getter
    get getResult(): number {
        let rr = this.result + 10 - 5 * 4;
        return rr;
    }
    
    sum(): number {
        return this.distance * 2;
    }
    
    total(c: number): number {
        let amount = this.distance * 8 / c;
        return amount;
    }
}


const p1 = new Player();
const p2 = new Player();
const p3 = new Player();
const p4 = new Player();
const p5 = new Player();
p5.distance = 12.3;

const aly = new Player2("left", "right", 15.3);
const mona = new Player2("up", "down", 25.53);

const hany = new Player3("aa", "pp", 145);
hany.setResult = 100;


function showDataInHTML(): void {
    const outputDiv = document.getElementById('output') as HTMLDivElement;
    outputDiv.innerHTML = ''; 
    
    // Player1
    outputDiv.innerHTML += '<h2>Player Objects Data:</h2>';
    outputDiv.innerHTML += `<p>p1.left: ${p1.left}</p>`;
    outputDiv.innerHTML += `<p>p2.right: ${p2.right}</p>`;
    outputDiv.innerHTML += `<p>p3.forward: ${p3.forward}</p>`;
    outputDiv.innerHTML += `<p>p4.backward: ${p4.backward}</p>`;
    outputDiv.innerHTML += `<p>p1.distance: ${p1.distance}</p>`;
    outputDiv.innerHTML += `<p>p2.distance: ${p2.distance}</p>`;
    outputDiv.innerHTML += `<p>p3.distance: ${p3.distance}</p>`;
    outputDiv.innerHTML += `<p>p4.distance: ${p4.distance}</p>`;
    outputDiv.innerHTML += `<p>p5.distance: ${p5.distance}</p>`;
    
    // Player2
    outputDiv.innerHTML += '<h2>Player2 Objects Data:</h2>';
    outputDiv.innerHTML += `<p>aly.left: ${aly.left}</p>`;
    outputDiv.innerHTML += `<p>aly.right: ${aly.right}</p>`;
    outputDiv.innerHTML += `<p>aly.distance: ${aly.distance}</p>`;
    outputDiv.innerHTML += `<p>aly.sum(): ${aly.sum()}</p>`;
    outputDiv.innerHTML += `<p>aly.total(2): ${aly.total(2)}</p>`;
    
    outputDiv.innerHTML += `<p>mona.left: ${mona.left}</p>`;
    outputDiv.innerHTML += `<p>mona.right: ${mona.right}</p>`;
    outputDiv.innerHTML += `<p>mona.distance: ${mona.distance}</p>`;
    outputDiv.innerHTML += `<p>mona.sum(): ${mona.sum()}</p>`;
    outputDiv.innerHTML += `<p>mona.total(4): ${mona.total(4)}</p>`;
    
    // Player3
    outputDiv.innerHTML += '<h2>Player3 Objects Data:</h2>';
    outputDiv.innerHTML += `<p>hany.left: ${hany.left}</p>`;
    outputDiv.innerHTML += `<p>hany.getResult: ${hany.getResult}</p>`;
}


document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn') as HTMLButtonElement;
    btn.addEventListener('click', showDataInHTML);
});