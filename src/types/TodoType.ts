import ItemType from './ItemType';

export default interface TodoType {
  id: string;
  name: string;
  itens: ItemType[];
}
