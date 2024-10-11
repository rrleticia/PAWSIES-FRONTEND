import { useTheme } from "@mui/material";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";

interface ISelectBoxProps {
  name: string;
  label: string;
  value: string;
  options: { value: string; label: string }[]; // Array of options for the select box
  hasError: boolean;
  errorText: string;
  handleChange: (event: any) => void;
  disabled?: boolean;
  inputRef?: any;
}

export const SelectBox: React.FC<ISelectBoxProps> = ({
  inputRef,
  name,
  label,
  value,
  options,
  hasError,
  errorText,
  disabled,
  handleChange,
}) => {
  const theme = useTheme();

  return (
    <FormControl
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
      }}
      error={hasError}
      disabled={disabled ?? false}
    >
      <InputLabel shrink={false}>{value == "" ? label : ""}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={handleChange}
        label={label}
        inputRef={inputRef ?? undefined}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {hasError && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};
