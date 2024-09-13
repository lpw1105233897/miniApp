import React, {lazy} from 'react';

const Home = lazy(() => import('../pages/home'));
const Trading = lazy(() => import('../pages/trading'));
const Holding = lazy(() => import('../pages/holding'));
const Follow = lazy(() => import('../pages/follow'));
const NotFound = lazy(() => import('../pages/notFound'));

export const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/Trading',
		element: <Trading />,
	},
	{
		path: '/Holding',
		element: <Holding />,
	},
	{
		path: '/Follow',
		element: <Follow />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
];
