export interface InterfacePerfil {
    nome: string,
    ocupacao: string,
    resumo: string,
    perfilProfissional: string,
    contatos: InterfaceContato[],
    educacao: InterfaceEducacao[],
    experiencia: InterfaceExperiencia[]
}

export interface PerfilDados {
    dados: InterfacePerfil
}

export interface InterfaceContato {
    id: number,
    tipo: string,
    contato: string
}

export interface InterfaceEducacao {
    id: number,
    instituicao: string,
    curso: string
}

export interface InterfaceExperiencia {
    id: number,
    cargo: string,
    periodo: string,
    empresa: string,
    local: string,
    conteudo: string
}