function validate()
    {
        const peso   = document.getElementById('peso');
        const altura = document.getElementById('altura');
        peso.style.border   = 'none';
        altura.style.border = 'none';
        if(!peso.value || !altura.value)
        {
            if(!peso.value && !altura.value)
            {
                peso.style.border = '1px solid red';
                altura.style.border = '1px solid red';
            }
            else if(!peso.value)
            {
                peso.style.border = '1px solid red';
            }
            else
            {
                altura.style.border = '1px solid red';
            }
        }
        else
        {
            let imc = peso.value / (altura.value * altura.value);
            const result = document.getElementById('resultado');
            if(imc < 18.5)
            {
                console.log('Magreza | Peso Normal');
                result.style.color = 'yellow';
                result.innerHTML = 'Magreza | Normal: 0';
            }
            else if(imc >= 18.5 && imc < 25)
            {
                console.log('Normal | Pré obeso');
                result.style.color = 'green';
                result.innerHTML = 'Normal | Pré obeso';
            }
            else if(imc >= 25 && imc < 30)
            {
                console.log('Sobrepeso | Obesidade: I');
                result.style.color = 'white';
                result.innerHTML = 'Sobrepeso | Obesidade: I';
            }
            else if(imc >= 30 && imc < 40)
            {
                console.log('Obesidade: I | Obesidade: II');
                result.style.color = 'red';
                result.innerHTML = 'Obesidade: I | Obesidade: II';
            }
            else
            {
                console.log('Obesidade grave | Obesidade: III');
                result.style.color = 'black';
                result.innerHTML = 'Obesidade grave | Obesidade: III';
            }
        }
    }
