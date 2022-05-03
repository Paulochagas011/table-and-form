var titulo = document.querySelector('h1');
titulo.textContent = 'Aparecida Nutricionista';


var pacientes = document.querySelectorAll(".paciente");


for (i = 0; i < pacientes.length; i++) {
    
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var tdImc = pacientes[i].querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso > 1000) {
        console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
        pacientes[i].classList.add('paciente-invalido');

    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;
        pacientes[i].classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {

        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
};

function calculaImc(peso,altura){
    
    var imc = 0;

    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
};



