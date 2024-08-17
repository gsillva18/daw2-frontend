import React from "react";
import { Box, Typography } from "@mui/material";

function CardGasto(props) {
    const descricao = props.descricao;
    const valor = props.valor;

    return (
        <Box
            sx={{
                border: '2px solid red',
                width: '80%',
                height: '80%'
            }}
        >
            <Typography>
                {descricao}
            </Typography>
            <Typography>
                {valor}
            </Typography>
        </Box>
    );
}

export default CardGasto;