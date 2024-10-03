import Box from "@mui/material/Box";
import {
  GreenCard,
  RoundedButton,
  RoundedFilledTitle,
  RoundedTitle,
} from "../../components";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { useEffect, useState } from "react";
import { formatDate, space } from "../../shared";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

interface IListPageProps<T> {
  route: string;
  columns: GridColDef[];
  contextHook: () => any;
}

export const ListPage = <T,>({
  route,
  columns,
  contextHook,
}: IListPageProps<T>) => {
  const [rows, setRows] = useState<T[]>([]);
  const [count, setCount] = useState<Number>(0);

  useEffect(() => {
    setRows([]);
    setCount(rows.length);
  }, []);

  return (
    <Box sx={{ displat: "flex", flex: 1 }}>
      <PageInfo route={route} count={count} contextHook={contextHook} />
      <PageDataGrid columns={columns} pageRows={rows} />
    </Box>
  );
};

interface IPageInfoProps {
  route: string;
  count: Number;
  contextHook: () => any;
}

const PageInfo: React.FC<IPageInfoProps> = ({ route, count, contextHook }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { handleIDChange, handleOperationChange } = contextHook();

  const handleNewPage = (): void => {
    handleIDChange(undefined);
    handleOperationChange("REGISTER");
    navigate(`/${route}/operation`);
  };

  const route_upper = route.toUpperCase();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(4),
      }}
    >
      <RoundedFilledTitle text={`${route_upper} SUBSCRIBED`} />
      <RoundedTitle text={"DATE: " + formatDate(new Date())} />
      <RoundedTitle text={`${count} ${route_upper}`} />
      <RoundedButton
        text={`NEW ${route_upper}`}
        handleClick={handleNewPage}
      ></RoundedButton>
    </Box>
  );
};

interface IPageDataGridProps {
  columns: GridColDef[];
  pageRows: any[];
}

const PageDataGrid: React.FC<IPageDataGridProps> = ({ columns, pageRows }) => {
  return (
    <GreenCard padding={space.four_space}>
      <DataGrid
        sx={{
          display: "flex",
          flex: 1,
        }}
        columns={columns}
        rows={pageRows}
        hideFooter={false}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
        }}
        columnVisibilityModel={{
          id: false,
        }}
        pageSizeOptions={[5, 10, 20, 25, 40]}
      ></DataGrid>
    </GreenCard>
  );
};
