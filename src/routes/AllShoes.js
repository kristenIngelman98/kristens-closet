// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Loader from '../semantic-ui/Loader';

// function IndividualShoe() {
//     const [isLoading, setLoading] = useState(true);
//     const [Products, setProducts] = useState([]);
//     // const [ProductsObject, setProductsObject] = useState({});


//     useEffect(() => {
//         var options = {
//             method: 'GET',
//             url: 'https://asos2.p.rapidapi.com/products/v2/list',
//             params: {
//               store: 'US',
//               offset: '0',
//               categoryId: '4209',
//               limit: '48',
//               country: 'US',
//               sort: 'freshness',
//               currency: 'USD',
//               sizeSchema: 'US',
//               lang: 'en-US'
//             },
//             headers: {
//               'x-rapidapi-host': 'asos2.p.rapidapi.com',
//               'x-rapidapi-key': '0526e9ac36msh3f413a18caa24eep187396jsn8d9a5007e566'
//             }
//           };

//         axios.request(options).then(function (response) {
//             console.log(response.data.products);
//             setProducts(response.data.products);
//             setLoading(false);
//         }).catch(function (error) {
//             console.error(error);
//         });
//     }, [])


//     if (isLoading) {
//         return (
//           <div class="loading">
//             <Loader />
//           </div>
         

//         )  //loader isnt working - check this out and FIX
//     }

//     // let example = Products[0].map((product) => <p key={product}>{price.current.text}</p>);
 
//     return (
//       <div>
//       {Products.map((product) => {
//         return (
//             <div>
//                 <p>{product.name}</p>
//                 <img src={`https://${product.imageUrl}`} alt="Shoe Image" />
//                 <p>{product.price.current.text}</p>
//             </div>
//         )})}
//       </div>
//     );
//   }
  
//   export default IndividualShoe;
  