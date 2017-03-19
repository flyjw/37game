$(function() {
    // tab切换
    $("#tab_left_1").mouseover(function() {
        $("#tab_con_1").show();
        $("#tab_left_1 i").show();
        $("#tab_left_1 p").css("color","#fff");
    }).mouseout(function() {
        $("#tab_left_1 i").hide();
        $("#tab_left_1 p").css("color","#000");
    });

    $("#tab_left_2").mouseover(function() {
        $("#tab_con_1").hide();
        $("#tab_con_3").hide();
        $("#tab_con_4").hide();
        $("#tab_con_2").show();
        $("#tab_left_2 i").show();
        $("#tab_left_2 p").css("color","#fff");
    }).mouseout(function() {
        $("#tab_left_2 i").hide();
        $("#tab_left_2 p").css("color","#000");
    });

    $("#tab_left_3").mouseover(function() {
        $("#tab_con_2").hide();
        $("#tab_con_1").hide();
        $("#tab_con_4").hide();
        $("#tab_con_3").show();
        $("#tab_left_3 i").show();
        $("#tab_left_3 p").css("color","#fff");
    }).mouseout(function() {
        $("#tab_left_3 i").hide();
        $("#tab_left_3 p").css("color","#000");
    });

    $("#tab_left_4").mouseover(function() {
        $("#tab_con_1").hide();
        $("#tab_con_2").hide();
        $("#tab_con_3").hide();
        $("#tab_con_4").show();
        $("#tab_left_4 i").show();
        $("#tab_left_4 p").css("color","#fff");
    }).mouseout(function() {
        $("#tab_left_4 i").hide();
        $("#tab_left_4 p").css("color","#000");
    });

});
