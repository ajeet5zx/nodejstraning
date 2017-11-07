var query = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
  function regex() {
    var queryString = {};
    query.replace(/([^?=&]+)(=([^&]*))?/g, function ($0, $1, $2, $3) {
      queryString[$1] = $3;
    });
  
    return queryString;
  }
  