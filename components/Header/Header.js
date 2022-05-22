class Header {

    handleOpenShoopPage() {
        shoppingBook.render();
    } 

    render(count) {
        const html = `
            <div id="header" class="header_container">
                <H1 class="header_title">Book Catalog</H1>
                <div class="header_counter" onclick="headerBook.handleOpenShoopPage();">
                    
                   ${count} <img class="header_img" src="image/icon/shopping-bag.png" alt="bag" />
                    
                </div>
            </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
    
}
const headerBook = new Header();

const productsStore = localStorageUtil.getProducts();
headerBook.render(productsStore.length); 

/* class Header {
    handleOpenShoopPage() {
        shoppingBook.render();
    }

    render(count) {
        const html = `
            <div class="header_container">
                <H1 class="header_title">Book Catalog</H1>
                <div class="header_counter" onclick="headerBook.handleOpenShoopPage();">
                    
                   ${count} <img class="header_img" src="image/icon/shopping-bag.png" alt="bag" />
                    
                </div>
            </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
    
}
const headerBook = new Header();

const productsStore = localStorageUtil.getProducts();
headerBook.render(productsStore.length); */

