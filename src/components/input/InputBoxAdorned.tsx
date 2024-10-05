import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface IInputBoxAdornedProps {
  name: string;
  label: string;
  value: string;
  hasError: boolean;
  errorText: string;
  handleChange: (event: any) => void;
  disabled?: boolean;
  inputRef?: any;
}

export const InputBoxAdorned: React.FC<IInputBoxAdornedProps> = ({
  inputRef,
  name,
  label,
  value,
  hasError,
  errorText,
  disabled,
  handleChange,
}) => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      fullWidth={true}
      variant="outlined"
      sx={{
        marginBottom: theme.spacing(2.5),
        borderRadius: theme.spacing(2),
        backgroundColor: "white",
        "& fieldset": { border: "none" },
        "& label.Mui-focused": {
          color: "primary.contrastText",
        },
      }}
      slotProps={{
        inputLabel: {
          shrink: false,
        },
        formHelperText: { style: { backgroundColor: "white" } },
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      inputRef={inputRef ?? undefined}
      name={name}
      label={value == "" ? label : ""}
      type={showPassword ? "text" : "password"}
      value={value}
      error={hasError}
      helperText={errorText}
      disabled={disabled ?? false}
      onChange={handleChange}
    ></TextField>
  );
};
