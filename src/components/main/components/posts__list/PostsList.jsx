import { useEffect, useState } from "react";
import classes from "./PostsList.module.css"
import PostItem from "./components/PostItem/PostItem";
import DefaultPostItem from "./components/PostItem/DefaultPostItem";
import { setCallDuration, setCallEstimation, setCallNumber, setCallSource, setCallTime, setCallType } from "../../../../utils/posts";
import { getEndDateYYYYMMDD, getStartDateYYYYMMDD } from "../../../../utils/date";

const PostsList = ({startDate, stateFilterCallType}) => {
  const [posts, setPosts] = useState([])
  const [filterPostsCallType, setFilterPostsCallType] = useState([])

  useEffect(() => {
    fetch(`https://api.skilla.ru/mango/getList?date_start=${getStartDateYYYYMMDD(startDate.y, startDate.m, startDate.n, startDate.d)}&date_end=${getEndDateYYYYMMDD()}`, {
      method: "POST",
      headers: {
        "Authorization": "Bearer testtoken",
      }
    }).then(data => data.json()).then(json => {
      setPosts(json.results)
      console.log(json)
    })
  }, [startDate])

  useEffect(() => {
    if(stateFilterCallType === 2) {
      setFilterPostsCallType(posts)
    } else {
      setFilterPostsCallType([...posts].filter(item => item.in_out === stateFilterCallType))
    }
  }, [stateFilterCallType, posts])

  return (
    <ul className={classes.posts__list}>
      <DefaultPostItem />
      
      {
        filterPostsCallType.map(post => {
          return <PostItem key={post.id} dataPost={{
                    id: post.id,
                    callType: setCallType(post.in_out),
                    callTime: setCallTime(post.date),
                    workerImage: post.person_avatar,
                    callNumber: setCallNumber(post),
                    callSource: setCallSource(post),
                    callEstimation: setCallEstimation(post),
                    callDuration: setCallDuration(post.time),
                    callAudioSrc: {record: post.record, id: post.partnership_id}
                  }}
                />
        })
      }
    </ul>
  )
}

export default PostsList;