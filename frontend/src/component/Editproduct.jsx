import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productservice from "../Service/productservice";

const EditProduct = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  useEffect(() => {
    productservice
      .getProductById(id)
      .then((res) => {
        setProduct(res.data); // Set product data
      })
      .catch((error) => {
        console.log("Error fetching product:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

//   const updateProduct = (e) => {
//     e.preventDefault();
//     productservice
//       .editProduct(product)
//       .then((res) => {
//         console.log("Product updated successfully!");
//         navigate("/"); // Redirect to Home page
//       })
//       .catch((error) => {
//         console.log("Error updating product:", error);
//       });
//   };
const updateProduct = (e) => {
    e.preventDefault();
    productservice
      .editProduct({ ...product, id }) // Ensure ID is included in the object
      .then(() => {
        console.log("Product updated successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error updating product:", error);
      });
  };
  
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">Edit Product</div>
            <div className="card-body">
              <form onSubmit={updateProduct}>
                <div className="mb-3">
                  <label>Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    className="form-control"
                    value={product.productName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={product.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    value={product.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Status</label>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    value={product.status}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Update Product
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
