document.addEventListener('DOMContentLoaded', function() {

    // 1. Lógica del menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Animaciones al hacer Scroll (Scroll Reveal)
    const animatedElements = document.querySelectorAll('.animate-hidden');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    // Opcional: dejar de observar el elemento una vez visible
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2, // El elemento se muestra cuando el 20% es visible
            rootMargin: "0px 0px -50px 0px"
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
});

// Función para abrir y cerrar las tarjetas interactivas
function toggleCard(card) {
    // Si la tarjeta ya está activa, la cerramos
    if (card.classList.contains('active')) {
        card.classList.remove('active');
    } else {
        // Si no, cerramos todas las demás y abrimos esta
        document.querySelectorAll('.interactive-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    }
}

// Funciones para el Modal de Reseñas
function openReviewModal() {
    const modal = document.getElementById('review-modal');
    if (modal) modal.classList.add('modal-active');
}

function closeReviewModal() {
    const modal = document.getElementById('review-modal');
    if (modal) modal.classList.remove('modal-active');
}

// Acción al presionar "Enviar Calificación"
function submitReview(event) {
    event.preventDefault(); // Evita que la página parpadee o se recargue

    const name = document.getElementById('reviewer-name').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const text = document.getElementById('reviewer-text').value;

    // Simulación profesional de éxito
    alert(`¡Muchas gracias por tu calificación de ${rating} estrellas, ${name}! Tu reseña ha sido enviada a moderación y se publicará muy pronto.`);

    // Reseteamos el formulario y cerramos la ventana
    document.getElementById('review-form').reset();
    closeReviewModal();
}
