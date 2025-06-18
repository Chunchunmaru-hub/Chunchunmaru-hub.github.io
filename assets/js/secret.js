document.getElementById('zeroTwoBtn').addEventListener('click', function(e) {
  e.preventDefault();
  const video = document.querySelector('.video-bg');
  const audio = document.querySelector('.video-section audio');
  // Set new sources here:
  video.querySelector('source').src = '/assets/resources/video/ohayo.mp4';
  audio.querySelector('source').src = '/assets/resources/audio/2phuthon.mp3';
  // Reload and play updated media:
  video.load();
  audio.load();
  video.play();
  audio.play();
});

