import React from 'react'
import { InterfaceContato } from '../../types/perfil'

function Contato(props: InterfaceContato) {

    const { tipo, contato } = props

    return(
        <li>
            <div className="item-contato">
                <h4>{tipo}</h4>
                <p>{contato}</p>
            </div>
        </li>

    )
    
}

export default Contato