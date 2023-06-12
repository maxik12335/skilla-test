import { useEffect, useState } from "react"
import classes from "./HeaderDataLst.module.css"
import { getDateYYYYMMDD } from "../../../../utils/date"
import { getLengthConversionOrderIsValue, getLengthQualityConversationsIsError } from "../../../../utils/headerDataList"
import Scrollbar from "../../../ui/scrollbar/Scrollbar"

const HeaderDataLst = () => {
  const [dataList, setDataList] = useState([])

  const [newCalls, setNewCalls] = useState({
    plan: 30,
    count: 0
  })

  const [qualityConversations, setQualityConversations] = useState({
    all: 0,
    isError: 0
  })

  const [conversionOrder , setConversionOrder] = useState({
    all: 0,
    isValue: 0
  })

  useEffect(() => {
    const dateYYYYMMDD = getDateYYYYMMDD()
    fetch(`https://api.skilla.ru/mango/getList?date_start=${dateYYYYMMDD}&date_end=${dateYYYYMMDD}`, {
      method: "POST",
      headers: {
        "Authorization": "Bearer testtoken"
      }
    }).then(data => data.json()).then(json => {
      setDataList(json.results)
      setNewCalls({...newCalls, count: Number(json.total_rows)})
      setQualityConversations({all: Number(json.total_rows), isError: getLengthQualityConversationsIsError(json.results)})
      setConversionOrder({all: Number(json.total_rows), isValue: getLengthConversionOrderIsValue(json.results)})
    })
  }, [])

  
  
  return (
    <ul className={classes.header__data__list}>
      <li className={classes.header__data__list__item}>
        <p className={classes.header__data__list__item__description}>
          Новые звонки <span>{newCalls.count} из {newCalls.plan} шт</span>
        </p>
        <Scrollbar color="green" width={newCalls.count / newCalls.plan * 100}/>
      </li>

      <li className={classes.header__data__list__item}>
        <p className={classes.header__data__list__item__description}>
         Качество разговоров <span>{qualityConversations.isError / qualityConversations.all * 100}%</span>
        </p>
        <Scrollbar color="yellow" width={qualityConversations.isError / qualityConversations.all * 100}/>
      </li>

      <li className={classes.header__data__list__item}>
        <p className={classes.header__data__list__item__description}>
          Конверсия в заказ <span>{conversionOrder.isValue / conversionOrder.all * 100}%</span>
        </p>
        <Scrollbar color="red" width={conversionOrder.isValue / conversionOrder.all * 100}/>
      </li>
    </ul>
  )
}

export default HeaderDataLst;