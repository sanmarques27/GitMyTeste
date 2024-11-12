

function clicar1() {
            alert('Você clicou no 1º botão')
        }
        function clicar2() {
            alert('Você clicou no 2º botão')
        }
        function clicar3() {
            alert('Você clicou no 3º botão')
        }
		function clicar4() {
            alert('Você clicou no 4º botão')
        }
		function clicar5() {
            alert('Você clicou no 5º botão')
        }
		function clicar6() {
            alert('Você clicou no 6º botão')
        }
		function clicar7() {
            alert('Você clicou no 7º botão')
        }
		function clicar8() {
            alert('Você clicou no 8º botão')
        }
		function clicar9() {
            alert('Você clicou no 9º botão')
        }
		function clicar10() {
            alert('Você clicou no 10º botão')
        }
		
        // Adiciona um ouvinte de evento ao formulário para quando for submetido
        document.getElementById("formContatos").addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio do formulário

            // Captura os valores dos campos
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const telefone = document.getElementById("telefone").value;
           
            // Cria uma mensagem com os valores coletados
            const mensagem = `
            Olá, ${nome}! Recebemos sua mensagem, e em breve retornaremos seu contato através do e-mail ${email} ou número ${telefone}, conforme registrado no formulário.
            `;

            // Exibe o pop-up com a mensagem
            alert(mensagem);
        });