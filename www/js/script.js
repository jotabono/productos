$(document).ready(function() {
  mostrarProductos();
});

function mostrarProductos() {
    var source = new XMLHttpRequest();
    source.open("GET", "http://deideasmarketing.solutions/?json=get_recent_posts&post_type=item")
    source.onload = function() {
        var productos_array = JSON.parse(source.responseText);
        var html = "";

        for (var i = 0; i < productos_array.posts.length; i++) {
            var title = productos_array.posts[i].title;
            var link = productos_array.posts[i].url;
            var image = productos_array.posts[i].thumbnail_images.large.url;
            var elecorgas = productos_array.posts[i].custom_fields.Electronic_or_Gas;
            var mm = productos_array.posts[i].custom_fields.mm;
            var anchobanda = productos_array.posts[i].custom_fields.ancho_banda;
            var largobanda = productos_array.posts[i].custom_fields.largo_banda;
            var hbocaentrada = productos_array.posts[i].custom_fields.h_boca_entrada;
            var m3 = productos_array.posts[i].custom_fields.m3;
            var kg = productos_array.posts[i].custom_fields.kg;
            var kw = productos_array.posts[i].custom_fields.kw;
            var v = productos_array.posts[i].custom_fields.v;
            var hz = productos_array.posts[i].custom_fields.hz;
            var pvp = productos_array.posts[i].custom_fields.pvp;
            var observaciones = productos_array.posts[i].custom_fields.observaciones;

            html = html + "<div class='thumbnail mythumbnail'>" +
            "<img style='height:200px;' src='"+image+"'/>" +
            "<div width='100%' class='titlebar'><h2 style='text-align:center; color:white;'>" + title + "</h2></div>" +
            "<div class='data'>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + elecorgas + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + mm + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + anchobanda + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + largobanda + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + hbocaentrada + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + m3 + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + kg + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + kw + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + v + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + hz + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + pvp + "</span><br/>" +
            "<span><i class='glyphicon glyphicon-minus'></i> " + observaciones + "</span>" +
            "</div>" +
            "</div>";
        }

        document.getElementById("productos").innerHTML = html;
    };
    source.send();
}
