class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }
        getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        /* console.log(productsLocalStorage); */

        if(productsLocalStorage !== null) { 
            return JSON.parse(productsLocalStorage);  
        }
            return []; 
    }

    putProducts(id) { 

        let products = this.getProducts(); 
        products.push(id);
           
        localStorage.setItem(this.keyName, JSON.stringify(products));
        return { products }; 
    } 

    deleteProduct(index) {
        let products = this.getProducts(); 
        products.splice(index,1);
        localStorage.setItem(this.keyName, JSON.stringify(products));
        return { products }; 
    }
};
const localStorageUtil = new LocalStorageUtil();





/*   getProducts() {//first method get products from local storage
        const productsLocalStorage = localStorage.getItem(this.keyName);// call method getItem with our key from the localStorage
        if(productsLocalStorage !== null) { //if we have something in the localStorage
            return JSON.parse(productsLocalStorage); //we give it, but we get string and we have to change from string to array
        }
            return []; //if we don't have something in the localStorage we return []
    }

    putProducts(id) {//second method add new products to the localStorage it means that we give number id products
//first we have to see what we have in the localStorage
        let products = this.getProducts(); // here we have what find in the localStorage;
        let pushProducts = false;//we have to know this new product or not(if not => false product removed)
        const index = products.indexOf(id);//
        if (index === -1) {//checking if in the array we have same products it means that we remove it from the bag but the         checking give opportunity to remove same products
            products.push(id); // add new products to the localStorage
            pushProducts = true;//add new product ( true product add)
        } else { //if we have dublicate we remove this opportunity
            products.splice(index, 1);//we know index of products and amount(1)
        }
    
        localStorage.setItem(this.keyName, JSON.stringify(products));// what we want set in the localStorage (this.keyName) and where we want to set (JSON.stringify(products) change array to the string)
        return { pushProducts, products }; //we return object pushProducts, products 
    } */

    /* class LocalStorageUtil {
        constructor() {
            this.keyName = 'products';
        }
            getProducts() {
            const productsLocalStorage = localStorage.getItem(this.keyName);
            
            if(productsLocalStorage !== null) { 
                return JSON.parse(productsLocalStorage);  
            }
                return []; 
        }
    
        putProducts(id) { 
    
            let products = this.getProducts(); 
            products.push(id);
               
            localStorage.setItem(this.keyName, JSON.stringify(products));
            return { products }; 
        } 
    };
    const localStorageUtil = new LocalStorageUtil(); */