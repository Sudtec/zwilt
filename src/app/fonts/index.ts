import localFont from "next/font/local";

export const switzer = localFont({
  src: [
    {
      path: "./switzer/Switzer-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./switzer/Switzer-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./switzer/Switzer-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./switzer/Switzer-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./switzer/Switzer-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
});
