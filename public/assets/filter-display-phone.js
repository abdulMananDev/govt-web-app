const filterSection = document.querySelector(".filter-section");
const filterAppearBtn = document.querySelector(".phone-filter-section");

filterSection.style.display = "none";
filterAppearBtn.addEventListener("click", () => {
  if (filterSection.style.display === "none") {
    filterSection.style.display = "flex";
    filterAppearBtn.innerHTML = "<span> Close Filters </span>";
    console.log("c");
  } else if ((filterSection.style.display = "block")) {
    filterSection.style.display = "none";
    filterAppearBtn.innerHTML = "<span> Check for Filters.&rAarr; </span>";
  }
});
