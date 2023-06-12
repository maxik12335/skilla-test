const getListNavData = () => {
  return (
    [
      {
        id: 1, 
        active: false, 
        img: "assets/images/nav/results.svg", 
        imgActive: "assets/images/nav/results__active.svg", 
        title: "Итоги"
      },
      {
        id: 2,
        active: false,
        img: "assets/images/nav/orders.svg",
        imgActive: "assets/images/nav/orders__active.svg", 
        title: "Заказы"
      },
      {
        id: 3, 
        active: false, 
        img: "assets/images/nav/messages.svg", 
        imgActive: "assets/images/nav/messages__active.svg", 
        title: "Сообщения"
      },
      {
        id: 4, 
        active: true, 
        img: "assets/images/nav/calls.svg",
        imgActive: "assets/images/nav/calls__active.svg", 
        title: "Звонки"
      },
      {
        id: 5, 
        active: false, 
        img: "assets/images/nav/counterparties.svg", 
        imgActive: "assets/images/nav/counterparties__active.svg",
        title: "Контрагенты"
      },
      {
        id: 6, 
        active: false, 
        img: "assets/images/nav/documents.svg",
        imgActive: "assets/images/nav/documents__active.svg",
        title: "Документы"
      },
      {
        id: 7, 
        active: false, 
        img: "assets/images/nav/performers.svg",
        imgActive: "assets/images/nav/performers__active.svg",
        title: "Исполнители"
      },
      
      {
        id: 8,
        active: false,
        img: "assets/images/nav/reports.svg", 
        imgActive: "assets/images/nav/reports__active.svg",
        title: "Отчеты"
      },
      {
        id: 9, 
        active: false, 
        img: "assets/images/nav/knowledge__base.svg", 
        imgActive: "assets/images/nav/knowledge__base__active.svg",
        title: "База знаний"
      },
      {
        id: 10, 
        active: false, 
        img: "assets/images/nav/settings.svg", 
        imgActive: "assets/images/nav/settings__active.svg",
        title: "Настройки"
      },
    ]
  )
}

export {getListNavData};