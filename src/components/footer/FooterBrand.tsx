import Box from "@mui/material/Box";
import { GreenCard } from "../card";
import { Logo } from "../logo";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { space } from "../../shared";

export const FooterBrand: React.FC<{}> = ({}) => {
  const theme = useTheme();

  return (
    <GreenCard padding={space.four_space}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Typography variant="body2" sx={{ paddingRight: theme.spacing(2) }}>
            a project by Leticia Ramos Rodrigues
          </Typography>
          <Typography variant="body2">{"© "}</Typography>
          <Typography variant="body2" sx={{ paddingLeft: theme.spacing(2) }}>
            {"2024"}
          </Typography>
        </Box>
      </Box>
    </GreenCard>
  );
};
