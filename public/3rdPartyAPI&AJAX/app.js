let searchName = function(){
    $("#images").empty();
    var url = "https://www.behindthename.com/api/lookup.json?&key=ch802254322";
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        data: {
            'name': $("#name").val()
        },
    success: function(data){
            
            console.log($("#name").val());
            console.log(data);
            console.log(data.length);
            console.log(data[0].usages.length);
            
            var i;
            for(i = 0; i < data[0].usages.length; i++){
                
                 console.log(data[0].usages[i].usage_full);
                 
                 if(data[0].usages[i].usage_gender ==  "m"){
                     var nme = "male.png";
                     
                     $("#images").append("<div class=\"font-weight-bolder\" class=\"p-3 mb-2 bg-dark text-blue\" class=\"img-thumbnail flex-item \" ><label>Usage: " + data[0].usages[i].usage_full  + " </label></div>");
                     $("#images").append("<label class=\"font-weight-bolder\"> Gender: Male </label>");
                     $("#images").append("<div><img src=\"img/" + nme + "\"><div>");
                 } else if(data[0].usages[i].usage_gender ==  "f"){
                     var fnme = "female.png";
                     
                     $("#images").append("<div class=\"font-weight-bolder\" class=\"p-3 mb-2 bg-dark text-pink\" class=\"img-thumbnail flex-item\"><label>  Usage: " + data[0].usages[i].usage_full  + " </label></div>");
                     $("#images").append("<label class=\"font-weight-bolder\"> Gender: Female </label>");
                     $("#images").append("<div><img src=\"img/" + fnme + "\"><div>");
                 } else if(data[0].usages[i].usage_gender ==  "mf"){
                     var bth = "both.jpg";
                     
                     $("#images").append("<div class=\"font-weight-bolder\" class=\"p-3 mb-2 bg-dark\" class=\"img-thumbnail flex-item\"><img src=\"img/" +  + "\"><label> Usage: " + data[0].usages[i].usage_full  + " </label></div>");
                     $("#images").append("<label class=\"font-weight-bolder\" > Gender: Female&Male </label>");
                     $("#images").append("<div><img src=\"img/" + bth + "\"><div>");
                 }
                
            }
            
        },
       
    });
}