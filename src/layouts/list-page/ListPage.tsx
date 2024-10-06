import Box from "@mui/material/Box";
import {
  GreenCard,
  RoundedButton,
  RoundedFilledTitle,
  RoundedTitle,
  SearchInput,
} from "../../components";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { useEffect, useState } from "react";
import { formatDate, space } from "../../shared";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { GridToolbarContainer } from "@mui/x-data-grid/components/containers/GridToolbarContainer";
import { GridToolbarQuickFilter } from "@mui/x-data-grid/components/toolbar/GridToolbarQuickFilter";
import { GridToolbarColumnsButton } from "@mui/x-data-grid/components/toolbar/GridToolbarColumnsButton";
import { GridToolbarDensitySelector } from "@mui/x-data-grid/components/toolbar/GridToolbarDensitySelector";
import { GridToolbarExport } from "@mui/x-data-grid/components/toolbar/GridToolbarExport";
import { GridToolbarFilterButton } from "@mui/x-data-grid/components/toolbar/GridToolbarFilterButton";

interface IListPageProps<T> {
  route: string;
  service: any;
  columns: GridColDef[];
  contextHook: () => any;
}

export const ListPage = <T,>({
  route,
  service,
  columns,
  contextHook,
}: IListPageProps<T>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [rows, setRows] = useState<T[]>([]);
  const [count, setCount] = useState<Number>(0);

  const getRows = async () => {
    const result = await service.getAll();
    if (result instanceof Error) {
    } else {
      setRows(result);
      setCount(rows.length);
    }
  };

  useEffect(() => {
    setLoading(true);
    getRows();
    setLoading(false);
  }, []);

  return (
    <Box sx={{ displat: "flex", flex: 1 }}>
      <SearchByID<T> route={route} setRows={setRows}></SearchByID>
      <PageInfo route={route} count={count} contextHook={contextHook} />
      <PageDataGrid columns={columns} pageRows={rows} />
    </Box>
  );
};

interface ISearchByIDProps<T> {
  route: string;
  setRows: (value: T[]) => void;
}

const SearchByID = <T,>({ route, setRows }: ISearchByIDProps<T>) => {
  if (route == "pet" || route == "appointment")
    return <SearchInput route={route} setRows={setRows}></SearchInput>;
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
    handleIDChange("NONE");
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
      <RoundedFilledTitle text={`${route_upper}S SUBSCRIBED`} />
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
        slots={{
          toolbar: CustomToolBar,
        }}
        hideFooter={false}
        checkboxSelection={true}
        getRowId={(row) => row.id}
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

const CustomToolBar = () => {
  const props: any = {
    button: { color: "info" },
  };

  return (
    <GridToolbarContainer
      sx={{
        mx: space.two_space,
        mt: space.two_space,
        mb: space.one_space,
      }}
    >
      <GridToolbarColumnsButton slotProps={props} />
      <GridToolbarFilterButton slotProps={props} />
      <GridToolbarDensitySelector slotProps={props} />
      <GridToolbarExport slotProps={props} />{" "}
      <Box sx={{ display: "flex", flex: 1 }}></Box>{" "}
      <GridToolbarQuickFilter slotProps={props} />
    </GridToolbarContainer>
  );
};
