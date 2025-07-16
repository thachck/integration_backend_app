class BooksController < ApplicationController
  def index
    render json: [
      {
        id: 1,
        image_url:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
      },
      {
        id: 2,
        image_url:
          "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
        name: "To Kill a Mockingbird",
        author: "Harper Lee"
      },
      {
        id: 3,
        image_url:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
        name: "1984",
        author: "George Orwell"
      },
      {
        id: 4,
        image_url:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
        name: "Pride and Prejudice",
        author: "Jane Austen"
      },
      {
        id: 5,
        image_url:
          "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop",
        name: "The Catcher in the Rye",
        author: "J.D. Salinger"
      },
      {
        id: 6,
        image_url:
          "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?w=400&h=600&fit=crop",
        name: "Brave New World",
        author: "Aldous Huxley"
      }
    ]
  end
end
