$(document).ready(function() {
    $(".btn.btn-primary").click(function() {
        var cardBody = $(this).closest(".card-body");
        var title = cardBody.find(".card-title").text().trim(); // Trim whitespace
        var description = cardBody.find(".card-text").text().trim(); // Trim whitespace
        var imageSrc = cardBody.closest(".card").find(".card-img-top").attr("src");

        $("#modal-title").text(title);
        $("#modal-description").text(description);
        $("#modal-image").attr("src", imageSrc);

        $("#myModal").modal("show");
    });

    $(".close").click(function() {
        $("#myModal").modal("hide");
    });

    $(window).click(function(event) {
        if ($(event.target).is("#myModal")) {
            $("#myModal").modal("hide");
        }
    });
});