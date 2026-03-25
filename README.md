# 🌾 Farm Produce Supply Chain API

> A robust, RESTful backend API built to simulate and manage the movement of farm produce through a modern supply chain network: **Farmer → Distributor → Retailer → Consumer**.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Testing](#testing)
- [Deployment](#deployment)
- [Development Team](#development-team)
- [License](#license)

---

## Features

- **Authentication & Security** — JWT-based authentication with secure password hashing (bcryptjs).
- **Role-Based Access Control (RBAC)** — Protected routes restricted by user roles (admin, farmer, retailer, distributor).
- **Database Seeding** — Automated master seeder to instantly wipe and populate relational test data without ID conflicts.
- **Global Error Handling** — Centralized error middleware returning clean, formatted JSON responses.
- **Supply Chain Domains:**
  - **Farmers:** Manage farmer profiles, locations, and crop capabilities.
  - **Produce:** Track available inventory, categories, and pricing.
  - **Batches:** Log specific harvest batches linked to farmers and produce.
  - **Distributors:** Manage the logistics middlemen and their operating regions.
  - **Retailers:** Track the final sales destinations.
  - **Orders:** Process transactions and track delivery status with referential integrity.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (v18+) |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Auth | JSON Web Tokens (JWT) |
| Password Hashing | bcryptjs |
| Architecture | ES Modules (import/export) |
| Testing | Postman |

---

## Project Structure

    farm-supply-chain-api/
    ├── src/
    │   ├── config/
    │   │   └── db.js                       # MongoDB connection setup
    │   ├── controllers/                    # Route logic and response handling
    │   │   ├── authControllers.js
    │   │   ├── produceControllers.js
    │   │   └── ... (other controllers)
    │   ├── middlewares/                    # Express middlewares
    │   │   ├── errorHandler.js             # Global JSON error handler
    │   │   ├── logger.js                   # Request logging
    │   │   └── validation.js               # Data validation rules
    │   ├── models/                         # Mongoose Schemas
    │   │   ├── Batch.js
    │   │   ├── Distributor.js
    │   │   ├── Farmer.js
    │   │   ├── Order.js
    │   │   ├── Produce.js
    │   │   ├── Retailer.js
    │   │   └── User.js
    │   ├── routes/                         # Express API endpoints
    │   │   ├── auth.js
    │   │   ├── batches.js
    │   │   ├── distributors.js
    │   │   ├── farmers.js
    │   │   ├── orders.js
    │   │   ├── produce.js
    │   │   └── retailers.js
    │   ├── seeds/                          # Database seeding scripts
    │   │   ├── mainSeed.js                 # Master script for sequential seeding
    │   │   ├── index.js
    │   │   └── ... (individual domain seeders)
    │   └── services/                       # Business logic and DB queries
    │       ├── produceServices.js
    │       └── ... (other services)
    ├── .env                                # Environment variables
    ├── .gitignore                          # Git ignore rules
    ├── app.js                              # Application entry point
    ├── farm-supply-chain-api.postman_collection.json  # Postman tests & docs
    ├── package-lock.json
    ├── package.json                        # Dependencies & NPM scripts
    └── README.md                           # Project documentation


---

## Getting Started

### Prerequisites

- Node.js v16+
- MongoDB (Local instance or Atlas URI)

### Installation

Clone the repo and install dependencies:

    git clone https://github.com/hiamrhex/farm-supply-chain-api.git
    cd farm-supply-chain-api
    npm install
    cp .env.example .env

### Seeding the Database

Populate your local database with test Users (Admin, Farmer, Retailer), Produce, Batches, and Orders to start testing immediately:

    npm run seed

### Running the server

For development (with auto-restart via nodemon):

    npm run dev

For production:

    npm start

API will be available at `http://localhost:3000/api/v1`

---

## Environment Variables

Create a `.env` file in the root directory:

    PORT=3000
    NODE_ENV=development
    MONGO_URI=mongodb://localhost:27017/farm-supply-chain
    JWT_SECRET=your_super_secret_jwt_key

---

## API Reference

All routes are prefixed with `/api/v1`.

### Authentication

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/auth/register` | Register a new user (admin, farmer, retailer) | Public |
| POST | `/auth/login` | Login and receive JWT token | Public |

### Farmers

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/farmers` | List all registered farmers | Protected |
| GET | `/farmers/:id` | Get a specific farmer | Protected |
| POST | `/farmers` | Create a new farmer profile | Admin |
| PUT | `/farmers/:id` | Update farmer details | Admin / Farmer |
| DELETE | `/farmers/:id` | Delete farmer profile | Admin |

### Produce

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/produce` | List all available produce | Protected |
| GET | `/produce/:id` | Get specific produce details | Protected |
| POST | `/produce` | Add new farm produce | Admin / Farmer |
| PUT | `/produce/:id` | Update produce details | Admin / Farmer |
| DELETE | `/produce/:id` | Delete produce | Admin |

### Orders

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/orders` | List all orders | Protected |
| GET | `/orders/:id` | Get specific order | Protected |
| POST | `/orders` | Place a new produce order | Admin / Retailer |
| PATCH | `/orders/:id/status`| Update order status | Admin / Distributor |

### Batches

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/batches` | List all logistics batches | Protected |
| POST | `/batches` | Create a new batch | Admin / Farmer |
| PATCH | `/batches/:id/status`| Update batch status | Admin / Distributor |

### Distributors & Retailers

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/distributors` | List all distributors | Protected |
| GET | `/retailers` | List all retailers | Protected |
| POST | `/distributors` | Register a distributor | Admin |
| POST | `/retailers` | Register a retailer | Admin |

> **Note:** For full request/response body formats, please refer to the Postman Collection included in this repository (`farm-supply-chain-api.postman_collection.json`).

---

## Testing

This project utilizes Postman for testing endpoints. 
1. Import the provided `farm-supply-chain-api.postman_collection.json` file into your Postman workspace.
2. Run the `POST /auth/login` route first to automatically save the JWT token to your Postman environment variables for protected routes.

---

## Deployment

### Render / Railway (Recommended)

1. Push your code to GitHub.
2. Create a new Web Service on Render or Railway.
3. Connect your GitHub repository.
4. Add all environment variables (`MONGO_URI` must be a MongoDB Atlas cloud URI).
5. Set the Start Command to `npm start`.

---

## Development Team

- **Richard Ilori** - *Team Lead & Core Architecture / Authentication*
- **Samuel Idakwo** - *Developer (Orders & Distributors)*
- **Junya** - *Developer (Farmers & Retailers)*
- **Deborne** - *Developer (Produce & Database Seeds)*
- **Jephmind** - *Developer (Batches)*

---

## License

MIT License
