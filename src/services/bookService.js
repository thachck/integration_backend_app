import API_CONFIG from './apiConfig';

// Mock book data
const mockBooks = [
  {
    id: 1,
    image_url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
  },
  {
    id: 2,
    image_url: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    name: "To Kill a Mockingbird",
    author: "Harper Lee"
  },
  {
    id: 3,
    image_url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    name: "1984",
    author: "George Orwell"
  },
  {
    id: 4,
    image_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    name: "Pride and Prejudice",
    author: "Jane Austen"
  },
  {
    id: 5,
    image_url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop",
    name: "The Catcher in the Rye",
    author: "J.D. Salinger"
  },
  {
    id: 6,
    image_url: "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?w=400&h=600&fit=crop",
    name: "Brave New World",
    author: "Aldous Huxley"
  }
];

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API service
class BookService {
  // Get all books
  async getBooks() {
    // TODO: When backend is ready, replace mock implementation with:
    // const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.BOOKS}`);
    // if (!response.ok) throw new Error('Failed to fetch books');
    // return response.json();
    // Simulate API call delay (500-1500ms)
    await delay(Math.random() * 1000 + 500);
    
    // Simulate occasional errors (10% chance)
    if (Math.random() < 0.1) {
      throw new Error('Failed to fetch books from server');
    }
    
    // Return mock data
    return [...mockBooks];
  }
  
  // Get a single book by ID
  async getBookById(id) {
    await delay(Math.random() * 500 + 300);
    
    const book = mockBooks.find(b => b.id === id);
    
    if (!book) {
      throw new Error(`Book with ID ${id} not found`);
    }
    
    return { ...book };
  }
  
  // Create a new book
  async createBook(bookData) {
    await delay(Math.random() * 800 + 400);
    
    const newBook = {
      ...bookData,
      id: Math.max(...mockBooks.map(b => b.id)) + 1
    };
    
    mockBooks.push(newBook);
    return { ...newBook };
  }
  
  // Update a book
  async updateBook(id, bookData) {
    await delay(Math.random() * 800 + 400);
    
    const index = mockBooks.findIndex(b => b.id === id);
    
    if (index === -1) {
      throw new Error(`Book with ID ${id} not found`);
    }
    
    mockBooks[index] = { ...mockBooks[index], ...bookData };
    return { ...mockBooks[index] };
  }
  
  // Delete a book
  async deleteBook(id) {
    await delay(Math.random() * 600 + 300);
    
    const index = mockBooks.findIndex(b => b.id === id);
    
    if (index === -1) {
      throw new Error(`Book with ID ${id} not found`);
    }
    
    mockBooks.splice(index, 1);
    return { success: true, id };
  }
}

// Export singleton instance
export default new BookService();