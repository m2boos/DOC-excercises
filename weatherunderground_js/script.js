$(document).ready(function(){
  $("h1").click(function(){
    var city = $(".city").val()
    var state = $(".state").val()
    var url = "http://api.wunderground.com/api/d339f57c48506f08/conditions/q/" + state + "/" + city + ".json"
    $.getJSON(url)
      .done(function(response){
        var temF = response.current_observation.temp_f
        $("body").append($("<div style='margin:20px; color: blue;'>Temperature in Fahrenheit: " + temF + "</div>"));
        var icon = response.current_observation.icon_url
        console.log(icon)
        $("body").append($("<img src='" + icon + "' style='border: 10px solid blue; padding: 20px ;margin: 10px 40px;'/>"));
      })
      // .fail(function(){
      //   console.log("ajax request failed!")
      // })
      // .always(function(){
      //   console.log("this always happens!")
      // })
      //
      // $("<div class='newDiv'></div>")
//var newDiv = $("<div class='square'></div>");
  })

})
