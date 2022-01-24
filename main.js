AOS.init({});

// /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//   // document.querySelector(".openbtn").style.display="none";
//

// /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
//
//
// }

function myFunction(x) {
  console.log("this should cross");
  x.classList.toggle("cross");
  console.log(x.classList);
  const sidebar = document.getElementById("mySidebar");
  if (sidebar.style.display === "block") {
    document.getElementById("mySidebar").style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
}

let navItems = document.querySelectorAll("#mySidebar a");

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("active")) {
      navItems.forEach((others) => {
        //Remove the update to innerHTML for all of the items however you plan on doing that, I would suggest just adding or removing a class to update their style
        others.classList.remove("active");
      });
      el.classList.add("active");
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.intersectionRatio > 0) {
        document.querySelector(`div a[href="#${id}"]`).classList.add("active");
      } else {
        document
          .querySelector(`div a[href="#${id}"]`)
          .classList.remove("active");
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
});
