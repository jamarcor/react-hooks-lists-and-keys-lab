import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLinks = links.map((linkArr) => {
  return <a key={linkArr} href={`#${linkArr}`}>{linkArr}</a>
});

  return <nav>{navLinks}</nav>;
}

export default NavBar;
