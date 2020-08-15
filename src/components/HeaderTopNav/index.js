import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { Link, useHistory } from "react-router-dom";
import "../../styles/colors";
import ButtonLog from "./ButtonLog";
import AppBanner from "./AppBanner";

//assets import
import { GoPackage } from "react-icons/go";
import { FaSignInAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import { FaPagelines } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../store/fetchProduct";

//Autocomplet Search Bar
import useAutocomplete from "@material-ui/lab/useAutocomplete";
//MaterialUi Auth

export default function HeaderTopNav() {
  const [search] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const length = useSelector((state) => state.cart.length);
  const { isAuthenticated } = useSelector((state) => state.authe);
  const products = useSelector((state) => state.products);

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
    const menufixed = () => {
      let menuonScroll = document.getElementById("menu-fixed");
      if (window.pageYOffset > 50) menuonScroll.classList.add("menu-on-scroll");
      else menuonScroll.classList.remove("menu-on-scroll");
    };
    window.onscroll = () => menufixed("menu-fixed");
  }
  menuOnScroll();

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
  //Verificação da existência de produtos, caso não exista faça o get no back end
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, products]);

  return (
    <Container className="top-nav-sizing">
      <AppBanner />
      <div id="menu-fixed" className="menu-after-scroll">
        <div className="max-margin">
          <div className="nav-elements-mother">
            <div>
              <a href="/">
                <svg className="logo-sizing" />
              </a>
            </div>
            <div className="searchBar">
              <form className="max-margin-searchbar">
                <div className="inputWithIcon">
                  <div>
                    <div {...getRootProps()}>
                      <label {...getInputLabelProps()} />
                      <input
                        data-cy="input-task"
                        className="input"
                        placeholder="Procurando algo?"
                        {...getInputProps()}
                      />
                    </div>
                    {groupedOptions.length > 0 ? (
                      <ul className="listbox" {...getListboxProps()}>
                        {groupedOptions.map((option, index) => (
                          <li
                            {...getOptionProps({ option, index })}
                            data-cy="product-rows"
                          >
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
                <Link to="/login" className="login">
                  Entre{" "}
                </Link>
                <span> ou </span>
                <Link to="/register" className="login">
                  cadastre-se
                </Link>
              </div>
            )}

            <div className="display-show cart-box">
              <Link to="/cart">
                <GoPackage size={36} />
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
                <FaLeaf size={18} />
                <span className="link-top"> Produtos</span>
              </Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/receitas">
                <FaConciergeBell size={18} />
                <span className="link-top"> Receitas</span>
              </Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/sobre-nos">
                <FaPagelines size={18} />
                <span className="link-top"> Sobre nós</span>
              </Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/biocabanas">
                <FaHouseDamage size={18} />
                <span className="link-top"> Biocabanas</span>
              </Link>
            </li>
            <li>
              <Link className="undernav-hover" to="/contato">
                <FaEnvelope size={18} />
                <span className="link-top"> Contato</span>
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
                    <GoPackage size={32} />
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
