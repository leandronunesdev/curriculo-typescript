import React from 'react'
import { InterfaceExperiencia } from '../../types/perfil'

function Experiencia(props: InterfaceExperiencia) {

    const { cargo, periodo, empresa, local, conteudo } = props
    
    return(
        <div className="experience-item">
            <div>
              <h4>{cargo}</h4>
              <span>{periodo}</span>

              <strong>{empresa}</strong>
              <span>{local}</span>
            </div>
            <p>
              {conteudo}
          </p>
        </div>

    )
    
}

export default Experiencia