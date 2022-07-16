class Cart
{
  handleClear()
  {
    ROOT_CART.innerHTML = '';
  }

  render()
  {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let sumCatalog = 0;

    CATALOG.forEach(({id, band, album, price}) =>
    {
      if(productsStore.indexOf(id)!== -1)
      {
        htmlCatalog +=
        `
        <tr>
          <td class="cart-element-name">👥 ${band}</td>
          <td class="cart-element-name">💽 ${album}</td>
          <td class="cart-element-price">💸 ${price.toLocaleString()} UAH</td>
        </tr>
        `;

        sumCatalog += price;
      }
    });

    const html = 
    `
      <div class="cart-container">
        <div class="cart-close" onclick="cartPage.handleClear()"></div>
          <table>
            ${htmlCatalog}
            <tr>
              <td class="cart-element-name">💰 Summary: </td>
              <td class="cart-element-price">${sumCatalog.toLocaleString()} UAH</td>
            </tr>
          </table>
      </div>
    `;
    ROOT_CART.innerHTML = html;
  }
}

const cartPage = new Cart();