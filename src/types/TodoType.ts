import ItemType from './ItemType';

export default interface TodoType {
  id: number;
  name: string;
  itens: ItemType[];
}
