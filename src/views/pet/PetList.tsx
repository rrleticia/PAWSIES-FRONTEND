import { ListPage } from "../../layouts";
import { IPet, petColumns, usePetContext } from "../../shared";
import { PetService } from "../../services";

export const PetList = () => {
  return (
    <ListPage<IPet>
      route={"pet"}
      service={PetService}
      columns={petColumns}
      contextHook={usePetContext}
    ></ListPage>
  );
};
