
$.get("carta.xml", function(data) {
    var muntatge = "";
    var nImatge = 1;

    $(data).find("food").each(function() {
       
        var nom = $(this).find("name").text();
        var preu = $(this).find("price").text();
        var descrip = $(this).find("description").text();
        var calo = $(this).find("calories").text();

        muntatge += "<div class='col-md-4'>" +
            "<div class='card'>" +
            "<img src='tu-imagen-" + nImatge + ".jpg' class='card-img-top' alt='" + nom + "'>" +
            "<div class='card-body'>" +
            "<h5 id='plato'>" + nom + "</h5>" +
            "<p id='descripcion'>" + descrip + "</p>" +
            "<p id='precio'>" + preu + "</p>" +
            "<p id='calorias'>" + calo + "</p>" +
            "</div>" +
            "</div>" +
            "</div>";

        nImatge++;
    });

    // Agregar el contenido al elemento con id "menuDiv"
    $("#menuDiv").html(muntatge);
});
