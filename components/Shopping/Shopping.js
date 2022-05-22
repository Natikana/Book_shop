class Shopping {
    constructor () {
        this.shoppingRow = 'shopping_row_active';
        this.htmlCatalog = 'htmlCatalog';
        this.sumlCatalog = 'sumlCatalog';
        this.html = 'html';
    }

    handlerClear () {
        ROOT_SHOPPING.innerHTML = '';
    }
    handlerAddClass (element, index) { 
        localStorageUtil.deleteProduct(index);
        this.render();
    } 

    render() {
        ROOT_SHOPPING.innerHTML = '';
        const productStore = localStorageUtil.getProducts();
        this.htmlCatalog = '';
        this.sumlCatalog = 0;
        productStore.forEach((element, index) => {
            
        const { id, author, title, price } = CATALOG.find(item => item.id == element) 
                this.htmlCatalog +=  `
                        <tr class="shopping_row" onclick="shoppingBook.handlerAddClass(this, ${index});" >
                            <td class="shopping_element__author">
                                <img class="shopping_element__book" src="image/icon/open-book.png" /> 
                                ${author}
                            </td>   
                            <td class="shopping_element__title">${title}</td>
                            <td class="shopping_element__price">$${price}</td>
                            <td class="shopping_element__cross"></td>
                        </tr>
                `; 
                this.sumlCatalog += price;
       }); 
      
       this.html = `
        <div class="shopping_container">
            <div class="shopping_cross" onclick="shoppingBook.handlerClear ();"></div>
            <h3 class="shopping_title">Order books:</h3>
            <table>
                ${this.htmlCatalog}
                <tr>
                    <td class="shopping_element__author">
                        <img class="shopping_element__wallet" src="image/icon/wallet.png" /> 
                        Total:
                    </td>   
                    <td class="shopping_element__price">$${this.sumlCatalog}</td>
                    <td class="shopping_element__btn">
                    <button class="btn"><a href="#shopping_form" class="shopping__form">Confirm</button></a>
                    </td>
                </tr>
            </table>
        </div>
       `;

       ROOT_SHOPPING.innerHTML = this.html;
    } 
}
const shoppingBook = new Shopping();

/* constructor () {
    this.shoppingRow = 'shopping_row_active';
    this.htmlCatalog = 'htmlCatalog';
    this.sumlCatalog = 'sumlCatalog';
    this.html = 'html';
} 
handlerClear () {
    ROOT_SHOPPING.innerHTML = '';
}
handlerAddClass (element) {
    element.classList.toggle(this.shoppingRow);

}  

render() {
    const productStore = localStorageUtil.getProducts();//get products from the localStorage
    this.htmlCatalog = '';
    this.sumlCatalog = 0;

   CATALOG.forEach(({ id, author, title, price }) => {
        if (productStore.indexOf(id) !== -1) {
            this.htmlCatalog +=  `
                    <tr class="shopping_row" onclick="shoppingBook.handlerAddClass(this);" >
                        <td class="shopping_element__author">
                            <img class="shopping_element__book" src="image/icon/open-book.png" /> 
                            ${author}
                        </td>   
                        <td class="shopping_element__title">${title}</td>
                        <td class="shopping_element__price">$${price}</td>
                        <td class="shopping_element__cross"></td>
                    </tr>
              
            `; 
            this.sumlCatalog += price;
        }  
   });
  
   this.html = `
    <div class="shopping_container">
        <div class="shopping_cross" onclick="shoppingBook.handlerClear ();"></div>
        <h3 class="shopping_title">Order books:</h3>
        <table>
            ${this.htmlCatalog}
            <tr>
                <td class="shopping_element__author">
                    <img class="shopping_element__wallet" src="image/icon/wallet.png" /> 
                    Total:
                </td>   
                <td class="shopping_element__price">$${this.sumlCatalog}</td>
                <td class="shopping_element__btn"><a href="#shopping_form.html" class="shopping__form" <button class="btn">Confirm</button></td>
            </tr>
        </table>
    </div>
   `;
   ROOT_SHOPPING.innerHTML = this.html;
} */