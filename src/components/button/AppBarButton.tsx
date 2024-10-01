import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

interface IAppBarButtonProps {
  text: string;
  handleClick: () => {};
}

export const AppBarButton: React.FC<IAppBarButtonProps> = ({
  text,
  handleClick,
}) => {
  const theme = useTheme();
  return (
    <Button
      disableRipple={true}
      sx={{
        fontSize: "1.15rem",
        fontWeight: 700,
        color: "primary.contrastText",

        paddingRight: theme.spacing(1),
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
