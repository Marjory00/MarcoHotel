
# 🏨 MarcoHotel: Full-Stack Reservation System

**Author:** Marjory D. Marquez


---

## Table of Contents

1.  [Project Overview](#project-overview)
2.  [Case Study: The Challenge](#case-study-the-challenge)
3.  [Management Information Systems (MIS) Impact](#management-information-systems-mis-impact)
4.  [Technology Stack](#technology-stack)
5.  [Folder Structure](#folder-structure)
6.  [For Potential Customers](#for-potential-customers)
7.  [Application Screenshots](#application-screenshots)
8.  [License](#license)

---

## 1. Project Overview

The **MarcoHotel** project is a modern, full-stack web application designed to handle room reservations and hotel management efficiently. Built with the MERN stack structure, the core purpose is to replace outdated manual or fragmented booking processes with a unified, real-time, online platform.

**Purpose of Building the App:**
* **Enhance Customer Experience:** Provide guests with a seamless, 24/7 booking experience.
* **Improve Operational Efficiency:** Automate room inventory management and reduce manual entry errors.
* **Real-Time Data Access:** Give hotel management immediate visibility into bookings, occupancy, and revenue forecasts.

---

## 2. Case Study: The Challenge

### Details

MarcoHotel previously relied on a combination of phone calls, email, and legacy spreadsheet systems to manage reservations. This system led to several critical problems:

* **Overbooking Risk:** Manual synchronization between booking channels often resulted in double-booked rooms, leading to customer dissatisfaction.
* **Inefficient Pricing:** Pricing was static and could not be quickly adjusted based on real-time occupancy or demand.
* **Slow Customer Service:** Staff spent excessive time processing bookings and confirming availability instead of focusing on guest experience.

**Solution:** This web application serves as the centralized **source of truth** for all room inventory and booking data, eliminating synchronization errors and providing management with the tools to implement dynamic pricing strategies.

---

## 3. Management Information Systems (MIS) Impact

The development of the MarcoHotel website will significantly enhance the hotel's IT infrastructure by implementing a true **Transaction Processing System (TPS)** and laying the groundwork for a **Decision Support System (DSS)**.

| MIS Improvement | Benefit to Hotel IT |
| :--- | :--- |
| **Real-Time Data Capture** | Every booking, cancellation, and check-in is immediately recorded, minimizing data lag and ensuring data integrity (accuracy and consistency). |
| **Centralized Database** | Eliminates scattered data (spreadsheets, paper logs). All room inventory and customer data are stored securely in one MongoDB instance. |
| **Automated Reporting** | The API structure allows for future development of dashboards (DSS) to analyze occupancy rates, peak booking times, and average revenue per room, enabling data-driven management decisions. |
| **Scalability** | Provides a modern, cloud-compatible platform capable of handling increased booking traffic without requiring significant hardware investment. |

---

## 4. Technology Stack

The application is built using a modern MERN-like stack structure, emphasizing fast development and maintainability.

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React** | User interface library for creating dynamic and responsive components. |
| **Frontend Toolkit**| **Vite** | Next-generation frontend tooling for rapid development and bundling. |
| **Styling** | **Bootstrap 5** | Responsive CSS framework used for structure and default styling. |
| **Backend** | **Node.js / Express** | Fast, unopinionated, minimalist web framework for the API server. |
| **Database** | **MongoDB / Mongoose**| NoSQL database (MongoDB) managed by Mongoose ODM for flexible and scalable data storage. |
| **Development** | **npm-run-all** | Utility to run client and backend servers concurrently. |

---

## 5. Folder Structure

The project uses a clean, two-folder structure to separate the frontend client and the backend API, managed by a single Git repository in the root.

```
MarcoHotel/
├── backend/                  # Node/Express API and Database logic
│   ├── config/               # Database connection settings
│   ├── models/               # Mongoose schemas (e.g., Room.js)
│   ├── routes/               # API endpoint definitions
│   ├── node_modules/         # (IGNORED by Git)
│   ├── server.js             # Main server entry file
│   └── seed.js               # Data seeding script
├── client/                   # React Frontend (Vite)
│   ├── node_modules/         # (IGNORED by Git)
│   ├── public/               # Static assets
│   ├── src/                  # Source code for the React app
│   │   ├── components/       # Reusable UI elements (Navbar, Footer)
│   │   ├── pages/            # View components (Home, Rooms, Booking)
│   │   └── main.jsx          # App entry point
│   └── index.html
├── .gitignore                # Single file ignoring both client/node_modules and backend/node_modules
└── package.json              # Root script definitions (npm run dev)
```

---

## 6. Notes

If you are evaluating this project for your business or personal use, here are the key features and benefits:

* **Single Command Deployment:** The entire application stack (frontend and backend) can be launched simultaneously using a single command: `npm run dev`.
* **Modern API Design:** Uses RESTful principles, ensuring easy integration with third-party tools (e.g., payment gateways, external reservation systems).
* **Modular Codebase:** The clear separation of client and backend ensures that new features can be developed and maintained rapidly.
* **Database Flexibility:** MongoDB's flexible schema is ideal for adapting to future requirements (e.g., adding user profiles, amenities, or promotional codes).

---

## 7. Application Screenshots

* **Home Page:** 
* **Rooms Listing:** 
* **Booking Placeholder:** 

---

## 8. License

This project is licensed under the following terms:

### NON-COMMERCIAL USE LICENSE

Permission is hereby granted for non-commercial use, modification, and distribution of this software, provided that the above copyright notice and this permission notice appear in all copies.

**Free of Liabilities:** THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---