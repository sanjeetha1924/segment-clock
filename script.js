const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let clock = setInterval(() => {
    let newDate = new Date();
    let hr = newDate.getHours();
    let mn = newDate.getMinutes();
    let sc = newDate.getSeconds();

    hours.textContent = getRealNm(hr);
    minutes.textContent = getRealNm(mn);
    seconds.textContent = getRealNm(sc);
}, 1000);

function getRealNm(Nm) {
    if (Nm < 10) {
        return '0' + Nm;
    } else {
        return Nm;
    }
}