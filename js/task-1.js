const categories = document.querySelector("#categories");

const categoryChildren = [...categories.children];

console.log("Number of categories: " + categories.children.length);

for (const category of categoryChildren) {
    let categoryName = category.querySelector("h2");
    console.dir("Category: " + categoryName.textContent);

    let subCategories = category.querySelector("ul");
    console.dir("Elements: " + subCategories.children.length);
}


