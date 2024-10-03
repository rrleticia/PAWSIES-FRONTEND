import { ListPage } from "../../components";
import { ownerColumns, useOwnerContext } from "../../shared";
import { IOwner } from "../../models";

export const OwnerList = () => {
  return (
    <ListPage<IOwner>
      route={"owner"}
      columns={ownerColumns}
      contextHook={useOwnerContext}
    ></ListPage>
  );
};
