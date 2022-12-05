import { useState } from "react";
import { FaGithub, FaSun, FaSearch } from "react-icons/fa";

function App() {
	const [status, setStatus] = useState("idle");

	const submitHandler = (event) => {
		event.preventDefault();
		setStatus("pending");
	};

	return (
		<div className="App">
			<nav>
				<a href="" className="logo">
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

			<main>
				<form onSubmit={submitHandler}>
					<div className="img">
						<FaGithub />
					</div>
					<div className="input-group">
						<input type="text" placeholder="Username..." />
						<button type="submit" disabled={status === "pending"}>
							<FaSearch />
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}

export default App;
