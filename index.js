function render()
{
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

//spinnerPage.render();

let CATALOG = [];

// fetch('server/catalog.json')

fetch('http://myjson.dit.upm.es/api/bins/7v67')
  .then(res => res.json())
  .then(body => 
    {
      CATALOG = body;
      render();
     // setTimeout(() =>
     //{
     //   spinnerPage.handleClear();
     //   render();
     // }, 1000);
    })
  .catch(error => 
    {
      //spinnerPage.handleClear();
      errorPage.render();
    });
