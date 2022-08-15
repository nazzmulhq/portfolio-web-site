import Collapse from 'components/collapse';
import Icons from 'components/icon';
import Item from './Item';

type TExperience = {
	experience: {
		[key: string]: string | undefined;
	}[];
};

export default function Experience<T extends TExperience>({ experience }: T) {
	return (
		<div>
			<Collapse title='Experience'>
				<div className='space-y-8 p-4'>
					{experience.map(item => (
						<div className='space-x-12'>
							<div className='flex items-center'>
								<Icons.Star className='h-6' />
								<p className='pl-4 text-xl font-semibold'>{item.period}</p>
							</div>
							<>
								{Object.keys(item).map(key => {
									if (key !== 'period') return <Item name={key} value={item[key]!} />;
								})}
							</>
						</div>
					))}
				</div>
			</Collapse>
		</div>
	);
}
