import { useState } from "react";
import { Validators } from "../../../schemas"; // Joi schema
import { FormHookType } from "../../../interfaces";

export interface IVetHookJson {
  id: string;
  name: string;
  specialty: string;
  username: string;
  email: string;
  password: string;
}

export const useVetForm = (): FormHookType => {
  const [formData, setFormData] = useState<IVetHookJson>({
    id: "",
    name: "",
    specialty: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof IVetHookJson, string>>
  >({
    name: "",
    username: "",
    specialty: "",
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

  const handlePasswordInit = () => {
    setFormData((prevFormData) => ({
      ...prevFormData, // Spread the previous form data to preserve other fields
      password: "PASSWORD WILL NOT BE SHOWN", // Override only the password field
    }));
  };

  // Validate form data and set errors if any
  const verifyErrors = () => {
    const { error } = Validators["VetSchema"].validate(formData, {
      abortEarly: false, // Collect all errors
    });

    if (error) {
      const newErrors: Partial<Record<keyof IVetHookJson, string>> = {};
      error.details.forEach((detail: any) => {
        const field = detail.path[0] as keyof IVetHookJson; // Explicitly type the field as keyof IVetJson
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
      specialty: "",
      username: "",
      email: "",
      password: "",
    });
    setErrors({});
  };

  return {
    formData,
    handleFormData: setFormData,
    handlePasswordInit,
    errors,
    handleInputChange,
    verifyErrors,
    resetForm,
  };
};
