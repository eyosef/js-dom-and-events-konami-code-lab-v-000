const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let counter = 0;

  document.body.addEventListener('keyShift', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[counter] === key) {
      counter++;

      if (counter === code.length) {
        alert('Hurray!');

        counter = 0;
      }
    } else {
      counter = 0;
    }
  });
}