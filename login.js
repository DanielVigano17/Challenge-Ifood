document.addEventListener('DOMContentLoaded', (event) => {

    // Função para validar e formatar o número de telefone
    function formatPhoneNumber(value) {
        return value
            .replace(/\D/g, '') // Remove caracteres não numéricos
            .replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3') // Formata o número
            .substring(0, 15); // Limita o comprimento
    }

    // Adiciona máscara de telefone ao campo celular
    const celularInput = document.querySelector('input[type="text"][placeholder="(00) 00000-0000"]');
    celularInput.addEventListener('input', function (e) {
        e.target.value = formatPhoneNumber(e.target.value);
    });

    // Função para validar o e-mail
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Adiciona o event listener ao botão "Cadastrar"
    document.querySelector('.btn-cadastrar').addEventListener('click', function () {
        const nome = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const celular = document.querySelector('input[type="text"][placeholder="(00) 00000-0000"]').value;

        if (nome === '' || email === '' || celular === '') {
            alert('Por favor, preencha todos os campos.');
        } else if (!isValidEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
        } else {
            alert(`Obrigado por se cadastrar, ${nome}!`);
        }
    });
});