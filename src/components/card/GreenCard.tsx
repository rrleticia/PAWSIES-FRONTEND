import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";

interface IGreenCardProps {
  padding?: string;
  flexDirection?: string;
  children: React.ReactNode;
}

export const GreenCard: React.FC<IGreenCardProps> = ({
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
        marginTop: theme.spacing(4),
        alignContent: "center",
        borderRadius: theme.spacing(2),
        justifyContent: "space-between",
        padding: padding ?? 0,
      }}
    >
      {children}
    </Card>
  );
};
