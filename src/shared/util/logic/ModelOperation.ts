import { OperationType } from "../../interfaces";

export const ModelOperation = async <T>(
  operation: OperationType,
  service: any,
  id?: string,
  json?: any
): Promise<T | Error> => {
  if (id) {
    if (operation == "VIEW") return await view(service, id);
    if (operation == "EDIT") return await edit(service, id, json);
    if (operation == "DELETE") return await remove(service, id);
  }
  if (json) {
    if (operation == "REGISTER") return await register(service, json);
  }
  return new Error("Error during operation: Uknown error.");
};

const register = async <T>(service: any, json: any): Promise<T> => {
  try {
    const result = await service.create(json);
    return result;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

const view = async <T>(service: any, id: string): Promise<T> => {
  try {
    const result = await service.getOne(id);
    return result;
  } catch (error) {
    console.error("Error during view:", error);
    throw error;
  }
};

const edit = async <T>(service: any, id: string, json: any): Promise<T> => {
  try {
    const result = await service.update(id, json);
    return result;
  } catch (error) {
    console.error("Error during editing:", error);
    throw error;
  }
};

const remove = async <T>(service: any, id: string): Promise<T> => {
  try {
    const result = await service.delete(id);
    return result;
  } catch (error) {
    console.error("Error during removal:", error);
    throw error;
  }
};
