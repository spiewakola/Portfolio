

$( document ).ready(function() {
    $('.tab').on('click', function(){
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').addClass('d-lg-none');
             
       var dataContent=$(this).attr('data-content')
        $(dataContent).removeClass('d-lg-none')

    });
});