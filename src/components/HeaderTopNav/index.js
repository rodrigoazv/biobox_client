import React, { useState } from "react";

import { Container } from "./styles";
import { Link, useHistory } from "react-router-dom";
import "../../styles/colors";
import ButtonLog from "./ButtonLog";


//assets import
import Logo from "../../assets/logobio.svg";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import { FaPagelines } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import { useSelector } from "react-redux";

//Autocomplet Search Bar
import useAutocomplete from "@material-ui/lab/useAutocomplete";
//MaterialUi Auth

export default function HeaderTopNav() {
  const [search] = useState();
  const history = useHistory();

  const length = useSelector((state) => state.cart.length);
  const { isAuthenticated } = useSelector((state) => state.authe);

  //const user = JSON.parse(localStorage.getItem("user_session"));

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

  function menuOnScroll() {
    function menufixed() {
      let menuonScroll = document.getElementById("menu-fixed");
      if (window.pageYOffset > 50) menuonScroll.classList.add("menu-on-scroll");
      else menuonScroll.classList.remove("menu-on-scroll");
    }
    const navpadding = (id) => {
      let navFixed = document.getElementById(id);
      if (window.pageYOffset > 60) navFixed.classList.add("nav-on-scroll");
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

  return (
    <Container className="top-nav-sizing">
      <div id="menu-fixed" className="menu-after-scroll">
        <div className="max-margin">
          <div className="nav-elements-mother">
            <div>
              <a href="/">
                <img src={Logo} alt="none" className="logo-sizing" />
              </a>
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
                                  <p className="min-list">
                                    {option.productDescription}
                                  </p>
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
              <div className="show">
              <ButtonLog />
              </div>
            ) : (
              <div className="display-show">
                <Link to="/login" className="login">Entre </Link>
                <span> ou </span>
                <Link to="/register" className="login">cadastre-se</Link>
              </div>
            )}

            <div className="display-show cart-box" >
              <Link to="/cart">
                <RiShoppingBasketLine size={36}/>
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
              <Link className="undernav-hover" to="/bioprodutos">
                <FaLeaf size={16} />
                <span className="link-top">Produtos</span>
              </Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/receitas">
                <FaConciergeBell size={16} />
                <span className="link-top">Receitas</span>
              </Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/sobre-nos">
                <FaPagelines size={16} />
                <span className="link-top">Sobre nós</span>
              </Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/biocabanas">
                <FaHouseDamage size={16} />
                <span className="link-top">Biocabanas</span>
              </Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/contato">
                <FaEnvelope size={16} />
                <span className="link-top">Contato</span>
              </Link>
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
                  <ButtonLog />
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
                <div className="cart-box">
                  <Link to="/cart">
                    <RiShoppingBasketLine
                      size={32}
                    />
                    <span>{length}</span>
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
