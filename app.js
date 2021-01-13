const showCategories = document.querySelector(".categories");
const moreCategories = document.querySelector(".onclick");

showCategories.addEventListener("click", () => {
    if (showCategories.textContent === "See All Categories") {
        moreCategories.classList.remove("display-none");
        showCategories.textContent = "Hide Categories";
    }
    else {
        moreCategories.classList.add("display-none");
        showCategories.textContent = "See All Categories";
    }
})