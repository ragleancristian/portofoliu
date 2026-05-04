let nav = document.querySelector(".header__nav--links");
let burger = document.querySelector(".header__nav--hamburger");
let burgerFirstLine = document.querySelector(".line-1");
let burgerSecondLine = document.querySelector(".line-2");

burger.addEventListener("click", function () {
  burgerFirstLine.classList.toggle("line-1-toggled");
  burgerSecondLine.classList.toggle("line-2-toggled");

  nav.classList.toggle("display-nav");
});


// clock

const targetDate = new Date(2026, 11, 31, 23, 59, 59).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Calcule pentru timp
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculăm valorile rămase
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // Actualizăm HTML-ul folosind clasele tale
    document.querySelector('.countdown__content--day div p:first-child').textContent = textDay;
    document.querySelector('.countdown__content--hour div p:first-child').textContent = String(textHour).padStart(2, '0');
    document.querySelector('.countdown__content--minute div p:first-child').textContent = String(textMinute).padStart(2, '0');
    document.querySelector('.countdown__content--second div p:first-child').textContent = String(textSecond).padStart(2, '0');

    // Dacă timpul a expirat
    if (gap <= 0) {
        clearInterval(timer);
        document.querySelector('.countdown__content').innerHTML = "<h2>Evenimentul a început!</h2>";
    }
}

// Actualizăm la fiecare secundă
const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// portofoliu poze

