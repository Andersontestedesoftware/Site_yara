(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Ano no footer
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Menu mobile
  const toggle = $('.nav__toggle');
  const menu = $('#menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha o menu ao clicar em um link
    $$('#menu a').forEach((a) => {
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // WhatsApp link
  const waNumber = '5531988915125'; // 31 9 88915125
  const waText = encodeURIComponent('Olá! Gostaria de agendar uma conversa e entender como posso ser orientado(a).');
  const waUrl = `https://wa.me/${waNumber}?text=${waText}`;
  $$('[data-wa-link]').forEach((el) => {
    el.setAttribute('href', waUrl);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  // Formulário de contato (client-side): validação + fallback mailto
  const form = $('#contactForm');
  if (!form) return;

  const setError = (name, message) => {
    const box = document.querySelector(`[data-error-for="${name}"]`);
    if (box) box.textContent = message || '';
  };

  const getValue = (name) => {
    const el = form.elements[name];
    return el && typeof el.value === 'string' ? el.value.trim() : '';
  };

  const validate = () => {
    let ok = true;

    const nome = getValue('nome');
    const email = getValue('email');
    const assunto = getValue('assunto');
    const mensagem = getValue('mensagem');

    setError('nome', '');
    setError('email', '');
    setError('assunto', '');
    setError('mensagem', '');

    if (nome.length < 2) {
      setError('nome', 'Informe seu nome.');
      ok = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('email', 'Informe um e-mail válido.');
      ok = false;
    }

    if (!assunto) {
      setError('assunto', 'Selecione um assunto.');
      ok = false;
    }

    if (mensagem.length < 10) {
      setError('mensagem', 'Escreva uma mensagem com pelo menos 10 caracteres.');
      ok = false;
    }

    return ok;
  };

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const nome = getValue('nome');
    const email = getValue('email');
    const telefone = getValue('telefone');
    const assunto = getValue('assunto');
    const mensagem = getValue('mensagem');

  const to = 'yresendesoares@gmail.com';
    const subject = encodeURIComponent(`[Site] ${assunto} - ${nome}`);
    const body = encodeURIComponent(
      `Nome: ${nome}\n` +
        `E-mail: ${email}\n` +
        `Telefone: ${telefone}\n` +
        `Assunto: ${assunto}\n\n` +
        `Mensagem:\n${mensagem}\n\n` +
        `---\nEnviado pelo site institucional.`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
})();
