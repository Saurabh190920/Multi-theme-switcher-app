Multi Theme Project README
Welcome to the Multi Theme Project! This project serves as a foundation for applications requiring dynamic theming—supporting multiple color schemes and UI styles that can be switched seamlessly by users or programmatically.

🚀 Features
Multiple Themes Support: Easily switch between light, dark, and custom themes.

Theme Persistence: Remembers user selection across sessions.

Extensible Structure: Add new themes or tweak existing ones with minimal effort.

Responsive Design: Works on all device sizes.

Developer Friendly: Well-structured, commented, and easy to extend or integrate.

🛠️ Getting Started
Prerequisites
Node.js (v14 or newer)

npm
The app will be available at http://localhost:3000.

🌈 Usage
Switching Themes:
Use the theme toggle in the UI or call the setTheme(themeName) function from code.

Adding a New Theme:

Create a new theme file in the themes directory (e.g., src/themes/solarized.js).

Add your styles and colors.

Register the new theme in the main theme provider.

Persisting Theme:

The user's theme selection is automatically stored in localStorage for fast retrieval on app launch.
