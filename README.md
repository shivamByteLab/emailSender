# 📩 Mailer Backend

A simple **Node.js + Express + Nodemailer** backend that powers the contact form on my portfolio website.  
It allows visitors to send me a message via a web form, and I receive it directly in my email inbox.

---

## 🚀 Features
- Email sending via **Gmail (App Password)** or SMTP providers (e.g., Brevo, Outlook)
- **HTML email template** for professional message formatting
- **Environment variable support** for credentials
- Error handling & validation
- Ready to deploy on Render, Railway, Cyclic, or VPS

---

## 🛠️ Tech Stack
- **Node.js** (Express)
- **Nodemailer**
- **dotenv** (for environment variables)
- **CORS** + **body-parser**

---

## 📂 Project Structure

emailSender/
│── server.js # Main Express server
│── package.json # Dependencies & scripts
│── .env # Environment variables (not committed)
│── README.md # Documentation



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/shivamByteLab/emailSender.git
cd emailSender

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables
Create a .env file in the root:
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your-app-password   # or SMTP key if using Brevo
ADMIN_EMAIL=yourpersonalemail@gmail.com
PORT=5000

4️⃣ Start the server
npm run dev   # if using nodemon
# OR
node server.js

Server runs at:
http://localhost:5000
```

# API Endpoint:
POST /send-email
Request Body (JSON)

``` json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello Shiv, I’d like to work with you!"
}
```

Response
```json
{
  "success": true,
  "msg": "✅ Email sent successfully!"
}
```


---



## 📝 License
  This project is licensed under the MIT License.
  Feel free to use and adapt it for your own portfolio!

----

## 👨‍💻 Author
  shivamByteLab


