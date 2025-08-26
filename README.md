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
```text
Tetris-Project/
├── AI/
│   └── TetrisAI.py             # Core AI logic and cost evaluation
├── GA/
│   ├── genetic_algorithm.py    # GA evolution logic
│   ├── optimize.py             # GA training pipeline
│   ├── tetris_ai.py            # Agent wrapper for GA
│   └── gauntlet.py             # Gauntlet comparison of top agents
├── notebooks/
│   ├── agent_analysis.ipynb
│   ├── extract_agent.ipynb
│   ├── ga_plots.ipynb
│   └── gauntlet_comparison.ipynb
├── results/
│   ├── GA/                     # GA generation logs
│   └── gauntlet/               # Evaluation logs
├── Tetris/
│   ├── assets/
│   │   ├── graphics/
│   │   └── sound/
│   ├── game.py
│   ├── main.py                 # Entry point (AI-controlled Tetris)
│   ├── held.py
│   ├── lines.py
│   ├── preview.py
│   ├── score.py
│   ├── settings.py
│   └── timers.py
├── requirements.txt
└── README.md
```