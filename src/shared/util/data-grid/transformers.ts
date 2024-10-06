import { GridValueGetter } from "@mui/x-data-grid/models/colDef/gridColDef";

export const getDateTransform: GridValueGetter<any[number], unknown> = (
  value,
  row
) => {
  return new Date(row.createdAt);
};

export const getPetInfo: GridValueGetter<any[number], unknown> = (
  value,
  row
) => {
  return `${row.pet.name + " - " || ""} ${row.pet.age + " years - " || ""} ${
    row.pet.breed || ""
  }`;
};
