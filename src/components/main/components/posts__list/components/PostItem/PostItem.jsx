import { useEffect, useState } from "react"
import classes from "./PostItem.module.css"
import UiAudio from "../../../../../ui/ui_audio/UiAudio"

const PostItem = ({dataPost: {id, callType, callTime, workerImage, callNumber, callSource, callEstimation, callDuration, callAudioSrc}}) => {

  const [audio, setAudio] = useState()
  
  useEffect(() => {
    if(callAudioSrc.record && callAudioSrc.id) {
      fetch(`https://api.skilla.ru/mango/getRecord?record=${callAudioSrc.record}&partnership_id=${callAudioSrc.id}`, {
        method: "POST",
        headers: {
          "Authorization": "Bearer testtoken",
          "Content-type": "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
          "Content-Transfer-Encoding": "binary",
          "Content-Disposition": "filename='record.mp3'"
        }
      }).then(data => data.blob())
        .then(blob => {
          setAudio(new Audio().src = URL.createObjectURL(blob))
        })
    }
  }, [callAudioSrc])

  return (
    <li className={classes.posts__list__item}>
      <ul className={classes.posts__list__li}>
        <li className={classes.posts__list__item__li}>
          {callType}
        </li>
        <li className={classes.posts__list__item__li}>
          {callTime}
        </li>
        <li className={classes.posts__list__item__li}>
          <img src={workerImage} alt="" />
        </li>
        <li className={classes.posts__list__item__li}>
          {callNumber}
        </li>
        <li className={classes.posts__list__item__li}>
          {callSource}
        </li>
        <li className={classes.posts__list__item__li + " " + classes.call__estimation}>
          {callEstimation}
        </li>
        <li className={classes.posts__list__item__li}>
          {callAudioSrc.record && callAudioSrc.id &&
            <span className={classes.audio}>
              <UiAudio audio={audio}/> 
            </span>
          }
          {!(callAudioSrc.record && callAudioSrc.id)&&
            <span className={classes.time}>
              {callDuration}
            </span>
          }
        </li>
      </ul>
    </li>
  )
}

export default PostItem;