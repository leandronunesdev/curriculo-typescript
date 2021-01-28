import React, { useState } from 'react'
import { InterfaceContato, InterfaceEducacao, PerfilDados } from '../../types/perfil'
import Contato from '../Contato'
import Educacao from '../Educacao'

function Sidebar(props: PerfilDados) {

  const { contatos, educacao } = props.dados 

  const [listaContato, adicionaListaContato] = useState<Boolean>(false)

  const showListaContato = () => {
    adicionaListaContato(true)
  }

  const hideListaContato = () => {
    adicionaListaContato(false)
  }
  

  return(
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button onClick={showListaContato} onDoubleClick={hideListaContato}>Mostrar Contatos</button>          

          <div className="lista-de-contatos">

            {listaContato && contatos.map((item: InterfaceContato) => (
                <Contato id={item.id} tipo={item.tipo} contato={item.contato} />
              ))}
          </div>

        </div>       
          

        <div className="sidebar">
          <h3>Educação</h3>
          <div className="lista-de-formacao">                
            {educacao.map((item: InterfaceEducacao) => (
              <Educacao id={item.id} instituicao={item.instituicao} curso={item.curso}/>
            ))}
                
          </div>
        </div>        
      </aside>
  )
    
}

export default Sidebar