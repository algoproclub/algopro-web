module.exports = {
  //...

  // add daisyUI plugin
  plugins: [require("daisyui")],
  content: ['./public/**/*.{html,js,ts}'],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#055990",
          "secondary": "#2b8a67",
          "accent": "#43c694",
          "neutral": "#131221",
          "base-100": "#262c4a",
          "info": "#799bf6",
          "success": "#2cc364",
          "warning": "#f3a744",
          "error": "#9f7aea",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },

  //...
}