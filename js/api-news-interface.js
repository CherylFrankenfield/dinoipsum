import { News } from "./../js/api-news.js";

$(function(){
  $('#news-form').submit(function(event){
    event.preventDefault();
    const source = $('#news-source').val();
    const topic = $('#topic').val();
    let newsOfTheDay = new News(topic, source);

    newsOfTheDay.newsApi(function(response){
      console.log(response);
      $('#news-output').append(`<li>${response}</li></br>`);
    },
    function(){
      console.log("Something went wrong")
    });
  });
});
