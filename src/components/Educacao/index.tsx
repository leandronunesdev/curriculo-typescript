import React from 'react'
import { InterfaceEducacao } from '../../types/perfil'

function Educacao(props: InterfaceEducacao) {

    const { instituicao, curso } = props

    return(
        <li>
            <h4>{instituicao}</h4>
            <p>{curso}</p>
        </li>

    )
    
}

export default Educacao