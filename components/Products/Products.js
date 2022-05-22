class Products {

    handleAddLocationStorage(element, id) {
        const { products } = localStorageUtil.putProducts(id); 
        console.log({ products }) 
        headerBook.render(products.length); 
    }

    render() {
        const productStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, imageLink, author, title, price, description }) => {

            htmlCatalog += `
                <div class="products_contant">
                    <div class="products_element__img">
                        <img class="img" src="${imageLink}" /></div>
                    <div class="products_element">
                        <div class="products_element__author">${author}</div>
                        <div class="products_element__title">${title}</div>
                        <div class="products_element__price">Price: $${price}</div>
                        
                        
                        <div class="products_element__block">
                            <a href="#popup${id}"   class="products_element__link products_element__link_active">Show more</a>
                            <div id="popup${id}" class="popup">
                                <div  class="popup__body">
                                    <div class="popup__content">
                                        <div class="popup__title">${title}</div>
                                        <div class="popup__description">${description}</div>
                                        <a href="#header" class="popup__link"><button class="popup__btn">Close</button></a>
                                    </div>
                                </div>
                            </div>
                            <button class="products_element__btn" 
                             onclick="productsBook.handleAddLocationStorage(this,'${id}');">
                            Add to the bag</button>  
                        </div>
                        
                    </div>
                </div>               
            `;
            });

        const html = `
                <div class="products_container">
                    ${htmlCatalog}
                </div>
        `;
        
        ROOT_PRODUCTS.innerHTML = html;
    }
} 

const productsBook = new Products(); 
productsBook.render();
/* class Products {
    constructor() {
        this.classNameActive = 'products_element__btn_active';
        this.labelAdd = 'Add to the bag';
        this.labelRemove = 'Delete from the bag';
    }

    handleSetLocationStorage(element, id) {
        const { pushProducts, products } = localStorageUtil.putProducts(id);
        
        if ( pushProducts ) {
            element.classList.add(this.classNameActive);
            element.innerText = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerText = this.labelAdd;
        }
        headerBook.render(products.length);
    }

    render() {
        const productStore = localStorageUtil.getProducts();//get products from the localStorage
        let htmlCatalog = '';

        CATALOG.forEach(({ id, imageLink, author, title, price }) => {
            let activeClass = '';//add active class
            let activeText = '';//add active Text

            if (productStore.indexOf === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            } 

            htmlCatalog += `
                <div class="products_contant">
                    <div class="products_element__img">
                        <img class="img" src="${imageLink}" /></div>
                    <div class="products_element">
                        <div class="products_element__author">${author}</div>
                        <div class="products_element__title">${title}</div>
                        <div class="products_element__price">Price: $${price}</div>
                        
                        
                        <div class="products_element__block">
                            <a href="#" class="products_element__link products_element__link_active">Show more</a>
                            <button class="products_element__btn${activeClass}" onclick="productsBook.handleSetLocationStorage(this,'${id}')";>
                            ${activeText}
                            </button>
                        </div>
                        
                    </div>
                </div>               
            `;
            });

        const html = `
                <div class="products_container">
                    ${htmlCatalog}
                </div>
        `;
        
        ROOT_PRODUCTS.innerHTML = html;
    }
} */



