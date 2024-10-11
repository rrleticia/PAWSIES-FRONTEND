import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";

interface IGreyCardProps {
  full?: 1 | 0;
  height?: string;
  minHeight?: string;
  padding?: string;
  flexDirection?: string;
  alignContent?: string;
  alignItems?: string;
  children: React.ReactNode;
}

export const GreyCard: React.FC<IGreyCardProps> = ({
  full = 0,
  height,
  minHeight,
  padding,
  flexDirection,
  alignContent,
  alignItems,
  children,
}) => {
  const theme = useTheme();
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flex: full,

        flexDirection: flexDirection ?? "row",

        height: height ?? "auto",
        minHeight: minHeight ?? "auto",

        marginTop: theme.spacing(4),
        padding: padding ?? 0,

        alignContent: alignContent ?? "center",
        alignItems: alignItems ?? "center",
        justifyContent: "space-between",

        backgroundColor: "#EDEDED",

        borderRadius: theme.spacing(2),
      }}
    >
      {children}
    </Card>
  );
};
