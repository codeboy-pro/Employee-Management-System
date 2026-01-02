# 📊 Employee Management System

A modern, secure, and professional Employee Management System built with React and Vite. This application features a beautiful dark mode interface with eye-comfortable color schemes, real-time task management, and client-side data encryption.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?logo=tailwindcss)

## ✨ Features

### 🔐 Security
- **Encrypted Local Storage**: All data is obfuscated using XOR cipher + Base64 encoding
- **Console Protection**: Prevents direct localStorage access via browser DevTools console
- **Secure Session Management**: Encrypted user sessions with automatic migration

### 👨‍💼 Admin Dashboard
- Create and assign tasks to employees
- View all employees and their task statistics
- Real-time task tracking across the organization
- Modern, responsive UI with professional color schemes

### 👨‍💻 Employee Dashboard
- View assigned tasks with color-coded statuses
- Accept new tasks
- Mark tasks as completed or failed
- Delete completed/failed tasks
- Real-time task statistics (New, Active, Completed, Failed)
- Responsive design for mobile and desktop

### 🎨 Modern UI/UX
- **Eye-Comfortable Dark Mode**: Slate-950 background instead of harsh black
- **Professional Color Palette**: 
  - Blue for New Tasks
  - Amber for Active Tasks
  - Emerald for Completed Tasks
  - Rose for Failed Tasks
- **Inter Font**: Modern, professional typography
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Responsive Design**: Mobile-first approach with adaptive layouts

### 🔔 User Experience
- Toast notifications for all actions
- Confirmation dialogs for critical operations
- Loading states for async operations
- Real-time data synchronization

## 🧪 Testing Credentials

### Admin Account
```
Email: admin@example.com
Password: 123
```

### Employee Accounts

**Employee 1 - Aman**
```
Email: l@l.com
Password: 123
Tasks: 3 (1 New, 2 Active, 1 Completed)
```

**Employee 2 - Rohit**
```
Email: employee2@example.com
Password: 123
Tasks: 3 (1 New, 1 Active, 1 Completed, 1 Failed)
```

**Employee 3 - Neha**
```
Email: employee3@example.com
Password: 123
Tasks: 3 (1 New, 2 Active, 1 Completed)
```

**Employee 4 - Sneha**
```
Email: employee4@example.com
Password: 123
Tasks: 3 (1 New, 1 Active, 1 Completed, 1 Failed)
```

**Employee 5 - Arjun**
```
Email: employee5@example.com
Password: 123
Tasks: 3 (1 New, 2 Active, 1 Completed)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd employee_management_system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📁 Project Structure

```
employee_management_system/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx              # Login page
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx     # Admin dashboard
│   │   │   └── EmployeeDashboard.jsx  # Employee dashboard
│   │   ├── TaskList/
│   │   │   ├── NewTask.jsx            # New task card
│   │   │   ├── AcceptDashboard.jsx    # Active task card
│   │   │   ├── CompleteTaskList.jsx   # Completed task card
│   │   │   ├── FailedTask.jsx         # Failed task card
│   │   │   └── TaskList.jsx           # Task list container
│   │   └── other/
│   │       ├── Header.jsx             # Header with logout
│   │       ├── CreateTask.jsx         # Task creation form
│   │       ├── AllTask.jsx            # Employee list
│   │       └── TaskListNumber.jsx     # Task statistics
│   ├── context/
│   │   ├── AuthProvider.jsx           # Authentication & data management
│   │   ├── ToastContext.jsx           # Toast notifications
│   │   └── ConfirmDialogContext.jsx   # Confirmation dialogs
│   ├── utils/
│   │   ├── localStorage.jsx           # Local storage utilities
│   │   ├── secureStorage.js           # Encryption utilities
│   │   ├── consoleProtection.js       # Console access prevention
│   │   └── dataMigration.js           # Auto-encrypt legacy data
│   ├── hooks/
│   │   └── useLocalStorage.js         # Custom localStorage hook
│   ├── App.jsx                        # Main app component
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 7.3.0
- **Styling**: Tailwind CSS 3.4.17
- **State Management**: React Context API
- **Data Storage**: LocalStorage (Encrypted)
- **Font**: Inter (Google Fonts)

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🔑 Key Features Explained

### Data Encryption
All sensitive data (employees, admin, logged-in user) is automatically encrypted using a custom XOR cipher combined with Base64 encoding. The encrypted data is prefixed with `__ENC__` for easy identification.

### Console Protection
The application implements a Proxy wrapper around `window.localStorage` that prevents direct access from the browser console while allowing internal app operations to work normally.

### Auto Migration
When the app detects legacy unencrypted data, it automatically migrates and encrypts it on the first load.

### Real-time Updates
Task operations (accept, complete, fail, delete) instantly update across all components using React Context API, ensuring the UI always reflects the current state.

## 🎨 Color Scheme

The application uses a professional "Slate & Emerald" dark theme:

- **Background**: Slate-950 (`#020617`)
- **Cards**: Slate-900 (`#0f172a`)
- **Text**: Slate-100 (`#f1f5f9`)
- **Primary**: Emerald-500 (`#10b981`)
- **New Tasks**: Blue-600
- **Active Tasks**: Amber-600
- **Completed Tasks**: Emerald-600
- **Failed Tasks**: Rose-600

This color palette was chosen for:
- Reduced eye strain compared to pure black/white
- Professional appearance
- High readability
- Comfortable long-term viewing

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ using React + Vite

---

**Note**: This is a client-side application with data stored in localStorage. For production use, implement proper backend authentication and database storage.
