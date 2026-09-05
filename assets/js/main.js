// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Appointment form: shows a success message.
  // IMPORTANT: this only works once you connect the form to a real
  // service — see the "Randevu formunu bağlama" section in README.md.
  var form = document.getElementById('randevu-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      // If the form hasn't been connected to Formspree (or similar) yet,
      // fall back to opening the visitor's email client instead of failing silently.
      if (action.indexOf('FORMSPREE_ID') !== -1 || action === '') {
        e.preventDefault();
        var name = form.querySelector('[name="ad_soyad"]').value;
        var phone = form.querySelector('[name="telefon"]').value;
        var topic = form.querySelector('[name="konu"]').value;
        var message = form.querySelector('[name="mesaj"]').value;
        var body = encodeURIComponent(
          'Ad Soyad: ' + name + '\nTelefon: ' + phone + '\nKonu: ' + topic + '\n\n' + message
        );
        window.location.href = 'mailto:ORNEK@eposta.com?subject=Randevu Talebi&body=' + body;
        var note = document.getElementById('form-fallback-note');
        if (note) note.classList.add('show');
      }
    });
  }
});
