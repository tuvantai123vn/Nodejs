const path = require('path');
const fs = require('fs');

const getProductsFromFile = cb => {
    const p = path.join(
        path.dirname(process.mainModule.filename), 
        'data', 
        'products.json');
    fs.readFile(p, (err, fileContent) => {
        if(err){
         return cb([]);
        }else{
            cb(JSON.parse(fileContent));
        } 
    })
}

module.exports = class Product{
    constructor(t){
        this.title = t;
    }
    save(){
      getProductsFromFile(products => {
        fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log(err);
        })
      });
    }
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}