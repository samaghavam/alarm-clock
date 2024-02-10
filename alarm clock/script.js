const selectMenu = document.querySelectorAll('select');
const timebox = document.querySelector('.time');
const setAlarmBtn = document.querySelector('button');
const content = document.querySelector('.content');

let alarmTime;
const ringtone = new Audio('./audio/alarm.mp3');

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

    if(alarmTime == `${h} : ${m}`){
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);


// buttons codes for getting time and alarm
setAlarmBtn.addEventListener('click', ()=>{
    alarmTime = `${selectMenu[0].value} : ${selectMenu[1].value}`
    if(alarmTime.includes('Hour') || alarmTime.includes('minutes')){
        return alert('Please choose a correct time');
    }

    // changing options and set Alarm text
    content.classList.add('disable');
    setAlarmBtn.innerHTML = 'Clear Alarm';

})







