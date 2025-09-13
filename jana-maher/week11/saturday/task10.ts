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
    let amount = (this.distance * 8) / c;
    return amount;
  }
}

// نعمل object
const aly = new Player2("left", "right", 15.3);

// function هتتعامل مع الزرار
function showData() {
  const output = document.getElementById("output") as HTMLDivElement;
  output.innerHTML = `
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Forward</td><td>${aly.forward}</td></tr>
        <tr><td>Backward</td><td>${aly.backward}</td></tr>
        <tr><td>Left</td><td>${aly.left}</td></tr>
        <tr><td>Right</td><td>${aly.right}</td></tr>
        <tr><td>Distance</td><td>${aly.distance}</td></tr>
        <tr><td>Sum()</td><td>${aly.sum()}</td></tr>
        <tr><td>Total(c=2)</td><td>${aly.total(2)}</td></tr>
      </tbody>
    </table>
  `;
}

// أربط الزرار بالـ function هنا في TypeScript
const btn = document.getElementById("btn") as HTMLButtonElement;
btn.addEventListener("click", showData);
