class Products
{
  render()
  {
    let htmlCatalog = '';

    CATALOG.forEach(({id, band, album, price, img}) => 
    {
      htmlCatalog += 
      `
      <li class="products-element">
        <span class="products-element-name">${band}</span>
        <span class="products-element-name">${album}</span>
        <img class="products-element-img" src="${img}"/>
        <span class="products-element-price">💸 ${price.toLocaleString()} UAH</span>
        <button class="products-element-btn">Add to cart</button>
      </li>
      `;
    });

    const HTML =
    `
      <ul class="products-container">
        ${htmlCatalog}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = HTML;
  }
}

const products = new Products();
products.render();