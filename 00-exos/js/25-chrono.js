// alert('coucou');

let duration = 0;

const divMinus1 = document.createElement('minute');
const divSecond = document.createElement('seconde');
setInterval(updatTimer, 1000);


function updatTimer() {
    //toute les 60 seconde + 1 minute
    const minute = Math.floor(duration / 60);
    const seconde = duration % 60;

    console.log('duration :', duration, "seonde :", seconde);

    // if(minute < 10) {
    //     divMinute.innerHTML = '0' + minute;
    // } else {
    //     divMinute.innerHTML = minute;
    // }


    divSeconde.innerHTML = seconde < 10 ? "0" + seconde : seconde;

    duration++;
}
