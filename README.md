# DLBCSPJWD01 - Phase 2 Web Development Project
This is the Phase 2 codebase for the course module **DLBCSPJWD01**. It includes both client-side and server-side directories, allowing you to run a full-stack web application.

## Author
[@iqbalmdkaify](https://github.com/iqbalmdkaify) Mohammad Kaify Iqbal

## Project Structure

```text
DLBCSPJWD01_Phase_2/
├── client/
│   └── [React frontend code]
├── server/
│   └── [Backend code]
├── package.json
└── README.md
```
    
## Getting Started
Follow the steps below to get this project up and running on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/iqbalmdkaify/DLBCSPJWD01_Phase_2.git
cd DLBCSPJWD01_Phase_2
```

### 2. Install Root-Level Dependencies
Install the dependencies defined in the root **package.json**, including concurrently (used to run both the client and server simultaneously):

```bash
npm install
```

### 3. Install Client and Server Dependencies
From the root directory of the project (where the main `package.json` is located), run:

```bash
npm run install:all
```

### 4. Set Up Environment Variables
You need to set up .env files in both the client/ and server/ directories.

⚠️ **IMPORTANT:**
Copy the **.env** file content provided in the PPTX presentation and paste them into:

`client/.env`

`server/.env`

Make sure the files are named exactly .env (without any extensions).

### 5. Run the Project
After installing all dependencies and setting up the .env files, you can run the full project (client + server) using:

```bash
npm run dev
```
**Run the above command from the root directory of the project folder (DLBCSPJWD01_Phase_2/)**
This will start both the server and client concurrently.

## ✅ Notes
Ensure you are using a Bash-compatible terminal (e.g., Git Bash on Windows, Terminal on macOS/Linux) since the dev script uses Bash syntax.

If you face permission issues, try using chmod +x on the script file (if any).
