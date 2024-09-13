import {useState} from 'react';
import {Tabbar} from 'react-vant';
import {useNavigate, useLocation} from 'react-router-dom';
import {t} from 'i18next';
import './style.less';

export const Footer = () => {
	const location = useLocation();
	const [tabIndex, setTabIndex] = useState(location.pathname);
	const navigate = useNavigate();

	// useEffect(() => {}, []);
	return (
		<div className='demo-tabbar'>
			<Tabbar
				inactiveColor='#80818B'
				activeColor='#EAECF5'
				value={tabIndex}
				border={false}
				onChange={(e) => {
					setTabIndex(e as string);
					console.log(e);
					sessionStorage.removeItem('index-type');
					sessionStorage.removeItem('filter-data');
					navigate(e as string);
				}}>
				<Tabbar.Item
					name='/'
					icon={
						<img
							src={
								tabIndex == '/Home' || tabIndex == '/'
									? '/assets/tabbar/icon_Home.png'
									: '/assets/tabbar/icon_Home_un.png'
							}></img>
					}>
					{t('components.home')}
				</Tabbar.Item>
				<Tabbar.Item
					name='/Trading'
					icon={
						<img
							src={
								tabIndex == '/Trading'
									? '/assets/tabbar/icon_Trading.png'
									: '/assets/tabbar/icon_Trading_un.png'
							}></img>
					}>
					{t('components.trading')}
				</Tabbar.Item>
				<Tabbar.Item
					name='/Holding'
					icon={
						<img
							src={
								tabIndex == '/Holding'
									? '/assets/tabbar/icon_Position.png'
									: '/assets/tabbar/icon_Position_un.png'
							}></img>
					}>
					{t('components.holding')}
				</Tabbar.Item>
				<Tabbar.Item
					name='/Follow'
					icon={
						<img
							src={
								tabIndex == '/Follow'
									? '/assets/tabbar/icon_Collect.png'
									: '/assets/tabbar/icon_Collect_un.png'
							}></img>
					}>
					{t('components.follow')}
				</Tabbar.Item>
			</Tabbar>
		</div>
	);
};
