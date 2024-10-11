import Button from "@mui/material/Button";
import { space } from "../../shared";
import { useTheme } from "@mui/material";

interface IRoundedSwitchButtonProps {
  text: string;
  filled: boolean;
  disabled: boolean;
  width?: string;
  handleClick?: () => void;
}

export const RoundedSwitchButton: React.FC<IRoundedSwitchButtonProps> = ({
  text,
  filled,
  disabled,
  width,
  handleClick = () => {},
}) => {
  const theme = useTheme();
  return (
    <Button
      fullWidth={false}
      disabled={disabled}
      variant="outlined"
      sx={{
        display: "flex",
        width: width ?? "80%",

        paddingX: space.five_space,
        marginBottom: space.two_half_space,

        borderColor: "primary.contrastText",
        borderRadius: theme.spacing(5),

        fontSize: space.two_half_space,
        fontWeight: 400,

        color: filled ? "white" : "primary.contrastText",
        backgroundColor: filled ? "primary.contrastText" : "auto",

        ":hover": {
          backgroundColor: filled ? "primary.contrastText" : "white",
        },
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
