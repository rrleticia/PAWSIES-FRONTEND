import { useState } from 'react';

export const useRememberMe = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  const handleRememberMe = () => {
    if (rememberMe) {
      setRememberMe(!rememberMe);
    } else if (!rememberMe) {
      setRememberMe(!rememberMe);
    }
  };

  return {
    rememberMe,
    handleRememberMe,
  };
};
