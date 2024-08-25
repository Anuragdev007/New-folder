document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.envelope').forEach(function (element) {
        element.addEventListener('click', function () {
            this.classList.toggle('open');
        });
    });
});
