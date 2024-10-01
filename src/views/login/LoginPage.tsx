import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import TheoImage from "/assets/Theo.jpg";
import { space, useAppBarContext } from "../../shared";
import { InputBox, RoundedButton } from "../../components";

export const LoginPage = () => {
  const theme = useTheme();

  const { height } = useAppBarContext();

  const cardHeight = `calc(100vh - 4.5rem - ${height}px)`;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: cardHeight,
      }}
    >
      <Card
        elevation={0}
        sx={{
          display: "flex",
          width: "100%",

          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: theme.spacing(2),
          borderBottomRightRadius: theme.spacing(2),
        }}
      >
        <LoginImage height={cardHeight} />
        <LoginInput />
      </Card>
    </Box>
  );
};

interface IHeightProps {
  height: string;
}

const LoginImage: React.FC<IHeightProps> = ({ height }) => {
  return (
    <CardMedia
      component="img"
      sx={{
        height: height,
        width: "50%",
        borderTopeftRadius: 0,
        borderTopRightRadius: 0,
      }}
      image={TheoImage}
      alt="Theodoro."
    />
  );
};

const LoginInput: React.FC<{}> = ({}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        width: "50%",

        margin: space.seven_space,

        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant={"h3"}
        sx={{
          fontWeight: "700",
          marginBottom: theme.spacing(2),
        }}
      >
        Login
      </Typography>

      <InputBox
        text={"Email"}
        value={""}
        hasError={false}
        errorText={""}
        handleChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></InputBox>

      <InputBox
        text={"Password"}
        value={""}
        hasError={false}
        errorText={""}
        handleChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></InputBox>
      <RoundedButton
        text={"SIGN IN"}
        handleClick={function (): {} {
          throw new Error("Function not implemented.");
        }}
      ></RoundedButton>
    </Box>
  );
};
