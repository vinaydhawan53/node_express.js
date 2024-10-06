const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
// MongoDB Connection (Updated to use localhost)
mongoose.connect('mongodb://localhost:27017/applications_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected on localhost:27017'))
  .catch((err) => console.error(err));

// Define the Application model
const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  appliedDate: { type: Date, default: Date.now },
});

const Application = mongoose.model('Application', applicationSchema);

// Route to create sample applications
app.post('/applications/create-samples', async (req, res) => {
  try {
    const sampleApplications = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        appliedDate: new Date()  // current date (today)
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        appliedDate: new Date()  // current date (today)
      },
      {
        name: 'Alex Johnson',
        email: 'alex@example.com',
        appliedDate: new Date(new Date().setDate(new Date().getDate() - 1))  // yesterday's date
      }
    ];

    await Application.insertMany(sampleApplications);
    res.status(201).json({ message: 'Sample applications created' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating sample applications', error });
  }
});

// Route to get today's applications
app.get('/applications/today', async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);  // set to start of the day

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);  // set to end of the day

    const todayApplications = await Application.find({
      appliedDate: { $gte: startOfDay, $lte: endOfDay }
    });

    res.status(200).json(todayApplications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications', error });
  }
});
app.use(cors({
    origin: 'http://127.0.0.1:5500'  // Only allow requests from this origin
  }));
  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
