import React, { useState, useEffect } from "react";
import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
    const [studentName, setStudentName] = useState(""); // valor inicial da var
    const [students, setStudents] = useState([]);
    const [user, setUser] = useState({ name: "", avatar: "" });

    function handleAddNewStudent() {
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }),
        };

        // conteudo do estado anterior + o novo estudante
        // ... (spread operator). 'despejar' o que tinha no outro vetor e colocar no novo
        setStudents((previewState) => [...previewState, newStudent]);
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://api.github.com/users/guisofiati"
            );
            const data = await response.json();
            console.log(data);
            setUser({
                name: data.name,
                avatar: data.avatar_url,
            });
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="container">
                <header>
                    <h1>Lista de Presença</h1>
                    <div>
                        <strong>{user.name}</strong>
                        <img src={user.avatar} alt="Foto de perfil do Github" />
                    </div>
                </header>
                <h2>Nome: {studentName}</h2>
                <input
                    type="text"
                    placeholder="Digite um nome"
                    onChange={(event) => setStudentName(event.target.value)}
                    // pegando o conteudo atual do input, e atualizando o setStudentName
                />
                <button type="button" onClick={handleAddNewStudent}>
                    Adicionar
                </button>

                {students.map((student) => (
                    <Card
                        key={student.time} // n recomendavel, pois nao podem ser iguais.
                        name={student.name}
                        time={student.time}
                    />
                ))}
            </div>
        </>
    );
}
