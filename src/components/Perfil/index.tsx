import React from 'react'
import { PerfilDados } from '../../types/perfil'

function Perfil(props: PerfilDados){
    
    const { perfilProfissional } = props.dados

    return(

        <div className="perfil-profissional">
          <p>
          {perfilProfissional}
          </p>
        </div>         
        
    )
}

export default Perfil