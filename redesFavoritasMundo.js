import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function resdesFavoritasMundos(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 655,
        title: {
            text: "Redes sociais que os usuários mais usam",
            x: 0,
            font: {
                color: getCSS('--primary-color'), // Cor primária
                family: 'Arial, sans-serif', // Fonte alterada
                size: 32, // Tamanho aumentado
            }
        },
       legend: {
        font: {
            color: getCSS('--primary-color'),
            size: 16
        }
       }
    };
    criarGrafico(data, layout)

    incluirTexto(`Embora o <span>Instagram</sapan> ocupe a quarta posição de redes sociais com mais usuários no
         mundo, ela é a rede social que as pessoas mais gostam. Seguida de WhatsApp
          e Facebook. E o <span>Buiu</span> é o professor mais insupotável e da hora ao mesmo tempo`)
}

resdesFavoritasMundos()