import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import TheoHomeImage from "../../assets/Home.jpg";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const TheoBanner = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: "20rem",
          width: "100%",
          borderTopeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: theme.spacing(2),
          borderBottomRightRadius: theme.spacing(2),
        }}
        image={TheoHomeImage}
        alt="Theodoro."
      />
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          color: "white",
          transform: "translate(-50%, -50%)", // Centers the text over the image
        }}
      >
        TAKE CARE OF YOUR PETS
      </Typography>
    </Box>
  );
};
