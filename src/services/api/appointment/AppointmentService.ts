import { IAppointment } from "../../../shared";
import { Api } from "../axios-config";

const getAll = async (): Promise<IAppointment[] | Error> => {
  try {
    const { data } = await Api.get("/appointment");

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os appointments."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar todos os appointments."
    );
  }
};

const search = async (id: string): Promise<IAppointment[] | Error> => {
  try {
    const { data } = await Api.get(`/appointment/${id}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os appointments por pet fornecido."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar todos os appointments por pet fornecido."
    );
  }
};

const getAllByDate = async (date: string): Promise<IAppointment[] | Error> => {
  try {
    const { data } = await Api.get(`/appointment/date/${date}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os appointments por pet fornecido."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar todos os appointments por pet fornecido."
    );
  }
};

const getOne = async (id: string): Promise<IAppointment | Error> => {
  try {
    const { data } = await Api.get(`/appointment/${id}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar um appointment."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar recuperar um appointment."
    );
  }
};

const create = async (json: any): Promise<IAppointment | Error> => {
  try {
    const { data } = await Api.post("/appointment", json);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar criar um appointment."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar criar um appointment."
    );
  }
};

const update = async (id: string, json: any): Promise<IAppointment | Error> => {
  try {
    const { data } = await Api.put(`/appointment/${id}`, json);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar atualizar um appointment."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar atualizar um appointment."
    );
  }
};

const updateStatus = async (
  id: string,
  status: any
): Promise<IAppointment | Error> => {
  try {
    const { data } = await Api.put(`/appointment/${id}/status/${status}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar atualizar um appointment com o status fornecido."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar atualizar um appointment com o status fornecido."
    );
  }
};

const remove = async (id: string): Promise<IAppointment | Error> => {
  try {
    const { data } = await Api.delete(`/appointment/${id}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar deletar um appointment."
    );
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao tentar deletar um appointment."
    );
  }
};

export const AppointmentService = {
  getAll,
  search,
  getAllByDate,
  getOne,
  create,
  update,
  updateStatus,
  remove,
};
