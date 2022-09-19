$( "#accordion" ).accordion({
    collapsible: true,       
    heightStyle: "content",    
    header: '> .accordion-item > .accordion-header',   
    icons: {
        header: "headerIconClass",
        activeHeader: "activeHeaderClass"
     }
});