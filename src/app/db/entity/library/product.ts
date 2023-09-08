import { Sequelize, DataTypes, IntegerDataType } from "sequelize";
export default (sequelize: Sequelize, DataTypes) => {
  let Product: any = sequelize.define(
    "products",
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
      prize: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM(),
        values: ["active", "inactive"],
        defaultValue: "inactive",
      },
      categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
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
 
  return Product;
};
