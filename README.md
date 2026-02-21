# 🚌 Bus Ticket Booking System

A **Full Stack Bus Ticket Booking Application** inspired by platforms like **RedBus**, built using **Spring Boot + React + MySQL**.

This project allows users to search buses, select seats, book tickets, and manage bookings, while admins can manage buses dynamically.

---

## 🚀 Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS (Custom UI)

### Backend
- Spring Boot
- Spring Data JPA
- REST APIs

### Database
- MySQL

---

## ✨ Features

### 👤 User Module
- User Registration & Login
- Search buses (source → destination)
- RedBus-style bus listing UI
- Seat Layout with multi-seat selection
- Ticket price calculation
- Booking confirmation popup
- My Tickets (booking history)
- Logout functionality

---

### 🛠️ Admin Module
- Add new buses
- View all buses
- Delete buses
- Auto seat creation based on total seats

---

### 🎯 Core Functionalities
- Dynamic bus search
- Real-time seat availability
- Multi-seat booking
- Booking cancellation support
- Responsive UI design

---

## 🧱 Project Structure

Bus Ticket Booking System
│
├── backend (Spring Boot)
│ ├── controller
│ ├── service
│ ├── repository
│ ├── model
│
├── frontend (React)
│ ├── pages
│ ├── components
│ ├── services



---

## ⚙️ How to Run Project

### Backend (Spring Boot)

```bash

cd backend
mvn spring-boot:run

Backend runs on : http://localhost:8080


### Frontend (React)

cd frontend
npm install
npm run dev

Frontend runs on: http://localhost:5173

### Database Setup

1.Create MySQL database:

    CREATE DATABASE ticket_booking_system;

2.Update :

backend/src/main/resources/application.properties

spring.datasource.username=YOUR_USERNAME_HERE
spring.datasource.password=YOUR_PASSWORD_HERE


-----

🎓 Learning Outcomes

Full Stack Application Development

REST API Design

React State Management

Database Integration with JPA

Role-based system design (Admin/User)

Real-world booking flow implementation


-----

👨‍💻 Author

Sushant Savale
BE Engineering Student
Full Stack Java Developer




