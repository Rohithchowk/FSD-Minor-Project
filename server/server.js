const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://miniproject1729:HYB5wx96QHQSwrDk@cluster0.ylskpxa.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});


app.post('/register', (req, res)=>{
    

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(8001, () => {
    console.log("Server listining on http://127.0.0.1:8001");

});



//mail server code

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const schedule = require('node-schedule');
const fs = require('fs');
const csv = require('csv-parser');

const port = 5200;



const emailSchema = new mongoose.Schema({
  name: String,
  description: String,
  message: String,
  date: String,
});

const EmailModel = mongoose.model('Email', emailSchema);

const accountSid = 'ACcda377ac23d99c203c70776e4fe4ba11';
const authToken = 'f6fced8ea07b8cbaab731b0c88dc8bc0';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'manitejjilla2@gmail.com',
    pass: 'youhmnsdijlapdct',
  },
});

const client = new twilio(accountSid, authToken);

const phoneList = [];
const emailList = [];

app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  try {
    const { name, description, message, date } = req.body;

    // Save form data to MongoDB
    const newEmail = new EmailModel({ name, description, message, date });
    await newEmail.save();

    // Send emails and SMS
    for (const email of emailList) {
      const mailOptions = {
        from: 'manitejjilla2@gmail.com',
        to: email,
        subject: 'Hello from Node.js',
        text: `Name: ${name}\nDescription: ${description}\nMessage: ${message}\nDate: ${date}`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent to ' + email + ': ' + info.response);
    }

    for (const phone of phoneList) {
      const twilioMessage = await client.messages.create({
        body: `Name: ${name}\nDescription: ${description}\nMessage: ${message}\nDate: ${date}`,
        from: '+12562910365 ',
        to: phone,
      });

      console.log('SMS sent to ' + phone + ': ' + twilioMessage.sid);
    }

    res.json({ message: 'Email and SMS sent to all students.' });
  } catch (error) {
    console.error('Error sending notifications:', error);
    res.status(500).json({ error: 'Error sending notifications' });
  }
});

// Load recipients from CSV file
fs.createReadStream('./data/rec.csv')
  .pipe(csv())
  .on('data', (row) => {
    emailList.push(row.email);
    phoneList.push(row.phone);
  })
  .on('end', () => {
    console.log('CSV file read successfully.');
  });

// Schedule email and SMS reminders
const notificationTime = new Date('2023-11-28T22:25:00');
schedule.scheduleJob(notificationTime, async () => {
  for (const email of emailList) {
    const mailOptions = {
      from: 'manitejjilla2@gmail.com',
      to: 'rohith28chowki@gmail.com',
      subject: 'Reminder: Course Registration Deadline Tomorrow',
      text: `Friendly reminder: Course registration deadline is tomorrow. Register now!\n${emailList.join('\n')}`,
    };

    const reminderInfo = await transporter.sendMail(mailOptions);
    console.log('Reminder email sent to ' + email + ': ' + reminderInfo.response);
  }

  for (const phone of phoneList) {
    const reminderMessage = await client.messages.create({
      body: `Friendly reminder: Course registration deadline is tomorrow. Register now!\n${phoneList.join('\n')}`,
      from: '+19738137118',
      to: phone,
    });

    console.log('Reminder SMS sent to ' + phone + ': ' + reminderMessage.sid);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
