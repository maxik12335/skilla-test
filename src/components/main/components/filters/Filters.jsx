import { useEffect, useState } from "react";
import Arrow from "../../../ui/svg__images/arrow/Arrow";
import classes from "./Filters.module.css"
import DropDownMenu from "../../../ui/drop__down__menu/DropDownMenu";

const Filters = ({filterCallType}) => {
  const [filtersLists, setFiltersLists] = useState([
    { 
      id: 1,
      title: "Все типы",
      show: false,
      list: [
        {id: 1, value: "Все типы", active: true},
        {id: 2, value: "Входящие", active: false},
        {id: 3, value: "Исходящие", active: false},
      ]
    },
    { 
      id: 2,
      title: "Все сотрудники",
      show: false,
      list: [
        {id: 1, value: "Все сотрудники", active: true},
        {id: 2, value: "Константин К.", active: false},
        {id: 3, value: "Полина З.", active: false},
      ]
    },
    { 
      id: 3,
      title: "Все звонки",
      show: false,
      list: [
        {id: 1, value: "Все звонки", active: true},
        {id: 2, value: "Все клиенты", active: false},
        {id: 3, value: "Новые клиенты", active: false},
        {id: 4, value: "Все исполнители", active: false},
        {id: 5, value: "Через приложение", active: false},
        {id: 6, value: "Прочие звонки", active: false},
      ]
    },
    { 
      id: 4,
      title: "Все источники",
      show: false,
      list: [
        {id: 1, value: "Все источники", active: true},
        {id: 2, value: "Все источники 1", active: false},
        {id: 3, value: "Все источники 2", active: false},
        {id: 4, value: "Все источники 3", active: false},
      ]
    },
    { 
      id: 5,
      title: "Все оценки",
      show: false,
      list: [
        {id: 1, value: "Все оценки", active: true},
        {id: 2, value: "Распознать", active: false},
        {id: 3, value: "Скрипт не использован", active: false},
        {id: 4, value: "Плохо", active: false},
        {id: 5, value: "Хорошо", active: false},
        {id: 6, value: "Отлично", active: false},
        {id: 7, value: "1 точка", active: false},
        {id: 8, value: "2 точка", active: false},
        {id: 9, value: "3 точка", active: false},
      ]
    },
    { 
      id: 6,
      title: "Все ошибки",
      show: false,
      list: [
        {id: 1, value: "Все ошибки", active: true},
        {id: 2, value: "Приветствие", active: false},
        {id: 3, value: "Имя", active: false},
        {id: 4, value: "Цена", active: false},
        {id: 5, value: "Скидка", active: false},
        {id: 6, value: "Предзаказ", active: false},
        {id: 7, value: "Благодарность", active: false},
        {id: 8, value: "Стоп слова", active: false},
      ]
    },
  ])

  const setDropDownMenuItemsActive = (id, filterId) => {
    const arr = [...filtersLists].map(filtersList => {
      if(filtersList.id === filterId) {
        filterCallType(id, filterId)
        return {
          ...filtersList,
          list: filtersList.list.map(
            item => item.id === id ? {...item, active: true} : {...item, active: false}
          ),
          title: filtersList.list.filter(item => item.id === id)[0].value,
          show: false
        }
      }
      return filtersList
    })

    setFiltersLists(arr)
  }

  const showDropDownMenuItems = (id) => {
    const arr = filtersLists.map(filtersList => {
      if(filtersList.id === id) {
        return {...filtersList, show: filtersList.show ? false : true}
      }

      return {...filtersList, show: false }
    })

    setFiltersLists(arr)
  }


  return (
    <div className={classes.filters}>
      {
        filtersLists.map(filtersList => 
          <div key={filtersList.id} className={classes.filter}>
            <span>{filtersList.title}</span>
            <Arrow onClick={() => showDropDownMenuItems(filtersList.id)} cl="arrow__filter"/>
            <DropDownMenu
              filterId={filtersList.id}
              dropDownMenuItems={filtersList.list}
              setDropDownMenuItemsActive={setDropDownMenuItemsActive}
              show={filtersList.show}
            />
          </div>
        )
      }
    </div>
  )
}

export default Filters;