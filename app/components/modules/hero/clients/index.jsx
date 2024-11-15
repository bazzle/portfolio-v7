import styles from './style.module.scss';
import LogoBFI from './logos/logo-bfi.jsx';
import LogoNao from './logos/logo-nao.jsx';
import LogoBDO from './logos/logo-bdo.jsx';
import LogoShelter from './logos/logo-shelter.jsx';
import LogoOns from './logos/logo-ons.jsx';

function Clients(){
    return(
        <div className={styles.clients}>
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
    )
}

export default Clients;