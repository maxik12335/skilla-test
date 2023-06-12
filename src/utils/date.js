 
export const getDateWeek = () => {
  let dayWeek = new Date().getDay()
  let day = ""

  if(dayWeek === 0) {
    day = "Воскресенье"
  } else if(dayWeek === 1) {
    day = "Понедельник"
  } else if(dayWeek === 2) {
    day = "Вторник"
  } else if(dayWeek === 3) {
    day = "Среда"
  } else if(dayWeek === 4) {
    day = "Четверг"
  } else if(dayWeek === 5) {
    day = "Пятница"
  } else if(dayWeek === 6) {
    day = "Суббота"
  }

  return day
}

export const getDayMonth = () => new Date().getDate()

export const getDateMonth = () => {
  let month = new Date().getMonth()
  let nameMonth = ""

  if(month === 0) {
    nameMonth = "янв"
  } else if(month === 1) {
    nameMonth = "февр"
  } else if(month === 2) {
    nameMonth = "март"
  } else if(month === 3) {
    nameMonth = "апр"
  } else if(month === 4) {
    nameMonth = "май"
  } else if(month === 5) {
    nameMonth = "июн"
  } else if(month === 6) {
    nameMonth = "июл"
  } else if(month === 7) {
    nameMonth = "авг"
  } else if(month === 8) {
    nameMonth = "сент"
  } else if(month === 9) {
    nameMonth = "окт"
  } else if(month === 10) {
    nameMonth = "нояб"
  } else if(month === 11) {
    nameMonth = "дек"
  }

  return nameMonth
}

export const getDateYYYYMMDD = () => {
  const year = new Date().getFullYear()
  const month = () => {
    return new Date().getMonth() > 9 ? String(new Date().getMonth()) : "0" + String(new Date().getMonth())
  }
  const day = () => {
    return new Date().getDate() > 11 ? String(new Date().getDate()) : "0" + String(new Date().getDate())
  }

  return `${year}-${month()}-${day()}`  
}