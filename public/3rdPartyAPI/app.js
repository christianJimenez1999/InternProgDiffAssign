var lookup = $("#look-up-name");

lookup.on("click", function(){
    
    if($("#name").val().length == 0){
        $("#nameError").html("You need to insert a name first!");
    } else{
         $("#nameError").html("We will get you your details shortly");
    }
    
    $.ajax({
    method: "GET",
    url: "https://www.behindthename.com/api/lookup.json?name=" + $("#name").val() +"&key=ch802254322",
    type: "GET",
    dataType: "text",
    success: function(data) {
      text.html(data);
      text.addClass("details");
    },
    error: function(e) {
      text.html("An error occurred during your request: " +  e.status + " " + e.statusText);
      text.addClass("error");
    }
  });
    
});


$("#gender").on("change",function(){
          //alert($("#zip").val());
          
         $.ajax({
             method: "GET",
             url: "https://www.behindthename.com/api/lookup.json?name=" + $("#name").val() +"&key=ch802254322",
             dataType: "json",
             data: { "gender": $("#gender").val() },
             success: function(result, status) {
                 //alert(result);
                 
                $("#latitude").html(result.gender);
                      
                 
             }
             
         });    //ajax

          
      }); 