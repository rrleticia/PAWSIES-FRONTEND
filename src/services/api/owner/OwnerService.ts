import { IOwner } from "../../../shared";
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

const getOne = async (id: string): Promise<IOwner | Error> => {
  try {
    const { data } = await Api.get(`/owner/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar recuperar um owner.");
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

const create = async (json: any): Promise<IOwner | Error> => {
  try {
    const { data } = await Api.post("/owner/", json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar criar um owner.");
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

const update = async (json: any): Promise<IOwner | Error> => {
  try {
    const { data } = await Api.put("/owner", json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar atualizar um owner.");
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

const remove = async (id: string): Promise<IOwner | Error> => {
  try {
    const { data } = await Api.delete(`/owner/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar deletar um owner.");
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

export const OwnerService = { getAll, getOne, create, update, remove };
