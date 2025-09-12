class player {
  forward: string = "aaa";
  backward: string = "bbb";
  left: string = "ccc";
  right: string = "ddd";
  distance: number = 0.0;
}

class player2 {
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
    return this.distance * 8 / c;
  }
}

class player3 {
  forward: string = "forward";
  backward: string = "backward";
  public left: string;
  public right: string;
  private distance: number;
  private result: number = 0;

  constructor(l: string, r: string, d: number) {
    this.left = l;
    this.right = r;
    this.distance = d;
  }

  set setResult(r: number) {
    this.result = r;
  }

  get getResult(): number {
    return this.result + 10 - 5 * 4;
  }

  sum(): number {
    return this.distance * 2;
  }

  total(c: number): number {
    return this.distance * 8 / c;
  }
}


function printOutput(msg: string) {
  const out = document.getElementById("output");
  if (out) {
    const p = document.createElement("p");
    p.textContent = msg;
    out.appendChild(p);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  btn?.addEventListener("click", () => {
    const out = document.getElementById("output");
    if (out) out.innerHTML = ""; 

    
    const p1 = new player();
    printOutput("p1.left: " + p1.left);

   
    const aly = new player2("left", "right", 15.3);
    const mona = new player2("up", "down", 25.53);
    printOutput("aly.sum(): " + aly.sum());
    printOutput("mona.total(4): " + mona.total(4));

  
    const hany = new player3("aa", "pp", 145);
    hany.setResult = 100;
    printOutput("hany.left: " + hany.left);
    printOutput("hany.getResult: " + hany.getResult);
  });
});
