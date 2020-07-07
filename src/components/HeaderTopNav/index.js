import React, { useState } from "react";

import { Container } from "./styles";
import { Link, useHistory } from "react-router-dom";
import "../../styles/colors";

//assets import
import Logo from "../../assets/logobio.svg";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import { FaPagelines } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/ducks/authe";

//Autocomplet Search Bar
import useAutocomplete from "@material-ui/lab/useAutocomplete";
//MaterialUi Auth
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export default function HeaderTopNav() {
  const [search] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const length = useSelector((state) => state.cart.length);
  const { isAuthenticated } = useSelector((state) => state.authe);
  const user = JSON.parse(localStorage.getItem("user_session"));

  function showNav() {
    const showMenu = (IDnav) => {
      const responsiveNav = document.getElementById(IDnav);
      responsiveNav.classList.add("self-show");
      responsiveNav.addEventListener("click", (e) => {
        if (e.target.id === IDnav || e.target.className === "close-nav") {
          responsiveNav.classList.remove("self-show");
        }
      });
    };
    showMenu("nav-full");
  }

  function HandleSearch(e) {
    e.preventDefault();
    history.push(`product/${search}`);
  }

  function handleSignOut(e) {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem("sback_id");
    localStorage.removeItem("user_session");
  }
  function menuOnScroll() {
    function menufixed() {
      let menuonScroll = document.getElementById("menu-fixed");
      if (window.pageYOffset > 2)
        menuonScroll.classList.add("menu-on-scroll");
      else menuonScroll.classList.remove("menu-on-scroll");
    }
    const navpadding = (id) => {
      let navFixed = document.getElementById(id);
      if (window.pageYOffset > 1) navFixed.classList.add("nav-on-scroll");
      else navFixed.classList.remove("nav-on-scroll");
    };
    window.onscroll = () => {
      menufixed("menu-fixed");
      menufixed("nav-fixed");
      navpadding("nav-fixed");
    };
  }
  menuOnScroll();

  const products = useSelector((state) => state.products);

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: products,
    getOptionLabel: (option) => option.productName,
  });


  /*Material ui configurations for isAuthenticat*/

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <Container className="top-nav-sizing">
      <div id="menu-fixed">
        <div className="max-margin">
          <div className="nav-elements-mother">
            <div>
              <Link to="/">
                <img src={Logo} alt="none" className="logo-sizing" />
              </Link>
            </div>
            <div className="searchBar">
              <form className="max-margin">
                <div className="inputWithIcon">
                  <div>
                    <div {...getRootProps()}>
                      <label {...getInputLabelProps()} />
                      <input
                        className="input"
                        placeholder="Procurando algo?"
                        {...getInputProps()}
                      />
                    </div>
                    {groupedOptions.length > 0 ? (
                      <ul className="listbox" {...getListboxProps()}>
                        {groupedOptions.map((option, index) => (
                          <li {...getOptionProps({ option, index })}>
                            <Link
                              to={{
                                pathname: `/product/${option.id}`,
                                search: option.name,
                                state: { id: option.id },
                              }}
                            >
                              <div className="listbox-element">
                                <img
                                  className="img-search"
                                  alt="ico"
                                  src={option.photoUrl}
                                />
                                <div>
                                  <p>{option.productName}</p>
                                  <p className="min-list">{option.productDescription}</p>
                                </div>
                              </div>    
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  <FaSearch
                    size={16}
                    aria-hidden="true"
                    onClick={HandleSearch}
                  />
                </div>
              </form>
            </div>
            {isAuthenticated ? (
              <div className="menu-grow">
              <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <FaUserCircle size={16}/><span className="link-top">{user.userName.split(" ")[0]}</span>
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" className="flex-icon" onKeyDown={handleListKeyDown}>
                          <MenuItem onClick={handleClose}>Convide um amigo</MenuItem>
                          <MenuItem onClick={handleSignOut}><FaSignOutAlt /> Sair</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                    
                  </Grow>
                )}
              </Popper>
              </div>
              /*<div className="display-show">
                <p>
                  Olá,
                  {user.userName.split(" ")[0]}
                </p>
                <p>Boas compras</p>
                <button onClick={handleSignOut}>
                  <FaSignOutAlt />
                </button>
              </div>*/
            ) : (
              <div className="display-show">
                <Link to="/login">Entre </Link>
                <span>ou </span>
                <Link to="/register">cadastre-se</Link>
              </div>
            )}

            <div className="display-show">
              <Link to="/cart">
                <RiShoppingBasketLine size={36} color="#95B737" />
                <span>{length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="under-nav-top">
        <nav className="max-margin">
          <ul>
            <li>
              <Link  className="undernav-hover" to="/bioprodutos"><FaLeaf size={16} /><span className="link-top">Produtos</span></Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/receitas"><FaConciergeBell size={16} /><span className="link-top">Receitas</span></Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/sobre-nos"><FaPagelines size={16} /><span className="link-top">Sobre nós</span></Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/biocabanas"><FaHouseDamage size={16} /><span className="link-top">Biocabanas</span></Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/contato"><FaEnvelope size={16} /><span className="link-top">Contato</span></Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="nav-fixed">
        <div className="show-when-under-none">
          <nav className="max-margin">
            <ul>
              <li>
                <div className="flex-icon">
                  <FaGripLines onClick={showNav} size={32} color="#333" />
                </div>
              </li>
              <li>
                {isAuthenticated ? (
                
                  <div className="flex-icon">
                    <div>
                      <FaSignInAlt
                        onClick={handleSignOut}
                        size={25}
                        color="#333"
                      />
                    </div>
                    Sair
                  </div>
                ) : (
                  <div className="flex-icon">
                    <Link to="/login">
                      <FaSignInAlt size={25} color="#333" />
                    </Link>
                    Entre/cadastre-se
                  </div>
                )}
              </li>
              <li>
                <div>
                  <Link to="/cart">
                    <RiShoppingBasketLine
                      size={32}
                      color="PRIMARY_GREN_LIGHT"
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
}
