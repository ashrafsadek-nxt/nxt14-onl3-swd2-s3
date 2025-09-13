class Player
{
    forward: string = "forward";
    backward: string = "backward";
    public left: string;
    public right: string;
    private distance: number;
    private result: number = 0;
    
    constructor(l: string, r: string, d: number)
    {
        this.left = l;
        this.right = r;
        this.distance = d
    }
   
    set setResult(r: number){
        this.result = r;
    }
    
    get getResult(): number {
        let rr = this.result + 10 - 5 * 4;
        return rr;
    }    
    
    sum(): number {
        return this.distance * 2;
    }
    total(c:number): number {
        let amount = this.distance * 8 / c;
        return amount;
    }
}

const player3=new Player("left", "right", 5);
player3.setResult=20;

function Show(){
    const output=document.getElementById("output");
    output!.innerHTML=`
   <p>His Left: ${player3.left}</p>
   <p>His Right: ${player3.right}</p>
   <p>His Result: ${player3.getResult}</p>
   <p>His Sum: ${player3.sum()}</p>
   <p>His Total: ${player3.total(5)}</p>

    `
}
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button') as HTMLButtonElement;
    submitButton.addEventListener('click', Show);
});