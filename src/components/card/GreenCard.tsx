import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";

interface IGreenCardProps {
  full?: 1 | 0;
  minHeight?: string;
  padding?: string;
  flexDirection?: string;
  alignContent?: string;
  alignItems?: string;
  children: React.ReactNode;
}

export const GreenCard: React.FC<IGreenCardProps> = ({
  full = 0,
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

        minHeight: minHeight ?? "auto",

        marginTop: theme.spacing(4),
        padding: padding ?? 0,

        alignContent: alignContent ?? "center",
        alignItems: alignItems ?? "center",
        justifyContent: "space-between",

        borderRadius: theme.spacing(2),
      }}
    >
      {children}
    </Card>
  );
};
