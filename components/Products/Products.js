class Products
{

  constructor()
  {
    this.classNameActive = 'products-element-btn-active';
    this.labelAdd = 'Add to cart';
    this.labelRemove = 'Delete from cart';
  }

  handleSetLocationStorage(elemtnt, id)
  {
    const {pushProduct, products} = localStorageUtil.putProducts(id);

    if(pushProduct)
    {
      elemtnt.classList.add(this.classNameActive);
      elemtnt.innerHTML = this.labelRemove;
    }
    else
    {
      elemtnt.classList.remove(this.classNameActive);
      elemtnt.innerHTML = this.labelAdd;
    }
  }

  render()
  {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';

    CATALOG.forEach(({id, band, album, price, img}) => 
    {
      let activeClass = '';
      let activeText = '';

      if(productsStore.indexOf(id) === -1)
      {
        activeText = this.labelAdd;
      }
      else
      {
        activeClass = this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += 
      `
      <li class="products-element">
        <span class="products-element-name">${band}</span>
        <span class="products-element-name">${album}</span>
        <img class="products-element-img" src="${img}"/>
        <span class="products-element-price">💸 ${price.toLocaleString()} UAH</span>
        <button class="products-element-btn ${activeClass}"onclick="products.handleSetLocationStorage(this, '${id}')">${activeText}</button>
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