const nameRegExp = new RegExp("^[a-zA-Zа-яёА-ЯЁs'-]+$");
const passwordRegExp = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$');
const emailRegExp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');

export const validateSignup = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!emailRegExp.test(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (!data.fullName) {
    errors.fullName = 'Name is required';
  } else if (!nameRegExp.test(data.fullName)) {
    errors.fullName = 'Name should contain only Latin or Cyrillic characters';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  } else if (!passwordRegExp.test(data.password)) {
    errors.password =
      'Password should be at leaset 8 characters long, contain at least 1 digit and 1 special symbol';
  }

  if (!data.username) {
    errors.username = 'Username is required';
  }

  return errors;
};

export const validateSignin = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!emailRegExp.test(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  } else if (!passwordRegExp.test(data.password)) {
    errors.password =
      'Password should be at leaset 8 characters long, contain at least 1 digit and 1 special symbol';
  }

  return errors;
};
