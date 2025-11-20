# Login Simulation

A simple login simulation application built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates user authentication using browser localStorage for data persistence.

## Features

- User registration and login functionality
- Dashboard for authenticated users
- Responsive design with dark mode support
- Form validation and error handling
- Protected routes
- LocalStorage-based data persistence

## Technologies Used

- **Next.js 16** - React framework for production
- **TypeScript** - Typed JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **localStorage** - Browser-based data storage

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aashishrajput9838/login-simulation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd login-simulation
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Usage

1. **Sign Up**: Create a new account by providing your name, email, and password
2. **Log In**: Use your credentials to access the dashboard
3. **Dashboard**: View your profile information and account details
4. **Log Out**: End your session

A test account is available for demonstration:
- Email: `user@example.com`
- Password: `password`

## Project Structure

```
├── app/                 # Next.js app router pages
│   ├── dashboard/       # User dashboard
│   └── signup/          # Signup page
├── components/          # React components
│   ├── ui/              # Reusable UI components
│   ├── header.tsx       # Header component
│   ├── login-form.tsx   # Login form component
│   └── signup-form.tsx  # Signup form component
├── lib/                 # Utility functions
└── public/              # Static assets
```

## How It Works

- User data is stored in the browser's localStorage
- Authentication state is managed through localStorage
- No external databases or servers are required
- All data persists between browser sessions

## Contributing

This is a demonstration project. Feel free to fork and modify it for your own learning purposes.

## License

This project is open source and available under the MIT License.