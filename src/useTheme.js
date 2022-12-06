import { useEffect } from "react";

const themes = {
	dark: {
		"--color-text-base": "#eeeeee",
		"--color-text-muted": "#a7a7a7",
		"--color-text-inverted": "#222831",
		"--color-fill": "#212121",
		"--color-fill-elevated": "#323232",
		"--color-button-accent": "#eeeeee",
		"--color-button-accent-hover": "#bebebe",
		"--color-button-accent-active": "#777777",
		"--color-border": "#a7a7a7",
		"--color-border-active": "#eeeeee"
	},
	light: {
		"--color-text-base": "#212121",
		"--color-text-muted": "#a7a7a7",
		"--color-text-inverted": "#eeeeee",
		"--color-fill": "#eeeeee",
		"--color-fill-elevated": "#d6d6d6",
		"--color-button-accent": "#212121",
		"--color-button-accent-hover": "#373737",
		"--color-button-accent-active": "#171717",
		"--color-border": "#4d4d4d",
		"--color-border-active": "#212121"
	}
};

const useTheme = (selectedTheme) => {
	useEffect(() => {
		const theme = themes[selectedTheme] || themes.dark;
		Object.keys(theme).forEach((key) => {
			const value = theme[key];
			document.documentElement.style.setProperty(key, value);
		});
	}, [selectedTheme]);
};

export default useTheme;
