/**
 * @namespace Model
 */

import GenericDAO from "../GenericDAO";

 const route = 'model';
 
 export interface IGetModel {
    id: string;
    description: string;
  }
 
 export interface IPostModel {
    id?: string;
    description: string;
 }
 
 const get = async (): Promise<IGetModel[]> => GenericDAO.get(route);
 
 const getById = async (id: string): Promise<IGetModel> => GenericDAO.get(route, id);
 
 const save = async (data: IPostModel) => GenericDAO.save(route, data);
 
 const edit = async (data: IPostModel, id: string) => GenericDAO.save(route, data, id);
 
 export default {
   get,
   getById,
   save,
   edit
 };
 