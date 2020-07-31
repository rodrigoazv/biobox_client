import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { boolUserVerify } from "../../store/fetchProduct";
// import { Container } from './styles';

function CheckUserAuth() {
  const dispatch = useDispatch();
  const headers = {
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("sback_id"),
    },
  };

  useEffect(() => {
    dispatch(boolUserVerify(headers));
  }, [dispatch, headers]);

  return <></>;
}

export default CheckUserAuth;
