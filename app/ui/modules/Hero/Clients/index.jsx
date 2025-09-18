
import LogoBFI from './Logos/Logo-bfi.jsx';
import LogoNao from './Logos/Logo-nao.jsx';
import LogoBDO from './Logos/Logo-bdo.jsx';
import LogoShelter from './Logos/Logo-shelter.jsx';
import LogoOns from './Logos/Logo-ons.jsx';
import styles from "./Clients.module.scss";

function Clients(){
    return(
        <div className={styles.clients}>
			<div className={styles["clients__logos"]}>
				<div className={styles["clients__logos__line"]}>
					<LogoBFI />
					<LogoNao />
					<LogoBDO />
					<LogoOns />
					<LogoShelter />
				</div>
			</div>
        </div>
    )
}

export default Clients;
