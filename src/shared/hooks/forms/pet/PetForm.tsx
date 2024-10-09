import { useState } from "react";
import { Validators } from "../../../schemas"; // Joi schema
import { FormHookType } from "../../../interfaces";

export interface IPetHookJson {
  id: string;
  type: string;
  name: string;
  breed: string;
  color: string;
  age: string;
  weight: string;
}

export const usePetForm = (): FormHookType => {
  const [formData, setFormData] = useState<IPetHookJson>({
    id: "",
    type: "",
    name: "",
    breed: "",
    color: "",
    age: "",
    weight: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof IPetHookJson, string>>
  >({
    id: "",
    type: "",
    name: "",
    breed: "",
    color: "",
    age: "",
    weight: "",
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
    const { error } = Validators["PetSchema"].validate(formData, {
      abortEarly: false, // Collect all errors
    });

    if (error) {
      const newErrors: Partial<Record<keyof IPetHookJson, string>> = {};
      error.details.forEach((detail: any) => {
        const field = detail.path[0] as keyof IPetHookJson; // Explicitly type the field as keyof IPetJson
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
    setFormData({
      id: "",
      type: "",
      name: "",
      breed: "",
      color: "",
      age: "",
      weight: "",
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
