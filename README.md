# 🚗 Parkirent Backend

Backend service for **Parkirent** — an IoT-based smart parking system using RFID technology to handle vehicle entry, exit, pricing, and role-based user management.

---

## 📌 Overview

Parkirent Backend is responsible for:

* Providing RESTful APIs for admin, owner, and staff
* Handling IoT communication (RFID & gate system via MQTT)
* Managing parking transactions and pricing logic
* Implementing role-based access control (RBAC)

---

## 🧱 Tech Stack

* **Node.js** – Runtime environment
* **Express.js** – Backend framework
* **Supabase** – Database & authentication
* **MQTT** – IoT communication (RFID & gate control)
* **REST API** – Client-server communication

---

## 🏗️ Architecture

This project follows a **layered architecture**:

* **Routes** → Define API endpoints
* **Controllers** → Handle request & response
* **Services** → Business logic
* **Middleware** → Authentication & authorization
* **Config** → External services (Supabase, MQTT)
* **Utils** → Helper functions

---

## 📂 Project Structure

```id="p9g3k2"
src/
│
├── config/
│   ├── mqtt.js            # MQTT configuration
│   └── supabase.js        # Supabase client setup
│
├── controllers/
│   ├── admin.controller.js
│   ├── auth.controller.js
│   ├── iot.controller.js
│   ├── owner.controller.js
│   └── petugas.controller.js
│
├── routes/
│   ├── admin.routes.js
│   ├── auth.routes.js
│   ├── iot.routes.js
│   ├── owner.routes.js
│   └── petugas.routes.js
│
├── services/
│   ├── admin.service.js
│   ├── auth.service.js
│   ├── iot.service.js
│   ├── mqtt.service.js
│   ├── owner.service.js
│   └── petugas.service.js
│
├── middleware/
│   ├── auth.middleware.js
│   └── role.middleware.js
│
├── utils/
│   ├── bcrypt.js
│   ├── session.js
│   └── time.js
│
├── app.js                 # Express app setup
└── server.js              # Server entry point
```

---

## 🔐 Role-Based Access

The system supports multiple roles:

* **Admin**

  * Manage users
  * Manage parking rates

* **Owner**

  * Monitor parking activity
  * View reports

* **Petugas (Staff)**

  * Handle parking operations (entry & exit)

---

## 🔄 System Flow

### 🚗 Vehicle Entry

1. RFID card is scanned
2. IoT device sends data via MQTT / HTTP
3. Backend:

   * Validates RFID
   * Creates parking record (check-in)
4. Gate opens automatically

---

### 🚗 Vehicle Exit

1. RFID scanned again
2. Backend:

   * Finds active parking session
   * Calculates duration
   * Calculates total price
3. Saves transaction
4. Gate opens

---

### 📡 IoT Communication Flow

* MQTT handles:

  * RFID scan events
  * Gate control (servo)
* `mqtt.service.js` manages broker connection
* `iot.controller.js` processes incoming device data

---

## 🔌 API Modules

### 🔑 Auth Routes

* Login
* Session handling

### 👤 Admin Routes

* Manage users
* Manage pricing

### 🧑‍💼 Owner Routes

* Monitoring & reporting

### 👷 Petugas Routes

* Parking operations

### 📡 IoT Routes

* RFID input
* Device communication

---

## 🗄️ Core Functionalities

* RFID-based parking system
* Real-time parking session tracking
* Automatic pricing calculation
* Secure authentication & authorization
* MQTT-based IoT integration

---

## 🚀 Installation

### 1. Clone Repository

```bash id="9u4o0n"
git clone https://github.com/Khorzyy/ParkirentBackEnd
cd ParkirentBackEnd
```

### 2. Install Dependencies

```bash id="0q7p91"
npm install
```

### 3. Setup Environment

Create `.env` file:

```id="d1y2cz"
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
PORT=3000
MQTT_BROKER=your_mqtt_url
```

---

### 4. Run Server

```bash id="5xq1d2"
npm run dev
```

---

## 🧪 Testing

You can test the API using:

* Postman
* Thunder Client
* Simulated IoT requests (RFID input)

---

## 📈 Future Improvements

* Payment gateway integration
* Real-time dashboard (WebSocket)
* Notification system
* Multi-location parking system

---

## 👨‍💻 Author

* **Khorzyy**

---

## 📜 License

This project currently does **not include a license**.

If you want to make it open-source, you can add an MIT License.
