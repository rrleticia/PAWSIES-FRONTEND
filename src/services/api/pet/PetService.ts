import { IPet } from "../../../models";
import { Api } from "../axios-config";

const getAll = async (): Promise<IPet[] | Error> => {
  try {
    const { data } = await Api.get("/pet");

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os pets."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar todos os pets."
    );
  }
};

const search = async (id: string): Promise<IPet[] | Error> => {
  try {
    const { data } = await Api.get(`/pet/owner/${id}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os pets por owner fornecido."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar todos os pets por owner fornecido."
    );
  }
};

const getOne = async (id: string): Promise<IPet | Error> => {
  try {
    const { data } = await Api.get(`/pet/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar recuperar um pet.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar um pet."
    );
  }
};

const create = async (json: any): Promise<IPet | Error> => {
  try {
    const { data } = await Api.post("/pet", json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar criar um pet.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao tentar criar um pet."
    );
  }
};

const update = async (id: string, json: any): Promise<IPet | Error> => {
  try {
    const { data } = await Api.put(`/pet/${id}`, json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar atualizar um pet.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar atualizar um pet."
    );
  }
};

const remove = async (id: string): Promise<IPet | Error> => {
  try {
    const { data } = await Api.delete(`/pet/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar deletar um pet.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao tentar deletar um pet."
    );
  }
};

export const PetService = {
  getAll,
  search,
  getOne,
  create,
  update,
  remove,
};
