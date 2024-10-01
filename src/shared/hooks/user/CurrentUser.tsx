import { useState } from 'react';
import { IUser } from '../../../models';

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();

  const handleUserChange = (value: IUser | undefined) => {
    setCurrentUser(value);
  };

  return {
    currentUser,
    handleUserChange,
  };
};
