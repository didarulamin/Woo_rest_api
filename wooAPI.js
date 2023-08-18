const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const express = require('express')
const app = express()
const port = 3000

var api = new WooCommerceRestApi({
  url: 'https://project.didarulamin.com/',
  consumerKey: 'ck_0fef682b527aab764e9f46402f8a94d9e83e8bab',
  consumerSecret: 'cs_089a6c8f244087786ee0a116fc0a34054d65182c',
  wpAPI: true,
  version: 'wc/v1',
  query_string_auth: true
});




app.get('/', (req, res) => {

  res.json({"msg":"I am wooCommerce api"})

})




  app.get('/products', (req, res) => {

    api.get("products", {
      per_page: 20, // 20 products per page
    })
      .then((response) => {
       
        // console.log("Response Data:", response.data);
    
       res.json(response.data)
       
      })
      .catch((error) => {
        // Invalid request, for 4xx and 5xx statuses
        
        console.log("Response Data:", error.response.data);
      })
      .finally(() => {
        // Always executed.
      });
  
  })




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })