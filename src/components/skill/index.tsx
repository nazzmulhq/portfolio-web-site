import Collapse from 'components/collapse';
import Tag from './Tag';

type TSkill = {
	title: string;
	language: string[];
	libraryOrFramework: string[];
	other: string[];
};

export default function Skill<T extends TSkill>({ language, libraryOrFramework, other }: T) {
	return (
		<Collapse title='Skill'>
			<div className='px-4 pb-2'>
				<p className='text-left text-gray-800 text-lg font-semibold mb-1'>Language:</p>
				<div className='grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 justify-center px-2'>
					{language.map(item => (
						<Tag key={item}>{item}</Tag>
					))}
				</div>
				<p className='text-left text-gray-800 text-lg font-semibold mb-1 mt-3'>Library/Framework:</p>
				<div className='grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 justify-center px-2'>
					{libraryOrFramework.map(item => (
						<Tag key={item}>{item}</Tag>
					))}
				</div>
				<p className='text-left text-gray-800 text-lg font-semibold mb-1 mt-3'>Other:</p>
				<div className='grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 justify-center px-2'>
					{other.map(item => (
						<Tag key={item}>{item}</Tag>
					))}
				</div>
			</div>
		</Collapse>
	);
}
