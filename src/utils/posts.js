import { useEffect } from "react"
import CallType0 from "../components/ui/svg__images/call__type/CallType0"
import CallType1 from "../components/ui/svg__images/call__type/CallType1"
import CallTypeError from "../components/ui/svg__images/call__type/CallTypeError"

export const setCallType = (callType) => {
  if(callType == 1) {
    return <CallType1 />
  } else if (callType === 0) {
    return <CallType0 />
  } else {
    return <CallTypeError />
  }
}

export const setCallTime = (callTime) => {
  return callTime.match(/[0-9][0-9]:[0-9][0-9]/)[0]
}

export const setCallNumber = (post) => {
  if(post.in_out === 1) {
    return post.from_number
  } else if (post.in_out === 0) {
    return post.to_number
  }
}

export const setCallSource = (post) => {
  if(post.contact_company) {
    return post.contact_company
  } else if (post.contact_name) {
    return post.contact_name
  }
}
 
export const setCallEstimation = (post) => {
  if(post.errors) {
    return post.errors[0]
  }
}

export const setCallDuration = (callDuration) => {
  let minutes = Math.floor(callDuration / 60)
  let seconds = callDuration % 60

  if(minutes < 10) {
    minutes = "0" + minutes
  }

  if(seconds < 10) {
    seconds = "0" + seconds
  }

  return minutes + ":" + seconds
}
