import passwordValidator from 'password-validator';

let schema = new passwordValidator();

schema
  .is()
  .min(8, 'A senha não é longa o suficiente.') // Minimum length 8
  .is()
  .max(100, 'A senha é muito longa.') // Maximum length 100
  .has()
  .uppercase(1, 'A senha deve ter ao menos uma letra maiúscula.') // Must have uppercase letters
  .has()
  .lowercase(1, 'A senha deve ter ao menos uma letra minúscula.') // Must have lowercase letters
  .has()
  .digits(1, 'A senha deve ter ao menos um número.') // Must have at least 1 digits
  .has()
  .symbols(1, 'A senha deve ter ao menos um símbolo.') // Must have at least 1 symbol
  .has()
  .not()
  .spaces(undefined, 'A senha não pode ter espaços.') // Should not have spaces
  .is()
  .not()
  .oneOf(
    ['Passw0rd', 'Password123', '12345678', '87654321'],
    'A senha não pode ser uma senha comum fácil de decifrar.'
  ); // Blacklist these values

export default schema;
