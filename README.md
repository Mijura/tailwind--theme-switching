# React + Tailwind v4 Theme Switcher 🌗  

A simple example of switching themes using **React** and **Tailwind CSS v4**. This project demonstrates how to define custom themes with Tailwind's `@theme inline` and dynamically update styles based on `data-theme` attributes.  

![dark-mode](https://github.com/user-attachments/assets/27ce5c19-eea5-4815-8dbe-1af50263955b)

## index.css

```css
@import "tailwindcss";

@theme inline {
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
}

[data-theme="light"] {
  --primary: white;
  --secondary: #73c2fb;
}

[data-theme="dark"] {
  --primary: #121212;
  --secondary: #73c2fb;
}
```

## Usage Example 🚀  

Here’s a basic example of how to apply themes using Tailwind v4 and `data-theme`:  

```tsx
const App = () => {
	return (
	  <div data-theme="light">
		<div className="p-6 text-secondary bg-primary">
		  Hello, Theme Switcher! 🌗
		</div>
	  </div>
	);
  };
```
