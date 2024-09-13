import React, {Suspense, useEffect} from 'react';
import {Button} from 'react-vant';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from './store';
import {increment, decrement, incrementByAmount} from './store/createSlice/counter';
import WebApp from '@twa-dev/sdk';
import {routes} from './routes';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import './indexDB/index';

const App = () => {
	const {t, i18n} = useTranslation();
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	useEffect(() => {}, []);
	const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
	const changeLanguage = (lng: string) => {
		console.log('切换语言');
		localStorage.setItem('language', lng);
		i18n.changeLanguage(lng); // 切换语言
	};
	console.log(`当前环境: ${import.meta.env.VITE_ENV_NAME}`);
	console.log(`API 基础 URL: ${apiBaseUrl}`);

	const renderRoutes = (routeList: any) => {
		return routeList.map((route: any) => {
			if (route.children) {
				return (
					<Route key={route.path} path={route.path} element={route.element}>
						{renderRoutes(route.children)}
					</Route>
				);
			}
			return <Route key={route.path} path={route.path} element={route.element} />;
		});
	};

	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>{renderRoutes(routes)}</Routes>
			</Suspense>
		</BrowserRouter>
		// <div>
		// 	<div>
		// 		<h1>{t('welcome')}</h1>
		// 		<p>{t('description')}</p>
		// 		<button onClick={() => changeLanguage('en')}>English</button>
		// 		<button onClick={() => changeLanguage('zh')}>中文</button>
		// 	</div>
		// 	<div>
		// 		<h1>Counter: {count}</h1>
		// 		<button onClick={() => dispatch(increment())}>Increment</button>
		// 		<button onClick={() => dispatch(decrement())}>Decrement</button>
		// 		<button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
		// 	</div>
		// 	<div className='card'>
		// 		<button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
		// 			Show Alert
		// 		</button>
		// 	</div>
		// </div>
	);
};

export default App;
