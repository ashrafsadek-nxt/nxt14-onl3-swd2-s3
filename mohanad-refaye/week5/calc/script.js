      function calculate() {
        const num1 = parseFloat(document.getElementById("num1").value);
        const operator = document.getElementById("operator").value;
        const num2 = parseFloat(document.getElementById("num2").value);
        let result = "";

        if (operator === "+") {
          result = num1 + num2;
        } else if (operator === "*") {
          result = num1 * num2;
        } else {
          result = "علامة غير صحيحة. استخدم + أو * فقط.";
        }

        document.getElementById("result").innerText = "النتيجة: " + result;
      }