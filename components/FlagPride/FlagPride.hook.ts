import { useEffect, useState } from "react";

export default function useFlagPride() {

  const numberOfColumns = 20;
  const numberOfRows = 8;

  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<string[]>([]);

  const createColumns = () => {
    const preColumns = [];
    for (let i = 1; i <= numberOfColumns; i++) {
      preColumns.push(i.toString());
    }
    setColumns(preColumns);
  }

  const createRows = () => {
    const preRows = [];
    for (let i = 1; i <= numberOfRows; i++) {
      preRows.push(i.toString());
    }
    setRows(preRows);
  }

  useEffect(() => {
    createColumns();
    createRows();
  }, []);
    

  return {columns, rows};
}