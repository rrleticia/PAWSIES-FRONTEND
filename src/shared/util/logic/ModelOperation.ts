import { OperationType } from "../../interfaces";

export const ModelOperation = async <T>(
  operation: OperationType,
  service: any,
  id?: string,
  json?: any
): Promise<T | Error> => {
  if (id) {
    if (operation == "VIEW") return await view(service, id);
    if (operation == "EDIT") return await edit(service, json);
    if (operation == "DELETE") return await remove(service, id);
  }
  if (json) {
    if (operation == "REGISTER") return await register(service, json);
  }
  return new Error("Error during operation: Uknown error.");
};

const register = async <T>(service: any, json: any): Promise<T | Error> => {
  const result = await service.create(json);
  return result;
};

const view = async <T>(service: any, id: string): Promise<T | Error> => {
  const result = await service.getOne(id);
  return result;
};

const edit = async <T>(service: any, json: any): Promise<T | Error> => {
  const result = await service.update(json);
  return result;
};

const remove = async <T>(service: any, id: string): Promise<T | Error> => {
  const result = await service.remove(id);
  return result;
};
