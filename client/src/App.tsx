type TApp = {
	children: React.ReactNode;
};

const App = <T extends TApp>({ children }: T) => {
	return <>{children}</>;
};

export default App;
