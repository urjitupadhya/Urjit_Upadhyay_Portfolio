# Firebase Realtime Database Integration

Your Next.js portfolio is now connected to Firebase Realtime Database for real-time data synchronization!

## What's Been Set Up

### 1. Firebase SDK Installation
- Added `firebase` package to your dependencies

### 2. Firebase Configuration
- Created `lib/firebase.js` with your Firebase project configuration
- Updated `.env.local` with your Firebase credentials
- Firebase project: `urjit-portfolio-app`

### 3. Firebase Service Layer
- Created `lib/firebaseService.js` with helper methods for:
  - `saveData(path, data)` - Save data to a specific path
  - `addData(path, data)` - Add new data with auto-generated key
  - `updateData(path, data)` - Update existing data
  - `deleteData(path)` - Delete data
  - `listenToData(path, callback)` - Real-time data listener
  - `getDataOnce(path)` - Get data once (not real-time)

### 4. Projects Component Integration
- Updated `ProjectsGrid.jsx` to use Firebase for real-time sync
- Added loading states and error handling
- Projects data now syncs automatically with Firebase

### 5. API Routes
- Created `app/api/projects/route.js` with:
  - `GET /api/projects` - Fetch all projects
  - `POST /api/projects` - Update all projects
  - `PUT /api/projects` - Update specific project by index

## How It Works

### Real-time Synchronization
1. When the app loads, it checks Firebase for existing projects data
2. If no data exists, it uploads your local `projects.user.json` to Firebase
3. Sets up a real-time listener that automatically updates the UI when data changes
4. Any changes made through the app or directly in Firebase are reflected instantly

### Data Structure
Projects are stored in Firebase at path: `projects/`
```json
[
  {
    "title": "Project Title",
    "description": "Project description",
    "image": "path/to/image.jpg",
    "github": "https://github.com/...",
    "hosted": "https://example.com",
    "tags": ["React", "Node.js"],
    "order": 1
  }
]
```

## Testing the Integration

Your portfolio is now running at `http://localhost:3002` with Firebase integration. The projects section will:

1. Show a loading spinner while connecting to Firebase
2. Display your projects with real-time sync enabled
3. Automatically update if you modify data in Firebase console

## Next Steps

### To Add Real-time Updates to Other Components:
1. Import `firebaseService` in your component
2. Use `useEffect` to set up real-time listeners
3. Update state when Firebase data changes

### Example for Other Components:
```javascript
import { useState, useEffect } from 'react';
import firebaseService from '../../lib/firebaseService';

function YourComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = firebaseService.listenToData('your-path', (firebaseData) => {
      if (firebaseData) {
        setData(firebaseData);
      }
    });

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  // Your component logic...
}
```

## Firebase Console Access
You can manage your data directly at: https://console.firebase.google.com/project/urjit-portfolio-app/database

## Security Rules
Make sure to set up appropriate security rules in Firebase Console to protect your data. For development, you can use:
```json
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```

For production, implement proper authentication and authorization rules.
