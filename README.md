# nokiahomework
How to run the project. LIVE DEMO: https://nokiahomework-khactam.herokuapp.com/

### 1. Getting the backend ready
1. cd backend
2. npm install
3. node server.js
The backend should be running on port 5000

### 2. Getting react app ready
1. cd client
2. npm install / yarn install
3. npm start

### 3. Running the test project (make sure backend and client react app are both running already)
1. cd client
2. npm test -- --coverage

### 4. Getting production mode
1. cd client
2. npm run build

A folder name 'build' will be created in 'backend' folder.

3. cd ../backend
4. restart backend: node server.js

The app will be there at localhost:5000
