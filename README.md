
# Cv Para cybersecurity - Personal Portfolio

This repository contains the source code for my personal portfolio, showcasing my professional experience, technical skills, projects, and my role as a HackTheBox Argentina community ambassador. The portfolio is built with modern web technologies to deliver a responsive, visually appealing, and interactive user experience.

# Demo
![](https://github.com/pereznacho/Cv-PersonalHTB/blob/main/img/Site.gif)

---

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Language Support**: Toggle between English and Spanish seamlessly.
- **Dynamic Sections**:
  - **About Me**: Overview of my professional background and mission.
  - **Experience**: Timeline of my career, roles, and achievements.
  - **Skills**: Technologies and tools I work with, categorized for clarity.
  - **HTB AR Community**: My contributions to building the HackTheBox Argentina community.
  - **Certifications**: My professional certifications and recognitions.
  - **Contact Form**: Users can reach out via a secure form.
- **HackTheBox Machines**: An interactive carousel displaying completed HackTheBox challenges.
- **SEO Optimized**: Metadata and structure for improved discoverability.

---

## 🛠️ Technologies Used

- **Frameworks & Libraries**:
  - React.js
  - Tailwind CSS
  - Framer Motion
  - React Slick (carousel)
- **State Management**:
  - Context API
- **Backend Integration**:
  - Fetching data from HackTheBox API (via proxy on Render.com).
- **Icons & Graphics**:
  - Lucide React
  - FontAwesome Icons
- **Deployment**:
  - Hosted on [Netlify](https://www.netlify.com/).

---

## 📂 Folder Structure

```plaintext
src/
├── components/       # Reusable React components
│   ├── Header.tsx    # Navbar with language toggle and smooth scrolling
│   ├── Hero.tsx      # Hero section with introduction
│   ├── Experience.tsx # Experience timeline
│   ├── Skills.tsx    # Skills and technologies
│   ├── UserActivity.tsx # HackTheBox machines carousel
│   ├── Contact.tsx   # Contact form
│   └── Footer.tsx    # Footer with social links
├── context/
│   └── LanguageContext.tsx # Language management (English/Spanish)
├── styles/
│   └── style.css     # Custom global styles
├── App.tsx           # Main application component
└── index.tsx         # Application entry point
```

---

## 🌐 Live Demo

Check out the live version of my portfolio here: [iperez.com.ar](https://iperez.com.ar)

---

## 🔧 Setup & Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/pereznacho/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5175
   ```

---

### Backend Setup for HackTheBox API Proxy

Follow these steps to set up the backend proxy:

1. Create a new private repository on GitHub and include the following files.

#### `server.js`

```javascript
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow requests from any origin

app.get('/api/htb', async (req, res) => {
  const HTB_USER_ID = process.env.HTB_USER_ID;
  const HTB_API_TOKEN = process.env.HTB_API_TOKEN;

  if (!HTB_USER_ID || !HTB_API_TOKEN) {
    return res.status(400).json({ error: 'HTB_USER_ID or HTB_API_TOKEN is missing.' });
  }

  try {
    const response = await axios.get(
      `https://www.hackthebox.com/api/v4/profile/activity/${HTB_USER_ID}`,
      {
        headers: {
          Authorization: `Bearer ${HTB_API_TOKEN}`,
          Accept: 'application/json',
        },
      }
    );

    const machines = response.data.profile.activity
      .filter((activity) => activity.object_type === 'machine' && activity.type === 'root')
      .map((machine) => ({
        id: machine.id,
        name: machine.name,
        date: machine.date,
        machine_avatar: `https://labs.hackthebox.com${machine.machine_avatar}`,
      }));

    res.status(200).json({ machines });
  } catch (error) {
    console.error('Error fetching data from Hack The Box API:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from Hack The Box API' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
```

#### `package.json`

```json
{
  "name": "htb-proxy",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "express": "^4.18.2",
    "axios": "^1.4.0",
    "dotenv": "^16.0.3",
    "cors": "^2.8.5"
  },
  "scripts": {
    "start": "node server.js"
  }
}
```

2. Deploy your API on Render.com.
3. Update your `UserActivity.tsx` file to point to the new proxy URL.
4. Run your local development server: `npm run dev`.

---

## 🌟 Contributions

Contributions are welcome! If you have any suggestions, ideas, or issues, feel free to open an issue or submit a pull request.

---

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

## 👨‍💻 Author

**Ignacio Pérez**  
[Website](https://iperez.com) | [LinkedIn](https://www.linkedin.com/in/ignacio-perez/) | [GitHub](https://github.com/pereznacho)

---

## 📬 Contact

Feel free to reach out to me for collaboration or questions:
- Email: [nacho@iperez.com.ar](mailto:nacho@iperez.com.ar)
- LinkedIn: [linkedin.com/in/ignacio-perez/](https://www.linkedin.com/in/ignacio-perez/)

---

## 🎯 Acknowledgments

- Thanks to [HackTheBox](https://www.hackthebox.com/) for providing a platform to hone my skills.
- Inspired by the cybersecurity and web development communities.
