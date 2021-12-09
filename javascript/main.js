function getTimeUntilChristmas()
{
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    const christmas2021 = new Date(2021, 11, 25);
    const currentDate = new Date();
    return Math.round((christmas2021 - currentDate) / day)
}

var lastTick = new Date().getTime();
while (true) {
    if ((new Date().getTime() - lastTick) >= 1000)
    {
        lastTick = new Date().getTime()
        document.getElementById("countdowntext").innerHTML = "Time until Christmas: " + getTimeUntilChristmas()      
    }
}
