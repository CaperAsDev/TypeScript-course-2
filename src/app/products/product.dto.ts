import { ProductI } from './product.model';

export interface CreateProductDTO
  extends Omit<ProductI, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
export interface FindProductDTO
  extends Readonly<Partial<Omit<ProductI, 'tags'>>> {
    readonly tags: ReadonlyArray<string>
  } //<Note how I can nest the Utility types

type examplePick = Pick<ProductI, 'color' | 'image'>; //?Choose the properties you want from another type.
type exampleRequired = Required<UpdateProductDTO>; //?Now all the properties are required, there is no optional parameter.
