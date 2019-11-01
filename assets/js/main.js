// Dès que le DOM est chargé
$(function () {
    // Quand on clique sur un élément avec la class scroll
    $('.scroll').on('click', function() {
        $('.active').removeClass('active'); // On supprime la class active de l'élément qui l'a
        $(this).addClass('active'); // On ajoute la class active à l'élément cliqué
        var page = $(this).attr("href"); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $("html, body").animate({ scrollTop: $(page).offset().top - 80 }, speed);
        return false;
    });
});