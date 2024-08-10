/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "grays-gray-6": "#f2f2f7",
        "grays-black": "#000",
        dimgray: "#6e6e6e",
        gray: {
          "100": "#7a7a7a",
          "200": "#777",
          "300": "rgba(133, 133, 133, 0.13)",
        },
        darkslategray: "#3b3b3b",
        "schemes-outline": "#79747e",
        gainsboro: "rgba(217, 217, 217, 0)",
        "state-layers-primary-container-opacity-08":
          "rgba(234, 221, 255, 0.08)",
        steelblue: "#0072bc",
        "colors-orange": "#ff9500",
        "schemes-surface-container-high": "#ece6f0",
        "schemes-primary": "#65558f",
        "schemes-on-surface-variant": "#49454f",
        "schemes-on-surface": "#1d1b20",
        "schemes-outline-variant": "#cac4d0",
        "m3-state-layers-light-on-surface-variant-opacity-012":
          "rgba(73, 69, 79, 0.12)",
      },
      spacing: {},
      fontFamily: {
        "m3-label-large": "Roboto",
        "title-hero": "Inter",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
        "13xl": "32px",
        "6xl": "25px",
        "30xl": "49px",
        "3xl": "22px",
        "9xl": "28px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "26xl": "45px",
      xs: "12px",
      "53xl": "72px",
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
