import * as React from "react"
import bgImage from "../../images/mini.webp";
import * as styles from './background-image.module.css';

const BackgroundImage = ({siteTitle}) => {
    return (
        <div className={styles.background} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={styles.overlay}></div>
            <div className="container w-100">
                <div className="row m-0 align-self-center justify-content-center">
                    <div className="col-lg-8 col-sm-12 col-md-10">
                        <div className="text w-100 text-center md-5 md-5">
                            <h1 className={styles.h1}>MINI CLUB UKRAINE 🇺🇦</h1>
                            <p className={styles.p}>Вас вітає автомобільний Клуб MINI Україна</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackgroundImage