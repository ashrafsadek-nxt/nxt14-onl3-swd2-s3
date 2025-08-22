function validatePassword(password) {
  let errors = [];

  if (!password.match(/[A-Z]/)) {
    errors.push('must contain cap chars');
  }
  if (!password.match(/[a-z]/)) {
    errors.push('must contain small chars)');
  }
  if (!password.match(/[0-9]/)) {
    errors.push('must contain nums');
  }
  if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    errors.push('must contain symbols');
  }
  if (password.length < 8) {
    errors.push('must contain at least 8 chars');
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }
  return { valid: true, errors: [] };
}

let password = 'Ahmd12/@';
let result = validatePassword(password);

if (result.valid) {
  console.log('valid password');
} else {
  console.log('invalid password');
  result.errors.forEach((err) => console.log(`${err}`));
}
