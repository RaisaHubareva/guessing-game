class GuessingGame{
  constructor() {
    this.min = 0;
    this.max = 0;
    this.num = 0;
  }
  setRange (min, max){
    this.min = min;
    this.max = max;
  }
  guess (){
    return this.num = Math.floor(this.min + ((this.max - this.min + 1)/2));
  } 
  lower(){
    if (this.num < this.max){
      this.max = this.num;
    }
  }
  greater(){
    if (this.num > this.min){
      this.min = this.num;
    }
  }
}
module.exports = GuessingGame;
