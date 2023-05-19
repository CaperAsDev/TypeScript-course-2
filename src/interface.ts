//|-----------------------------------------------|
//|--------------<<< INTERFACE >>>----------------|
//|-----------------------------------------------|
//?An interface declaration is another way to name an object type. Is similar to types but there are some differences that will be addressed below.

//<Here we have a simple example of using a Type declaration
type Sizes = 'S' | 'XS' | 'L' | 'M' | 'XL';
type Product = {
  id: string | number;
  title: string,
  stock: number,
  createdAt: Date,
  size?: Sizes,
};
const products : Product[] = [];
products.push({
  id: 1,
  title: 'Product',
  stock: 0,
  createdAt: new Date(),
})

//<Now, we have the same declaration but as interface, note that with interfaces we don't need the equal "=" symbol, despite that the use of interfaces is the same as the type.
interface ProductI {
  id: string | number;
  title: string,
  stock: number,
  createdAt: Date,
  size?: Sizes,
};
const productsI : ProductI[] = [];
productsI.push({
  id: 1,
  title: 'Product',
  stock: 0,
  createdAt: new Date(),
})
