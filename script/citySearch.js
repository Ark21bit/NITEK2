
$("#search_input").keyup(function(){    
    filterCitys();
})

$('#search_clear').click(function(){
    $("#search_input").val("");
    filterCitys();
});

function filterCitys() {
    $(".citys-item" ).each(function( ) {  
        if ($(this).data("city").toLowerCase().indexOf($(".search_input").val().toLowerCase()) ) {       
            $(this).fadeOut();  
        }else{        
            $(this).fadeIn();     
        }        
    });
}