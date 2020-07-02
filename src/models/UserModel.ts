import { InstanceUpdateOptions, Model, Sequelize, DataType, DataTypes} from 'sequelize'

import { IBaseModelInterface } from '../interfaces/IBaseModel'

export interface IUserAttributes {
    id?: number
    name?: string
    password?: string
    photo?: string
}

export interface IUserInstance extends InstanceUpdateOptions<IUserAttributes>, IUserAttributes {
    isPassword(encodedPassword: string, password: string)
} 

export interface IUserModel extends IBaseModelInterface, Model<IUserInstance, IUserAttributes> {}

export default (sequelize: Sequelize, dataTypes: DataType): IUserModel => { return }