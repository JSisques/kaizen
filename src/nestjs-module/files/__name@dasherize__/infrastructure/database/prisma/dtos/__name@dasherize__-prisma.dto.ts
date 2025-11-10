import { <%= moduleNamePascal %>StatusEnum } from '@prisma/client';

export type <%= moduleNamePascal %>PrismaDto = {
  id: string;
  slug: string;
  version: number;
  title: string;
  description: string | null;
  content: string;
  status: <%= moduleNamePascal %>StatusEnum;
  isActive: boolean;
};

