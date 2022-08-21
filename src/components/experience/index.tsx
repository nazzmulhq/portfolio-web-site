import Collapse from 'components/collapse';
import Icons from 'components/icon';
import Item from '../Item';

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
						<div className='sm:space-x-1 md:space-x-10'>
							<div className='flex items-center'>
								<Icons.Star className='h-6' />
								<p className='pl-4 sm:text-xs md:text-lg font-semibold'>{item.title}</p>
							</div>
							<>
								{Object.keys(item).map(key => {
									// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
