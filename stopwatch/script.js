let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
let lapBtn = document.getElementById('lap'); // Reference to lap button
let lapList = document.getElementById('lapList'); // Reference to lap list

let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 

let timer; // Timer variable
let timerRunning = false; // Flag to check if timer is running
let lapCounter = 1; // Counter for lap number

startBtn.addEventListener('click', function () { 
    if (!timerRunning) {
        timer = setInterval(stopWatch, 10);
        timerRunning = true;
    }
}); 

stopBtn.addEventListener('click', function () { 
    clearInterval(timer);
    timerRunning = false;
}); 

resetBtn.addEventListener('click', function () { 
    clearInterval(timer);
    timerRunning = false;
    hour = 0; 
    minute = 0; 
    second = 0; 
    count = 0; 
    lapCounter = 1; // Reset lap counter
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
    lapList.innerHTML = ''; // Clear lap list
}); 

lapBtn.addEventListener('click', function () {
    if (timerRunning) {
        let lapTime = document.getElementById('time').innerText;
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
});

function stopWatch() { 
    count++; 

    if (count == 100) { 
        second++; 
        count = 0; 
    } 

    if (second == 60) { 
        minute++; 
        second = 0; 
    } 

    if (minute == 60) { 
        hour++; 
        minute = 0; 
        second = 0; 
    } 

    let hrString = hour; 
    let minString = minute; 
    let secString = second; 
    let countString = count; 

    if (hour < 10) { 
        hrString = "0" + hrString; 
    } 

    if (minute < 10) { 
        minString = "0" + minString; 
    } 

    if (second < 10) { 
        secString = "0" + secString; 
    } 

    if (count < 10) { 
        countString = "0" + countString; 
    } 

    document.getElementById('hr').innerHTML = hrString; 
    document.getElementById('min').innerHTML = minString; 
    document.getElementById('sec').innerHTML = secString; 
    document.getElementById('count').innerHTML = countString; 
}
