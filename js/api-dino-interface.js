import { Dino } from "./../js/dino.js";

$(function(){
  $('#dino-form').click(function(){
    const paragraphNum = $('#paragraph').val();
    const wordNum = $('#word').val();
    let dino = new Dino(paragraphNum, wordNum);

    let fillContainer = dino.dinoApi();
    $('#result-div').text(fillContainer);
  });
});
