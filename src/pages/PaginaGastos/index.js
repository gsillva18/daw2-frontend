import React from "react";
import BarraNavegacao from "../../components/BarraNavegacao";
import CardGasto from "../../components/CardGasto";

const listaDeGastos = [
    {
        descricao: "Gasto 1",
        valor: 100
    },
    {
        descricao: "Gasto 2",
        valor: 140
    },
    {
        descricao: "Gasto 3",
        valor: 20
    },
    {
        descricao: "Gasto 4",
        valor: 870
    },
    {
        descricao: "Gasto 5",
        valor: 20
    },
    {
        descricao: "Gasto 6",
        valor: 10
    },
    {
        descricao: "Gasto 7",
        valor: 19
    },
    {
        descricao: "Gasto 8",
        valor: 34
    }
]

function PaginaGastos() {

    return (
        <div>
            <BarraNavegacao />
            {listaDeGastos.map((objeto) => (
                <CardGasto
                    descricao={objeto.descricao}
                    valor={objeto.valor}
                />
            ))}
        </div>
    );
}

export default PaginaGastos;