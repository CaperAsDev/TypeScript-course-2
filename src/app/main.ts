//|This main file will consume the service (product.service.ts)
import { faker } from '@faker-js/faker';
import { addProduct, products, updateProduct, searchProduct } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    tags: faker.helpers.uniqueArray(faker.word.adjective, 10),
    size: faker.helpers.arrayElement(['S', 'XS', 'L', 'XL', 'M']),
    isNew: faker.datatype.boolean(),
    title: faker.commerce.productName(),
    stock: faker.number.int({ max: 100 }),
    categoryId: faker.string.uuid(),
  });
}

console.log(products);
const product1 = products[0];

updateProduct(product1.id, {
  price: 666
})

searchProduct({
  color: 'red',
  stock: 10,
  isNew: true,
  tags: ['chrunchy', 'soft'],
})