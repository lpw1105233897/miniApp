import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import './style.less';
import {Footer} from '../../components';

export const Follow: React.FC = () => {
	// 路由方法
	const navigate = useNavigate();

	// const {t, i18n} = useTranslation();
	// console.log(t);
	useEffect(() => {}, []);

	return (
		<div>
			Follow
			<Footer></Footer>
		</div>
	);
};
export default Follow;
