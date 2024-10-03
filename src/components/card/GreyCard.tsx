import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";

interface IGreyCardProps {
  minHeight?: string;
  padding?: string;
  flexDirection?: string;
  children: React.ReactNode;
}

export const GreyCard: React.FC<IGreyCardProps> = ({
  minHeight,
  padding,
  flexDirection,
  children,
}) => {
  const theme = useTheme();
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: flexDirection ?? "row",

        minHeight: minHeight ?? "auto",

        marginTop: theme.spacing(4),
        padding: padding ?? 0,

        alignContent: "center",
        justifyContent: "space-between",

        backgroundColor: "#EDEDED",

        borderRadius: theme.spacing(2),
      }}
    >
      {children}
    </Card>
  );
};
