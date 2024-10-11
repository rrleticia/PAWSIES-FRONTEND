import { IUser } from "../../../shared";
import { Api } from "../axios-config";

const getAll = async (): Promise<IUser[] | Error> => {
  try {
    const { data } = await Api.get("/user");

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os users."
    );
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

const getOne = async (id: string): Promise<IUser | Error> => {
  try {
    const { data } = await Api.get(`/user/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar recuperar um user.");
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

const create = async (json: any): Promise<IUser | Error> => {
  try {
    const { data } = await Api.post("/user", json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar criar um user.");
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

const update = async (json: any): Promise<IUser | Error> => {
  try {
    const { data } = await Api.put(`/user`, json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar atualizar um user.");
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

const remove = async (id: string): Promise<IUser | Error> => {
  try {
    const { data } = await Api.delete(`/user/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar deletar um user.");
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

export const UserService = { getAll, getOne, create, update, remove };
