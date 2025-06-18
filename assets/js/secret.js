document.getElementById('zeroTwoBtn').addEventListener('click', function(e) {
  e.preventDefault();
  const video = document.querySelector('.video-bg');
  const audio = document.querySelector('.video-section audio');
  video.querySelector('source').src = '/assets/resources/video/ohayo.mp4';
  audio.querySelector('source').src = '/assets/resources/audio/2phuthon.mp3';
  video.load();
  audio.load();
  video.play();
  audio.play();

  document.title = 'ZeroTwo Mode | Home';
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = '/assets/resources/icons/zero_two.gif';
  document.getElementsByTagName('head')[0].appendChild(link);
});

