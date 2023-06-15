import classes from "./Arrow.module.css"

const Arrow = ({cl, ...props}) => {

  return (
    <svg {...props} className={classes[cl]} viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"/>
    </svg>
  )
}

export default Arrow;