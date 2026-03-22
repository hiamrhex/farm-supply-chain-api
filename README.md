# farm-supply-chain-api
Backend REST API for Farm Produce Supply Chain Management


# 🌾 Farm Produce Supply Chain API

> A robust, RESTful backend API built to simulate and manage the movement of farm produce through a modern supply chain network: **Farmer → Distributor → Retailer → Consumer**.

---

## 🚀 Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (NoSQL)
* **ODM:** Mongoose
* **Architecture:** ES Modules (import/export)

---

## 📦 Core Entities & Features

This system manages 6 primary domains within the supply chain:
* **Farmers:** Manage farmer profiles, locations, and crop capabilities.
* **Produce:** Track available inventory, categories, and pricing.
* **Batches:** Log specific harvest batches linked to farmers and produce.
* **Distributors:** Manage the logistics middlemen and their operating regions.
* **Retailers:** Track the final sales destinations.
* **Orders:** Process transactions, automate inventory reduction, and track delivery status.

---

## ⚙️ Local Setup & Installation

Follow these steps to get the server running on your local machine.

### 1. Prerequisites
Make sure you have the following installed:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or Atlas URI)

### 2. Clone the Repository
```bash
git clone [https://github.com/hiamrhex/farm-supply-chain-api.git](https://github.com/hiamrhex/farm-supply-chain-api.git)
cd farm-supply-chain-api
3. Install DependenciesBashnpm install
4. Environment VariablesCreate a .env file in the root directory and add your configuration:Code snippetPORT=3000
MONGO_URI=mongodb://localhost:27017/farm-supply-chain
5. Start the ServerBashnpm run dev
The server will start on http://localhost:3000 and confirm the MongoDB connection.📂 Project StructurePlaintextfarm-supply-chain-api/
├── src/
│   ├── config/         # Database connection setup
│   ├── controllers/    # Route logic and response handling
│   ├── middlewares/    # Error handling, validation, and request logging
│   ├── models/         # Mongoose Schemas (Data layer)
│   ├── routes/         # Express API endpoints
│   └── services/       # Business logic and database queries
├── .env
├── app.js              # Application entry point
└── package.json

🛠️ API Endpoints OverviewAll endpoints accept and return application/json.ResourceEndpointsFarmersGET /farmers | POST /farmers | GET /farmers/:id | PUT /farmers/:id | DELETE /farmers/:idProduceGET /produce | POST /produce | GET /produce?category=fruit | PUT /produce/:idBatchesGET /batches | POST /batches | PATCH /batches/:id/statusOrdersGET /orders | POST /orders | PATCH /orders/:id/statusDistributorsGET /distributors | POST /distributors | PUT /distributors/:idRetailersGET /retailers | POST /retailers | PUT /retailers/:id👥 Development TeamRichard - Team Lead & Core ArchitectureSamuel - Developer (Orders & Distributors)Junya - Developer (Farmers & Retailers)Deborne - Developer (Produce)Jephmind - Developer (Batches)