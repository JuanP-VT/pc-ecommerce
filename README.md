# PC-Hub | E-Commerce Prototype

A fully functional e-commerce prototype designed and built from scratch to explore full-stack architecture, complex state management, and API design. 

## 📌 Project Overview
PC-Hub was developed as a comprehensive technical sandbox to move beyond simple CRUD applications and tackle the real-world business logic required for an online storefront. The project handles the complete user journey, from product discovery and cart management to simulated checkout flows.

## ⚙️ Technical Architecture
* **Framework:** Next.js 13 (React)
* **Database:** MongoDB
* **State Management:** Zustand
* **Styling:** Tailwind CSS

## 🛠️ Engineering Highlights

### 1. Data Modeling & Inventory Logic
Designed a document schema in MongoDB to handle the complexities of a hardware storefront.
* Handled product variations, stock availability, and dynamic pricing models.
* Structured the database queries to ensure efficient retrieval of catalog data and user cart states.

### 2. State Management & Cart Synchronization
Implemented robust state management to ensure a seamless shopping experience without heavy boilerplate.
* **Challenge:** Maintaining accurate cart state across different components and preventing data loss during page reloads without overloading the database.
* **Solution:** Utilized **Zustand** for lightweight, scalable global state. Implemented middleware to synchronize the cart state directly with local storage, persisting the user session seamlessly across hard refreshes.

### 3. API Design & Routing
Architected a clean backend API via Next.js Route Handlers to decouple the presentation layer from the business logic.
* Developed RESTful endpoints to manage user authentication, product fetching, and simulated order processing.

## 🚀 Getting Started

### Prerequisites
* Node.js (v16+)
* MongoDB Instance (Local or Atlas)

### Installation

```bash
# Clone the repository
git clone [https://github.com/JuanP-VT/pc-ecommerce.git](https://github.com/JuanP-VT/pc-ecommerce.git)

# Install dependencies
npm install

# Setup environment variables
# Copy the example file and add your MongoDB connection string
cp .env.example .env

# Run the development server
npm run dev
