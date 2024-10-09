import { useState } from "react";
import { Validators } from "../../../schemas"; // Joi schema
import { FormHookType } from "../../../interfaces";

export interface IOwnerHookJson {
  id: string;
  name: string;
  username: string;
  email: string;
  password?: string;
}

export const useOwnerForm = (): FormHookType => {
  const [formData, setFormData] = useState<IOwnerHookJson>({
    id: "",
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof IOwnerHookJson, string>>
  >({
    name: "",
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
    const { error } = Validators["OwnerSchema"].validate(formData, {
      abortEarly: false, // Collect all errors
    });

    if (error) {
      console.log(error);
      const newErrors: Partial<Record<keyof IOwnerHookJson, string>> = {};
      error.details.forEach((detail: any) => {
        const field = detail.path[0] as keyof IOwnerHookJson; // Explicitly type the field as keyof IOwnerJson
        newErrors[field] = detail.message; // Assign error message to corresponding field
      });
      setErrors(newErrors); // Set all form errors
      return false; // Return false if there are validation errors
    } else {
      // No errors, clear the errors
      setErrors({});
      return true; // Return true if there are no validation errors
    }
  };

  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      username: "",
      email: "",
      password: "",
    });
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
