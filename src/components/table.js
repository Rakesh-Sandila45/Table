import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FileOpenIcon from "@mui/icons-material/FileOpen";
function createData(name, entityId, entityName, amount, type, status, action) {
  return { name, entityId, entityName, amount, type, status, action };
}

const rows = [
  createData(1, 2666019159, "Rakesh", 345678, "Creditor", "Repair"),
  createData(2, 2666019159, "Kiran", 9879, "Creditor", "Repair"),
  createData(3, 2666019159, "Sharat", 84229, "Creditor", "Repair"),
  createData(4, 2666019159, "Dhanunjay", 832298, "Creditor", "Repair"),
  createData(5, 2666019159, "Itachi", 54904, "Creditor", "Repair"),
];

const MyTable = () => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Entity Id</TableCell>
              <TableCell align="right">Entity Name</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.entityId}</TableCell>
                <TableCell align="right">{row.entityName}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right" sx={{ display: "flex" }}>
                  <FileOpenIcon sx={{ color: "red" }} />
                  <InfoIcon sx={{ color: "blue" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default MyTable;
