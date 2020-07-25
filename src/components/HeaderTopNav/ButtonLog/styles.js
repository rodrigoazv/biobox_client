import styled from "styled-components";

export const Container = styled.div`
  span{
    margin-left: 3px;
    font-weight: 600;
    
  }
  .dropbtn {
    
    border: 1px solid rgba(135, 147, 149, 0.3);
    color: #434a56;
    padding: 0 10px;
    height: 36px;
    background: white;
    border-radius: 4px;
    transition: 0.4s;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
    
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    border-radius: 4px;
    border: 1px solid rgba(135, 147, 149, 0.3);
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    padding: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: 0.3s;
    right:0;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size:14px;
    color: #434a56;
    border-radius: 6px;
    padding: 6px 9px;
    text-decoration: none;
    display: block;
    border: none;
    transition: 0.3s;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color:  #f2f2f2;
    color: #7FBC44;
    transition: 0.3s;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
    transition: 0.3s;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #f1f1f1;
    transition: 0.3s;
  }
`;
