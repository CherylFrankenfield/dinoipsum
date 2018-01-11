export class News {
  constructor(topic, source) {
    this.topic = topic;
    this.source = source;
  }


  newsApi(success, error) {
    let getNews = $.get(`https://newsapi.org/v2/everything?apiKey=9ad207d0aabb445bb8cf3e83edcd0ea5&domains${this.source}&q=${this.topic}`).then(function(res) {
      if (res) {
        success(res);
      } else {
        error('Oops, no news on that weird topic!');
      }
    });
  }
}
