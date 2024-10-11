import { space } from "../../shared";
import { Typography } from "@mui/material";

interface IUnderlinedTitleProps {
  text: string;
}

export const UnderlinedTitle: React.FC<IUnderlinedTitleProps> = ({ text }) => {
  return (
    <Typography
      variant={"h3"}
      sx={{
        display: "flex",
        flexDirection: "column",

        marginX: space.two_space,
        marginBottom: space.two_half_space,

        paddingY: space.one_space,
        paddingX: space.five_space,

        textDecoration: "underline",

        color: "primary.contrastText",
      }}
    >
      {text}
    </Typography>
  );
};
