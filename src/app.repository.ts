import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class AccountRepository extends Repository<User> {
    async findByName(name: string): Promise<User | undefined> {
        return this.findOne({ where: { name } });
    }

    async createAccount(account: User): Promise<User> {
        return this.save(account);
    }

    async updateAccount(id: number, account: Partial<User>): Promise<void> {
        await this.update(id, account);
    }

    async deleteAccount(id: number): Promise<void> {
        await this.delete(id);
    }
}