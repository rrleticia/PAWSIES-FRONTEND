import { useState } from "react";
import { Validators } from "../../../schemas"; // Joi schema
import { FormHookType } from "../../../interfaces";

export interface IAppointmentHookJson {
  id: string;
  date: string;
  hour: string;
  examination: string;
  observations: string;
  status: string;
  petID: string;
  ownerID: string;
  vetID: string;
}

export const useAppointmentForm = (): FormHookType => {
  const [formData, setFormData] = useState<IAppointmentHookJson>({
    id: "",
    date: "",
    hour: "",
    examination: "",
    observations: "",
    status: "",
    petID: "",
    ownerID: "",
    vetID: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof IAppointmentHookJson, string>>
  >({
    id: "",
    date: "",
    hour: "",
    examination: "",
    observations: "",
    status: "",
    petID: "",
    ownerID: "",
    vetID: "",
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
    const { error } = Validators["AppointmentSchema"].validate(formData, {
      abortEarly: false, // Collect all errors
    });

    if (error) {
      const newErrors: Partial<Record<keyof IAppointmentHookJson, string>> = {};
      error.details.forEach((detail: any) => {
        const field = detail.path[0] as keyof IAppointmentHookJson; // Explicitly type the field as keyof IAppointmentJson
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
      date: "",
      hour: "",
      examination: "",
      observations: "",
      status: "",
      petID: "",
      ownerID: "",
      vetID: "",
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
