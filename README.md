# Mini ChatGPT (Local AI Chat Application)

A **full-stack AI chat application** that runs locally using **Llama3, FastAPI, React, PostgreSQL, and Docker**.
The system streams AI responses in real time and stores conversation history in a database.

This project demonstrates how modern AI applications like ChatGPT are built using a **frontend UI, backend API, AI model server, and database layer**.

---

# Features

* Real-time **AI chat interface**
* **Streaming responses** (token-by-token like ChatGPT)
* **Local LLM** using Ollama + Llama3
* **Chat history stored in PostgreSQL**
* **Modern React UI**
* **Sidebar for conversations**
* **Markdown support for AI responses**
* **Copy response button**
* **Dark mode toggle**
* **Dockerized backend services**
* **pgAdmin database interface**

---

# Project Architecture

User Interface → API Server → AI Model → Database

React Frontend
↓
FastAPI Backend
↓
Ollama (Llama3 Model)
↓
PostgreSQL Database

All backend services run using **Docker Compose**.

---

# Tech Stack

Frontend

* React
* React Markdown
* Axios / Fetch API
* CSS

Backend

* FastAPI
* Python
* StreamingResponse

AI Model

* Ollama
* Llama3

Database

* PostgreSQL

Infrastructure

* Docker
* Docker Compose
* pgAdmin

---

# Project Structure

```
mini-chatgpt
│
├── backend
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend
│   └── chat-ui
│       ├── src
│       │   ├── components
│       │   │   ├── Sidebar.js
│       │   │   ├── ChatHeader.js
│       │   │   ├── ChatWindow.js
│       │   │   ├── MessageBubble.js
│       │   │   └── ChatInput.js
│       │   │
│       │   ├── App.js
│       │   └── App.css
│
├── docker-compose.yml
└── README.md
```

---

# Setup Instructions

## 1. Clone the Repository

```
git clone https://github.com/your-username/mini-chatgpt.git
cd mini-chatgpt
```

---

# 2. Start Backend Services

Run Docker Compose to start:

* PostgreSQL
* Ollama
* FastAPI backend
* pgAdmin

```
docker compose up -d --build
```

---

# 3. Download the Llama3 Model

Run:

```
docker exec -it ollama_ai ollama run llama3
```

This downloads the LLM model.

---

# 4. Run the React Frontend

Navigate to frontend folder:

```
cd frontend/chat-ui
npm install
npm start
```

Frontend runs at:

```
npm run build
serve -s build -l 8080

```

---

# Backend API

FastAPI automatically provides API documentation.

Open:

```
http://localhost:8000/docs
```

---

# Database Access (pgAdmin)

Open pgAdmin:

```
http://localhost:5050
```

Login credentials:

Email

```
admin@gmail.com
```

Password

```
admin
```

Connection settings:

Host

```
postgres
```

Port

```
5432
```

Database

```
chatdb
```

Username

```
chatuser
```

Password

```
chatpass
```

---

# Streaming AI Responses

The backend uses **FastAPI StreamingResponse** to send tokens gradually.

Flow:

React → Fetch Stream → FastAPI → Ollama → Llama3

This allows the UI to display responses **while the model is generating them**.

---

# Example Database Query

```
SELECT * FROM chat_history;
```

Example output:

| id | user_message     | ai_response                           |
| -- | ---------------- | ------------------------------------- |
| 1  | what is ai       | AI stands for Artificial Intelligence |
| 2  | capital of india | New Delhi                             |

---

# Future Improvements

* Persistent chat history loading from database
* Authentication (login/signup)
* PDF document question answering (RAG)
* Code syntax highlighting
* Message editing
* Chat export
* Deployment using Nginx + Docker

---

# Learning Outcomes

This project demonstrates how to build a **modern AI-powered application**, including:

* Local LLM integration
* Streaming responses
* Full-stack architecture
* Containerized microservices
* Database integration
* Interactive frontend UI

---

# License

MIT License
