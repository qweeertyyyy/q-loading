volume = 0.050;
const music = document.getElementById('music');

window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        if (volume === 0) {
            volume = 0.050;
        } else {
            volume = 0;
        }
        music.volume = volume;
    }
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 5 + 3) + 's';
    document.body.appendChild(snowflake);

    snowflake.addEventListener('animationiteration', () => {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 100);