import React from 'react';

import { Carousel } from 'antd';

import { list } from './data';
import { carouselStyle, contentStyle, titleStyle } from './styles';

export default function Environment() {
	return (
		<div style={contentStyle}>
			<h2 style={titleStyle}>Work Environment</h2>
			<Carousel autoplay style={carouselStyle}>
				{list.map((todo) => (
					<img src={todo.img} alt='environment' key={todo.id} />
				))}
			</Carousel>
		</div>
	);
}
