const form = document.getElementById('login-form') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const emailError = document.getElementById('email-error') as HTMLElement;
const passwordError = document.getElementById('password-error') as HTMLElement;
const submitBtn = document.getElementById('submit') as HTMLButtonElement;

function validateEmail(value: string): string | null {
  if (!value) return 'Email is required.';
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(value)) return 'Invalid email format.';
  return null;
}

function validatePassword(value: string): string | null {
  if (!value) return 'Password is required.';
  if (value.length < 6) return 'Password must be at least 6 characters.';
  return null;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const em = emailInput.value.trim();
  const pw = passwordInput.value;

  const emErr = validateEmail(em);
  const pwErr = validatePassword(pw);

  emailError.textContent = emErr || '';
  passwordError.textContent = pwErr || '';

  if (!emErr && !pwErr) {
    (async () => {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Loading...';
      await new Promise(r => setTimeout(r, 900));
      alert('Login successful');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Login';
      form.reset();
    })();
  }
});

emailInput.addEventListener('input', () => {
  const err = validateEmail(emailInput.value.trim());
  emailError.textContent = err || '';
});

passwordInput.addEventListener('input', () => {
  const err = validatePassword(passwordInput.value);
  passwordError.textContent = err || '';
});
