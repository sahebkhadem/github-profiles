import { useState, useEffect } from "react";
import { FaGithub, FaSun, FaMoon, FaSearch } from "react-icons/fa";

// Hooks
import useTheme from "./useTheme";

function App() {
	const [status, setStatus] = useState("idle");
	const [theme, setTheme] = useState("dark");

	const submitHandler = (event) => {
		event.preventDefault();
		setStatus("pending");
	};

	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
			localStorage.setItem("theme", "light");
			return;
		}

		setTheme("dark");
		localStorage.setItem("theme", "dark");
	};

	useEffect(() => {
		if (localStorage.getItem("theme")) {
			setTheme(localStorage.getItem("theme"));
		}
	}, []);

	useTheme(theme);

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

					<button
						title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
						onClick={toggleTheme}
					>
						{theme === "dark" ? <FaSun /> : <FaMoon />}
					</button>
				</div>
			</nav>

			<main>
				<form onSubmit={submitHandler}>
					<div className="img">
						<FaGithub />
					</div>
					<div className="input-group">
						<input type="text" placeholder="Username..." disabled={status === "pending"} />
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
