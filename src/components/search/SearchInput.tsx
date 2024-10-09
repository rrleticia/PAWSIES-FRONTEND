import Box from "@mui/material/Box";
import { GreyCard, SearchInputBox } from "..";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import GordaSearchImage from "../../assets/Gorda.jpg";
import { search, validateString } from "../../shared";
import { useState } from "react";
import Card from "@mui/material/Card";

interface ISearchInputProps {
  route: string;
  setRows: (value: any[]) => void;
  service: any;
}

export const SearchInput: React.FC<ISearchInputProps> = ({
  route,
  setRows,
  service,
}) => {
  const theme = useTheme();

  const route_upper = route.toUpperCase();

  const search_upper = () => {
    if (route_upper == "PET") return "OWNER";
    if (route_upper == "APPOINTMENT") return "PET";
    else return "??";
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [id, setID] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClick = async () => {
    setLoading(true);
    setHasError(!validateString(id));
    if (!hasError) {
      const result = await service.search(id, route);
      if (result instanceof Error) {
      } else {
        setRows(result);
      }
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
    >
      <Card
        elevation={0}
        sx={{
          display: "flex",
          width: "80%",
          height: "6rem",
          justifyContent: "center",
          marginRight: theme.spacing(4),
          marginTop: theme.spacing(4),
          backgroundColor: "background.default",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            borderTopeftRadius: 0,
            borderTopRightRadius: 0,
            borderRadius: theme.spacing(2),
          }}
          image={GordaSearchImage}
          alt="Theodoro."
        ></CardMedia>
      </Card>

      <Box sx={{ width: "50%" }}>
        <GreyCard full={0} height={"6rem"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginX: theme.spacing(4),
              marginTop: theme.spacing(2.5),
            }}
          >
            <SearchInputBox
              name={route + "-search"}
              label={`PICK A/AN ${search_upper()} ID`}
              value={id}
              hasError={hasError}
              errorText={hasError ? "Please provide a valid id." : ""}
              handleChange={setID}
              disabled={loading}
            ></SearchInputBox>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderRightWidth: 2,
                color: "text.primary",
                marginBottom: theme.spacing(2.5),
              }}
            />
            <Button
              sx={{
                borderTopRightRadius: theme.spacing(1.5),
                borderBottomRightRadius: theme.spacing(1.5),
                fontWeight: 400,
                fontSize: "1rem",

                color: "primary.contrastText",
                backgroundColor: "white",

                paddingX: theme.spacing(9),
                marginBottom: theme.spacing(2.5),
              }}
              onClick={handleClick}
            >
              SEARCH
            </Button>
          </Box>
        </GreyCard>
      </Box>
    </Box>
  );
};
