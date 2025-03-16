import axios from "axios";

const API_URL = "http://localhost:8082"; 

class ProductService {
  

  saveProduct(product) {
    return axios.post(API_URL + "/saveProduct", product);
  }

  
  getAllProducts() {
    return axios.get(API_URL+"/");
  }

  getProductById(id) {
    return axios.get(API_URL+"/"+id);
  }

  deleteProduct(id) {
    return axios.delete(API_URL + "/deleteProduct/" + id); //  Fixed
  }

//   editProduct(product) {
//     return axios.put(API_URL + "/editProduct/", product); //Changed to PUT request
//   }
editProduct(product) {
    return axios.put(API_URL + `/editProduct/${product.id}`, product); // Pass ID in the URL
  }
  
}

export default new ProductService();
