import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";

interface IInputBoxProps {
  text: string;
  type?: "text" | "number";
  value: string;
  hasError: boolean;
  errorText: string;
  handleChange: (change: string) => void;
  disabled?: boolean;
  inputRef?: any;
}

export const InputBox: React.FC<IInputBoxProps> = ({
  text,
  type,
  value,
  hasError,
  errorText,
  inputRef,
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
      }}
      slotProps={{
        inputLabel: {
          shrink: false,
        },

        formHelperText: { style: { backgroundColor: "white" } },
      }}
      inputRef={inputRef ?? undefined}
      label={value == "" ? text : ""}
      type={type ?? "text"}
      value={value}
      error={hasError}
      helperText={errorText}
      disabled={disabled ?? false}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    ></TextField>
  );
};
