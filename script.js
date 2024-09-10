function countdown(targetDate) {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime() + (new Date().getTimezoneOffset() * 60 * 1000) + (1 * 60 * 60 * 1000); // Adjust to GMT+1
        const distance = target - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "EXPIRED";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }, 1000);
}

window.addEventListener('load', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
const targetDate = "2024-09-10T16:55:00";
countdown(targetDate);
