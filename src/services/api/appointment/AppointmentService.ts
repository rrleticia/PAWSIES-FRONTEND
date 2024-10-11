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

const search = async (name: string): Promise<IAppointment[] | Error> => {
  try {
    const { data } = await Api.get(`/appointment/pet/${name}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os appointments por pet fornecido."
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

const getAllByDate = async (date: string): Promise<IAppointment[] | Error> => {
  try {
    const { data } = await Api.get(`/appointment/date/${date}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos os appointments por pet fornecido."
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

const getOne = async (id: string): Promise<IAppointment | Error> => {
  try {
    const { data } = await Api.get(`/appointment/${id}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar um appointment."
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

const create = async (json: any): Promise<IAppointment | Error> => {
  try {
    const { data } = await Api.post("/appointment", json);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar criar um appointment."
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

const update = async (json: any): Promise<IAppointment | Error> => {
  try {
    const { data } = await Api.put(`/appointment`, json);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar atualizar um appointment."
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

const remove = async (id: string): Promise<IAppointment | Error> => {
  try {
    const { data } = await Api.delete(`/appointment/${id}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar deletar um appointment."
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
