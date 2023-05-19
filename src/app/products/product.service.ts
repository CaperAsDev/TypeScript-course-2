//| In this file .service.ts we'll keep the code that handle all the information, the models and all the functions needed to run the App.
import { faker } from '@faker-js/faker';
import { ProductI } from './product.model';
import {
  CreateProductDTO,
  UpdateProductDTO,
  FindProductDTO,
} from './product.dto';

export const products: ProductI[] = [];

export const addProduct = (data: CreateProductDTO): ProductI => {
  const newData = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newData);
  return newData;
};

export const updateProduct = (
  idProduct: ProductI['id'],
  changes: UpdateProductDTO
) => {
  const index = products.findIndex((p) => p.id === idProduct);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};


export const searchProduct = (dto: FindProductDTO): ProductI[] => {
  // dto.tags?.pop();//<Without the readonlyArray type we can mutate the array but can't be reassigned.
  // dto.tags = ["cold"];//!We can't reassign a readonly property
  //?Here would be the code to filter usign the properties sended, and the return a new array with the conicidences
  
  return products;
};


export const filterProduct = (keyWord: string) => {
  //<code
};
