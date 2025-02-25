import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { LayoutContainer } from './styles';

export function DefaultLayout() {
	return (
		<div>
			<LayoutContainer>
				<Header />
				{/* Apresenta o restante do conteudo 
        ou seja o header vai aparecer em todas as paginas
        */}
				<Outlet />
			</LayoutContainer>
		</div>
	);
}
