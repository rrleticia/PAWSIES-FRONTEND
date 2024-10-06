import { ListPage } from "../../layouts";
import { vetColumns, useVetContext, IVet } from "../../shared";
import { VetService } from "../../services";

export const VetList = () => {
  return (
    <ListPage<IVet>
      route={"vet"}
      service={VetService}
      columns={vetColumns}
      contextHook={useVetContext}
    ></ListPage>
  );
};
