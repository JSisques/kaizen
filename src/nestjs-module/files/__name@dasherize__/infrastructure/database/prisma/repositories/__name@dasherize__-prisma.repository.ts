import { <%= moduleNamePascal %>Aggregate } from '@/llm-context/<%= moduleName %>/domain/aggregates/<%= moduleName %>.aggregate';
import { <%= moduleNamePascal %>WriteRepository } from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-write/<%= moduleName %>-write.repository';
import { <%= moduleNamePascal %>PrismaMapper } from '@/llm-context/<%= moduleName %>/infrastructure/database/prisma/mappers/<%= moduleName %>-prisma.mapper';
import { BasePrismaRepository } from '@/shared/infrastructure/database/prisma/base-prisma.repository';
import { PrismaService } from '@/shared/infrastructure/database/prisma/prisma.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class <%= moduleNamePascal %>PrismaRepository
  extends BasePrismaRepository
  implements <%= moduleNamePascal %>WriteRepository
{
  constructor(
    prisma: PrismaService,
    private readonly <%= moduleNameCamel %>PrismaMapper: <%= moduleNamePascal %>PrismaMapper,
  ) {
    super(prisma);
    this.logger = new Logger(<%= moduleNamePascal %>PrismaRepository.name);
  }

  /**
   * Finds a <%= moduleName %> by their id
   *
   * @param id - The id of the <%= moduleName %> to find
   * @returns The <%= moduleName %> if found, null otherwise
   */
  async findById(id: string): Promise<<%= moduleNamePascal %>Aggregate | null> {
    const <%= moduleNameCamel %>Data = await this.prismaService.<%= moduleNameCamel %>.findUnique({
      where: { id },
    });

    if (!<%= moduleNameCamel %>Data) {
      return null;
    }

    return this.<%= moduleNameCamel %>PrismaMapper.toDomainEntity({
      id: <%= moduleNameCamel %>Data.id,
      slug: <%= moduleNameCamel %>Data.slug,
      version: <%= moduleNameCamel %>Data.version,
      title: <%= moduleNameCamel %>Data.title,
      description: <%= moduleNameCamel %>Data.description,
      content: <%= moduleNameCamel %>Data.content,
      status: <%= moduleNameCamel %>Data.status,
      isActive: <%= moduleNameCamel %>Data.isActive,
    });
  }

  /**
   * Saves a <%= moduleName %>
   *
   * @param <%= moduleNameCamel %> - The <%= moduleName %> to save
   * @returns The saved <%= moduleName %>
   */
  async save(<%= moduleNameCamel %>: <%= moduleNamePascal %>Aggregate): Promise<<%= moduleNamePascal %>Aggregate> {
    const <%= moduleNameCamel %>Data = this.<%= moduleNameCamel %>PrismaMapper.toPrismaData(<%= moduleNameCamel %>);

    const result = await this.prismaService.<%= moduleNameCamel %>.upsert({
      where: { id: <%= moduleNameCamel %>.id.value },
      update: <%= moduleNameCamel %>Data,
      create: <%= moduleNameCamel %>Data,
    });

    return this.<%= moduleNameCamel %>PrismaMapper.toDomainEntity({
      id: result.id,
      slug: result.slug,
      version: result.version,
      title: result.title,
      description: result.description,
      content: result.content,
      status: result.status,
      isActive: result.isActive,
    });
  }

  /**
   * Deletes a <%= moduleName %>
   *
   * @param id - The id of the <%= moduleName %> to delete
   * @returns True if the <%= moduleName %> was deleted, false otherwise
   */
  async delete(id: string): Promise<boolean> {
    this.logger.log(`Deleting <%= moduleName %> by id: ${id}`);

    await this.prismaService.<%= moduleNameCamel %>.delete({
      where: { id },
    });

    return true;
  }
}

