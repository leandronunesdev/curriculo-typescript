import React from 'react'
import { InterfaceExperiencia, PerfilDados } from '../../types/perfil'
import Experiencia from '../Experiencia'

function ListaExperiencias(props: PerfilDados) {

  const { experiencia } = props.dados  
  
  return(
      <div className="experience">
        <h2>Experiência Profissional</h2>

        {experiencia.map((item: InterfaceExperiencia) => (
          <Experiencia id={item.id} cargo={item.cargo} periodo={item.periodo} empresa={item.empresa} local={item.local} conteudo={item.conteudo}/>
        ))}        
      </div>
  )
}

export default ListaExperiencias