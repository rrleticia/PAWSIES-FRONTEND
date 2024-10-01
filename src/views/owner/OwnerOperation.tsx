import { useNavigate } from "react-router-dom";
import { useOwnerContext, validOperation } from "../../shared";
import { useEffect } from "react";

export const OwnerOperation = () => {
  const navigate = useNavigate();
  const { id, operation, handleIDChange, handleOperationChange, resetDefault } =
    useOwnerContext();

  useEffect(() => {
    if (!validOperation(id, operation)) {
      resetDefault();
      navigate(-1);
    }
  }, [handleIDChange, handleOperationChange]);

  return <></>;
};
