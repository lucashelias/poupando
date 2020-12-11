import { Data } from '@angular/router'

export class Usuario{

    id: number
    nome: string
    sobrenome: string
    email: string
    usuario: string
    senha: string
    dataCadastro: Data
    dataAlteracao: Data
}