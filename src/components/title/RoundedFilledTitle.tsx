import { space } from "../../shared";
import { Typography, useTheme } from "@mui/material";

interface IRoundedFilledTitleProps {
  text: string;
}

export const RoundedFilledTitle: React.FC<IRoundedFilledTitleProps> = ({
  text,
}) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        display: "flex",

        marginX: space.two_space,

        paddingY: space.one_space,
        paddingX: space.five_space,

        border: 1,
        borderColor: "primary.contrastText",
        borderRadius: theme.spacing(5),

        fontSize: "1.35rem",
        fontWeight: 400,

        color: "white",
        backgroundColor: "primary.contrastText",
      }}
    >
      {text}
    </Typography>
  );
};
