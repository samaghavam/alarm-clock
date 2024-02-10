// adding options for hour and minutes
const selectMenu = document.querySelectorAll('select');

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




