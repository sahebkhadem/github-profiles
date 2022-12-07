import { useState, useEffect } from "react";
import { FaGithub, FaSun, FaMoon, FaSearch } from "react-icons/fa";

// Hooks
import useTheme from "./useTheme";

function App() {
	const [status, setStatus] = useState("idle");
	const [userData, setUserData] = useState({});
	const [theme, setTheme] = useState("dark");

	const submitHandler = (event) => {
		event.preventDefault();
		fetchUserData(event.target.username.value);
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

	const fetchUserData = async (username) => {
		try {
			setStatus("pending");

			const response = await fetch(`https://api.github.com/users/${username}`);
			const follwoersResponse = await fetch(`https://api.github.com/users/${username}/followers`);
			const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);

			const { name, login, avatar_url } = await response.json();
			const followers = await follwoersResponse.json();
			const repos = await reposResponse.json();

			repos.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));

			setUserData({
				name,
				login,
				avatar_url,
				followers: followers.length,
				repos: repos.length,
				newest: repos.slice(0, 4)
			});

			setStatus("fulfilled");
		} catch (error) {
			setStatus("rejected");
		}
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
						<input type="text" name="username" placeholder="Username..." disabled={status === "pending"} />
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
