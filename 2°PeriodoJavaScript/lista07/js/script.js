 document.getElementById("btnNascimento").addEventListener("click", function () {
    validarNascimento();
});
document.getElementById("btnCpf").addEventListener("click", function () {
    validarCpf();
});
document.getElementById("btnMatricula").addEventListener("click", function () {
    validarMatricula();
});
document.getElementById("btnDisciplina1").addEventListener("click", function () {
    validarDisciplina1();
});
document.getElementById("btnDisciplina2").addEventListener("click", function () {
    validarDisciplina2();
});
document.getElementById("btnDisciplina3").addEventListener("click", function () {
    validarDisciplina3();
});
document.getElementById("btnCampus").addEventListener("click", function () {
    validarCampus();
});
document.getElementById("btnTelefone1").addEventListener("click", function () {
    validarTelefone1();
});
document.getElementById("btnTelefone2").addEventListener("click", function () {
    validarTelefone2();
});
document.getElementById("btnAltura").addEventListener("click", function () {
    validarAltura();
});
document.getElementById("btnFaturamento").addEventListener("click", function () {
    validarFaturamento();
});
document.getElementById("btnCronometro").addEventListener("click", function () {
    validarCronometro();
});


function testar(idCampo, padrao) {
    let texto = document.getElementById(idCampo).value;
    if (padrao.test(texto)) {
        alert("válido!");
    } else {
        alert("Inválido!");
    }
}

function validarNascimento() {
    let padrao = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(\d{4}|\d{2})$/;
    testar("txtNascimento", padrao);
}

function validarCpf() {
    let padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    testar("txtCpf", padrao);
}

function validarMatricula() {
    let padrao = /^(IFTM|iftm)-\d{3}\/\d{3}-[A-Za-z0-9]{2}$/;
    testar("txtMatricula", padrao);
}

function validarDisciplina1() {
    let padrao = /^MT-\d{2}\.\d{3}-IFTM$/i;
    testar("txtDisciplina1", padrao);
}

function validarDisciplina2() {
    let padrao = /^MT-\d{2}\.\d{3}-(IFTM|iftm)$/;
    testar("txtDisciplina2", padrao);
}

function validarDisciplina3() {
    let padrao = /^M\s?T-\d{2}\.\d{3}-I\s?F\s?T\s?M$/i;
    testar("txtDisciplina3", padrao);
}

function validarCampus() {
    let padrao = /^IFTM campus Uberlândia( Centro)?$/;
    testar("txtCampus", padrao);
}

function validarTelefone1() {
    let padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
    testar("txtTelefone1", padrao);
}

function validarTelefone2() {
    let padrao = /^\(\d{2,3}\)\s?\d{4,5}-\d{4}$/;
    testar("txtTelefone2", padrao);
}

function validarAltura() {
    let padrao = /^(1[.,][3-9]\d?|2[.,]([0-4]\d?|50?))$/;
    testar("txtAltura", padrao);
}

function validarFaturamento() {
    let padrao = /^R\$(0|[1-9]\d{0,2}(\.\d{3}){0,3}),\d{1,2}$/;
    testar("txtFaturamento", padrao);
}

function validarCronometro() {
    let padrao = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d:\d{2}$/;
    testar("txtCronometro", padrao);
}
