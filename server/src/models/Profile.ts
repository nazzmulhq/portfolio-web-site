import {
    AfterCreate,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from 'sequelize-typescript';

import User from './User';

@Table({ tableName: 'profile', paranoid: true })
export default class Profile extends Model<Profile> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id!: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;

    @Column({ type: DataType.STRING, allowNull: true })
    image!: string;

    @Column({ type: DataType.STRING, allowNull: true })
    linkedinProfileLink!: string;

    @Column({ type: DataType.STRING, allowNull: true })
    githubProfileLink!: string;

    @AfterCreate
    static async setUserId(instance: Profile) {
        const user = await User.findByPk(instance.userId);
        if (!user) {
            throw new Error('User not found');
        }
        await User.update({ profileId: instance.id }, { where: { id: instance.userId } });
    }
}
