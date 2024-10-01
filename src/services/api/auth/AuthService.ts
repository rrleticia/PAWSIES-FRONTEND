import { Api } from '../axios-config';

export type UserType = {
  role: string;
  username: string;
  password?: string;
};

interface IAuth {
  accessToken: string;
  user: UserType;
}

const auth = async (
  username: string,
  password: string
): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.post('/auth/login', {
      username: username,
      password: password,
    });

    if (data) {
      return data;
    }

    return new Error('Erro no login.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro no login.'
    );
  }
};

const requestPasswordReset = async (email: string): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.post('/auth/request-reset-password', {
      email: email,
    });

    if (data) {
      return data;
    }

    return new Error('Erro no pedido.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro no pedido.'
    );
  }
};

const resetPassword = async (
  idUser: string,
  codigo: string,
  newPassword: string
): Promise<string | Error> => {
  try {
    const { data } = await Api.post(
      `/auth/reset-password/${idUser}/${codigo}`,
      {
        newPassword: newPassword,
      }
    );

    if (data) {
      return data.message;
    }

    return new Error('Erro na redefinição de senha.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro na redefinição de senha.'
    );
  }
};

export const AuthService = {
  auth,
  requestPasswordReset,
  resetPassword,
};
