const url = 'https://raw.githubusercontent.com/teuzsw/graficos-alura/refs/heads/main/dados-globais.json'

async function visualizarInformacoes() {
    const resposta = await fetch(url) 
    const dados = await resposta.json()
    console.log(dados);
}

visualizarInformacoes()
