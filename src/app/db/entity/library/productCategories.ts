import { Sequelize, DataTypes, IntegerDataType } from "sequelize";
export default (sequelize: Sequelize, DataTypes) => {
  let Categories: any = sequelize.define(
    "categories",
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
      categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "sub-categories",
          key: "id",
        },
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      paranoid: false,
    }
  );
 
  return Categories;
};
