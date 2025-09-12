// ========== كلاس player ==========
class player {
    constructor() {
        this.forward = "aaa";
        this.backward = "bbb";
        this.left = "ccc";
        this.right = "ddd";
        this.distance = 0.0;
    }
}
// ========== كلاس player2 ==========
class player2 {
    constructor(l, r, d) {
        this.forward = "forward";
        this.backward = "backward";
        this.left = l;
        this.right = r;
        this.distance = d;
    }
    sum() {
        return this.distance * 2;
    }
    total(c) {
        return this.distance * 8 / c;
    }
}
// ========== كلاس player3 ==========
class player3 {
    constructor(l, r, d) {
        this.forward = "forward";
        this.backward = "backward";
        this.result = 0;
        this.left = l;
        this.right = r;
        this.distance = d;
    }
    set setResult(r) {
        this.result = r;
    }
    get getResult() {
        return this.result + 10 - 5 * 4;
    }
    sum() {
        return this.distance * 2;
    }
    total(c) {
        return this.distance * 8 / c;
    }
}
// ========== دالة مساعدة للطباعة ==========
function printOutput(msg) {
    const out = document.getElementById("output");
    if (out) {
        const p = document.createElement("p");
        p.textContent = msg;
        out.appendChild(p);
    }
}
// ========== ربط الزرار ==========
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
        const out = document.getElementById("output");
        if (out)
            out.innerHTML = ""; // يمسح القديم قبل الطباعة
        // player 1
        const p1 = new player();
        printOutput("p1.left: " + p1.left);
        // player2
        const aly = new player2("left", "right", 15.3);
        const mona = new player2("up", "down", 25.53);
        printOutput("aly.sum(): " + aly.sum());
        printOutput("mona.total(4): " + mona.total(4));
        // player3
        const hany = new player3("aa", "pp", 145);
        hany.setResult = 100;
        printOutput("hany.left: " + hany.left);
        printOutput("hany.getResult: " + hany.getResult);
    });
});
export {};
//# sourceMappingURL=oop.js.map