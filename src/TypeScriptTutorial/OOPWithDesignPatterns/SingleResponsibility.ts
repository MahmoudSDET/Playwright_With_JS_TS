/**
 * SINGLE RESPONSIBILITY PRINCIPLE (SRP)
 * 
 * Definition: A class should have only one reason to change, meaning it should have only one job or responsibility.
 * 
 * Benefits:
 * - Easier to maintain and modify
 * - Reduced coupling between components
 * - Better testability
 * - Improved code reusability
 */

// ❌ BAD EXAMPLE - Violates SRP (Multiple responsibilities in one class)
class BadUserManager {
  private users: any[] = [];

  // Responsibility 1: User data management
  addUser(user: any) {
    this.users.push(user);
  }

  removeUser(userId: string) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  // Responsibility 2: User validation
  validateUser(user: any): boolean {
    return user.email && user.name && user.email.includes('@');
  }

  // Responsibility 3: Email notifications
  sendWelcomeEmail(user: any) {
    console.log(`Sending welcome email to ${user.email}`);
    // Email sending logic
  }

  // Responsibility 4: Data persistence
  saveToDatabase() {
    console.log('Saving users to database...');
    // Database saving logic
  }

  // Responsibility 5: Logging
  logUserActivity(action: string, userId: string) {
    console.log(`${new Date()}: User ${userId} performed ${action}`);
  }
}

// ✅ GOOD EXAMPLE - Follows SRP (Each class has single responsibility)

// Responsibility 1: User data model
class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public createdAt: Date = new Date()
  ) {}
}

// Responsibility 2: User data management
class UserRepository {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(userId: string): boolean {
    const initialLength = this.users.length;
    this.users = this.users.filter(user => user.id !== userId);
    return this.users.length < initialLength;
  }

  findUserById(userId: string): User | undefined {
    return this.users.find(user => user.id === userId);
  }

  getAllUsers(): User[] {
    return [...this.users]; // Return copy to prevent external modification
  }
}

// Responsibility 3: User validation
class UserValidator {
  validateUser(user: User): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!user.name || user.name.trim().length === 0) {
      errors.push('Name is required');
    }

    if (!user.email || !this.isValidEmail(user.email)) {
      errors.push('Valid email is required');
    }

    if (!user.id || user.id.trim().length === 0) {
      errors.push('User ID is required');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Responsibility 4: Email notifications
class EmailService {
  sendWelcomeEmail(user: User): void {
    console.log(`📧 Sending welcome email to ${user.email}`);
    console.log(`Subject: Welcome ${user.name}!`);
    console.log(`Body: Thank you for joining us, ${user.name}!`);
  }

  sendPasswordResetEmail(user: User): void {
    console.log(`📧 Sending password reset email to ${user.email}`);
  }
}

// Responsibility 5: Data persistence
class DatabaseService {
  saveUser(user: User): void {
    console.log(`💾 Saving user ${user.name} to database...`);
    // Database saving logic would go here
  }

  saveUsers(users: User[]): void {
    console.log(`💾 Saving ${users.length} users to database...`);
    // Batch save logic would go here
  }
}

// Responsibility 6: Logging
class Logger {
  logUserActivity(action: string, userId: string): void {
    const timestamp = new Date().toISOString();
    console.log(`📝 [${timestamp}] User ${userId} performed: ${action}`);
  }

  logError(error: string, context?: string): void {
    const timestamp = new Date().toISOString();
    console.log(`❌ [${timestamp}] ERROR: ${error}${context ? ` (Context: ${context})` : ''}`);
  }
}

// Orchestrator class that uses all the single-responsibility classes
class UserService {
  constructor(
    private userRepository: UserRepository,
    private userValidator: UserValidator,
    private emailService: EmailService,
    private databaseService: DatabaseService,
    private logger: Logger
  ) {}

  async registerUser(userData: { id: string; name: string; email: string }): Promise<{ success: boolean; message: string }> {
    try {
      // Create user
      const user = new User(userData.id, userData.name, userData.email);

      // Validate user
      const validation = this.userValidator.validateUser(user);
      if (!validation.isValid) {
        this.logger.logError(`User validation failed: ${validation.errors.join(', ')}`, `User ID: ${user.id}`);
        return { success: false, message: `Validation failed: ${validation.errors.join(', ')}` };
      }

      // Add to repository
      this.userRepository.addUser(user);
      this.logger.logUserActivity('REGISTERED', user.id);

      // Save to database
      this.databaseService.saveUser(user);

      // Send welcome email
      this.emailService.sendWelcomeEmail(user);

      return { success: true, message: 'User registered successfully' };
    } catch (error) {
      this.logger.logError(`Failed to register user: ${error}`, `User data: ${JSON.stringify(userData)}`);
      return { success: false, message: 'Registration failed' };
    }
  }
}

// Example usage demonstrating the Single Responsibility Principle
function demonstrateSRP() {
  console.log('=== Single Responsibility Principle Demo ===\n');

  // Create instances of each service (each with single responsibility)
  const userRepository = new UserRepository();
  const userValidator = new UserValidator();
  const emailService = new EmailService();
  const databaseService = new DatabaseService();
  const logger = new Logger();

  // Create the orchestrator service
  const userService = new UserService(
    userRepository,
    userValidator,
    emailService,
    databaseService,
    logger
  );

  // Test valid user registration
  console.log('1. Registering valid user:');
  userService.registerUser({
    id: 'user123',
    name: 'John Doe',
    email: 'john.doe@example.com'
  }).then(result => console.log(`Result: ${result.message}\n`));

  // Test invalid user registration
  console.log('2. Registering invalid user:');
  userService.registerUser({
    id: '',
    name: '',
    email: 'invalid-email'
  }).then(result => console.log(`Result: ${result.message}\n`));

  // Demonstrate individual responsibilities
  console.log('3. Individual service demonstrations:');
  
  const testUser = new User('test123', 'Test User', 'test@example.com');
  
  // Each class handles only its specific responsibility
  userRepository.addUser(testUser);
  console.log(`Users in repository: ${userRepository.getAllUsers().length}`);
  
  const validation = userValidator.validateUser(testUser);
  console.log(`User validation result: ${validation.isValid}`);
  
  emailService.sendWelcomeEmail(testUser);
  databaseService.saveUser(testUser);
  logger.logUserActivity('TESTED', testUser.id);
}

// Blog Post Example (Enhanced version)
class BlogPost {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public authorId: string,
    public createdAt: Date = new Date()
  ) {}
}

class BlogPostRepository {
  private posts: BlogPost[] = [];

  createPost(post: BlogPost): void {
    this.posts.push(post);
  }

  updatePost(id: string, updates: Partial<BlogPost>): boolean {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex !== -1) {
      this.posts[postIndex] = { ...this.posts[postIndex], ...updates };
      return true;
    }
    return false;
  }

  deletePost(id: string): boolean {
    const initialLength = this.posts.length;
    this.posts = this.posts.filter(post => post.id !== id);
    return this.posts.length < initialLength;
  }

  getPostById(id: string): BlogPost | undefined {
    return this.posts.find(post => post.id === id);
  }
}

class BlogPostFormatter {
  formatAsHTML(post: BlogPost): string {
    return `
      <article>
        <h1>${post.title}</h1>
        <p class="meta">By Author ${post.authorId} on ${post.createdAt.toDateString()}</p>
        <div class="content">${post.content}</div>
      </article>
    `;
  }

  formatAsJSON(post: BlogPost): string {
    return JSON.stringify({
      id: post.id,
      title: post.title,
      content: post.content,
      authorId: post.authorId,
      createdAt: post.createdAt.toISOString()
    }, null, 2);
  }

  formatAsMarkdown(post: BlogPost): string {
    return `# ${post.title}\n\n*By Author ${post.authorId} on ${post.createdAt.toDateString()}*\n\n${post.content}`;
  }
}

// Additional Example: E-commerce Order Processing
// ❌ BAD: All responsibilities in one class
class BadOrderProcessor {
  processOrder(order: any) {
    // Validation
    if (!order.items || order.items.length === 0) {
      throw new Error('Order must have items');
    }

    // Calculate total
    let total = 0;
    for (const item of order.items) {
      total += item.price * item.quantity;
    }

    // Apply discount
    if (order.discountCode) {
      total *= 0.9; // 10% discount
    }

    // Process payment
    console.log(`Processing payment of $${total}`);

    // Update inventory
    console.log('Updating inventory...');

    // Send confirmation email
    console.log(`Sending confirmation email to ${order.customerEmail}`);

    // Log the order
    console.log(`Order ${order.id} processed at ${new Date()}`);
  }
}

// ✅ GOOD: Separated responsibilities
interface Order {
  id: string;
  items: Array<{ id: string; price: number; quantity: number }>;
  customerEmail: string;
  discountCode?: string;
}

class OrderValidator {
  validate(order: Order): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!order.items || order.items.length === 0) {
      errors.push('Order must have items');
    }
    
    if (!order.customerEmail) {
      errors.push('Customer email is required');
    }
    
    return { isValid: errors.length === 0, errors };
  }
}

class PriceCalculator {
  calculateTotal(order: Order): number {
    let total = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (order.discountCode) {
      total *= 0.9; // 10% discount
    }
    
    return total;
  }
}

class PaymentProcessor {
  processPayment(amount: number): boolean {
    console.log(`💳 Processing payment of $${amount.toFixed(2)}`);
    // Payment processing logic
    return true;
  }
}

class InventoryManager {
  updateInventory(items: Array<{ id: string; quantity: number }>): void {
    console.log('📦 Updating inventory...');
    items.forEach(item => {
      console.log(`  - Reducing stock for item ${item.id} by ${item.quantity}`);
    });
  }
}

class OrderNotificationService {
  sendConfirmationEmail(customerEmail: string, orderId: string): void {
    console.log(`📧 Sending order confirmation email to ${customerEmail} for order ${orderId}`);
  }
}

class OrderLogger {
  logOrderProcessed(orderId: string): void {
    console.log(`📝 Order ${orderId} processed at ${new Date().toISOString()}`);
  }
}

// Orchestrator following SRP
class GoodOrderProcessor {
  constructor(
    private validator: OrderValidator,
    private calculator: PriceCalculator,
    private paymentProcessor: PaymentProcessor,
    private inventoryManager: InventoryManager,
    private notificationService: OrderNotificationService,
    private logger: OrderLogger
  ) {}

  processOrder(order: Order): { success: boolean; message: string } {
    // Validate
    const validation = this.validator.validate(order);
    if (!validation.isValid) {
      return { success: false, message: validation.errors.join(', ') };
    }

    // Calculate total
    const total = this.calculator.calculateTotal(order);

    // Process payment
    const paymentSuccess = this.paymentProcessor.processPayment(total);
    if (!paymentSuccess) {
      return { success: false, message: 'Payment failed' };
    }

    // Update inventory
    this.inventoryManager.updateInventory(order.items);

    // Send notification
    this.notificationService.sendConfirmationEmail(order.customerEmail, order.id);

    // Log
    this.logger.logOrderProcessed(order.id);

    return { success: true, message: 'Order processed successfully' };
  }
}

// Demo function
function demonstrateOrderProcessing() {
  console.log('\n=== Order Processing SRP Demo ===\n');

  const orderProcessor = new GoodOrderProcessor(
    new OrderValidator(),
    new PriceCalculator(),
    new PaymentProcessor(),
    new InventoryManager(),
    new OrderNotificationService(),
    new OrderLogger()
  );

  const sampleOrder: Order = {
    id: 'ORD-001',
    items: [
      { id: 'ITEM-1', price: 29.99, quantity: 2 },
      { id: 'ITEM-2', price: 15.50, quantity: 1 }
    ],
    customerEmail: 'customer@example.com',
    discountCode: 'SAVE10'
  };

  const result = orderProcessor.processOrder(sampleOrder);
  console.log(`Order processing result: ${result.message}`);
}

// Run demonstrations
demonstrateSRP();
demonstrateOrderProcessing();

export {
  User,
  UserRepository,
  UserValidator,
  EmailService,
  DatabaseService,
  Logger,
  UserService,
  BlogPost,
  BlogPostRepository,
  BlogPostFormatter
};