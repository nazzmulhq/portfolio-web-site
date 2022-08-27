import pic from 'assets/n.jpg';
import Item from 'components/Item';
import Profile from 'components/profile';
import About from 'components/profile/About';
import Skill from 'components/skill';
const Home = () => {
	return (
		<div className='space-y-6'>
			<div className='sm:space-y-6 md:space-y-6 lg:flex lg:space-x-6'>
				<div className='lg:w-1/3'>
					<Profile {...profile.me} />
				</div>
				<div className='lg:w-2/3 '>
					<About />
				</div>
			</div>
			<div>
				<Skill {...profile.skills} />
			</div>
			<div>
				<Item title='Experience' items={profile.experience} />
			</div>
			<div>
				<Item title='Academic Records' items={profile.academic} />
			</div>
		</div>
	);
};

export default Home;

const profile = {
	me: {
		pic: pic,
		name: 'Nazmul Haque',
		position: 'Software Engineer',
		company: 'mPower Social Enterprises Ltd.',
		address: 'Meherpur, Bangladesh',
		email: 'nazmul2018s@gmail.com',
		phone: '+88001917003822'
	},
	skills: {
		title: 'Skill',
		language: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
		libraryOrFramework: [
			'React',
			'NodeJS',
			'ExpressJS',
			'Django',
			'MongoDB',
			'Mongoose',
			'Ant Design',
			'Material UI',
			'Tailwind CSS'
		],
		other: ['GitHub', 'Jira', 'Bitbucket', 'Nginx', 'Docker']
	},
	experience: [
		{
			Name: 'mPower Social Enterprises Limited',
			designation: 'Software Engineer',
			location: 'Level 10 House 77, Nur Empori, Road 11 Banani',
			title: 'React Developer'
		},
		{
			Name: 'ROTechs Ltd',
			designation: 'Software Engineer',
			location: '25/1, Kabi Jasimuddin Road, North Kamlapur.',
			title: 'Backend Development - ERP'
		},
		{
			Name: 'Daffodil International University CPC Club',
			designation: 'Jr. Software Engineer',
			location: '102/1, Sukrabad Mirpur Rd, Dhaka 1207',
			title: 'Backend Development'
		}
	],
	academic: [
		{
			degree: 'Bachelor of Science (B.Sc.)',
			title: 'Computer Science & Engineering (CSE)',
			name: 'Daffodil International University',
			department: 'Computer Science & Engineering',
			duration: 'Four Years',
			'Passing Year': '2021'
		},
		{
			degree: 'Diploma',
			title: 'Computer Engineering',
			name: 'Meherpur College of Engineering & Technology',
			department: 'Computer Engineering',
			duration: 'Four Years',
			'Passing Year': '2017'
		},
		{
			degree: 'S.S.C',
			title: 'S.S.C',
			name: 'Kobi Nazrul Shikkha Manzil',
			department: 'Science',
			duration: 'Two Years',
			'Passing Year': '2012'
		}
	]
};
