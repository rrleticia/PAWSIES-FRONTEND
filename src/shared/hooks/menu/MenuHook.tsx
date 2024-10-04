import React from 'react';

export const useMenuState = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const show = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    show,
    handleClick,
    handleClose,
  };
};
