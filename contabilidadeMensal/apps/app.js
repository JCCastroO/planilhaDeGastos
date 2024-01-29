import { Gasto } from "./controller.js";

const adc = document.querySelector('.adicionar__gasto');
const section = document.querySelector('.principal__gastos');
const fechar = document.querySelector('.fechar');

export const listaGastos = JSON.parse(localStorage.getItem('Gastos')) || [];

const gasto = new Gasto();
gasto.exibir();

adc.addEventListener('click', () => {
    section.innerHTML += `
            <form action="" class="gastos_tabela">
                <input type="date" class="gastos_tabela-input" id="data">
                <input type="text" class="gastos_tabela-input" id="finalidade" placeholder="Finalidade">
                <input type="number" class="gastos_tabela-input" id="credito" placeholder="Crédito">
                <input type="number" class="gastos_tabela-input" id="debito" placeholder="Débito">
                <input type="button" class="gastos_tabela-input" value="Salvar" data-salvar>
                <input type="button" class="gastos_tabela-input" value="Cancelar" data-cancelar>
            </form>
        `;

    const btnCancelar = document.querySelector('[data-cancelar]');
    btnCancelar.addEventListener('click', () => {
        location.reload();
    });

    const btnSalvar = document.querySelector('[data-salvar]');
    btnSalvar.addEventListener('click', () => {
        const data = document.getElementById('data').value;
        const finalidade = document.getElementById('finalidade').value;
        const credito = document.getElementById('credito').value;
        const debito = document.getElementById('debito').value;

        gasto.adicionar(data, finalidade, credito, debito);

        location.reload();
    })
});

fechar.addEventListener('click', () => {
    gasto.fechar();
})