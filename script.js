const escolha_usuario = prompt('Escolha entre pedra, papel e tesoura')
const opcoes = ['pedra', 'papel','tesoura']
const escolha_programa = opcoes[Math.floor(Math.random() * opcoes.length)]
alert('O programa escolheu: ' + escolha_programa)

if (escolha_usuario === escolha_programa){
  alert('Empate!')
}
else if (
  (escolha_usuario === 'pedra' && escolha_programa === 'tesoura') ||
  (escolha_usuario === 'papel' && escolha_programa === 'pedra') ||
  (escolha_usuario === 'tesoura' && escolha_programa === 'papel')
){
  alert('Você ganhou!')
}
else{
  alert('Você perdeu!')
}
