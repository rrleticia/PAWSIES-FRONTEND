import Button from "@mui/material/Button";
import { space } from "../../shared";
import { useTheme } from "@mui/material";

interface IRoundedFilledButtonProps {
  text: string;
  type?: "button" | "submit";
  width?: string;
  disabled?: boolean;
  handleClick?: () => void;
}

export const RoundedFilledButton: React.FC<IRoundedFilledButtonProps> = ({
  text,
  type,
  width,
  disabled,
  handleClick = () => {},
}) => {
  const theme = useTheme();
  return (
    <Button
      fullWidth={false}
      variant="outlined"
      sx={{
        display: "flex",
        width: width ?? "auto",

        paddingX: space.five_space,
        marginBottom: space.two_half_space,

        borderColor: "primary.contrastText",
        borderRadius: theme.spacing(5),

        fontSize: space.two_half_space,
        fontWeight: 400,

        color: "white",
        backgroundColor: "primary.contrastText",
        ":hover": {
          backgroundColor: "secondary.contrastText",
        },
        ":disabled": {
          backgroundColor: "white",
        },
      }}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
