# G-photos-backend
Backend service for G-photos


## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install node (v14.18.0) if not already available (using nvm)

Install all dependencies

```bash
npm install
````
### Step 2: Setting up collection

Install MongoDB Compass 

Create a mongo database (say g_photos) and inside that create a collection called ```images```


### Step 3: Create an env file and place the below content
```bash
DATABASE_URL = mongodb://localhost:27017/g_photos
DATABASE_NAME = g_photos
```

### Step 4: Serve your App

Go to the project dir and start your app with this npm script.

```bash
npm run start
```

> This starts a local server using `nodemon`, which will watch for any file changes and will restart the sever according to these changes.
> The server address will be displayed to you as `http://localhost:3000`.


