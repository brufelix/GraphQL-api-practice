import { IModelsInterface } from './IModelsInterface'

export interface IBaseModelInterface {
    prototype? 
    assosiate?(model: IModelsInterface): void
}