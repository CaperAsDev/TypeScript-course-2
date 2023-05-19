//| Here we define the common base that some of our interfaces will share, so then we can extend from this.
//| Also if we want, we can define a property as "readonly", which means that after a value is assigned it can't be modified only read.

export interface BaseModel{
  readonly id: string | number;
  readonly createdAt: Date,
  updatedAt: Date,
}