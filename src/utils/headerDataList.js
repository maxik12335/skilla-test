export const getLengthQualityConversationsIsError = (dataList) => {
  let listItemsIsErrors = dataList.filter((item) => {
    if(item.errors[0] && item.errors[0] === "Скрипт не использован") {
      return item.errors[0]
    }
  })
  
  return listItemsIsErrors.length
}

export const getLengthConversionOrderIsValue = (dataList) => {
  let listItemsIsValue = dataList.filter(item => {
    if(item.results[0] && item.results[0].type === "order") {
      return item.results[0].type
    }
  })
  
  return listItemsIsValue.length
}

export const getLengthNewCalls = (dataList) => {
  let listItemsNewCalls = dataList.filter(item => {
    if(item.results[0] && item.results[0].type === "is_new") {
      return item.results[0].type
    }
  })
  
  return listItemsNewCalls.length
}