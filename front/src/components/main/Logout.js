import React from "react";
import store from "../../app/store";
import LogoutIcon from '@mui/icons-material/Logout';
import {IconButton} from "@mui/material";

function Logout() {
    const logout = e => {
        store.dispatch({type: "change_login", value: null});
    }
    return ( <IconButton aria-label="logout" color="secondary" size="large" onClick={logout} ><LogoutIcon/></IconButton>
    )
}
export default Logout