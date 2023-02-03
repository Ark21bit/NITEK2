
$("#search_input").keyup(function(){    
    filterCitys();
})

$('#search_clear').click(function(){
    $("#search_input").val("");
    filterCitys();
});

function filterCitys() {
    $(".citys-item" ).each(function( ) {  
        if ($(this).data("city").toLowerCase().includes($(".search_input").val().toLowerCase()) ) {       
            $(this).show();                
            if ($(this).parents('.citys-dropdown').length > 0) {
                $(this).parents('.citys-dropdown').show(); 
            } 
        }else{        
            $(this).hide();             
        }        
    });
}

$('.citys-dropdown-toggle').click(function(){
    $(this).parents('.citys-dropdown')[0].classList.toggle('active');
});