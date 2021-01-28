import React from 'react'
import { PerfilDados } from '../../types/perfil'

function Biografia(props: PerfilDados){
    
    const { nome, ocupacao, resumo } = props.dados

    return(

        <>
            <div className="perfil">
                <img src="https://avatars.githubusercontent.com/u/60386045?s=460&u=b81d71f87ddbf5a2da61abf86227ede788de7d32&v=4
                " alt="Perfil" />
            </div>

            <div className="biografia">
                <h1>{nome}</h1>
                <div className="ocupacao">{ocupacao}</div>
                <p>{resumo}</p>
            </div> 

            <div className="titulo">
            Perfil <br /> Profissional
            </div> 

        </>       
        
    )
}

export default Biografia