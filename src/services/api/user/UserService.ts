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
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar todos os users."
    );
  }
};

const getOne = async (id: string): Promise<IUser | Error> => {
  try {
    const { data } = await Api.get(`/user/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar recuperar um user.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar um user."
    );
  }
};

const create = async (json: any): Promise<IUser | Error> => {
  try {
    const { data } = await Api.post("/user", json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar criar um user.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao tentar criar um user."
    );
  }
};

const update = async (id: string, json: any): Promise<IUser | Error> => {
  try {
    const { data } = await Api.put(`/user/${id}`, json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar atualizar um user.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar atualizar um user."
    );
  }
};

const remove = async (id: string): Promise<IUser | Error> => {
  try {
    const { data } = await Api.delete(`/user/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar deletar um user.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar deletar um user."
    );
  }
};

export const UserService = { getAll, getOne, create, update, remove };
