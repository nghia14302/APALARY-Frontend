import './App.css';
import LayoutManager from './components/Layout';
import AppRoutes from './routes';

function App() {
	return (
		<LayoutManager>
			<AppRoutes />
		</LayoutManager>
	);
}

export default App;
