import { newsApi } from "./../js/api-news.js";
const apiKey = require('./../.env').apiKey;

$(function(){
  $('#news-source').val("npr.org");
  $('#topic').val("music");
  $('#news-form').submit(function(event){
    event.preventDefault();
    const source = $('#news-source').val();
    const topic = $('#topic').val();
    const apiCall = newsApi(source, topic, apiKey);

    apiCall.then(function(response){
      const news = JSON.parse(response);
      console.log(news.articles);
      news.articles.map(function(article){
        if (article.author) {
          $('#news-output').append(`<li>${article.author}</li></br>`);
        }
      });
    },
    function(error){
      alert("Something went wrong: " + error);
    });
  });
});


// $(function(){
//   $('#news-source').val("npr.org");
//   $('#topic').val("music");
//   $('#news-form').submit(function(event){
//     event.preventDefault();
//     const source = $('#news-source').val();
//     const topic = $('#topic').val();
//     const apiCall = newsApi(source, topic, apiKey);
//
// //5. ------------->
//     apiCall.then(function(response){
//       const news = JSON.parse(response);
//       console.log(news.articles);
//       news.articles.map(function(article){
//         if (article.author) {
//           $('#news-output').append(`<li>${article.author}</li></br>`);
//         }
//       });
//     },
//     function(error){
//       alert("Something went wrong: " + error);
//     });
//   });
// });
