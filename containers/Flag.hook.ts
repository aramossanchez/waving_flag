import { useEffect, useState } from "react";

export default function useFlag() {

  const numberOfColumns = 20;
  const numberOfRows = 8;

  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

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

  const loader = () => {
    const timeOut = numberOfColumns * 100
    setTimeout(() => {
      setLoading(false);
    }, timeOut);
  }

  useEffect(() => {
    createColumns();
    createRows();
    loader();
  }, []);
    

  return {columns, rows, loading};
}