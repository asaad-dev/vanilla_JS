
//pour la page 04 conversion.html
let temp = prompt('Rentre une témperature en Celsius');

function celsius(){
    let temp = parseInt(document.value);
    let farhen = Math.round((temp * 9/5) + 32);

    document.getElementById('li-1').value = temp + '°C';
    document.getElementById('li-2').value = farhen + '°F';
    }

    celsius();//calling function


function fahrenheit() {
    let farhen = parseInt(document.innerHTML);
    let temp = Math.round((farhen - 32) * 5/9);

    document.getElementById('li-3').value = temp + '°C';
    document.getElementById('li-4').value = farhen + '°F';
    }

    fahrenheit(fahrenheit,temp  );//calling function