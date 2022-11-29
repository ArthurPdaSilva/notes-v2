import CollectionType from './CollectionType';

export default interface MessageType extends CollectionType {
  idMessage: string;
  imgUser?: string;
}
