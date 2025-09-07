# Multi-Vendor Frontend Client

This is the frontend client for the Multi-Vendor E-Commerce project, built with Next.js, Redux Toolkit, and Tailwind CSS as part of a skill assessment.

**Important Note:** The primary focus of this 24-hour task was the development of the backend API. This frontend application serves as a proof-of-concept to consume and demonstrate the core functionalities of the backend, such as user authentication and data retrieval from protected routes.

---

## 🔗 Associated Backend Repository

The backend API for this project, containing all the core business logic, can be found here:
[https://github.com/codewithsaidul/multi-vendor-backend](https://github.com/codewithsaidul/multi-vendor-backend)

---

## 🚀 Getting Started

To get the frontend running locally:

### Prerequisites

* [Node.js](https://nodejs.org/en) (v18 or higher)
* [npm](https://www.npmjs.com/)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/codewithsaidul/multi-vendor-client
    cd multi-vendor-client
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    * Create a `.env` file in the root directory.
    * Add the live backend API URL:
        ```env
        NEXT_PUBLIC_API_URL=https://multi-vendor-backend-three.vercel.app
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000` (or your configured port).

---

## 👤 Author

* **Name:** Saidul Islam Rana
* **GitHub:** [@codewithsaidul](https://github.com/codewithsaidul)