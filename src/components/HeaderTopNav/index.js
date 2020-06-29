import React, { useState, useEffect } from "react";

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

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/ducks/authe";

//Autocomplet Search Bar
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { getAllProducts } from "../../store/fetchProduct";

export default function HeaderTopNav() {
  const [search, setSerch] = useState();
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
      if (window.pageYOffset > 110)
        menuonScroll.classList.add("menu-on-scroll");
      else menuonScroll.classList.remove("menu-on-scroll");
    }
    const navpadding = (id) => {
      let navFixed = document.getElementById(id);
      if (window.pageYOffset > 100) navFixed.classList.add("nav-on-scroll");
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

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
              <div className="display-show">
                <p>
                  Olá,
                  {user.userName.split(" ")[0]}
                </p>
                <p>Boas compras</p>
                <button onClick={handleSignOut}>
                  <FaSignOutAlt />
                </button>
              </div>
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
              <Link to="/bioprodutos">Produtos</Link>
            </li>
            <li>
              <Link to="/receitas">Receitas</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre nós</Link>
            </li>
            <li>
              <Link to="/biocabanas">Biocabanas</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
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
