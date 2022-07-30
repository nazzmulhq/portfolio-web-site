import { Collapse } from 'antd';
import Icons from 'components/icon';

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
			<Collapse
				accordion
				bordered={true}
				ghost
				className='hade'
				expandIcon={(panelProps): JSX.Element => (
					<Icons.RightArrow
						height={15}
						width={15}
						fill='gray'
						style={
							panelProps.isActive
								? { transform: 'rotate(90deg)', marginTop: '-6px', transitionDuration: '0.3s' }
								: { transitionDuration: '0.3s' }
						}
					/>
				)}
				expandIconPosition='end'>
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
