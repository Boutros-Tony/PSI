import styles from './mission.module.scss';
const Mission = () => {
    return (
        <div className={styles.missionWrapper}>
            <div className={styles.missionTitleWrapper}>
                 <h1 className='big-white-title'>Our Mission</h1>
                 <div className={styles.orangeBar}></div>
            </div>
            <div className={styles.missionList}>
                <p className='white-p'>PSI aims to be an internationally recognized provider of a complete range of services to businesses.</p>
                <p className='white-p'>To achieve this mission, the company will primarily focus on:</p>
                <p className='white-p'>- Providing superior quality experience to our customers</p>
                <p className='white-p'>- Insuring complete transparency throughout the process</p>
                <p className='white-p'>- Achieving significant cost saving to our customers</p>
                <p className='white-p'>- Honoring all our commitments to our clients professionally and on time</p>
            </div>
           
        </div>
    )
}

export default Mission;