import { ListPage } from "../../layouts";
import { IOwner, ownerColumns, useOwnerContext } from "../../shared";
import { OwnerService } from "../../services";

export const OwnerList = () => {
  return (
    <ListPage<IOwner>
      route={"owner"}
      service={OwnerService}
      columns={ownerColumns}
      contextHook={useOwnerContext}
    ></ListPage>
  );
};
