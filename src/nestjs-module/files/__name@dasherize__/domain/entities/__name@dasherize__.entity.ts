export class <%= moduleNamePascal %> {
  id?: string;
  // Add your domain properties here
  // Example:
  // name: string;
  // email: string;
  // createdAt?: Date;
  // updatedAt?: Date;

  constructor(data: Partial<<%= moduleNamePascal %>>) {
    Object.assign(this, data);
    this.id = data.id || this.generateId();
  }

  private generateId(): string {
    // Implement your ID generation logic
    // Example: return uuidv4();
    return Date.now().toString();
  }

  // Add your domain methods here
  // Example:
  // validate(): void {
  //   if (!this.name) {
  //     throw new Error('Name is required');
  //   }
  // }
}

