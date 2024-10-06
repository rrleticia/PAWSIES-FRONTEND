import { useMask } from "@react-input/mask";

export const useInputMask = () => {
  const phoneRef = useMask({
    mask: "(__) ____-____",
    replacement: { _: /\d/ },
  });

  const hourRef = useMask({
    mask: "__:__",
    replacement: { _: /\d/ },
  });

  const dateRef = useMask({
    mask: "__:__",
    replacement: { _: /\d/ },
  });

  return {
    phoneRef,
    hourRef,
    dateRef,
  };
};
