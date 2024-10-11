import { useState } from "react";
import { Validators } from "../../../schemas"; // Joi schema
import { FormHookType } from "../../../interfaces";

export interface IUserHookJson {
  id: string;
  name: string;
  role: string;
  username: string;
  email: string;
  password?: string;
}

export const useUserForm = (): FormHookType => {
  const [formData, setFormData] = useState<IUserHookJson>({
    id: "",
    name: "",
    role: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof IUserHookJson, string>>
  >({
    name: "",
    role: "",
    username: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for the field being updated
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validate form data and set errors if any
  const verifyErrors = () => {
    const { error } = Validators["UserSchema"].validate(formData, {
      abortEarly: false, // Collect all errors
    });

    if (error) {
      const newErrors: Partial<Record<keyof IUserHookJson, string>> = {};
      error.details.forEach((detail: any) => {
        const field = detail.path[0] as keyof IUserHookJson; // Explicitly type the field as keyof IUserJson
        newErrors[field] = detail.message; // Assign error message to corresponding field
      });
      setErrors(newErrors); // Set all form errors
      return false; // Return false if there are validation errors
    } else {
      // No errors, clear the errors
      setErrors({});
      console.log("Form data is valid. Ready for submission:", formData);
      return true; // Return true if there are no validation errors
    }
  };

  const resetForm = () => {
    setFormData((prevFormData) => ({
      ...prevFormData, // Spread the previous form data to preserve other fields
      name: "",
      username: "",
      email: "",
      password: "",
    }));
    setErrors({});
  };

  return {
    formData,
    handleFormData: setFormData,
    errors,
    handleInputChange,
    verifyErrors,
    resetForm,
  };
};
