const language = {
  keywords: [
    { name: 'program', value: 'simbolo_programa' },
    { name: 'begin', value: 'simbolo_inicio' },
    { name: 'end', value: 'simbolo_fim' },
    { name: 'var', value: 'simbolo_variavel' },
    { name: 'real', value: 'simbolo_num_real' },
    { name: 'integer', value: 'simbolo_num_inteiro' },
    { name: 'procedure', value: 'simbolo_procedimento' },
    { name: 'else', value: 'simbolo_senao'},
    { name: 'read', value: 'simbolo_ler'},
    { name: 'write', value: 'simbolo_escrever'},
    { name: 'do', value: 'simbolo_faca'},
    { name: 'while', value: 'simbolo_enquanto'},
    { name: 'if', value: 'simbolo_se'},
    { name: 'then', value: 'simbolo_entao'},
  ],
  symbols: [
    { name: '.', value: 'simbolo_ponto' },
    { name: ',', value: 'simbolo_virgula' },
    { name: ';', value: 'simbolo_ponto_virgula' },
    { name: ':', value: 'simbolo_dois_pontos' },
    { name: '=', value: 'simbolo_igual' },
    { name: '>', value: 'simbolo_maior' },
    { name: '<', value: 'simbolo_menor' },
    { name: '+', value: 'simbolo_mais' },
    { name: '-', value: 'simbolo_menos' },
    { name: '*', value: 'simbolo_vezes' },
    { name: '/', value: 'simbolo_div' },
    { name: '(', value: 'simbolo_abre_parentese' },
    { name: ')', value: 'simbolo_fecha_parentese' },
    { name: '>=', value: 'simbolo_maior_igual' },
    { name: '<=', value: 'simbolo_menor_igual' },
    { name: ':=', value: 'simbolo_atribuicao' },
    { name: '<>', value: 'simbolo_maior_menor' },
    { name: '}', value: 'simbolo_fecha_chave' },
  ],
  others: [
    { name: /^[a-zA-Z]+[a-zA-Z0-9]*$/, value: 'identificador' },
    { name: /^[0-9].*\.[0-9].*/, value: 'numero_real' },
    { name: /^[0-9]+$/, value: 'numero_inteiro' },
    { name: /.+/, value: 'erro_lexico' },
  ]
}

module.exports = language
