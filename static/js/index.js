// Teaser: play with sound. Browsers block unmuted autoplay until the visitor
// interacts with the page, so fall back to muted playback and unmute on the
// first click, tap, or key press. Interactions on the video itself are left
// to its own controls, so its mute button still works as expected.
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('teaser');
  if (!video) return;

  var events = ['pointerdown', 'keydown', 'touchstart'];
  var unmute = function (e) {
    events.forEach(function (name) { document.removeEventListener(name, unmute, true); });
    if (e && e.target === video) return;
    video.muted = false;
    video.play().catch(function () {});
  };

  video.muted = false;
  var attempt = video.play();
  if (attempt && attempt.catch) {
    attempt.catch(function () {
      video.muted = true;
      video.play().catch(function () {});
      events.forEach(function (e) { document.addEventListener(e, unmute, true); });
    });
  }
});

// Copy the BibTeX block to the clipboard.
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('copy-bibtex');
  var code = document.getElementById('bibtex-code');
  if (!btn || !code) return;

  btn.addEventListener('click', function () {
    var label = btn.querySelector('.copy-label');
    var done = function (text) {
      label.textContent = text;
      setTimeout(function () { label.textContent = 'Copy'; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code.textContent).then(
        function () { done('Copied'); },
        function () { done('Press Ctrl+C'); }
      );
    } else {
      done('Press Ctrl+C');
    }
  });
});
