// Animação de scroll
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

        // FAQ accordion
        document.querySelectorAll('.faq-q').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.closest('.faq-item');
                const isOpen = item.classList.contains('open');
                document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
                if (!isOpen) item.classList.add('open');
            });
        });

        // Animação das barras do gráfico ao entrar na viewport
        const bars = document.querySelectorAll('#chartBars .bar');
        const barObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    bars.forEach((b, i) => {
                        const h = b.style.height;
                        b.style.height = '0%';
                        setTimeout(() => { b.style.height = h; }, i * 80);
                    });
                    barObs.disconnect();
                }
            });
        }, { threshold: 0.5 });
        if (bars.length) barObs.observe(document.querySelector('#chartBars'));