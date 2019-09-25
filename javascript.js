$(document).ready(function(){
    $(":button").click(function(){
        $("p").toggle();

    if (this.value=="V") this.value = "F";
    else this.value = "V";

  });
});


$(function() {
    $( "#calendario1" ).datepicker();
});

$(function() {
    $( "#calendario2" ).datepicker();
});
$(function() {
    $( "#calendario3" ).datepicker();
});
