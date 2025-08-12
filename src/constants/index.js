import todu from "../layout/todu.png"
import blog from "../layout/blog.png"
import bookstore from "../layout/bookstore.png"
import convertor from "../layout/convertor.svg"

const experiences = [
  {
    title: "Todu List App",
    company_name: "Starbucks",
    icon: todu,
    iconBg: "#383E56",
    date: "April 2025",
    link: "https://abdul-samad-todu-app.netlify.app/",
    points: [
      "This Todu app helps users manage daily tasks efficiently with a clean, responsive React interface.",
      "Add, edit, complete, and delete tasks instantly with interactive icons and smooth real-time updates.",
      "Built using React, Tailwind CSS, and react-icons with local state management for a seamless experience.",
      "Future improvements include local storage, deadlines, dark mode, and user authentication for advanced functionality.",
    ],
  },
  {
    title: "Currency Convertor",
    company_name: "Tesla",
    icon: convertor,
    iconBg: "#E6DEDD",
    date: "June 2025",
    link: "https://abdul-samad-currency-convertor.netlify.app/",
    points: [
      "This Currency Converter instantly converts values between multiple currencies using a modern, responsive React interface.",
      "Select currencies, input values, and get real-time conversion rates using a simple, user-friendly layout.",
      "Built with React and fetches live exchange rates via API, styled using Tailwind CSS efficiently.",
      "Can be improved with currency charts, offline support, dark mode, and historical rate tracking features.",
    ],
  },
  {
    title: "BookStore",
    company_name: "Shopify",
    icon: bookstore,
    iconBg: "#383E56",
    date: "July 2025",
    link: "https://book-store-app-mgkd.vercel.app/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "A Blog App",
    company_name: "Meta",
    icon: blog,
    iconBg: "#E6DEDD",
    date: "July 2025 ",    
    link: "https://abdulsamadblogapp.vercel.app/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};
export {experiences}