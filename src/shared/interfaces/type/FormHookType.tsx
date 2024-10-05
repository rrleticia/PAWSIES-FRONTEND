export type FormHookType = {
  valid: boolean;
  formData: any;
  errors: any;
  handleFormData: (value: any) => void;
  handlePasswordInit: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  verifyErrors: () => void;
  resetForm: () => void;
};
