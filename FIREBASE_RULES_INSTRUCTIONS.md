# Firebase Security Rules Setup

## Current Issue
Your Erpica project is not showing because Firebase security rules are blocking read/write operations.

## Quick Fix (Required)

### Step 1: Go to Firebase Console
Visit: https://console.firebase.google.com/project/urjit-portfolio-app/database

### Step 2: Update Security Rules
1. Click on the **"Rules"** tab
2. Replace the current rules with:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

3. Click **"Publish"**

### Step 3: Refresh Your Portfolio
1. Go to: http://localhost:3002/projects
2. Refresh the page
3. Check browser console (F12) for Firebase logs

## Expected Result
After updating rules, you should see:
- ✅ Erpica project appear as FIRST project (order: 0)
- ✅ All 7 projects displayed
- ✅ Real-time sync enabled

## Alternative (If you want more secure rules)
For production, use this instead:

```json
{
  "rules": {
    "projects": {
      ".read": true,
      ".write": true
    }
  }
}
```

This allows access only to the projects data, not the entire database.

## Verification
Check: https://urjit-portfolio-app-default-rtdb.firebaseio.com/projects.json
You should see an array with 7 projects instead of `null`.
