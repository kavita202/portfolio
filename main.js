AOS.init({
});

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
  x.classList.toggle("change");
  const sidebar =  document.getElementById("mySidebar")
  console.log(typeof(sidebar.style.display))
  if (sidebar.style.display === "block") {
    document.getElementById("mySidebar").style.display="none"
  }
  else {
    sidebar.style.display="block"
  }
 
}