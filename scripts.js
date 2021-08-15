const getValues = () => {
    const yearOfBirth = document.getElementById('ipt-anoNasc');
    const inputRadio = document.querySelector('input[name="radio"]:checked');
    const actualYear = new Date();
    const actualYear2 = actualYear.getFullYear();
    
    if(yearOfBirth.value.length != 4 || yearOfBirth.value.length == 0){
        alert('Você precisa informar um ano de nascimento de quatro dígitos!')
    }else if(inputRadio == null){
        alert('Campos não preenchidos!');
    }
    else if(yearOfBirth.value > actualYear2){
        alert('Valor inválido! O valor informado é maior que o ano atual.');
    }
    else{
        const age = actualYear2 - Number(yearOfBirth.value);
        const result = document.createElement('div');
        const text = document.createElement('p');
        const container = document.querySelector('div.container');
        result.setAttribute('id', 'result');
        text.innerHTML = `Você possui ou fará ${age} anos este ano e é do sexo ${inputRadio.value}.`;
        result.appendChild(text);
        container.appendChild(result);
    }
}