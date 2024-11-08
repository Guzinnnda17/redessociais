import { criarGrafico, getCSS, incluirTexto } from "./common"

async function RedesFavoritasMInhaEscola() {
    const dadosLocaisString = localStorage.getItem('respostasRedesSociais')
    if (dadosLocaisString) {
        const dadosLocais = JSON.parse(dadosLocaisString)
        processarDados(dadosLocais)
    } else {
        const url ='https://script.googleusercontent.com/macros/echo?user_content_key=Q1C_Tbb8VknHktRJ3qQqFMXlotDSt8J7vESOz_d23A9mrpqNRyfoTr2WkPawfpN80GLVPvitjamfKpwRk_3F0BRGDwusM2ism5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO6PAKquEFk98_srQgy8-0EAvbVoUOBUjqBvOUo2ceDD6Uo2sh6fOeB03EgL0M9ULSKuPdp4UsX-FtM-B3NP8LwI5gAr4XAU6Nz9Jw9Md8uu&lib=MxVKM1WR4jzBvJBalPtHbHmeAi2otohk6'
        const res = await fetch(url)
        const dados = await res.json()
        localStorage.setItem('respostaRedesSociais', JSON.stringify(dados))
        processarDados(dadosLocais)
    }
}

function processarDados(dados){
    const redesSociais = dados.slice(1).map(redes => redes[1])
    const contagemRedessociais = redesSociais.reduce((acc, redesSociais) => {
        acc[redesSociais] = (acc[redesSociais] || 0) + 1
        return acc
    }, {})
    const valores = Object.values(contagemRedessociais)
    constlabels = Object.keys(contagemRedessociais)       

    const data = [
        {
            values: valores,
            labels: labels,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 655,
        title: {
            text: "Redes sociais que as pessoas da minha escola mais gostam",
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
    incluirTexto(`Como no mundo, a amostra de pessoas entrevistadas por mim, demonstra um apreço pelo <span>Instagram</span>
         em relação a outras redes e sendo o <span>Twitter/X</span>(empatado com o Youtube) o sengundo mais apreciado.<span>#VOLTAKARINE</span>`)

}

redesSociaisFavoritasMundo()