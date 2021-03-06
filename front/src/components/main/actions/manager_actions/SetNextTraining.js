import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';

function SetNextTraining(props) {

    const handleSubmit = (event) => {
        props.setAction("set_next_training");
    };

    return (<div id="set_next_training">
        <Box
            sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
        <Button variant="outlined"
                type="submit"
                color="secondary"
                onClick={handleSubmit}
                size = "large"
                startIcon={<SportsTennisIcon/>}
                sx={{ mt: 3, mb: 3 }}>Set Next Training &nbsp;&nbsp;&nbsp;&nbsp;<br/> To Athlete </Button>
        </Box>
    </div>)
}

export default SetNextTraining