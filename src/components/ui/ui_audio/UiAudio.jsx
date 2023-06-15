const UiAudio = (props) => {
  return (
    <audio controls preload="auto" src={props.audio ? props.audio: ""}></audio> 
  )
}

export default UiAudio;