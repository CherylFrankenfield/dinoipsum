export class Dino {
  constructor(paragraph, word) {
    this.paragraph = word;
    this.word = word;
  }

  dinoApi(getDinos, function(fillContainer)) {

    var getDinos = $.get(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${this.paragraph}&words=${this.word}`);

    fillContainer = function(html) {
      $('#some-awesome-container').html(html);
    },
    oops = function() {
      return ('Where did all the dinosaurs go?');
    };

    getDinos.then(fillContainer, oops);

  }
}
