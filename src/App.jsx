import { FaGithub, FaSun } from "react-icons/fa";

function App() {
	return (
		<div className="App">
			<nav>
				<a href="#" className="logo">
					<FaGithub />
					<span>GitHub Profiles</span>
				</a>

				<div className="nav-items">
					<a href="https://github.com/TakaoIsDaBest/github-profiles" target={"_blank"}>
						<FaGithub />
						<span>Repo</span>
					</a>

					<button title="Switch to light theme">
						<FaSun />
					</button>
				</div>
			</nav>
			<main></main>
		</div>
	);
}

export default App;
