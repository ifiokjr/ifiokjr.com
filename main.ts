import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Ifiok Jr.",
  description: "A collection of thoughts on development and personal life.",
  avatar: "./ifiokjr.svg",
  avatarClass: "full",
  author: "Ifiok Jr.",
  background: "#f9f9f9",
  style: `.border-white {border: none;}`,
  links: [
    { title: "Email", url: "mailto:ifiokotung@gmail.com" },
    { title: "GitHub", url: "https://github.com/ifiokjr" },
    { title: "Twitter", url: "https://twitter.com/ifiokjr" },
  ],
  middlewares: [
    // If you want to set up Google Analytics, paste your GA key here.
    ga("UA-155179953-1"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    redirects({}),
  ],
});
