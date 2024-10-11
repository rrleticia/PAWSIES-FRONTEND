import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import TheoImage from "../../assets/Theo.jpg";
import {
  ILoginHookJson,
  space,
  useAppBarContext,
  useAuthContext,
  useLoginForm,
} from "../../shared";
import { InputBox, InputBoxAdorned, RoundedButton } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { height } = useAppBarContext();

  const cardHeight = `calc(100vh - 4.5rem - ${height}px)`;

  const [loading, setLoading] = useState<boolean>(false);

  const {
    formData,
    errors,
    handleInputChange,
    handleErrorChange,
    verifyErrors,
  } = useLoginForm();

  const { login } = useAuthContext();

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (verifyErrors()) {
      const result = await login(formData.email, formData.password);
      if (result) navigate("/home");
    } else {
      if (handleErrorChange) {
        handleErrorChange({
          email: "The user or password are incorrect.",
          password: "The user or password are incorrect.",
        });
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
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

          <LoginInput
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
            disabled={loading}
          />
        </Card>
      </Box>
    </form>
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

interface ILoginInputProps {
  formData: ILoginHookJson;
  handleInputChange: (event: any) => void;
  errors: any;
  disabled: boolean;
}

const LoginInput: React.FC<ILoginInputProps> = ({
  formData,
  handleInputChange,
  errors,
  disabled,
}) => {
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
        name={"email"}
        label={"E-MAIL"}
        disabled={disabled}
        value={formData.email}
        hasError={Boolean(errors.email)}
        errorText={errors.email || ""}
        handleChange={handleInputChange}
      ></InputBox>
      <InputBoxAdorned
        name={"password"}
        label={"PASSWORD"}
        disabled={disabled}
        value={formData.password}
        hasError={Boolean(errors.password)}
        errorText={errors.password || ""}
        handleChange={handleInputChange}
      ></InputBoxAdorned>
      <RoundedButton text={"SIGN IN"} type={"submit"}></RoundedButton>
    </Box>
  );
};
