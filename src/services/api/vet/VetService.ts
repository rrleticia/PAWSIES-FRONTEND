import { IVet } from "../../../models";
import { Api } from "../axios-config";

const getAll = async (): Promise<IVet[] | Error> => {
  try {
    const { data } = await Api.get("/vet");

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os vets."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar todos os vets."
    );
  }
};

const getOne = async (id: string): Promise<IVet | Error> => {
  try {
    const { data } = await Api.get(`/vet/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar recuperar um vet.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar um vet."
    );
  }
};

const create = async (json: any): Promise<IVet | Error> => {
  try {
    const { data } = await Api.post("/vet", json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar criar um vet.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao tentar criar um vet."
    );
  }
};

const update = async (id: string, json: any): Promise<IVet | Error> => {
  try {
    const { data } = await Api.put(`/vet/${id}`, json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar atualizar um vet.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar atualizar um vet."
    );
  }
};

const remove = async (id: string): Promise<IVet | Error> => {
  try {
    const { data } = await Api.delete(`/vet/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar deletar um vet.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao tentar deletar um vet."
    );
  }
};

export const VetService = { getAll, getOne, create, update, remove };
