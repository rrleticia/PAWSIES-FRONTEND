export const validateExpireStringDate = (value: string) => {
  const date = new Date(value);
  if (date > new Date()) return true;
  return false;
};

export const validateExpireStoredStringDate = (value: string) => {
  const date = new Date(JSON.parse(value));
  if (date > new Date()) return true;
  return false;
};
