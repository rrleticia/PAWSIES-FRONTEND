import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";

interface ISearchInputBoxProps {
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

export const SearchInputBox: React.FC<ISearchInputBoxProps> = ({
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
        borderTopLeftRadius: theme.spacing(1.5),
        borderBottomLeftRadius: theme.spacing(1.5),
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
      name={name}
      label={value == "" ? label : ""}
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
