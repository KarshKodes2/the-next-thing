import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "./Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

const raleway = localFont({
  src: [
    {
      path: "./Raleway-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Raleway-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Raleway-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Raleway-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Raleway-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Raleway-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export { poppins, raleway };
