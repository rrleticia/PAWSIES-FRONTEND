import Box from "@mui/material/Box";
import { space } from "../../shared";

interface ISideInputBoxProps {
  side: "left" | "right";
  children: React.ReactNode;
}

export const SideInputBox: React.FC<ISideInputBoxProps> = ({
  side,
  children,
}) => {
  const width = `calc(100% - ${space.one_space})`;
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        sx={{
          width: width,
          marginRight: side == "left" ? space.two_space : 0,
          marginLeft: side == "right" ? space.two_space : 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
