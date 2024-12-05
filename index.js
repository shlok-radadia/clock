setInterval(() => {
    d = new Date()
    h = d.getHours()
    m = d.getMinutes()
    s = d.getSeconds()

    // 12 hr = 360 deg
    // 1 hr = 30 deg
    // 1 hr = 60 min = 30 deg
    // 1 min = 1/2 deg
    // n min = n/2 deg
    // hour hand = hours*30 + min/2 deg
    // Above formulas will be used to get hours

    // 60 min = 360 deg
    // 1 min = 6 deg
    // minute hand = min*6 deg
    // Above formula will be used to get minutes

    // 60 sec = 360 deg
    // 1 sec = 6 deg
    // second hand = sec*6 deg
    // Above formula will be used to get seconds

    hours = h*30 + m/2
    mins = m*6
    secs = s*6

    let hour_hand = document.getElementById("hours")
    let minute_hand = document.getElementById("minutes")
    let second_hand = document.getElementById("seconds")

    hour_hand.style.transform = `rotate(${hours}deg)`
    minute_hand.style.transform = `rotate(${mins}deg)`
    second_hand.style.transform = `rotate(${secs}deg)`
    
}, 1000);