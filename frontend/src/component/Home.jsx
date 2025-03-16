import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import productservice from '../Service/productservice';

const Home = () => {
    
        const [productList, setProductList] = useState([]);
        const [msg,setmsg]=useState("");
        useEffect(() => {
         init();
        }, []);

        const init = () => {
            productservice
            .getAllProducts() // Ensure the method name matches the service
           .then((res) => {
             console.log(res.data);
             setProductList(res.data);
           })
           .catch((error) => {
             console.log("Error fetching products:", error);
           });
        }

        const deleteProduct = (id) => {
            productservice
            .deleteProduct(id)
            .then((res) => {
                setmsg("Delete Successfully")
                init();
            }) 
            .catch((error) => {
                console.log(error);
            });
        };




  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-12">
                <div className="card-header fs-3 text-center">
                    All Product List
                    {
            msg && 
            <p className='fs-4 text-center text-success'>{msg}</p>
        }
                </div>
                <div className="card">
                    <div className="card-body">
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
   
    
   {
        productList.map((p,num)=>(
            <tr key={p.id}>
            <td>{num+1}</td>
            <td>{p.productName}</td>
            <td>{p.description}</td>
            <td>{p.price}</td>
            <td>{p.status}</td>
            <td><Link to={"editproduct/"+p.id} className="btn btn-sm btn-primary">Edit</Link>
            <button onClick={() => deleteProduct(p.id)} className="btn btn-sm btn-danger ms-1">Delete</button>
            </td>
            </tr>
        ))}
   
  
  </tbody>
</table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home