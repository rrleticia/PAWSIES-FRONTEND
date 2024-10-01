import { space } from "../../shared";
import { Typography, useTheme } from "@mui/material";

interface IRoundedTitleProps {
  text: string;
}

export const RoundedTitle: React.FC<IRoundedTitleProps> = ({ text }) => {
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
        color: "primary.contrastText",
      }}
    >
      {text}
    </Typography>
  );
};
