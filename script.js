function calcularFinanciamento() {
    const valorImovel = parseFloat(document.getElementById('propertyValue').value);
    const entrada = parseFloat(document.getElementById('downPayment').value); 
    const taxaDeJuros = parseFloat(document.getElementById('interestRate').value) / 100;
    const numeroParcelas = parseInt(document.getElementById('loanTerm').value);

    const table = document.getElementById("amortizationTable");
    const tbody = document.getElementById("tableBody");
    const remaining = document.getElementById("remaining");

    const valorTotal = valorImovel - entrada;
    
    let n = numeroParcelas/12;
    const montante = valorTotal*((1+(taxaDeJuros))**n);

    const valorParcelas = montante/numeroParcelas;
    let saldoDevedor = montante;

    for (let i = 0; i < numeroParcelas; i++) {
        const tr = document.createElement("tr");

        const tdParcela = document.createElement("td");
        tdParcela.innerText = i + 1;
        tr.appendChild(tdParcela);

        
        const tdValorParcela = document.createElement("td");
        tdValorParcela.innerText = valorParcelas.toFixed(2);
        tr.appendChild(tdValorParcela);

        const tdSaldoDevedor = document.createElement("td");
        tdSaldoDevedor.innerText = saldoDevedor.toFixed(2);
        tr.appendChild(tdSaldoDevedor);

        tbody.appendChild(tr);

        saldoDevedor -= valorParcelas;
    }

    
    remaining.innerText = "O valor total foi: R$"+montante.toFixed(2)+".";
    
}
