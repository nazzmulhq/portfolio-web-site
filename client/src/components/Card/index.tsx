import { Collapse } from 'antd';

type TCard = {
	header: {
		icon: JSX.Element;
		title: string;
	};
	list: {
		icon: JSX.Element;
		listOfSkills: string[];
	};
};

const Cards = <T extends TCard>({ header, list }: T) => {
	return (
		<div>
			<Collapse accordion ghost bordered={false} expandIcon={() => header.icon} expandIconPosition='end'>
				<Collapse.Panel
					header={
						<div className='header'>
							{header.icon}
							<h3>{header.title}</h3>
						</div>
					}
					key='1'>
					<div className='card'>
						{list.listOfSkills.map(skill => (
							<div className='list'>
								{list.icon}
								<p className='list-item'>{skill}</p>
							</div>
						))}
					</div>
				</Collapse.Panel>
			</Collapse>
		</div>
	);
};

export default Cards;
