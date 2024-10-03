import Button from "@mui/material/Button";
import { space } from "../../shared";
import { useTheme } from "@mui/material";

interface IRoundedButtonProps {
  text: string;
  width?: string;
  handleClick?: () => void;
}

export const RoundedButton: React.FC<IRoundedButtonProps> = ({
  text,
  width,
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

        borderColor: "primary.contrastText",
        borderRadius: theme.spacing(5),

        fontSize: space.two_half_space,
        fontWeight: 400,
        color: "primary.contrastText",

        ":hover": {
          backgroundColor: "white",
        },
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
