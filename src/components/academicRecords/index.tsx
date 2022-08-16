import Collapse from 'components/collapse';
import Icons from 'components/icon';
import Item from 'components/Item';

type TAcademicRecords = {
	academic: {
		[key: string]: string | undefined;
	}[];
};

export default function AcademicRecords<T extends TAcademicRecords>({ academic }: T) {
	return (
		<div>
			<Collapse title='Academic Records'>
				<div className='space-y-8 p-4'>
					{academic.map(item => (
						<div className='space-x-12'>
							<div className='flex items-center'>
								<Icons.Star className='h-6' />
								<p className='pl-4 text-xl font-semibold'>{item.title}</p>
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
