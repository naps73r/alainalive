document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("radioPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const volumeControl = document.getElementById("volumeControl");

    // Default volume
    audio.volume = 0.5;
    volumeControl.value = 0.5;

    // Play/Pause Button
    playPauseBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "Pause";
        } else {
            audio.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    // Volume Control
    volumeControl.addEventListener("input", function () {
        audio.volume = this.value;
    });
});
