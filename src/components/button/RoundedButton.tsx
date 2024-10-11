import Button from "@mui/material/Button";
import { space } from "../../shared";
import { useTheme } from "@mui/material";

interface IRoundedButtonProps {
  text: string;
  type?: "submit";
  width?: string;
  handleClick?: () => void;
}

export const RoundedButton: React.FC<IRoundedButtonProps> = ({
  text,
  type,
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

        marginX: space.two_space,

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
      type={type}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
