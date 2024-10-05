import { useState } from "react";
import { Validators } from "../../../schemas"; // Joi schema
import { FormHookType } from "../../../interfaces";

export interface IOwnerHookJson {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

export const useOwnerForm = (): FormHookType => {
  const [valid, setValid] = useState<boolean>(true);

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

  const handlePasswordInit = () => {
    // setFormData({
    //   ...formData,
    //   password: "PASSWORD WILL NOT BE SHOWN",
    // });
  };

  // Validate form data and set errors if any
  const verifyErrors = () => {
    const { error } = Validators["OwnerSchema"].validate(formData, {
      abortEarly: false, // Collect all errors
    });

    if (error) {
      setValid(false);
      console.log("aqui", valid);
      const newErrors: Partial<Record<keyof IOwnerHookJson, string>> = {};
      error.details.forEach((detail: any) => {
        const field = detail.path[0] as keyof IOwnerHookJson; // Explicitly type the field as keyof IOwnerJson
        newErrors[field] = detail.message; // Assign error message to corresponding field
      });
      setErrors(newErrors); // Set all form errors
    } else {
      setValid(true);
      // If no errors, clear errors and handle form submission
      setErrors({});
      console.log("Form data is valid. Ready for submission:", formData);
    }
    return valid;
  };

  const resetForm = () => {
    setValid(true);
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
    valid,
    formData,
    handleFormData: setFormData,
    handlePasswordInit,
    errors,
    handleInputChange,
    verifyErrors,
    resetForm,
  };
};
