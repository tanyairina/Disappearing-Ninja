var HTMLstring = "";
for(var i = 0; i < 8; i++){
    HTMLstring += '<img src="ninja.png" alt="nija">'
}
HTMLstring += '<button>Restore</button>'
$(document).ready(function(){
    $(".ninja_display").append(HTMLstring)

    $("img").click(function(){
        $(this).hide("slow");
    })

    $("button").click(function(){
        $("img").show();
    })
})
