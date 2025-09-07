var Player = /** @class */ (function () {
    function Player() {
        this.forward = "aaa";
        this.backward = "bbb";
        this.left = "ccc";
        this.right = "ddd";
        this.distance = 0.0;
    }
    return Player;
}());
var Player2 = /** @class */ (function () {
    function Player2(l, r, d) {
        this.forward = "forward";
        this.backward = "backward";
        this.left = l;
        this.right = r;
        this.distance = d;
    }
    Player2.prototype.sum = function () {
        return this.distance * 2;
    };
    Player2.prototype.total = function (c) {
        var amount = this.distance * 8 / c;
        return amount;
    };
    return Player2;
}());
var Player3 = /** @class */ (function () {
    function Player3(l, r, d) {
        this.forward = "forward";
        this.backward = "backward";
        this.result = 0;
        this.left = l;
        this.right = r;
        this.distance = d;
    }
    Object.defineProperty(Player3.prototype, "setResult", {
        // setter
        set: function (rr) {
            this.result = rr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player3.prototype, "getResult", {
        // getter
        get: function () {
            var rr = this.result + 10 - 5 * 4;
            return rr;
        },
        enumerable: false,
        configurable: true
    });
    Player3.prototype.sum = function () {
        return this.distance * 2;
    };
    Player3.prototype.total = function (c) {
        var amount = this.distance * 8 / c;
        return amount;
    };
    return Player3;
}());

var p1 = new Player();
var p2 = new Player();
var p3 = new Player();
var p4 = new Player();
var p5 = new Player();
p5.distance = 12.3;
var aly = new Player2("left", "right", 15.3);
var mona = new Player2("up", "down", 25.53);
var hany = new Player3("aa", "pp", 145);
hany.setResult = 100;

function showDataInHTML() {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; 
    // Player1
    outputDiv.innerHTML += '<h2>Player Objects Data:</h2>';
    outputDiv.innerHTML += "<p>p1.left: ".concat(p1.left, "</p>");
    outputDiv.innerHTML += "<p>p2.right: ".concat(p2.right, "</p>");
    outputDiv.innerHTML += "<p>p3.forward: ".concat(p3.forward, "</p>");
    outputDiv.innerHTML += "<p>p4.backward: ".concat(p4.backward, "</p>");
    outputDiv.innerHTML += "<p>p1.distance: ".concat(p1.distance, "</p>");
    outputDiv.innerHTML += "<p>p2.distance: ".concat(p2.distance, "</p>");
    outputDiv.innerHTML += "<p>p3.distance: ".concat(p3.distance, "</p>");
    outputDiv.innerHTML += "<p>p4.distance: ".concat(p4.distance, "</p>");
    outputDiv.innerHTML += "<p>p5.distance: ".concat(p5.distance, "</p>");
    // Player2
    outputDiv.innerHTML += '<h2>Player2 Objects Data:</h2>';
    outputDiv.innerHTML += "<p>aly.left: ".concat(aly.left, "</p>");
    outputDiv.innerHTML += "<p>aly.right: ".concat(aly.right, "</p>");
    outputDiv.innerHTML += "<p>aly.distance: ".concat(aly.distance, "</p>");
    outputDiv.innerHTML += "<p>aly.sum(): ".concat(aly.sum(), "</p>");
    outputDiv.innerHTML += "<p>aly.total(2): ".concat(aly.total(2), "</p>");
    outputDiv.innerHTML += "<p>mona.left: ".concat(mona.left, "</p>");
    outputDiv.innerHTML += "<p>mona.right: ".concat(mona.right, "</p>");
    outputDiv.innerHTML += "<p>mona.distance: ".concat(mona.distance, "</p>");
    outputDiv.innerHTML += "<p>mona.sum(): ".concat(mona.sum(), "</p>");
    outputDiv.innerHTML += "<p>mona.total(4): ".concat(mona.total(4), "</p>");
    //player3
    outputDiv.innerHTML += '<h2>Player3 Objects Data:</h2>';
    outputDiv.innerHTML += "<p>hany.left: ".concat(hany.left, "</p>");
    outputDiv.innerHTML += "<p>hany.getResult: ".concat(hany.getResult, "</p>");
}

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', showDataInHTML);
});

export {};