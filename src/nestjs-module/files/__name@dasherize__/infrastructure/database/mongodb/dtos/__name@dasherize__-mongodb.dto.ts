export type <%= moduleNamePascal %>MongoDbDto = {
  id: string;
  title: string;
  slug: string;
  version: number;
  description: string | null;
  content: string;
  status: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

