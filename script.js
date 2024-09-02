document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-view');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-property');
            const detailsDiv = document.getElementById(`details-${propertyId}`);

            document.querySelectorAll('.property-details').forEach(div => {
                if (div !== detailsDiv) {
                    div.style.display = 'none';
                }
            });

            if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
                detailsDiv.style.display = 'block';
            } else {
                detailsDiv.style.display = 'none';
            }
        });
    });
});

function calcularValor() {
    const precoOriginal = parseFloat(document.getElementById('precoOriginal').value);
    const precoVenda = parseFloat(document.getElementById('precoVenda').value);
    const valorPropriedade = parseFloat(document.getElementById('valorPropriedade').value);

    if (isNaN(precoOriginal) || isNaN(precoVenda) || isNaN(valorPropriedade)) {
        document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos com valores válidos.';
        return;
    }

    const valorCalculado = (valorPropriedade * precoVenda) / precoOriginal;

    document.getElementById('resultado').textContent = `Valor Calculado: ${valorCalculado.toFixed(2)}`;
}
document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    var phoneNumber = document.getElementById('phoneNumber');

    toggleButton.addEventListener('click', function() {
        if (phoneNumber.style.display === 'none') {
            phoneNumber.style.display = 'block';
            toggleButton.textContent = 'Ver telefone';
        } else {
            phoneNumber.style.display = 'none';
            toggleButton.textContent = 'Ver telefone';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value;

        value = value.replace(/\D/g, '');

        if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d+)/, '($1) $2');
        } else {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }

        e.target.value = value;
    });

    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', function(e) {
        let value = e.target.value;

        value = value.replace(/\D/g, '');

        if (value.length <= 11) {
            value = value.replace(/(\d{3})(\d{1,2})/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2');
        }

        e.target.value = value;
    });
});
document.getElementById('submitButton').addEventListener('click', function() {
    document.getElementById('contactForm').reset();

    document.getElementById('successMessage').innerText = 'Mensagem encaminhada';
});
var modal = document.getElementById("imageModal");
var btns = document.getElementsByClassName("btn-view-image");
var modalImg = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];

Array.from(btns).forEach(btn => {
    btn.onclick = function() {
        var imageSrc = this.getAttribute("data-image");
        modal.style.display = "block";
        modalImg.src = imageSrc;
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}