
let bagItems;

onLoad();

function onLoad() {
  let bagItemStr = localStorage.getItem('bagItems')
  bagItems = bagItemStr? JSON.parse(bagItemStr) : [];
  displayItemOnHomePage();
  bagCountIcon();
}

function addToBag(dataID) {
  bagItems.push(dataID);
  localStorage.setItem('bagItems', JSON.stringify(bagItems))
  bagCountIcon();
}

function bagCountIcon() {
  let bagItemCountElement = document.querySelector('.addBagCount');
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemOnHomePage() {
  let itemsContainerElements = document.querySelector('.items-container');
  let innerHtml='';
  data.forEach(item => {

    innerHtml += `
  <div class="item-container">
    <img style="height: 200px;" class="image-container" src="${item.item_image}" alt="img-logo">
      <div class="rating">${item.rating.totalReviews}⭐|${item.rating.noOfReviews}</div>
      <div class="company-name">${item.company_name}</div>
      <div class="product-name">${item.product_name}</div>
      <div class="price">
        <span class="current-price">RS-${item.current_price}</span>
        <span class="discount-price">RS-${item.discount_price}</span>
        <span class="discount-percentage">${item.discount_percentage}%OFF</span>
      </div>
    <div>
      <button onclick='addToBag(${item.id})' class="button-add-bag">Add to Bag</button>
    </div>
  </div>`
  });
  itemsContainerElements.innerHTML = innerHtml;
}