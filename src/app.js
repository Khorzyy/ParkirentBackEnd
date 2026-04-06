// app.js
import express from 'express';
import cors from 'cors';
import petugasRoutes from './routes/petugas.routes.js';
import authRoutes from './routes/auth.routes.js';
import parkirRoutes from './routes/iot.routes.js';
import ownerRoutes from './routes/owner.routes.js';
import adminRoutes from './routes/admin.routes.js';

import "./services/mqtt.service.js";

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/parkir', parkirRoutes);
app.use('/petugas', petugasRoutes);
app.use('/owner', ownerRoutes);
app.use('/admin', adminRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

export default app;