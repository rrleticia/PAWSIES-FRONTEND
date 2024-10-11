import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";

interface IInputBoxProps {
  name: string;
  label: string;
  type?: "text" | "number";
  value: string;
  hasError: boolean;
  errorText: string;
  handleChange: (event: any) => void;
  disabled?: boolean;
  inputRef?: any;
}

export const InputBox: React.FC<IInputBoxProps> = ({
  inputRef,
  name,
  label,
  type,
  value,
  hasError,
  errorText,
  disabled,
  handleChange,
}) => {
  const theme = useTheme();
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
        "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: "#a3a7b6",
        },
        "&  .MuiFormHelperText-root.Mui-error": { color: "error.dark" },
      }}
      slotProps={{
        inputLabel: {
          shrink: false,
        },

        formHelperText: { style: { backgroundColor: "white" } },
      }}
      inputRef={inputRef ?? undefined}
      name={name}
      label={value == "" ? label : ""}
      type={type ?? "text"}
      value={value}
      error={hasError}
      helperText={errorText}
      disabled={disabled ?? false}
      onChange={handleChange}
    ></TextField>
  );
};
