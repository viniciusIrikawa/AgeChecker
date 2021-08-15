const getValues = () => {
    const yearOfBirth = document.getElementById('ipt-birthYear');
    const inputRadio = document.querySelector('input[name="radio"]:checked');
    const actualYear = new Date();
    const actualYear2 = actualYear.getFullYear();
    
    if(yearOfBirth.value.length != 4 || yearOfBirth.value.length == 0){
        alert('You need to report a four-digit birth year!')
    }else if(inputRadio == null){
        alert('Fields not filled in!');
    }
    else if(yearOfBirth.value > actualYear2){
        alert('Invalid value! The reported value is greater than the current year.');
    }
    else{
        const age = actualYear2 - Number(yearOfBirth.value);
        const result = document.createElement('div');
        const text = document.createElement('p');
        const container = document.querySelector('div.container');
        result.setAttribute('id', 'result');
        text.innerHTML = `You are or will be ${age} this year and are ${inputRadio.value}`;
        result.appendChild(text);
        container.appendChild(result);
    }
}