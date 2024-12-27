# Multi-tenant Social Platform
Preview the app here: [https://multitenant-social-platform.vercel.app](https://multitenant-social-platform.vercel.app)

## Architecture Overview
The backend implements a multi-tenant system using:
- Separate MongoDB databases for each tenant
- Centralized authentication and tenant management
- RESTful API architecture
- Repository pattern for data access
- Controller-Service-Repository architecture

## Core Features
### Multi-tenant Database Management
The system implements database isolation through:
- Separate MongoDB connection per tenant
- Centralized admin database for tenant management
- Dynamic connection management
- Automatic database creation for new tenants

### API Structure
The application provides RESTful endpoints for:
```
/api
├── /auth
│   ├── POST /register - Create new tenant
│   └── POST /login - Authenticate user
├── /:serverId
│   ├── GET / - List channels
│   ├── POST / - Create channel
│   ├── PUT /:id - Update channel
│   └── DELETE /:id - Delete channel
├── /:serverId/:channelId
│   ├── GET /messages - Get channel messages
│   ├── POST / - Create message
│   ├── PUT /:id - Update message
│   └── DELETE /:id - Delete message
└── /users
    └── GET /me - Get user info
```

### Database Models
The system uses multiple MongoDB schemas:
1. **Tenant**: Stores tenant configuration
   - Name
   - Database URI
   - Configuration settings

2. **Channel**: Manages communication channels
   - Name
   - Type
   - Server ID

3. **Message**: Handles chat messages
   - Content
   - User reference
   - Channel reference
   - Timestamps

4. **User**: Manages user information
   - Name
   - Email
   - Authentication details

## Component Structure
### Controllers
1. **Auth Controller** (`controllers/index.js`):
```javascript
- Login management
- Tenant creation
- User information retrieval
```

2. **Channel Controller** (`controllers/channel.js`):
```javascript
- Channel CRUD operations
- Channel listing
- Channel-specific operations
```

3. **Message Controller** (`controllers/message.js`):
```javascript
- Message CRUD operations
- Message retrieval
- Channel message listing
```

### Repositories
1. **Channel Repository** (`repositories/channel.js`):
```javascript
- Direct database operations for channels
- Query building and execution
- Data transformation
```

2. **Message Repository** (`repositories/message.js`):
```javascript
- Message storage and retrieval
- Pagination support
- User population in queries
```

3. **Tenant Repository** (`repositories/tenant.js`):
```javascript
- Tenant database operations
- Dynamic database URI generation
- Tenant configuration management
```

## Database Operations
### Message Queries
```javascript
- Sort by creation date
- Limit to 50 messages per request
- Populate user information
- Support for real-time updates
```

### Channel Queries
```javascript
- Lean queries for performance
- Server-specific channel filtering
- Type-based channel organization
```


### Route Configuration
```javascript
- Authentication middleware
- Tenant context middleware
```

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/Majdiden/multitenant-social-platform-backend.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```env
   PORT=3000
   TENANT_DB_URI=mongodb://localhost:27017
   ADMIN_DB_URI=mongodb://localhost:27017/admin
   JWT_SECRET=your-secret-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Authentication Flow
1. Tenant Registration:
   - Create tenant in admin database
   - Generate tenant-specific database
   - Create initial channel structure

2. User Authentication:
   - JWT-based authentication
   - Tenant-specific user validation
   - Token generation and validation

## Data Isolation
- Each tenant gets a separate MongoDB database
- Connection pooling for performance
- Dynamic connection management
- Automatic database creation
