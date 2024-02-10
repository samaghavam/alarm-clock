const selectMenu = document.querySelectorAll('select');
const timebox = document.querySelector('.time');

// adding options for hour and minutes
// for hours
for(let i = 23 ; i >= 0 ; i--){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option);
}

// for minutes
for(let i = 59 ; i >= 0 ; i--){
    i = i < 10 ? '0' + i : i;

    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option);
}

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    timebox.innerHTML = `${h} : ${m} : ${s}`;
}, 1000);







