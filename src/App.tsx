import React, { useState } from "react";
import "./App.css"
import Biografia from './components/Biografia'
import Perfil from './components/Perfil'
import Sidebar from './components/Sidebar'
import ListaExperiencias from './components/ListaExperiencias'
import { InterfacePerfil } from "./types/perfil";

function App() {

  const fakeAPI: InterfacePerfil =  
    {
      nome: 'Leandro Nunes',
      ocupacao: 'Front-End Developer | React Developer',
      resumo: '30 anos, pai orgulhoso da Marilene',
      perfilProfissional: 'Desenvolvedor Front-end e solucionador de problemas. A partir de uma experiência de 6 anos na indústria de pagamentos online, veio a paixão pelo mundo digital. Hoje atuo como desenvolvedor freelancer e estou disponível para novos desafios e oportunidades. Nesse site você poderá conhecer um pouco mais do meu trabalho :)',
      contatos: [
        {
          id: 1,
          tipo: 'TELEFONE',
          contato: '41 996070390'
        },
        {
          id: 2,
          tipo: 'E-MAIL',
          contato: 'nunes.pessoal@gmail.com'
        },
        {
          id: 3,
          tipo: 'ENDEREÇO',
          contato: 'Curitiba, Paraná'
        },
        {
          id: 4,
          tipo: 'LINKEDIN',
          contato: '/nunesprofissional'
        },
        {
          id: 5,
          tipo: 'GITHUB',
          contato: '/leandronunesdev'
        },
        {
          id: 6,
          tipo: 'WEBSITE',
          contato: 'www.leandronunes.dev'
        },

      ],
      educacao: [
        {
          id: 1,
          instituicao: 'UFPR',
          curso: 'Bacharel em Administração, 2017'
        },
        {
          id: 2,
          instituicao: 'UFPR',
          curso: 'Bacharel em Comunicação Social, 2013'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Front-End Developer',
          periodo: 'SET 2020 - Atual',
          empresa: 'FREELANCE',
          local: 'Curitiba',
          conteudo: 'Desenvolvimento de projetos pessoais e construção de portfolio'
        },
        {
          id: 2,
          cargo: 'Compliance Analyst',
          periodo: '2016 - ATUAL',
          empresa: 'EBANX',
          local: 'Curitiba',
          conteudo: 'Assistência na implementação e desenvolvimento da área de Risk and Compliance. Monitoramento de transações de clientes. Investigação de transações atípicas. Geração de reports à gerência executiva. Mapeamento de processos, redação de manuais, guias e Procedimentos Operacionais. Treinamento e suporte à área comercial relacionados à Compliance e Prevenção à Lavagem de Dinheiro.'
        },
        {
          id: 3,
          cargo: 'Customer Service Analyst',
          periodo: 'NOV 2014 - JUL 2016',
          empresa: 'EBANX',
          local: 'Curitiba',
          conteudo: 'Atendimento ao cliente via e-mail, telefone, chat e redes sociais'
        }
      ]
  }

  const [dados] = useState(fakeAPI)

  return (
    
    <main>
      
      <Biografia dados={dados} />
      <Perfil dados={dados} />
      <Sidebar dados={dados} />
      <ListaExperiencias dados={dados} />

    </main>  
    
  );  
}

export default App;