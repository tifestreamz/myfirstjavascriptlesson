alert('hello world');
$(document).ready(function(){
    
    $('h1').fadeOut(1000).fadeIn(1000);
    
    
    $('.ui-message1').append('<span class="ui-close1">x</span>').append('<span class="ui-min1">-</span>');
    
    $('.ui-close1').click(function(){
        
       $('.ui-message1').hide(); 
        
    });
    $('.ui-min1').click(function(){
        
       $('#hide').fadeToggle(1000); 
        
    });
   
    
    
    $('.ui-message2').append('<span class="ui-close2">x</span>').append('<span class="ui-min2">-</span>');
    
    $('.ui-close2').click(function(){
        
       $('.ui-message2').hide();  });
        
        $('.ui-min2').click(function(){
        
       $('#hide2').fadeToggle(); 
        
    });
       
    
    $('.ui-message3').append('<span class="ui-close3">x</span>').append('<span class="ui-min3">-</span>');
    ``
    $('.ui-close3').click(function(){
        
       $('.ui-message3').hide(); 
        
    });
     $('.ui-min3').click(function(){
        
       $('#hide3').fadeToggle(); 
        
    });
       
    
   //faq section// 
    
    $('.answer').hide();
    
    $('h4').click(function(){
       $(this).next('.answer').slideToggle().siblings('.faq .answer').hide(); 
        
    });
    
    
    
    var textmax= $('#textarea').attr('maxlength');
    $('#textarea-feedback').html(textmax + " characters remaining" );
    $('#textarea').keyup(function(){
        
        var character_count = $('#textarea').val().length;
         var remaining = textmax-character_count; 
        
        $('#textarea-feedback').html(remaining + " characters remaining" );
    });
    

     
   //val=value which is the actual words entered into the box 
    //trying out the three get methods.//
    //this is the text get method used with alert
    
//    $('h1').click(function(){
//        
//       alert('Text:' + $('.ui-message1').text()); 
//    });
//    
   //trying the html get method 
    
    
//    $('h1').click(function(){
//        
//       alert('HTML:' + $('.ui-message1').html()); 
//    });
//    

    
});