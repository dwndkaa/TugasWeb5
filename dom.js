const images = document.querySelectorAll("#img1, #img2, #img3");
images.forEach((img) => {
  console.log(`Image with ID ${img.id} has been set with a click event.`); //Optional
  img.addEventListener("click", function () {
    const basket = document.getElementById("basket");
    const flowerClone = img.cloneNode(true);
    flowerClone.addEventListener("click", removeFromBasket);
    basket.appendChild(flowerClone);
    updateBasketStatus(1);
  });
});

function removeFromBasket(event) {
  console.log("Removing element:", event.target);
  const basket = document.getElementById("basket");
  basket.removeChild(event.target);
  updateBasketStatus(-1);
}

function updateBasketStatus(change) {
  const basketStat = document.getElementById("basketstat");
  const currentCount = parseInt(basketStat.textContent.match(/\d+/)[0]);
  const newCount = currentCount + change;
  basketStat.textContent = `The flower basket currently contains ${newCount} flower${
    newCount === 1 ? "" : "s"
  }.`;
}

document.getElementById("chtext").addEventListener("click", function () {
  const colorPicker = document.getElementById("textColorPicker");
  colorPicker.click();
  colorPicker.addEventListener("input", function () {
    document.getElementById("text1").style.color = colorPicker.value;
  });
});

document.getElementById("bccol").addEventListener("click", function () {
  const colorPicker = document.getElementById("bgColorPicker");
  colorPicker.click();
  colorPicker.addEventListener("input", function () {
    document.getElementById("bd").style.backgroundColor = colorPicker.value;
  });
});