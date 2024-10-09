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

const getOne = async (id: string): Promise<IVet | Error> => {
  try {
    const { data } = await Api.get(`/vet/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar recuperar um vet.");
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

const create = async (json: any): Promise<IVet | Error> => {
  try {
    const { data } = await Api.post("/vet", json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar criar um vet.");
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

const update = async (json: any): Promise<IVet | Error> => {
  try {
    const { data } = await Api.put(`/vet`, json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar atualizar um vet.");
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

const remove = async (id: string): Promise<IVet | Error> => {
  try {
    const { data } = await Api.delete(`/vet/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar deletar um vet.");
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

export const VetService = { getAll, getOne, create, update, remove };
