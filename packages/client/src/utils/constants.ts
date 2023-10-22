export const eror = 'est'

export const validationPatterns = {
  login: {
    regexp: /^(?![_-])[A-Za-z0-9_-]{3,20}$/,
    message: 'Invalid login',
  },
  password: {
    regexp: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d_-]{8,40}$/,
    message: 'Invalid password',
  },
  first_name: {
    regexp: /^[А-ЯЁA-Z][a-zа-яёA-Z-]*$/,
    message: 'Invalid first name',
  },
  second_name: {
    regexp: /^[А-ЯЁA-Z][a-zа-яёA-Z-]*$/,
    message: 'Invalid second name',
  },
  email: {
    regexp: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    message: 'Invalid email',
  },
  phone: {
    regexp: /^\+?[0-9]{10,15}$/,
    message: 'Invalid phone number',
  },
}

export const fieldRequired = { value: true, message: 'Required field' }
