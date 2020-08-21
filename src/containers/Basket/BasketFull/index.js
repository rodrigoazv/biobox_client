/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import SettingsIcon from "@material-ui/icons/Settings";
import { GoCheck, GoX } from "react-icons/go";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputBase from "@material-ui/core/InputBase";
import ButtoFull from "../../../components/ButtonFull";

import { useSelector, useDispatch } from "react-redux";
import { Container } from "./styles";
import { addItem } from "../../../store/ducks/cart";

import formatPrice from "../../../helpers/formatPrice";
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a7d163',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 13,
  },
  tag: {
    marginTop: 3,
    height: 20,
    padding: ".15em 4px",
    fontWeight: 600,
    lineHeight: "15px",
    borderRadius: 2,
  },
  popper: {
    border: "1px solid rgba(27,31,35,.15)",
    boxShadow: "0 3px 12px rgba(27,31,35,.15)",
    borderRadius: 3,
    width: "60%",
    maxWidth: 500,
    zIndex: 12,
    fontSize: 13,
    height:'300px',
    color: "#586069",
    top: '0px',
    backgroundColor: "#f6f8fa",
  },
  header: {
    borderBottom: "1px solid #e1e4e8",
    padding: "8px 10px",
    fontWeight: 600,
  },
  inputBase: {
    padding: 10,
    width: "100%",
    borderBottom: "1px solid #dfe2e5",
    "& input": {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      padding: 8,
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      border: "1px solid #ced4da",
      fontSize: 14,
      "&:focus": {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  paper: {
    boxShadow: "none",
    margin: 0,
    color: "#586069",
    fontSize: 13,
  },
  option: {
    minHeight: "auto",
    alignItems: "flex-start",
    padding: 8,
    '&[aria-selected="true"]': {
      backgroundColor: "transparent",
    },
    '&[data-focus="true"]': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  popperDisablePortal: {
    position: "relative",
  },

  text: {
    flexGrow: 1,
  },
  close: {
    background: "red",
    borderRadius: 4,
    color: "#fff",
    display: "flex",
    padding: "1px 4px",
  },
}));

export default function GitHubLabel() {
  //Classes and redux
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  //Estados
  const [goCart, setGoCart] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState([
    products[1],
    products[2],
  ]);
  
  const [pendingValue, setPendingValue] = useState([]);
  const [total, setTotal] = useState(0);
  //
  useEffect(() => {
    setGoCart(
      value.map((product) => {
        return {
          pid: product.id,
          quantity: 1,
          price: product.productPrice,
          name: product.productName,
          photo: product.photoUrl,
          description: product.productDescription,
        };
      })
    );
  }, [value]);
  //functions use in label
  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, reason) => {
    if (reason === "toggleInput") {
      return;
    }
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  function repeatOrder() {
    goCart.map((products) => {
      return dispatch(addItem(products));
    });
  }
  React.useEffect(() => {
    setTotal(value.reduce(
      (total, productTotal) => total + productTotal.productPrice,
      0
    ));
    
  },[value])
  return (
    <Container>
      <div className="paragraph">
        <p>
          Não gostou do que montamos para você ? Não tem problema, é só mudar
          abaixo !
        </p>
      </div>
      <div className={classes.root}>
        <ButtonBase
          disableRipple
          className="input-change"
          aria-describedby={id}
          onClick={handleClick}
        >
          <span>Deseja mudar algum item abaixo ?</span>
          <SettingsIcon />
        </ButtonBase>

        <table class="tag-list">
          <tr>
            <th>Produto</th>
            <th>Quantidade (alterar no carrinho)</th>
            <th>Preço/Un</th>
          </tr>

          {value.map((label) => (
            <tr>
              <td>
                <img src={label.photoUrl} alt="sem" />
                {label.productName}
              </td>
              <td>1</td>
              <td>{formatPrice(label.productPrice)}</td>
            </tr>
          ))}
        </table>
        <div className="submit">
          <div>
            <span> {formatPrice(total)}</span>
          </div>
          <div className="button">
            <ButtoFull
              inputColor="#FF7A00"
              text="adicionar ao carrinho"
              onClick={repeatOrder}
            />
          </div>
        </div>
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        className={classes.popper}
      >
        <div className={classes.header}>Adicione ou remova produtos</div>
        <Autocomplete
          open
          onClose={handleClose}
          multiple
          classes={{
            paper: classes.paper,
            option: classes.option,
            popperDisablePortal: classes.popperDisablePortal,
          }}
          value={pendingValue}
          onChange={(event, newValue) => {
            setPendingValue(newValue);
          }}
          disableCloseOnSelect
          disablePortal
          renderTags={() => null}
          noOptionsText="Ainda não temos esse produto"
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <GoCheck
                color="green"
                size={22}
                className="iconSelected"
                style={{ visibility: selected ? "visible" : "hidden" }}
              />
              <div className={classes.text}>
                <div style={{ display: "flex" }}>
                  <img
                    src={option.photoUrl}
                    alt="sem"
                    style={{ height: "34px" }}
                  />
                  <div style={{ 'display': "flex", 'flex-direction': "column" }}>
                    <span>{option.productName}</span>
                    <span>{formatPrice(option.productPrice)}</span>
                  </div>
                </div>
              </div>
              <div
                className={classes.close}
                style={{ visibility: selected ? "visible" : "hidden" }}
              >
                <GoX
                  color="white"
                  size={22}
                  className="iconSelected"
                  style={{ visibility: selected ? "visible" : "hidden" }}
                />
              </div>
            </React.Fragment>
          )}
          options={[...products].sort((a, b) => {
            // Display the selected labels first.
            let ai = value.indexOf(a);
            ai = ai === -1 ? value.length + products.indexOf(a) : ai;
            let bi = value.indexOf(b);
            bi = bi === -1 ? value.length + products.indexOf(b) : bi;
            return ai - bi;
          })}
          getOptionLabel={(option) => option.productName}
          renderInput={(params) => (
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              autoFocus
              className={classes.inputBase}
            />
          )}
        />
      </Popper>
    </Container>
  );
}

// From https://github.com/abdonrd/github-labels
