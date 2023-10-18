// getting items
const card = document.getElementById('card');
const card_front = document.getElementById('front');

const candleContainer = document.getElementById('candle-container');
const flame = document.getElementById('flame');

const plate = document.getElementById('plate');
const instruction = document.getElementById('instruction');

let open = false;

//open and close card
card.addEventListener('click', (event) => {
  if(!open){
    card_front.style.transform = 'rotateY(-120deg)';
    open = true;
  }
  else if(event.target === candleContainer){} 
  else if(event.target === plate){}
  else{
    card_front.style.transform = 'rotateY(0)';
    open = false;
  }
})

//blow candle
candleContainer.addEventListener('click', () => {
  flame.style.opacity = '0';
  instruction.innerHTML = 'Nhấn vào cái đĩa để thắp nến';
});

//light candle
plate.addEventListener('click', () => {
  flame.style.opacity = '1';
  instruction.innerHTML = 'Nhấn vào nến để thổi';
})