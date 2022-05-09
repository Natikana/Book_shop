class Products {

    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({imageLink, author, title, price, description}) => {
            htmlCatalog += `
                <div class="products_contant">
                    <div class="products_element__img"><img class="img" src="${imageLink}" /></div>
                    <div class="products_element">
                        <div class="products_element__author">${author}</div>
                        <div class="products_element__title">${title}</div>
                        <div class="products_element__price">Price $${price}</div>
                        <div class="products_element__description">${description}</div>
                        
                        <div class="products_element__block">
                            <a href="#" class="products_element__link">Show more</a>
                            <button class="products_element__btn">Add to the bag</button>
                        </div>
                        
                    </div>
                </div>               
            `;
            });

        const html = `
                <div class="products_container"><H1 class="products_title">Book Catalog</H1>
                    ${htmlCatalog}
                </div>
        `;
        
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsBook = new Products(); 
productsBook.render()

