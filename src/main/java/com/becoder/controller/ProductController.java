package com.becoder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.becoder.model.Product;
import com.becoder.service.ProductService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	private ProductService productService;
	
	
	@PostMapping("/saveProduct")
    public ResponseEntity<?> saveProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllProduct() {
        return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Integer id) {
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
       
        return new ResponseEntity<>(productService.deleteProduct(id),HttpStatus.OK);
    }
    
//    @PutMapping("/editProduct/{id}")
//    public ResponseEntity<?> editProduct(@RequestBody Product product) {
//    	return new ResponseEntity<>(productService.saveProduct(product),HttpStatus.OK);
//    }
//    	
    @PutMapping("/editProduct/{id}")
    public ResponseEntity<?> editProduct(@PathVariable Integer id, @RequestBody Product product) {
        product.setId(id); // Set the ID before updating
        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.OK);
    }

    
}
