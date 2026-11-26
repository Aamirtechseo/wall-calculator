// Wall Stud Calculator (mini) - same framing math as wallcalculator.app
// IRC-style takeoff: field studs by on-center spacing, 3 plates (double top
// + single bottom), 4 corner studs, 4 studs per opening (king + jack pairs).
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var inputs = ['wc-length', 'wc-height', 'wc-spacing', 'wc-lumber', 'wc-doors', 'wc-windows', 'wc-waste'];

  function calc() {
    var L = Math.max(1, parseFloat($('wc-length').value) || 16);
    var H = Math.max(4, parseFloat($('wc-height').value) || 8);
    var spacing = parseInt($('wc-spacing').value, 10);
    var lumber = $('wc-lumber').value;
    var doors = Math.max(0, parseInt($('wc-doors').value, 10) || 0);
    var windows = Math.max(0, parseInt($('wc-windows').value, 10) || 0);
    var waste = parseInt($('wc-waste').value, 10) || 0;
    $('wc-waste-val').textContent = waste + '%';

    var fieldStuds = Math.ceil((L * 12) / spacing) + 1;
    var plates = Math.ceil((L * 3) / H);
    var corners = 4;
    var openingStuds = (doors + windows) * 4;
    var base = fieldStuds + plates + corners + openingStuds;
    var total = Math.ceil(base * (1 + waste / 100));
    var price = lumber === '2x6' ? 7.25 : 4.85;
    var cost = Math.round(total * price);

    $('wc-studs').textContent = total;
    $('wc-cost').textContent = '$' + cost.toLocaleString();
    $('wc-plates').textContent = plates;
    $('wc-breakdown').textContent =
      'Breakdown: ' + fieldStuds + ' field studs at ' + spacing + ' in on-center, ' +
      plates + ' plate pieces, ' + corners + ' corner studs, ' + openingStuds +
      ' opening studs (kings and jacks), plus ' + waste + '% waste. Lumber priced at $' +
      price.toFixed(2) + ' per ' + lumber + ' stud.';
  }

  inputs.forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  calc();
})();
