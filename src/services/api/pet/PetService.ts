import { IPet } from "../../../shared";
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

const search = async (username: string): Promise<IPet[] | Error> => {
  try {
    const { data } = await Api.get(`/pet/owner/${username}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os pets por owner fornecido."
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

const getOne = async (id: string): Promise<IPet | Error> => {
  try {
    const { data } = await Api.get(`/pet/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar recuperar um pet.");
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

const create = async (json: any): Promise<IPet | Error> => {
  try {
    const { data } = await Api.post("/pet", json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar criar um pet.");
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

const update = async (json: any): Promise<IPet | Error> => {
  try {
    const { data } = await Api.put(`/pet`, json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar atualizar um pet.");
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

const remove = async (id: string): Promise<IPet | Error> => {
  try {
    const { data } = await Api.delete(`/pet/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar deletar um pet.");
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

export const PetService = {
  getAll,
  search,
  getOne,
  create,
  update,
  remove,
};
