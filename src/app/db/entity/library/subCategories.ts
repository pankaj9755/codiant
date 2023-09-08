import { Sequelize, DataTypes, IntegerDataType } from "sequelize";
export default (sequelize: Sequelize, DataTypes) => {
  let SubCategories: any = sequelize.define(
    "subCategories",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    
    },
    {
      timestamps: true,
      freezeTableName: true,
      paranoid: false,
    }
  );

  return SubCategories;
};
