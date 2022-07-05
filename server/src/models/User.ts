import bcrypt from 'bcryptjs';
import {
    BeforeCreate,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from 'sequelize-typescript';
import Profile from './Profile';

@Table({ tableName: 'user', paranoid: true })
export default class User extends Model<User> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true })
    id!: number;

    @Column({ type: DataType.STRING, allowNull: true })
    name!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    username!: string;

    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    email!: string;

    @Column({ allowNull: false, type: DataType.STRING(2048) })
    password!: string;

    @ForeignKey(() => Profile)
    @Column({ type: DataType.INTEGER, allowNull: true, unique: true })
    profileId!: number;

    @BelongsTo(() => Profile)
    profile!: Profile;

    @BeforeCreate
    static hashPassword = (instance: User) => {
        const salt = bcrypt.genSaltSync(10);
        instance.password = bcrypt.hashSync(instance.password, salt);
    };
}
