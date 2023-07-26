
let nome = document.getElementById('nome')
let msgerronome = document.getElementById('msgerronome')
let msgerroidade = document.getElementById('msgerroidade')
let idade = document.getElementById('idade')
let salario = document.getElementById('salario')

let estadocivil = ''
let envio = document.getElementById('envio')
let idd = parseInt(idade.value)


nome.addEventListener('input', function () {
    if (nome.value.length <= 3) {
        msgerronome.style.display = 'block';
    } else {
        envio.innerHTML = '<p></p>'
        msgerronome.style.display = 'none';
        // Aqui você pode executar a ação desejada quando o input tem mais de 3 caracteres.
        // Por exemplo, enviar o formulário ou fazer qualquer processamento adicional.
    }
})

idade.addEventListener('input', function () {
    let idd = parseInt(idade.value)
    if (idd <= 0 || idd > 120) {
        msgerroidade.style.display = 'block';
    } else {
        envio.innerHTML = '<p></p>'
        msgerroidade.style.display = 'none';

    }
})

function cadastrar() {

    let exnome = String(nome.value)
    let exidade = Number(idade.value)
    let exsalario = Number(salario.value)

    let sexradio = document.getElementsByName('radsex')
    let genero = ''

    let estadocvradio = document.getElementsByName('estadicivil')
    let estadocivil = ''


    if (estadocvradio[0].checked) {
        estadocivil = 'Solteiro'
        if (sexradio[0].checked) {
            genero = 'Masculino'
            if (exsalario === 0) {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
        <p>Idade cadastrada: <u>${exidade}</u></p>
        <p>Salário cadastrado: <u>Salário não informado</u></p>
        <p>Sexo cadastrado: <u>Masculino</u></p>
        <p>Estado civil cadastrado: <u>Solteiro(a)</u></p>`

            } else {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
        <p>Idade cadastrada: <u>${exidade}</u></p>
        <p>Salário cadastrado: <u>${exsalario}</u></p>
        <p>Sexo cadastrado: <u>Masculino</u></p>
        <p>Estado civil cadastrado: <u>Solteiro(a)</u></p>`
            }
        } else if (sexradio[1].checked) {
            if (exsalario === 0) {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
    <p>Idade cadastrada: <u>${exidade}</u></p>
    <p>Salário cadastrado: <u>Salário não informado</u></p>
    <p>Sexo cadastrado: <u>Feminino</u></p>
    <p>Estado civil cadastrado: <u>Solteiro(a)</u></p>`

            } else {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
    <p>Idade cadastrada: <u>${exidade}</u></p>
    <p>Salário cadastrado: <u>${exsalario}</u></p>
    <p>Sexo cadastrado: <u>Feminino</u></p>
    <p>Estado civil cadastrado: <u>Solteiro(a)</u></p>`
            }

        }

    } else if (estadocvradio[1].checked) {
        estadocivil = 'Casado'

        if (sexradio[0].checked) {
            genero = 'Masculino'
            if (exsalario === 0) {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
        <p>Idade cadastrada: <u>${exidade}</u></p>
        <p>Salário cadastrado: <u>Salário não informado</u></p>
        <p>Sexo cadastrado: <u>Masculino</u></p>
        <p>Estado civil cadastrado: <u>Casado(a)</u></p>`

            } else {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
        <p>Idade cadastrada: <u>${exidade}</u></p>
        <p>Salário cadastrado: <u>${exsalario}</u></p>
        <p>Sexo cadastrado: <u>Masculino</u></p>
        <p>Estado civil cadastrado: <u>Casado(a)</u></p>`
            }
        } else if (sexradio[1].checked) {
            if (exsalario === 0) {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
    <p>Idade cadastrada: <u>${exidade}</u></p>
    <p>Salário cadastrado: <u>Salário não informado</u></p>
    <p>Sexo cadastrado: <u>Feminino</u></p>
    <p>Estado civil cadastrado: <u>Casado(a)</u></p>`

            } else {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
    <p>Idade cadastrada: <u>${exidade}</u></p>
    <p>Salário cadastrado: <u>${exsalario}</u></p>
    <p>Sexo cadastrado: <u>Feminino</u></p>
    <p>Estado civil cadastrado: <u>Casado(a)</u></p>`
            }

        }
    } else if (estadocvradio[2].checked) {
        estadocivil = 'Viuvo'
        if (sexradio[0].checked) {
            genero = 'Masculino'
            if (exsalario === 0) {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
        <p>Idade cadastrada: <u>${exidade}</u></p>
        <p>Salário cadastrado: <u>Salário não informado</u></p>
        <p>Sexo cadastrado: <u>Masculino</u></p>
        <p>Estado civil cadastrado: <u>Viuvo(a)</u></p>`

            } else {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
        <p>Idade cadastrada: <u>${exidade}</u></p>
        <p>Salário cadastrado: <u>${exsalario}</u></p>
        <p>Sexo cadastrado: <u>Masculino</u></p>
        <p>Estado civil cadastrado: <u>Viuvo(a)</u></p>`
            }
        } else if (sexradio[1].checked) {
            if (exsalario === 0) {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
    <p>Idade cadastrada: <u>${exidade}</u></p>
    <p>Salário cadastrado: <u>Salário não informado</u></p>
    <p>Sexo cadastrado: <u>Feminino</u></p>
    <p>Estado civil cadastrado: <u>Viuvo(a)</u></p>`

            } else {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
    <p>Idade cadastrada: <u>${exidade}</u></p>
    <p>Salário cadastrado: <u>${exsalario}</u></p>
    <p>Sexo cadastrado: <u>Feminino</u></p>
    <p>Estado civil cadastrado: <u>Viuvo(a)</u></p>`
            }

        }
    } else if (estadocvradio[3].checked) {
        estadocivil = 'Divorciado'
        if (sexradio[0].checked) {
            genero = 'Masculino'
            if (exsalario === 0) {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
        <p>Idade cadastrada: <u>${exidade}</u></p>
        <p>Salário cadastrado: <u>Salário não informado</u></p>
        <p>Sexo cadastrado: <u>Masculino</u></p>
        <p>Estado civil cadastrado: <u>Divorciado(a)</u></p>`

            } else {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
        <p>Idade cadastrada: <u>${exidade}</u></p>
        <p>Salário cadastrado: <u>${exsalario}</u></p>
        <p>Sexo cadastrado: <u>Masculino</u></p>
        <p>Estado civil cadastrado: <u>Divorciado(a)</u></p>`
            }
        } else if (sexradio[1].checked) {
            if (exsalario === 0) {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
    <p>Idade cadastrada: <u>${exidade}</u></p>
    <p>Salário cadastrado: <u>Salário não informado</u></p>
    <p>Sexo cadastrado: <u>Feminino</u></p>
    <p>Estado civil cadastrado: <u>Divorciado(a)</u></p>`

            } else {
                envio.innerHTML = `<p>Nome cadastrado: <u>${exnome}</u></p>
    <p>Idade cadastrada: <u>${exidade}</u></p>
    <p>Salário cadastrado: <u>${exsalario}</u></p>
    <p>Sexo cadastrado: <u>Feminino</u></p>
    <p>Estado civil cadastrado: <u>Divorciado(a)</u></p>`
            }

        }
    }
}



