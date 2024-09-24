import styles from './style.module.scss';
import LogoBFI from './logo-bfi.jsx';
import LogoNao from './logo-nao.jsx';
import LogoBDO from './logo-bdo.jsx';
import LogoShelter from './logo-shelter.jsx';
import LogoOns from './logo-ons.jsx';

function Clients(){
    return(
        <section className={styles.clients}>
            <div className="container pt pb">
                <div className={styles.logos}>

					<div className={styles.logos_line}>
						<LogoBFI />
						<LogoNao />
						<LogoBDO />
					</div>
					<div className={styles.logos_line}>
						<LogoOns />
						<LogoShelter />
					</div>

                </div>
            </div>
        </section>
    )
}

export default Clients;