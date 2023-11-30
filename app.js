const adviceContainer = document.querySelector(".advice-container");
const btn = document.querySelector(".advice__button");

async function getFetch() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    if (res.status === 200) {
      // console.log("Success", data);
      let displayItems = `
        <h2 class="advice__number">advice #${data.slip.id}</h2>
        <h1 class="advice__text">
          ${data.slip.advice}
        </h1>
        <div class="advice__divider">
          <picture>
            <source
              media="(min-width: 35em)"
              srcset="./images/pattern-divider-desktop.svg"
            />
            <img src="./images/pattern-divider-mobile.svg" alt="" />
          </picture>
        </div>
        <div class="advice__button" onclick=getFetch()>
          <img src="./images/icon-dice.svg" alt="" />
        </div>
      `;
      // console.log(data);
      // console.log(displayItems);
      adviceContainer.innerHTML = displayItems;
    } else {
      console.log("Server Error", data);
    }
  } catch (error) {
    console.log("Fetch Error: ", error);
  }
}

// window.addEventListener("DOMContentLoaded", () => {
//   let displayItems = `
//     <h2 class="advice__number">advice #${data.slip.id}</h2>
//     <h1 class="advice__text">
//       ${data.slip.advice}
//     </h1>
//     <div class="advice__divider">
//       <img src="./images/pattern-divider-desktop.svg" alt="" />
//     </div>
//     <div class="advice__button" onclick=getFetch()>
//       <img src="./images/icon-dice.svg" alt="" />
//     </div>
//   `;
//   adviceContainer.innerHTML = displayItems;
// });

// getFetch();

btn.addEventListener("click", () => {
  getFetch();
});
