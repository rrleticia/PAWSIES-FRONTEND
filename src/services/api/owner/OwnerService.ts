import { IOwner } from "../../../models";
import { Api } from "../axios-config";

const getAll = async (): Promise<IOwner[] | Error> => {
  try {
    const { data } = await Api.get("/owner");

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os owneres."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar todos os owneres."
    );
  }
};

const getOne = async (id: string): Promise<IOwner | Error> => {
  try {
    const { data } = await Api.get(`/owner/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar recuperar um owner.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar um owner."
    );
  }
};

const create = async (json: any): Promise<IOwner | Error> => {
  try {
    const { data } = await Api.post("/owner", json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar criar um owner.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao tentar criar um owner."
    );
  }
};

const update = async (id: string, json: any): Promise<IOwner | Error> => {
  try {
    const { data } = await Api.put(`/owner/${id}`, json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar atualizar um owner.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar atualizar um owner."
    );
  }
};

const remove = async (id: string): Promise<IOwner | Error> => {
  try {
    const { data } = await Api.delete(`/owner/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar deletar um owner.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar deletar um owner."
    );
  }
};

export const OwnerService = { getAll, getOne, create, update, remove };
