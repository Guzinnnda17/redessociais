const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--secundary-color'), // Alterado para a cor secundária
    size: 18, // Tamanho aumentado para melhor visibilidade
    family: 'Arial, sans-serif' // Fonte alterada
}
function criarGrafico(data, layout){
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    const config = {
        responsive: true,
        displayModeBar: false,
    }
    Plotly.newPlot(grafico, data, layout, congig);
}

function incluirTexto(texto){
    const container = documetn.getElementById('graficos-container')
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

export { getCSS, tickConfig, criarGrafico, incluirTexto }
