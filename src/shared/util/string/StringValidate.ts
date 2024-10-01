import { validate } from 'deep-email-validator';
import schema from './PasswordSchema';

export const validateString = (value: string) => {
  if (value.length == 0) return false;
  if (value.trim().length == 0) return false;
  return true;
};

export const validatePasswordString = (value: string) => {
  if (validateString(value)) return false;
  if (value.length < 8) return false;
  return true;
};

export const validateNewPasswordString = (value: string) => {
  return schema.validate(value);
};

export const validateNewPasswordStringDetail = (value: string) => {
  const details = schema.validate(value, { details: true });

  if (details instanceof Boolean)
    return 'Não foi possível especificar o erro encontrado.';

  if (details instanceof Array) return details[0].message;
};

export const validateEmailString = async (email: string) => {
  const validationResult = await validate(email);
  return validationResult.valid;
};

export const validateCartaoSUSString = (value: string) => {
  const trimmed = value.trim();
  const clean = trimmed.replace(/\s/g, '');
  if (clean.length != 15) return false;
  return true;
};

export const validateCPFString = (value: string) => {
  const trimmed = value.trim();
  const clean = trimmed.replace(/[.-]/g, '');
  if (clean.length != 11) return false;
  return true;
};

export const validateCEPString = (value: string) => {
  const trimmed = value.trim();
  const clean = trimmed.replace('-', '');
  if (clean.length != 8) return false;
  return true;
};

export const validateTelefoneString = (value: string) => {
  const trimmed = value.trim();
  const clean = trimmed.replace(/[()-]/g, '');
  if (clean.length != 11) return false;
  return true;
};

export const validateSemestreString = (value: string) => {
  const trimmed = value.trim();
  const clean = trimmed.replace(/[.]/g, '');
  if (clean.length != 5) return false;
  return true;
};
export const validateDateString = (value: string) => {
  const splited = value.split('/');
  const dia = splited[0];
  const mes = splited[1];
  const ano = splited[1];
  if (dia.length != 2) return false;
  if (mes.length != 2) return false;
  if (ano.length != 2) return false;
  const numDias = +dia;
  const numMesses = +mes;
  if (0 < numDias || numDias > 31) return false;
  if (0 < numMesses || numMesses > 12) return false;
  return true;
};

export const validateHorarioString = (value: string) => {
  const splited = value.split(':');
  if (splited.length !== 2) return false; // Verifica se há exatamente dois componentes (horas e minutos)

  const hours = splited[0];
  const minutes = splited[1];

  if (hours.length !== 2 || minutes.length !== 2) return false; // Verifica se horas e minutos têm exatamente 2 dígitos

  const numHours = +hours;
  const numMinutes = +minutes;

  if (numHours < 0 || numHours > 23) return false; // Verifica se as horas estão no intervalo 0-23
  if (numMinutes < 0 || numMinutes > 59) return false; // Verifica se os minutos estão no intervalo 0-59

  return true;
};

export const isHorarioCorreto = (time1: string, time2: string): boolean => {
  const [hours1, minutes1] = time1.split(':').map(Number);
  const [hours2, minutes2] = time2.split(':').map(Number);

  // Verifica se os valores de horas e minutos são válidos
  if (
    isNaN(hours1) ||
    isNaN(minutes1) ||
    isNaN(hours2) ||
    isNaN(minutes2) ||
    hours1 < 0 ||
    hours1 > 23 ||
    minutes1 < 0 ||
    minutes1 > 59 ||
    hours2 < 0 ||
    hours2 > 23 ||
    minutes2 < 0 ||
    minutes2 > 59
  ) {
    return false;
  }

  // Compara horas
  if (hours1 < hours2) return true;
  if (hours1 >= hours2) return false;

  // Se as horas são iguais, compara minutos
  return minutes1 < minutes2;
};
