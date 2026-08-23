/* 1. Typewriter */
    (function() {
      const el = document.getElementById('typed-name');
      const name = 'MANISH JOSHI';
      let i = 0;
      function type() {
        if (i <= name.length) {
          el.textContent = name.slice(0, i++);
          setTimeout(type, i === 1 ? 600 : 100);
        }
      }
      type();
    })();

    /* 2. Mobile menu */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    function closeMobile() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', closeMobile);
    });

    /* 3. Scroll reveal */
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    /* 4. Counters */
    const cntObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target = +e.target.dataset.count;
          let n = 0;
          const t = setInterval(() => {
            n = Math.min(n + 1, target);
            e.target.textContent = n + '+';
            if (n >= target) clearInterval(t);
          }, 60);
          cntObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.fact-value[data-count]').forEach(el => cntObs.observe(el));

    /* 5. Active nav */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let cur = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id; });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
      });
    }, { passive: true });

    /* 6. Back to top */
    const btn = document.getElementById('back-top');
    window.addEventListener('scroll', () => btn.classList.toggle('show', scrollY > 400), { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
