import clock from './clock.png'
import styles from './MyClockImage.module.css'
function MyClockImage() {

    return (
        <div className="c2">
            <img src={clock} alt='clock' className={styles.s1}/>
        </div>
    )
}

export default MyClockImage