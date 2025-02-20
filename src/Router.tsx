import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/Default.layout';
import { History } from './pages/History';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export function Router() {
	return (
		<Routes>
			{/* path='/' isso significa que se quer aplicar o estilo em todas as rotas */}
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/history" element={<History />} />
			</Route>

			<Route path="*" element={<NotFound />} />
			{/* <Route path='/admin' element={<AdminLayout />}>...</Route> */}
		</Routes>
	);
}
