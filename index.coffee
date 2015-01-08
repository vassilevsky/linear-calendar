---
---

days_from_today = 21

holidays =
  1:  [1..8]
  3:  [8]
  5:  [1, 2, 3, 9, 10]
  6:  [12]
  11: [4]

is_a_holiday = (date) ->
  m = moment date
  month_num = m.month() + 1
  day_num = m.date()
  holidays[month_num] && day_num in holidays[month_num]

day_div = (date, extra_class='') ->
  extra_class = ' ' + extra_class if extra_class
  extra_class += ' holiday' if is_a_holiday(date)

  m = moment(date)
  n = m.day()
  d = m.date()

  "<div class='day weekday#{n}#{extra_class}'>#{d}</div>"

$('#container').append(day_div(moment().subtract('days', offset))) for offset in [days_from_today..1]
$('#container').append(day_div(moment(), 'today'))
$('#container').append(day_div(moment().add('days', offset))) for offset in [1..days_from_today]
