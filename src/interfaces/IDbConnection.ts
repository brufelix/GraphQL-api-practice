import { Sequelize } from 'sequelize'

import { IModelsInterface } from './IModelsInterface'

export interface IDbConnection extends IModelsInterface {
    sequelize: Sequelize
}