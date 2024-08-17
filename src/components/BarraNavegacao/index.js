import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import "./style.css"

function BarraNavegacao() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Meus gastos
                    </Typography>
                    <Button color="inherit">Sair</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default BarraNavegacao;