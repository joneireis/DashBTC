// Atualiza os dígitos com os valores do Bitcoin
async function updateDigits() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

        if (response.status === 200) {
            const data = await response.json();

            if (data.bitcoin && data.bitcoin.usd) {
                const bitcoinPrice = data.bitcoin.usd.toFixed(2);
                const digits = bitcoinPrice.replace('.', '').split('');

                digits.forEach((value, index) => {
                    const digitElement = document.getElementById(`dig${index + 1}`);
                    if (digitElement) {
                        digitElement.textContent = value;
                    }
                    //console.log(`dig${index + 1}`)
                });
            } else {
                console.error('Dados do Bitcoin não encontrados na resposta da API.');
            }
        } else {
            console.error(`Erro na resposta da API. Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Erro ao buscar dados do Bitcoin:', error);
    }
}

// Atualize os dígitos inicialmente e a cada segundo
updateDigits();
setInterval(updateDigits, 70000);
