import { AfterCreate, BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import User from './User';

@Table({ tableName: 'skill', paranoid: true})
export default class Skill extends Model<Skill>{
    @Column({ type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id!: number;

    @ForeignKey(() => User)
    userId!: number

    @BelongsTo(() => User)
    user!: User

    @Column({type: DataType.STRING, unique: true})
    skillName!: string;

    @Column({type: DataType.INTEGER})
    skillValue!: number

    @AfterCreate
    static setUserId = async (instance: Skill) => {
        const user = await User.findByPk(instance.userId)
        if (!user) {
            throw new Error('User not found');
        }
        await User.update({ skillId: instance.id}, { where: { id: instance.userId}})
    }

}