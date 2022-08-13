import pic from 'assets/n.jpg';
import AcademicRecords from 'components/academicRecords';
import Experience from 'components/experience';
import Profile from 'components/profile';
import Skill from 'components/skill';
const Home = () => {
	return (
		<div className='md:flex md:space-x-6'>
			<div className='sm:w-full md:w-1/3 space-y-4'>
				<Profile {...profile.me} />
				<Skill {...profile.skills} />
			</div>
			<div className='sm:w-full md:w-2/3 space-y-4'>
				<Experience experience={profile.experience} />
				<AcademicRecords />
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
			companyName: 'mPower Social Enterprises Limited',
			designation: 'Software Engineer',
			companyLocation: 'Level 10 House 77, Nur Empori, Road 11 Banani Bridge',
			period: 'React Developer ( November 9, 2021 - Continuing)'
		},
		{
			companyName: 'ROTechs Ltd',
			designation: 'Software Engineer',
			companyLocation: '25/1, Kabi Jasimuddin Road, North Kamlapur.',
			period: 'Backend Development - ERP ( February 1, 2021 - May 31, 2021)'
		},
		{
			companyName: 'Daffodil International University CPC Club',
			designation: 'Jr. Software Engineer',
			companyLocation: '102/1, Sukrabad Mirpur Rd, Dhaka 1207',
			period: 'Backend Development ( September 7, 2020 - January 31, 2021)'
		}
	],
	academic: [
		{
			degree: 'B.Sc. in Computer Science & Engineering',
			instituteName: 'Daffodil International University',
			department: 'Computer Science & Engineering',
			durationOfCourse: 'Four Years',
			passingYear: '2021'
		},
		{
			degree: 'Diploma-in-Computer Engineering',
			instituteName: 'Meherpur College of Engineering & Technology',
			department: 'Computer Engineering',
			durationOfCourse: 'Four Years',
			passingYear: '2017'
		},
		{
			degree: 'S.S.C',
			instituteName: 'Kobi Nazrul Shikkha Manzil',
			department: 'Science',
			durationOfCourse: 'Two Years',
			passingYear: '2012'
		}
	]
};
