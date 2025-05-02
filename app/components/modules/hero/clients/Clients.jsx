
import LogoBFI from './Logos/Logo-bfi.jsx';
import LogoNao from './Logos/Logo-nao.jsx';
import LogoBDO from './Logos/Logo-bdo.jsx';
import LogoShelter from './Logos/logo-shelter.jsx';
import LogoOns from './Logos/Logo-ons.jsx';

function Clients(){
    return(
        <div className="clients">
			<div className="clients__logos">
				<div className="clients__logos__line">
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