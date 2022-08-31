import Collapse from 'components/collapse';

export default function About() {
	return (
		<Collapse isCollapse={window.innerWidth >= 1024} title='About Me'>
			<div className='px-4 text-justify  text-gray-500  lg:h-[290px] overflow-auto scrollbar-none sm:h-80 md:h-full'>
				I have earned a Bachelor’s degree in Computer Science & Engineering. I have experience in implementing
				links, tools, and similar features into web designs, and I can prepare documents and keep accurate daily
				reports.Currently I am working in mPower Social Enterprises Limited. as a Frontend Developer. Also, I am
				working in ROTechs Ltd as a backend developer. I am working in Daffodil International University
				Computer & Programming Club as a backend developer for the last year and I’m the leader of the team.
				There I completed 4 projects with Django & React.js. I have done my C Programming internship under
				Codetech IT Solutions. I learned Full Stack Web Developer from Daffodil International University
				Computer & Programming Club. I did a full course of Backend Web Development with Projects and Full Stack
				(MERN) Web Development with JavaScript from BOHUBRIHI. I am certified by the ICT for the course Big Data
				and Web Scraping. I did 3 months course on Frontend Fundamentals from Pirple.
			</div>
		</Collapse>
	);
}
