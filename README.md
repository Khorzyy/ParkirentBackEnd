# 🚗 Parkirent Backend

Backend service untuk aplikasi **Parkirent** — sistem manajemen parkir berbasis IoT (RFID) yang menangani proses kendaraan masuk, keluar, pembayaran, serta manajemen user dan tarif.

---

## 📌 Overview

Parkirent Backend bertugas sebagai:

* API utama untuk aplikasi (admin & sistem parkir)
* Penghubung antara IoT (RFID / gate system) dengan database
* Pengelola data parkir (masuk, keluar, tarif, user)

---

## 🧱 Tech Stack

* **Node.js** – Runtime utama
* **Express.js** – Framework API
* **Supabase** – Database & Auth
* **MQTT / IoT** – Komunikasi device parkir
* **REST API** – Komunikasi frontend & device

---

## ⚙️ Features

### 👤 Authentication

* Login user / admin
* Token-based authentication
* Role:

  * Admin
  * Petugas (opsional)

---

### 🚗 Manajemen Parkir

* Kendaraan masuk (tap RFID)
* Kendaraan keluar
* Hitung durasi parkir
* Hitung tarif otomatis

---

### 💰 Manajemen Tarif

* CRUD tarif parkir
* Tarif berdasarkan:

  * Jenis kendaraan
  * Durasi parkir

---

### 👥 Manajemen User

* Tambah user (oleh admin)
* Update user
* Role management

---

### 📡 Integrasi IoT

* Terima data dari RFID
* Trigger gate (servo)
* Sinkronisasi data parkir real-time

---

## 📂 Project Structure

```
src/
│
├── config/
│   └── supabase.js        # konfigurasi database
│
├── controllers/
│   ├── authController.js
│   ├── parkirController.js
│   ├── userController.js
│   └── tarifController.js
│
├── routes/
│   ├── authRoutes.js
│   ├── parkirRoutes.js
│   ├── userRoutes.js
│   └── tarifRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── utils/
│   └── helpers.js
│
└── app.js
```

---

## 🔄 Alur Sistem

### 🚗 Kendaraan Masuk

1. RFID dibaca oleh device
2. Data dikirim ke backend (MQTT / HTTP)
3. Backend:

   * Validasi user
   * Simpan data parkir (waktu masuk)
4. Gate terbuka

---

### 🚗 Kendaraan Keluar

1. RFID dibaca kembali
2. Backend:

   * Ambil data parkir aktif
   * Hitung durasi
   * Hitung tarif
3. Data disimpan sebagai transaksi selesai
4. Gate terbuka

---

### 👨‍💻 Admin Flow

1. Login ke dashboard
2. Kelola:

   * User
   * Tarif
3. Monitoring data parkir

---

## 🔌 API Endpoints (Contoh)

### Auth

```
POST /api/auth/login
```

### Parkir

```
POST /api/parkir/masuk
POST /api/parkir/keluar
GET  /api/parkir
```

### User

```
POST /api/users
PUT  /api/users/:id
GET  /api/users
```

### Tarif

```
POST /api/tarif
PUT  /api/tarif/:id
GET  /api/tarif
```

---

## 🗄️ Database Design (Simplified)

### users

* id
* name
* role
* rfid

### parkir

* id
* user_id
* waktu_masuk
* waktu_keluar
* durasi
* tarif

### tarif

* id
* jenis_kendaraan
* harga_per_jam

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/Khorzyy/ParkirentBackEnd
cd ParkirentBackEnd
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Buat file `.env`:

```
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
PORT=3000
```

### 4. Run Server

```bash
npm run dev
```

---

## 📡 IoT Integration (Opsional)

Backend dapat menerima data dari:

* ESP32 / Arduino
* RFID Reader

Metode:

* HTTP Request
* MQTT Broker

---

## 🧪 Testing

Gunakan:

* Postman / Thunder Client
* Simulasi RFID via API

---

## 📈 Future Improvements

* Payment Gateway
* Real-time dashboard
* Notification system
* Multi parking location

---

## 👨‍💻 Author

* **Khor Zyy**

---

## 📜 License

MIT License
