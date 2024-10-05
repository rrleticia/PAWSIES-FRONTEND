import { ILogin } from "../../../models";
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
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro no login."
    );
  }
};

export const AuthService = {
  auth,
};
