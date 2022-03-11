$(document).ready(function () {
    $(".mobile-filter-btn").click(function () {
        $(".plp-filter").addClass("visible");
    });
    $(".mob-heading-close-btn").click(function () {
        $(".plp-filter").removeClass("visible");
    });
});