import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
    const [studentName, setStudentName] = useState(""); // valor inicial da var
    return (
        <>
            <div className="container">
                <h1>Lista de Presença</h1>
                <h2>Nome: {studentName}</h2>
                <input
                    type="text"
                    placeholder="Digite um nome"
                    onChange={(event) => setStudentName(event.target.value)}
                    // pegando o conteudo atual do input, e atualizando o setStudentName
                />
                <button type="button">Adicionar</button>
                <Card name="Jose da Silva" time="10:55:22" />
                <Card name="Maria das Dores" time="11:31:02" />
                <Card name="João Pedro" time="18:05:33" />
            </div>
        </>
    );
}
