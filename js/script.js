
  const form = document.querySelector('.cta-form');

  form.addEventListener('submit', function (event) {
    
    event.preventDefault();

    form.submit();

    form.reset();
    
  });

