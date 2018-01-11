import { Dino } from "./../js/api-dino.js";

$(function(){
  $('#dino-form').submit(function(event){
    event.preventDefault();
    const paragraphNum = $('#paragraph').val();
    const wordNum = $('#word').val();
    let dino = new Dino(paragraphNum, wordNum);

    dino.dinoApi(function(response){

      for (var i = 0; i < response.length; i++) {
        var paragraphs = response[i].join(',</br>');
        if (response[i].includes("saurus")); {
          alert("saurus");
        }
        $('#some-awesome-container').append(`<li>${paragraphs}</li></br>`);
      }
    }, function(){
      console.log("Something went wrong")
    });
  });
});
