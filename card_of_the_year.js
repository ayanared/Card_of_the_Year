$(document)
  .ready(function () {

    $('button').on('click', calculate_card)
  });

const calculate_card = () => {
  const birthday_month = $('#month_of_birth').val()
  const birthday_day = $('#day_of_birth').val()
  const reading_year = $('#reading_year').val()

  if (verify_values(birthday_month, birthday_day, reading_year)) {
    let sum = birthday_month + birthday_day + reading_year
    
    while (sum > 22) {
      sum_string = sum.toString()

    }
    console.log('values are valid')
  } else 
    console.log('invalid')

}

const verify_values = (birthday_month, birthday_day, reading_year) => {
  let error_message = ''
  let valid_month = false
  let valid_day = false
  let valid_year = false

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