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
