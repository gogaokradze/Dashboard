import classes from './DisplayToken.module.css'
const DisplayToken = ({ data }) => {
  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <img src={data.img} alt={data.title}></img>
        <p>{data.title}</p>
        <div className={classes.cmcx}>CMCX</div>
      </div>
      <div className={classes.row}>
        <p>
          <span>Quantity:</span>62,254.12154
        </p>
      </div>
      <p>
        <span className={classes.grey}>Value:</span> 1.400214{' '}
        <span className={classes.name}>CMCX</span>{' '}
        <span className={classes.apprx}>(~ $0.2)</span>
      </p>
    </div>
  )
}

export default DisplayToken
