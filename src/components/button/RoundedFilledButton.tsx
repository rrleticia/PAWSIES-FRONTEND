import Button from "@mui/material/Button";
import { space } from "../../shared";
import { useTheme } from "@mui/material";

interface IRoundedFilledButtonProps {
  text: string;
  width?: string;
  handleClick?: () => void;
}

export const RoundedFilledButton: React.FC<IRoundedFilledButtonProps> = ({
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
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
