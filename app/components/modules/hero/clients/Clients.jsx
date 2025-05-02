
import LogoBFI from './logos/logo-bfi.jsx';
import LogoNao from './logos/logo-nao.jsx';
import LogoBDO from './logos/logo-bdo.jsx';
import LogoShelter from './logos/logo-shelter.jsx';
import LogoOns from './logos/logo-ons.jsx';

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