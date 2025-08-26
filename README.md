# Assessment Store

A React TypeScript project featuring a product store with infinite scrolling, Redux-powered cart, and TailwindCSS styling. Built with Vite, React Query, and ShadCN/ Radix UI components.

---

## Features

- **Product Listing**: Displays products fetched from [Fake Store API](https://fakestoreapi.com/) with infinite scroll.
- **Cart Management**: Add, remove, and clear items using Redux Toolkit.
- **Responsive Layout**: Adaptive grid layout for desktop and mobile.
- **Product Table**: View products in a table with images, category, price, rating, and description.
- **Dropdown Cart**: View cart items in a dropdown with image, title, price, remove option, and clear cart button.
- **Tooltips**: Show full product titles on hover.
- **Smooth UI**: Styled with TailwindCSS and ShadCN UI components.

---

## Technologies Used

- **React** 19
- **TypeScript**
- **Vite**
- **TailwindCSS**
- **Redux Toolkit**
- **React Query (TanStack)** for data fetching
- **ShadCN / Radix UI** components
- **Axios** for API requests
- **React Router v7** for routing

---

## Project Structure

├─ src/
│ ├─ api/
│ │ └─ api.ts # Axios requests to fetch products
│ ├─ hooks/
│ │ └─ useItems.ts # Infinite query hook for products
│ ├─ components/
│ │ └─ Sidebar.tsx # Sidebar navigation component
│ ├─ pages/
│ │ ├─ Home.tsx # Product cards page
│ │ └─ Data.tsx # Product table page
│ ├─ Layout/
│ │ └─ Layout.tsx # Main layout with cart dropdown and responsive menu
│ ├─ store/
│ │ ├─ slices/cartSlice.ts # Redux cart slice
│ │ └─ store.ts # Redux store
│ ├─ utils/
│ │ └─ types.ts # Product type definition
│ ├─ App.tsx # Main router setup
│ └─ main.tsx # Entry point with providers
