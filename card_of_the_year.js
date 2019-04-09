$(document)
  .ready(function () {
    $('#reading_year').val(new Date().getFullYear())
    $('button').on('click', calculate_card)
  });

const calculate_card = () => {
  const birthday_month = $('#month_of_birth').val()
  const birthday_day = $('#day_of_birth').val()
  const reading_year = $('#reading_year').val()

  if (verify_values(birthday_month, birthday_day, reading_year)) {
    let sum = parseInt(birthday_month) +
      parseInt(birthday_day) +
      parseInt(reading_year)
    while (sum > 22){
      sum = card_num(sum)
    }
    show_card(sum)
  } else
    console.log('invalid')

}

const verify_values = (birthday_month, birthday_day, reading_year) => {
  let error_message = ''
  let valid_month,
    valid_day,
    valid_year = false

  if (birthday_month >= 1 && birthday_month <= 12) {
    valid_day = true
  } else {
    error_message += 'please choose a valid month: 1-12 <br>'
  }

  if (birthday_day >= 1 && birthday_day <= 31) {
    valid_month = true
  } else {
    error_message += 'please choose a valid day: 1-31 <br>'
  }

  if (reading_year >= 1900 && reading_year <= 2200) {
    valid_year = true
  } else {
    error_message += 'please choose a valid year <br>'
  }
  $('#error_message').html(error_message)
  return valid_day && valid_month && valid_year
}

const card_num = (num) => {
  let value = parseInt(num),
    sum = 0;

  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }

  return (sum);
}

const show_card = (card_num) => {
  if (card_num == 22)
    card_num = 0
  card = cards[card_num]
  $('#card_info').empty()
  const card_info = `
  <p>your card of the year number is: ${card.num}</p>
  <h2>${card.name}</h2>
  <img src=${card.img_url} alt=${card.name}>
  `
  $('#card_info').append(card_info)
  console.log(cards[card_num])
}