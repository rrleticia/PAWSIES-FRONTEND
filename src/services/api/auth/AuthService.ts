import { ILogin } from "../../../shared";
import { Api } from "../axios-config";

const auth = async (
  email: string,
  password: string
): Promise<ILogin | Error> => {
  try {
    const { data } = await Api.post("/auth/login", {
      email: email,
      password: password,
    });

    if (data) {
      return data;
    }

    return new Error("Erro no login.");
  } catch (error: any) {
    if (error.response && error.response.data) {
      const message = error.response.data.message;
      const status = error.response.data.status;
      return new Error(`Error ${status}: ${message}`);
    } else {
      return new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
};

export const AuthService = {
  auth,
};
