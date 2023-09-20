module.exports = {
  //...

  // add daisyUI plugin
  plugins: [require("daisyui")],
  content: ['./public/*.html'],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // comment this line and uncomment bellow for custom light and dark mode
    // themes: [
    //   {
    //     dark: {
    //       "primary": "#c0dbf9",
    //       "secondary": "#51d11b",
    //       "accent": "#43c694",
    //       "neutral": "#131221",
    //       "base-100": "#262c4a",
    //       "info": "#799bf6",
    //       "success": "#2cc364",
    //       "warning": "#f3a744",
    //       "error": "#ea2e6a",
    //     },
    //   },
    //   {
    //     light: {
    //       "primary": "#13f2ee",
    //       "secondary": "#bbabf2",
    //       "accent": "#5facbf",
    //       "neutral": "#3d223f",
    //       "base-100": "#eeecf3",
    //       "info": "#83a0f1",
    //       "success": "#31c975",
    //       "warning": "#f3b853",
    //       "error": "#de2b55",
    //     },
    //   },
    // ],
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