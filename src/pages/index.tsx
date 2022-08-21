import pic from 'assets/n.jpg';
import AcademicRecords from 'components/academicRecords';
import Experience from 'components/experience';
import Profile from 'components/profile';
import Skill from 'components/skill';
const Home = () => {
	return (
		<div className='lg:flex lg:space-x-6'>
			<div className='sm:w-full lg:w-1/4'>
				<Profile {...profile.me} />
				<br />
				<Skill {...profile.skills} />
			</div>
			<br />
			<div className='sm:w-full lg:w-3/4'>
				<Experience experience={profile.experience} />
				<AcademicRecords academic={profile.academic} />
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
			'Company Name': 'mPower Social Enterprises Limited',
			designation: 'Software Engineer',
			'company Location': 'Level 10 House 77, Nur Empori, Road 11 Banani',
			title: 'React Developer'
		},
		{
			'company Name': 'ROTechs Ltd',
			designation: 'Software Engineer',
			'company Location': '25/1, Kabi Jasimuddin Road, North Kamlapur.',
			title: 'Backend Development - ERP'
		},
		{
			'company Name': 'Daffodil International University CPC Club',
			designation: 'Jr. Software Engineer',
			'company Location': '102/1, Sukrabad Mirpur Rd, Dhaka 1207',
			title: 'Backend Development'
		}
	],
	academic: [
		{
			degree: 'Bachelor of Science (B.Sc.)',
			title: 'Computer Science & Engineering (CSE)',
			instituteName: 'Daffodil International University',
			department: 'Computer Science & Engineering',
			durationOfCourse: 'Four Years',
			passingYear: '2021'
		},
		{
			degree: 'Diploma',
			title: 'Computer Engineering',
			instituteName: 'Meherpur College of Engineering & Technology',
			department: 'Computer Engineering',
			durationOfCourse: 'Four Years',
			passingYear: '2017'
		},
		{
			degree: 'S.S.C',
			title: 'S.S.C',
			instituteName: 'Kobi Nazrul Shikkha Manzil',
			department: 'Science',
			durationOfCourse: 'Two Years',
			passingYear: '2012'
		}
	]
};
