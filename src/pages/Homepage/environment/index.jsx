import React from 'react';

import { Carousel } from 'antd';

import { list } from './data';

export default function Environment() {
	const contentStyle = {
		borderRadius: '10px',
		padding: '10px 50px',
	};
	return (
		<Carousel style={contentStyle} autoplay>
			{list.map((todo) => (
				<img src={todo.img} alt='environment' key={todo.id} />
			))}
		</Carousel>
	);
}
