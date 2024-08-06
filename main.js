const form = document.getElementById('form-valid');
let formEValido = false; 

function validarFormulario(campoA, campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = Number(document.getElementById('campoA').value);
    const campoB = Number(document.getElementById('campoB').value);
    const sucessMenssage = `O valor do Campo B: ${campoB} é maior que o valor do Campo A: ${campoA}`;
    const errorMenssage = `O valor do Campo B: ${campoB} é menor que o valor do Campo A: ${campoA}`;

    formEValido = validarFormulario(campoA, campoB);

    if (formEValido) {
        const containerSucessMenssage = document.querySelector('.sucess-message');
        containerSucessMenssage.innerHTML = sucessMenssage;
        containerSucessMenssage.style.display = 'block';
    } else {
        document.getElementById('campoA').style.border = '1px solid red';
        const containerErrorMenssage = document.querySelector('.error-message');
        containerErrorMenssage.innerHTML = errorMenssage;
        containerErrorMenssage.style.display = 'block';
    }

    document.getElementById('campoA').value = '';
    document.getElementById('campoB').value = '';
});

document.getElementById('campoA').addEventListener('change', function(e) {
    const campoA = Number(document.getElementById('campoA').value);
    const campoB = Number(document.getElementById('campoB').value);
    const errorMenssage = `O valor do Campo B: ${campoB} é menor que o valor do Campo A: ${campoA}`;

    if (!formEValido) {
        const containerErrorMenssage = document.querySelector('.error-message');
        containerErrorMenssage.innerHTML = errorMenssage;
        containerErrorMenssage.style.display = 'block';

        document.getElementById('campoA').classList.add('error');
    } else {
        document.getElementById('campoA').classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
