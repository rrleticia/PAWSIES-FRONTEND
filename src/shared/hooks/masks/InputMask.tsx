import { useMask } from "@react-input/mask";

export const useInputMask = () => {
  const phoneRef = useMask({
    mask: "(__) ____-____",
    replacement: { _: /\d/ },
  });

  const openHourRef = useMask({
    mask: "__:__",
    replacement: { _: /\d/ },
  });

  const closeHourRef = useMask({
    mask: "__:__",
    replacement: { _: /\d/ },
  });

  const currentDate = useMask({
    mask: "__/__/____",
    replacement: { _: /\d/ },
  });

  const startDateRef = useMask({
    mask: "__/__/____",
    replacement: { _: /\d/ },
  });

  const endDateRef = useMask({
    mask: "__/__/____",
    replacement: { _: /\d/ },
  });

  return {
    phoneRef,
    openHourRef,
    closeHourRef,
    currentDate,
    startDateRef,
    endDateRef,
  };
};
