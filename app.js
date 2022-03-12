const accordionItems = document.querySelectorAll(".accordion_item");
const arrows = document.querySelectorAll(".arrow");

//targeting each accordion question of the accordion item separately //

accordionItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("accordion_show");
    item.firstElementChild.nextElementSibling.classList.toggle("arrow_rotate");

    for (i = 0; i < accordionItems.length; i++) {
      const x = accordionItems[i];
      if (index === i) {
        highlightItem(x);
        continue;
      }
      x.nextElementSibling.classList.remove("accordion_show");
      x.firstElementChild.nextElementSibling.classList.remove("arrow_rotate");
      resetItem(x);
    }

    if (item.nextElementSibling.classList.contains("accordion_show")) {
      highlightItem(item);
    } else {
      resetItem(item);
    }
  });
});

const highlightItem = (item) => {
  item.style.borderBottom = "0px solid rgba(128, 128, 128, 0.445)";
  item.firstElementChild.style.color = "hsl(14, 88%, 65%)";
};

const resetItem = (item) => {
  item.style.borderBottom = "0.1px solid rgba(128, 128, 128, 0.445)";
  item.firstElementChild.style.color = "hsl(238, 29%, 16%)";
};

