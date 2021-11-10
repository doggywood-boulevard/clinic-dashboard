package api.products;

import com.intuit.karate.junit5.Karate;

class ProductsRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("products").relativeTo(getClass());
    }    

}
