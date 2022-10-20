$(document).ready(function () {

    $("#btnSim").on("click", function(){
        swal("", " Gata você não é operação matemática, mas é um produto notável. ja que aceitou, espero tmb ganhar um beijo seu! (*ˊᗜˋ*)", "success");
    });

    $("#btnNao").hover(
        function () {
            let posTop = Math.floor(Math.random() * (300 - 10) + 10);
            let posLeft = Math.floor(Math.random() * (300 - 10) + 10);

            $(this).css({ top: posTop + "px", left: posLeft + "px" });
        }
    );

});