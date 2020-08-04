import React, { useState, useEffect } from "react";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Container } from "./styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#f5f5f5",
    color: "#333",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
  },
}))(TableRow);

function TableOrder({ props }) {
  const [demands, setDemands] = useState(props);
  useEffect(() => {
    const dadu = props.map((data) => data);
    let climb = dadu.sort((a, b) => (a.createdDate < b.createdDate ? 1 : -1));
    setDemands(climb);
  }, [props]);

  return (
    <Container>
      <h1>Este é seu ultimo pedido:</h1>
      <div className="detail-table">
        <div className="flex-table">
          <div>
            <p>Código: #{demands[0].id}</p>
            <h2>Detalhes envio: </h2>

            <p>
              Data do pedido:{" "}
              {moment(demands[0].createdDate).format("DD/MM/YYYY")}
            </p>
            <p>{demands[0].shipZipcode}</p>
            <p>
              {demands[0].shipStreet} N: {demands[0].shipNumber}
            </p>
            <p>
              {demands[0].shipCity}-{demands[0].shipState}
            </p>
          </div>
          <div>
            <h2>Forma de pagamento: </h2>
            <p>Valor total: {demands[0].vaucher}</p>
          </div>
          <div>
            <h2>Detalhes envio: </h2>
            <div>
              <p>Valor dos pedidos:..</p>
              <p>Frete:..</p>
            </div>
          </div>
          <div>
            <h2>--</h2>
            <p>{demands[0].totalPrice}</p>
            <p>{demands[0].shipValue}</p>
          </div>
        </div>
        <Link
          to={{
            pathname: `orders/${demands[0].id}`,
            search: demands[0].name,
            state: { id: demands[0].id },
          }}
          className="style-link-first"
        >
          <span>Ver seu pedido</span>
          <FaExternalLinkAlt />
        </Link>
      </div>
      <h1>Todos seus pedidos: </h1>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Código:-</StyledTableCell>
              <StyledTableCell align="right">Data</StyledTableCell>
              <StyledTableCell align="right">Status&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">
                Preço total&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell align="right">-- &nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demands.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {moment(row.createdDate).format("DD/MM/YYYY")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.shipStatus}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.totalPrice}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link
                    to={{
                      pathname: `orders/${row.id}`,
                      search: row.name,
                      state: { id: row.id },
                    }}
                    className="style-link"
                  >
                    <span>Ver pedido </span>
                    <FaExternalLinkAlt />
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TableOrder;
