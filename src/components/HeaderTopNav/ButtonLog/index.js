import React from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../../store/ducks/authe";

import { Container } from "./styles";

import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { FaUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

function ButtonLog() {
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("user_session"));

    function handleSignOut(e) {
        e.preventDefault();
        dispatch(logout());
        localStorage.removeItem("sback_id");
        localStorage.removeItem("user_session");
      }
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
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    } prevOpen.current = open;
}, [open]);
  return (
    <Container >
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <FaUserCircle size={16} />
        <span>{user.userName.split(" ")[0]}</span>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  className="flex-icon"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Convide um amigo</MenuItem>
                  <MenuItem onClick={handleSignOut}>
                    <FaSignOutAlt /> Sair
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Container>
  );
}

export default ButtonLog;
