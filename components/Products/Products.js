class Products {

    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({author, imageLink, title, price, description}) => {
            htmlCatalog += `
                    <li>
                        <span>${author}</span>
                        <img src="${imageLink}" />
                        <span>${title}</span>
                        <span>${price}</span>
                        <span>${description}</span>
                        <button>Show more</button>
                        <button>Add to the bag</button>
                    </li>
            `;
            });

        const html = `
                <ul>
                    ${htmlCatalog}
                </ul>
        `;
        
        ROOT_PRODUCTS.innerHTML = html;
    }
}
//const HTML = htmlCatalog;
const productsBook = new Products();
productsBook.render()