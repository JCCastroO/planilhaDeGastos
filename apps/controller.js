import { listaGastos } from "./app.js";

const section = document.querySelector('.principal__gastos');

export class Gasto {

    adicionar(data, finalidade, credito, debito) {
        const novoGasto = {
            data: data,
            finalidade: finalidade,
            credito: parseFloat(credito),
            debito: parseFloat(debito),
            total: credito - debito
        };

        listaGastos.push(novoGasto);

        localStorage.setItem('Gastos', JSON.stringify(listaGastos));
    };

    exibir() {

        listaGastos.forEach(gasto => {
            section.innerHTML += `
                    <div class="gastos_tabela">
                        <span class="gastos_tabela-coluna">${gasto.data}</span>
                        <span class="gastos_tabela-coluna">${gasto.finalidade}</span>
                        <span class="gastos_tabela-coluna">R$${gasto.credito}</span>
                        <span class="gastos_tabela-coluna">R$-${gasto.debito}</span>
                        <span class="gastos_tabela-coluna">R$${gasto.total}</span>
                    </div>
                `;
        });
    };

    fechar() {
        let debitoFechado = 0;
        let creditoFechado = 0;
        listaGastos.forEach(gasto => {
            debitoFechado += gasto.debito;
            creditoFechado += gasto.credito;
        });
        const gastoTotal = creditoFechado - debitoFechado;
        section.innerHTML = `
                    <div class="gastos_tabela">
                        <span class="gastos_tabela-coluna">Ganho: </span>
                        <span class="gastos_tabela-coluna">R$${creditoFechado}</span>
                        <span class="gastos_tabela-coluna">Gasto: </span>
                        <span class="gastos_tabela-coluna">R$-${debitoFechado}</span>
                        <span class="gastos_tabela-coluna">Lucro: R$${gastoTotal}</span>
                    </div>
                `;
        localStorage.removeItem('Gastos');
    };
};