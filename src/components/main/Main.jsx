import classes from "./Main.module.css"
import TopMain from "./components/top__main/TopMain";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className="container">
        <TopMain />
        
        <div></div>
        <div></div>
      </div>
    </main>
  )
}

export default Main;