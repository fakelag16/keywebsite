document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Добавьте здесь логику входа
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Добавьте здесь логику регистрации
        });
    }
});
