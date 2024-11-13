function togglePlayPause(audioId, buttonId) {
    const audio = document.getElementById(audioId);
    const playPauseBtn = document.getElementById(buttonId);

    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function skipTime(audioId, seconds) {
    const audio = document.getElementById(audioId);
    audio.currentTime += seconds;
}

function seek(audioId, progressId) {
    const audio = document.getElementById(audioId);
    const progress = document.getElementById(progressId);
    const seekTo = audio.duration * (progress.value / 100);
    audio.currentTime = seekTo;
}

document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('timeupdate', () => {
        const progressId = `progress${audio.id.slice(-1)}`;
        const progress = document.getElementById(progressId);
        const value = (audio.currentTime / audio.duration) * 100;
        progress.value = value;
    });
});
