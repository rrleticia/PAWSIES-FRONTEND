import Box from "@mui/material/Box";
import {
  GreenCard,
  RoundedButton,
  RoundedFilledTitle,
  RoundedTitle,
} from "../../components";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import {
  GridColDef,
  GridValueGetter,
} from "@mui/x-data-grid/models/colDef/gridColDef";
import { IOwner } from "../../models";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { formatDate, space, useOwnerContext } from "../../shared";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export const OwnerList = () => {
  const [ownerRows, setOwnerRows] = useState<IOwner[]>([]);
  const [count, setCount] = useState<Number>(0);

  useEffect(() => {
    setOwnerRows([]);
    setCount(ownerRows.length);
  }, []);

  return (
    <Box sx={{}}>
      <OwnerInfo count={count} />
      <OwnerDataGrid ownerRows={ownerRows} />
    </Box>
  );
};

interface IOwnerInfoProps {
  count: Number;
}

const OwnerInfo: React.FC<IOwnerInfoProps> = ({ count }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { handleIDChange, handleOperationChange } = useOwnerContext();

  const handleNewOwner = (): void => {
    handleIDChange(undefined);
    handleOperationChange("REGISTER");
    navigate(`/owner/operation`);
  };

  useEffect(() => {
    //
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(4),
      }}
    >
      <RoundedFilledTitle text={"OWNERS SUBSCRIBED"} />
      <RoundedTitle text={"DATE: " + formatDate(new Date())} />
      <RoundedTitle text={`${count} OWNERS`} />
      <RoundedButton
        text={"NEW OWNER"}
        handleClick={handleNewOwner}
      ></RoundedButton>
    </Box>
  );
};

interface IOwnerDataGridPeops {
  ownerRows: IOwner[];
}

const OwnerDataGrid: React.FC<IOwnerDataGridPeops> = ({ ownerRows }) => {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      display: "flex",
      flex: 1,
      hideable: false,
    },
    {
      field: "email",
      headerName: "E-mail",
      display: "flex",
      flex: 1,
      hideable: false,
    },
    {
      field: "createdAt",
      headerName: "Creation Date",
      type: "date",
      display: "flex",
      flex: 1,
      hideable: false,
    },
    {
      field: "ownerID",
      headerName: "OwnerID",
      display: "flex",
      flex: 0,
      hideable: false,
    },

    {
      field: "acoes",
      type: "actions",
      headerName: "Operations",
      cellClassName: "actions",

      getActions: ({ id }) => {
        return [
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 16 }}
            sx={{
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            }}
            onClick={() => {}}
          >
            Open
          </Button>,
        ];
      },
    },
  ];

  return (
    <GreenCard padding={space.four_space}>
      <DataGrid
        sx={{
          display: "flex",
          flex: 1,
          "& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator":
            {
              display: "none",
            },
        }}
        hideFooter
        rows={ownerRows}
        columns={columns}
      ></DataGrid>
    </GreenCard>
  );
};
