const RULES = [
  { re: /[A-Z]/, text: 'Add at least one uppercase letter' },
  { re: /[a-z]/, text: 'Add at least one lowercase letter' },
  { re: /\d/,   text: 'Add at least one number' },
  { re: /[^A-Za-z0-9]/, text: 'Add at least one special character' },
  { re: /.{8,}/, text: 'Password must be at least 8 characters long' }
];

const pwdInput = document.getElementById('pwd');
const missingList = document.getElementById('missing');
const statusEl = document.getElementById('status');
const validateBtn = document.getElementById('validate');

function evaluate(pwd) {
const missing = RULES.filter(rule => !rule.re.test(pwd));

  missingList.innerHTML = '';
  if (missing.length) {
    statusEl.textContent = 'Weak Password, missing:';
    statusEl.className = 'bad';
    validateBtn.disabled = true;

    for (const m of missing) {
      const li = document.createElement('li');
      li.textContent = `- ${m.text}`;
      missingList.appendChild(li);
    }
  } else {
    statusEl.textContent = 'Strong Password ✓';
    statusEl.className = 'ok';
    validateBtn.disabled = false;
  }
}

pwdInput.addEventListener('input', () => evaluate(pwdInput.value));

validateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Password is valid');
});

evaluate('');