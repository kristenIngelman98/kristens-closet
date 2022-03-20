import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../semantic-ui/Loader';
import Pagination from '../semantic-ui/Pagination';

function IndividualShoe() {
    const [isLoading, setLoading] = useState(true);
    const [Products, setProducts] = useState([]);
    // const [ProductsObject, setProductsObject] = useState({});


    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://asos2.p.rapidapi.com/products/v2/list',
            params: {
              store: 'US',
              offset: '0',
              categoryId: '4209',
              limit: '48',
              country: 'US',
              sort: 'freshness',
              currency: 'USD',
              sizeSchema: 'US',
              lang: 'en-US'
            },
            headers: {
              'x-rapidapi-host': 'asos2.p.rapidapi.com',
              'x-rapidapi-key': '0526e9ac36msh3f413a18caa24eep187396jsn8d9a5007e566'
            }
          };

        axios.request(options).then(function (response) {
            console.log(response.data.products);
            setProducts(response.data.products);
            setLoading(false);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


    if (isLoading) {
        return (
          <div class="loading">
            <Loader />
          </div>
         

        )  //change color of loader to white or lighter color
    }
 
    return (
      <div className="individual-shoe-grid">
      {Products.map((product) => {
        return (
            <div className="individual-shoe-details">
                <img src={`https://${product.imageUrl}`} alt="Shoe Image" />
                <div className="individual-shoe-details--text">
                  <p>{product.name}</p>
                  <p>{product.price.current.text}</p>
                </div>

            </div>
        )})}
        <Pagination />
      </div>
    );
  }
  
  export default IndividualShoe;