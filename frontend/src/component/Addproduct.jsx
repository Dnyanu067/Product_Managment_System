import React from 'react'
import { useState } from 'react';
import productservice from '../Service/productservice';

const Addproduct = () => {
      const [product, setProduct] = useState({      
        productName:"",
        description:"",
        price:"",
        status:"",
        });
        const [msg,setmsg]=useState("");
        const handleChange = (e) => {
            const value = e.target.value;
            setProduct({ ...product, [e.target.name]: value });
          };
  
          const ProductRegister = (e) => {
            e.preventDefault(); 
        
            productservice
              .saveProduct(product)
              .then((res) => {
                console.log("Product Added Successfully");
                setmsg("Product Added Successfully");
                setProduct({
                    productName:"",
                    description:"",
                    price:"",
                    status:"",
                })
              })
              .catch((error) => {
                console.error("Error adding product:", error);
              });
          };
    return (
    <>
    <div className="container mt-3">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="card">
        <div className="card-header fs-3 text-center">
          Add Product
        </div>
        {
            msg && 
            <p className='fs-4 text-center text-success'>{msg}</p>
        }
        <div className="card-body">
        <form onSubmit={ProductRegister}>
  <div className="mb-3">
    <label>Enter Product Name</label>
    <input 
      type="text" 
      className="form-control" 
      placeholder="Product Name" 
      name="productName"   // Add name attribute
      onChange={handleChange}
      value={product.productName}
    />
  </div>

  <div className="mb-3">
    <label>Enter Product Description</label>
    <input 
      type="text" 
      className="form-control" 
      placeholder="Product Description"
      name="description"   //  Add name attribute
      onChange={handleChange}
      value={product.description}
    />
  </div>

  <div className="mb-3">
    <label>Enter Product Price</label>
    <input 
      type="number" 
      className="form-control" 
      placeholder="Product Price"
      name="price"   //  Add name attribute
      onChange={handleChange}
      value={product.price}
    />
  </div>

  <div className="mb-3">
    <label>Select Product Status</label>
    <input 
      type='text' 
      className="form-control" 
      placeholder="Product Status"
      name="status"   // Add name attribute
      onChange={handleChange}
      value={product.status}
    />
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary">Submit</button>
    <button type="reset" className="btn btn-secondary ms-2">Reset</button>
  </div>
</form>

          {/* <form onSubmit={ProductRegister}>
            <div className="mb-3">
              <label>Enter Product Name</label>
              <input 
              type="text" 
              className="form-control" 
              name="productName" 
              placeholder="Product Name" 
              onChange={(e)=>handleChange(e)}
              value={product.productName}
              />
            </div>

            <div className="mb-3">
              <label>Enter Product Description</label>
              <input type="text" name="productdescription" className="form-control" placeholder="Product Description" onChange={(e)=>handleChange(e)}
              value={product.description}/>
            </div>

            <div className="mb-3">
              <label>Enter Product Price</label>
              <input type="number"  name="productprice"  className="form-control" placeholder="Product Price" onChange={(e)=>handleChange(e)}
              value={product.price}
              />
            </div>

            <div className="mb-3">
              <label>Select Product Status</label>
             <input type='text' name="ProductStatus" className="form-control" placeholder="Product Status"
              onChange={(e)=>handleChange(e)}
              value={product.status}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" className="btn btn-secondary ms-2">Reset</button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Addproduct;

