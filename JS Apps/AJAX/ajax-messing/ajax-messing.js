$(function() {
     $ajax({
          type: 'GET',
          url: '',
          success: function(data){
               console.log('success', data);
          }
     });


}); //end doc ready scope
