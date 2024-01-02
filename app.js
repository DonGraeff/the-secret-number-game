let number_list = [];
let max_number = 100;
let secret_number = number_generator();
let attemps = 1;


function display_screen(tag, text) {
  let func = document.querySelector(tag);
  func.innerHTML = text;
  responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate: 1.2});
}


function new_game_mensage() {
  display_screen('h1', 'Secret number game');
  display_screen('p', `Guess a number between 1 to ${max_number}`);
}
new_game_mensage();


function verify_guess() {
  let guess = document.querySelector('input').value;
  if(guess == secret_number){
    let word_attemps= attemps > 1 ? 'attemps' : 'attemp'; 
    let word_message = `That is, you discovered the secret number in ${attemps} ${word_attemps}!`;
    display_screen('h1', 'Congratulations!' );
    display_screen('p', word_message);
    document.getElementById('reiniciar').removeAttribute('disabled');
}
  else{
    if(guess> secret_number){
      display_screen('p', 'The secret number is lower');
    }
    else{
      display_screen('p', 'The secret number is greater');
    }
    attemps++;
    clear_input()
  }
}

function number_generator() {
  let number_chosen = parseInt(Math.random() * max_number + 1);
  let amount_of_numbers_in_list = number_list;

  if (amount_of_numbers_in_list == max_number){
    number_list = [];
  }
  if(number_list.includes(number_chosen)){
    return number_generator();
  }
  else{
    number_list.push(number_chosen);
    console.log(number_chosen);
    return number_chosen;
  }
}

function clear_input() {
  guess = document.querySelector('input');
  guess.value = '';
}

function restart_game() {
  secret_number = number_generator();
  clear_input();
  attemps = 1;
  new_game_mensage();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}