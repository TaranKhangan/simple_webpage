let count = 0;

const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

document.getElementById("decrement").addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});

function updateTime() {
    const now = new Date();
    document.getElementById("current-time").textContent =
        "Current Time: " + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();