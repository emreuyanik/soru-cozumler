// Sample products data
// products

var allProducts = [
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 2,
    title: 'iPhone X',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',
      'https://i.dummyjson.com/data/products/2/2.jpg',
      'https://i.dummyjson.com/data/products/2/3.jpg',
      'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    ],
  },
  {
    id: 3,
    title: 'Samsung Universe 9',
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
  },
  {
    id: 4,
    title: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: 'OPPO',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/4/1.jpg',
      'https://i.dummyjson.com/data/products/4/2.jpg',
      'https://i.dummyjson.com/data/products/4/3.jpg',
      'https://i.dummyjson.com/data/products/4/4.jpg',
      'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    ],
  },
]
console.log(allProducts);

// <--------------------  Delete product  ------------------------->
// 1 - Ürün listesinden id'si verilen ürünü silen ve geri kalan ürün listesini dönen fonksiyonu yazınız.(deleteProduct(id))

// const deleteProduct = (id, allProducts) => allProducts.filter(product => product.id !== id);

// const productIdToDelete = 3;
// const updatedProducts = deleteProduct(productIdToDelete, allProducts);
// allProducts = updatedProducts //asıl listeden siler

// console.log(updatedProducts);
// ****************************************************
// function deleteProduct(id){



// const filteredList =  allProducts.filter((product)=>{
 
//   return product.id !== id
// })

// allProducts = filteredList

// return allProducts

// }

// console.log(deleteProduct(2));






// <--------------------  Create  product  ------------------------->
// 2 - Ürün listesine yeni bir ürün ekleyen ve yeni listeyi dönen fonksiyonu yazınız. (createNewProduct({title, description, image}))

function createNewProduct(parametre) {
  const {newTitle,description,image} =parametre
  
  console.log(newTitle);
  console.log(description);
  console.log(image);

 const newObject = {
  id:allProducts.length + 1,
  title:newTitle,
  description:description,
  images:[image],

  }
allProducts.push(newObject);
}

let newProduct = {
  newTitle:'iphone 15',
  description:'lorem ipsum',
  image:'imageurl'
};

createNewProduct(newProduct);

console.log(allProducts);





// <--------------------  Create  product  ------------------------->

// <--------------------  Edit  product  ------------------------->
// 3 - Ürün listesindeki id si belirtlen bir ürünün başlığını ve açıklamasını güncelleyen ve yeni listeyi dönen fonksiyonu yazınız. (editProduct({id, title, description}))



// <--------------------  Edit  product  ------------------------->

// <--------------------  filter  product  ------------------------->
// 4 - Ürün listesindeki ürünleri gönderilen arama kelimesine göre, ürünün adı, açıklaması ve markasında arayıp eşleşen tüm ürünlerin listesini dönen fonksiyonu yazınız. (filterProducts(query)) büyük-küçük harf duyarlılığı olmamalıdır.




// <--------------------  filter  product  ------------------------->

