let buildGallery = function(){
    $("#column").empty();
    var url = "https://dog.ceo/api/breeds/image/random/" + $("#number-images").val();
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(data){
          data.message.forEach(function(src){
             $("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+src+"\"></div>"); 
          });
            
        },
       
    });
}

// let buildGallery = function(){
// 	$("#images").empty();
// 	var url = "https://dog.ceo/api/breeds/image/random/" + $("#number-images").val();
// 	$.ajax({
// 		url: url,
// 		type: "GET",
// 		dataType: "json",
// 		success: function(data){
// 			data.message.forEach(function(src){
// 				$("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+src+"\"></div>");
// 			});
// 		},
// 		error: function(err){
// 			console.log(err);
// 		}
// 	});
// }

// var WhenSubmit=$("#submitting");



// WhenSubmit.on("click", function(){
//   $.ajax({
//       method: "GET",
//       url: "https://dog.ceo/api/breeds/image/random",
//       dataType: "json",
//       success: function(result){
//           $("#column").html("<img src='" + result.message + "'>");
          
//       }
//   });
   
    
// });




// WhenSubmit.on("click", function(){
    
//   $.ajax({
//       method: "GET",
//       url: "https://dog.ceo/api/breeds/image/random" + $("amount").val(),
//       dataType: "json",
//       success: function(result){
          
//          result.message.forEach(function(link){
//              $("#column").append("<div class=\"img-thumbnail flex-item\"><img src=\""+link+"\"></div>")
//          });
          
          
//       }
//   });
   
    
// });