export type FormHookType = {
  formData: any;
  errors: any;
  handleFormData: (value: any) => void;
  handlePasswordInit?: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  verifyErrors: () => boolean;
  resetForm: () => void;
};
