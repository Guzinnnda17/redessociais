import { getCSS, tickConfig, criarGrafico } from "./common.js";

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/Guzinnnda17/graficojogos/refs/heads/main/graficos2.json';
    const rest = await fetch(url);
    const dados = await rest.json();

    const nomeDasRedes = Object.keys(dados);
    const quantidadeUsuarios = Object.values(dados);

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--secundary-color') // Usando a cor secundária
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: "Redes sociais com mais usuários no mundo",
            x: 0,
            font: {
                color: getCSS('--primary-color'), // Cor primária
                family: 'Arial, sans-serif', // Fonte alterada
                size: 32, // Tamanho aumentado
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: "Nome das redes sociais",
                font: {
                    color: getCSS('--primary-color') // Cor primária
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: "Bilhões de usuários ativos",
                font: {
                    color: getCSS('--primary-color') // Cor primária
                }
            }
        }
    };
    
    criarGrafico(data, layout)
}

quantidadeUsuarios();
