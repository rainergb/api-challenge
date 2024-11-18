import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt
} from "sequelize-typescript";

@Table({
  tableName: "pessoas",
  timestamps: true
})
export class Person extends Model<Person> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  nome!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  idade!: number;

  @CreatedAt
  @Column({
    type: DataType.DATE
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE
  })
  updatedAt!: Date;
}
