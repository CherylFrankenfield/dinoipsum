export class Dino {
  constructor(paragraphNum, wordNum) {
    this.paragraph = paragraphNum;
    this.word = wordNum;
  }


  dinoApi(success, error) {
    let dinoUrl = $.get(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${this.paragraph}&words=${this.word}`).then(function(res) {
      if (res) {
        success(res);
      } else {
        error('Where did all the dinosaurs go?');
      }
    });
  }
}
