import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import LogoIgnite from '../../assets/ignite-logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
	return (
		<HeaderContainer>
			<img src={LogoIgnite} alt="" width={34} />
			<nav>
				<NavLink to="/" title="Timer">
					<Timer size={24} />
				</NavLink>
				<NavLink to="/history" title="Histórico">
					<Scroll size={24} />
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
