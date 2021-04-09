let JSON = [];
let HTMLCard = "";

function verProductos() {
    $.ajax({
        url: "../json/veterinariaOrozco.json",
        dataType: "json",
        success: function(data) {
            JSON = data
            $.each(JSON, function(i) {
                HTMLCard += ` 
                <div class="card">
                <img src="${JSON[i].img}" alt="${JSON[i].titulo}">
                <h2 class="card__titulo">${JSON[i].titulo}</h2>
                <p class="card__resumen">${JSON[i].resumen}</p>
                </div>
                `;
            })
            $("#contenido").html(HTMLCard)
        }
    })
}


setTimeout(() => {
    verProductos();
    $("#contenido").fadeIn("fast", function() {
        $("#loader").fadeOut("fast")
    });
}, 2000)