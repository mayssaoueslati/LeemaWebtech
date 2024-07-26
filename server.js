const express = require('express');
const cors = require('cors');
const connectDB = require('./dbConnect');
const bodyParser = require('body-parser');

const internshipRoutes = require('./routes/internshipRoutes');
const jobRoutes = require('./routes/jobRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const projectRoutes = require('./routes/projectRoutes');

const PORT = process.env.PORT || 5001;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/project', projectRoutes);
app.use('/api/internship', internshipRoutes);
app.use('/api/job', jobRoutes);
app.use('/api/portfolio', portfolioRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
