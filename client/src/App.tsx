type TApp = {
	children: React.ReactNode;
};

const App = <T extends TApp>({ children }: T) => {
	return <div className='m-6'>{children}</div>;
};

export default App;
