import Cards from 'components/Card';
import Icons from 'components/icon';

const Home = () => {
	return (
		<div className='app'>
			<Cards {...profile.skills} />
		</div>
	);
};

export default Home;

const profile = {
	me: {
		pic: 'https://avatars0.githubusercontent.com/u/17098981?s=460&v=4',
		name: 'Yusuf',
		address: 'Jakarta',
		email: ''
	},

	skills: {
		header: {
			icon: <Icons.Skill height={50} width={50} />,
			title: 'Skill'
		},
		list: {
			icon: <Icons.Star height={35} width={35} />,
			listOfSkills: [
				'React',
				'NodeJS',
				'ExpressJS',
				'Django',
				'MongoDB',
				'Mongoose',
				'TypeScript',
				'Python',
				'HTML',
				'CSS',
				'SASS',
				'JavaScript'
			]
		}
	}
};
