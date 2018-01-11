import { Dino } from "./../js/api-dino.js";

$(function(){
  $('#dino-form').submit(function(event){
    event.preventDefault();
    const paragraphNum = $('#paragraph').val();
    const wordNum = $('#word').val();
    let dino = new Dino(paragraphNum, wordNum);

    dino.dinoApi(function(response){
      console.log(response[0]);
      for (var i = 0; i < response.length; i++) {
        $('#some-awesome-container').append(`<p>${response[i]}</p></br>`);
      }
    }, function(){
      console.log("Something went wrong")
    });
  });
});
