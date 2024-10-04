export type FormHookType = {
  valid: boolean;
  formData: any;
  errors: any;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  verifyErrors: () => void;
  resetForm: () => void;
};
