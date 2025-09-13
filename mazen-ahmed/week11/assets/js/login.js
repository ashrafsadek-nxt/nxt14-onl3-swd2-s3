// create class ( syntax )
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const player1Div = document.createElement("div");
const player2Div = document.createElement("div");
const player3Div = document.createElement("div");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const span3 = document.createElement("span");
class player {
    // attributes - properties => المتغيرات التي يتم وضعها داخل الكلاس
    forward = "aaa";
    backward = "bbb";
    left = "ccc";
    right = "ddd";
    distance = 0.0;
}
// create object ( syntax )
const p1 = new player();
span1.innerText = `palyer1\nforward: ${p1.forward}\n- backward: ${p1.backward}\n- left: ${p1.left}\n- right: ${p1.right}\n- distance: ${p1.distance}`;
player1Div.appendChild(span1);
class player2 {
    // attributes - properties => المتغيرات التي يتم وضعها داخل الكلاس
    forward = "forward";
    backward = "backward";
    left;
    right;
    distance;
    // methods => ( special, normal) => الفانكشنز التي يتم وضعها داخل الكلاس
    constructor(l, r, d) {
        this.left = l;
        this.right = r;
        this.distance = d;
    }
    sum() {
        return this.distance * 2;
    }
    total(c) {
        let amount = this.distance * 8 / c;
        return amount;
    }
}
const aly = new player2("left", "right", 15.3);
span2.innerText = `player2\nforward: ${aly.forward}\n- backward: ${aly.backward}\n- left: ${aly.left}\n- right: ${aly.right}\n- distance: ${aly.distance}\n- sum: ${aly.sum()}\n- total: ${aly.total(2)}`;
player2Div.appendChild(span2);
class player3 {
    // attributes - properties => المتغيرات التي يتم وضعها داخل الكلاس
    // access modifiers
    // public => استخدام المغير من داخل الكلاس ومن خارجه
    // private => استخدام المتغير من داخل الكلاس فقط
    forward = "forward";
    backward = "backward";
    left;
    right;
    distance;
    result = 0;
    // methods => ( special, normal) => الفانكشنز التي يتم وضعها داخل الكلاس
    // special methods
    constructor(l, r, d) {
        this.left = l;
        this.right = r;
        this.distance = d;
    }
    // encapsulation setter => private وضع قيم للمتغير
    set setResult(r) {
        this.result = r;
    }
    // encapsulation getter => private استخدام قيم للمتغير
    get getResult() {
        let rr = this.result + 10 - 5 * 4;
        return rr;
    }
    // normal methods
    sum() {
        return this.distance * 2;
    }
    total(c) {
        let amount = this.distance * 8 / c;
        return amount;
    }
}
const hany = new player3("aa", "pp", 145);
console.log(hany.left);
hany.setResult = 100;
span3.innerText = `player3\nforward: ${hany.forward}\n- backward: ${hany.backward}\n- left: ${hany.left}\n- right: ${hany.right}\n- sum: ${hany.sum()}\n- total: ${hany.total(5)}\n- result: ${hany.getResult}`;
player3Div.appendChild(span3);
btn.addEventListener("click", () => {
    output.append(player1Div, player2Div, player3Div);
});
export {};
//# sourceMappingURL=login.js.map