class Products
{
  render()
  {
    let htmlCatalog = '';

    CATALOG.forEach(({id, name, price, img}) => 
    {
      htmlCatalog += 
      `
      <li>
        <span>${name}</span>
        <img src="${img}"/>
        <span>${price}</span>
        <button>Add to cart</button>
      </li>
      `;
    });

    const HTML =
    `
      <ul>
        ${htmlCatalog}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = HTML;
  }
}

const PRODUCTS = new Products();
PRODUCTS.render();