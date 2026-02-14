(function () {
  'use strict';

  // FAQ accordion
  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq__question');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      faqItems.forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.faq__question')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      burger.classList.toggle('is-open');
    });
  }

  // Form submit
  var form = document.getElementById('signup-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var obj = {};
      data.forEach(function (value, key) {
        obj[key] = value;
      });
      console.log('Signup data:', obj);
      alert('Спасибо! Мы свяжемся с вами в ближайшее время и подберём удобное время для пробного занятия.');
      form.reset();
    });
  }

  // Optional: phone mask (simple)
  var phoneInput = document.querySelector('input[name="phone"]');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      var v = this.value.replace(/\D/g, '');
      if (v.length > 0) {
        if (v[0] === '8' || v[0] === '7') v = v.slice(1);
        var s = '+7';
        if (v.length > 0) s += ' (' + v.slice(0, 3);
        if (v.length >= 3) s += ') ' + v.slice(3, 6);
        if (v.length >= 6) s += '-' + v.slice(6, 8);
        if (v.length >= 8) s += '-' + v.slice(8, 10);
        this.value = s;
      }
    });
  }
})();
