//CAPTAR A SUBMISSAO DE DADOS NO INPUT QUANDO CARREGAM NO ENTER
$('#iteminput').on("keypress", function(event){
    if(event.which == 13) {
        var userinput = $(this).val();
        var newEl = $('<div class="list-item flex-child"><div class="item-trash delete-item"><i class="fas fa-trash-alt"></i></div><div class="item"><p>'+userinput+'</p></div></div>');
        $(".item-trash").hide();
        $(newEl).children(".item-trash").hide();
        $(newEl).hide().appendTo("#list").fadeIn(600);
        //$('#list').append(newEl);
        $(this).val('');
    }
});


//AO CLICAR NUM DOS ITEMS, ESTE FICA 'CHECKED'
$('#list').on("click", ".item", function(){
    $(this).toggleClass('checked');
})

//AO CLICAR NO 'LIXO' DAR FADE OUT E REMOVE DESTE ELEMENTO
$('#list').on("click", ".delete-item", function(){
    console.log('0sd');
    $(this).closest('.flex-child').fadeOut(300, function(){
        $(this).closest('.flex-child').remove();
    });
})


//AO CLICAR NO 'MAIS' VAMOS ABRIR E FECHAR O INPUT COM UM SLIDE
$("#iteminput").hide();
$('#plus').on("click", function(){
    console.log('hey')
    $('#iteminput').slideToggle(200);
})

//CRIAR O SLIDE NO BOTAO DE APAGAR
$(".item-trash").hide();
$('#list').on("mouseover", ".list-item", function(){
        $(this).children(".item-trash").show(200);
})

$('#list').on("mouseleave", ".list-item", function(){
    $(this).children(".item-trash").hide(200);
})