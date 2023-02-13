import React, { useState } from 'react';

import { Button, Card, Rate, Space } from 'antd';

import FeedBacks from './data';

import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const Review = () => {
	const [index, setIndex] = useState(1);
	const { title, description, star } = FeedBacks[index];
	const [readMore, setReadMore] = useState(false);
	const checkNumber = (number) => {
		if (number > FeedBacks.length - 1) {
			return 0;
		}
		if (number < 0) {
			return FeedBacks.length - 1;
		}
		return number;
	};
	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};
	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	return (
		<Card size='small' title='FeedBack'>
			<p>{title}</p>
			<p>
				{readMore ? description : `${description.substring(0, 50)}...`}
				<Button onClick={() => setReadMore(!readMore)}>
					{readMore ? 'Show Less' : '  Read More'}
				</Button>
			</p>
			<p>
				<Rate disabled value={star} />
			</p>
			<Space>
				<Button type='primary' onClick={prevPerson}>
					<ArrowLeftOutlined />
				</Button>

				<Button type='primary' onClick={nextPerson}>
					<ArrowRightOutlined />
				</Button>
			</Space>
		</Card>
	);
};

export default Review;
