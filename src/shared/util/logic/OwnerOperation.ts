import { IOwner } from "../../../models";

export const register = async (
  service: any,
  json: any
): Promise<IOwner | any> => {
  const result = await service.create(json);
  return result;
};
