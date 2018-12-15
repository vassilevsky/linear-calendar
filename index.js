const days_from_today = 364 / 2

const holidays = {
  1:  [1, 2, 3, 4, 5, 6, 7, 8],
  3:  [8],
  5:  [1, 2, 3, 9, 10],
  6:  [12],
  11: [4]
}

const MOMENT = moment()

function main() {
    for (let offset = days_from_today; offset > 0; offset--) {
      add_day(moment().subtract(offset, "days"))
    }

    add_day(MOMENT)

    for (let offset = 1; offset < days_from_today; offset++) {
        add_day(moment().add(offset, "days"))
    }
}

function add_day(moment) {
  $("#container").append(day_div(moment))
}

function day_div(moment) {
  const dd = moment.date()

  return `<div class="${day_classes(moment)}"><div class="date">${dd}</div></div>`
}

function day_classes(moment) {
  const n = moment.day()
  let classes = ["day", `weekday${n}`]
  if (is_a_holiday(moment)) {
    classes.push("holiday")
  }
  if (is_today(moment)) {
    classes.push("today")
  }
  return classes.join(" ")
}

function is_a_holiday(moment) {
  const month = moment.month() + 1
  const day = moment.date()

  return holidays[month] && holidays[month].indexOf(day) >= 0
}

function is_today(moment) {
  return MOMENT.isSame(moment, "day")
}

main()
