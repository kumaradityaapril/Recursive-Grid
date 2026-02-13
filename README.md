# Recursive Grid Game

An interactive grid-based puzzle game built with Next.js and React. Click cells to increment values and trigger special rules based on divisibility.

## 📸 Screenshots

### Initial State
![Initial Grid State](screenshots/initial-state.png)
*The game starts with all cells at 0*

### Gameplay
![Gameplay Example](screenshots/gameplay.png)
*Cells change color based on even/odd values, with special rules triggering*

### Locked State
![Locked Cell](screenshots/locked-state.png)
*Cell reaching 15 turns red and becomes locked*

## 🎮 Game Rules

### Basic Mechanics
- Click any cell to increase its value by 1
- Each cell can hold any integer value
- Cells reaching 15 become locked and cannot be clicked

### Special Rules

**Rule A: Divisible by 3**
- When a cell's value becomes divisible by 3 (3, 6, 9, 12, 15...)
- The cell to the RIGHT decreases by 1
- Can result in negative numbers
- Rightmost column cells have no effect on neighbors

**Rule B: Divisible by 5**
- When a cell's value becomes divisible by 5 (5, 10, 15, 20...)
- The cell BELOW increases by 2
- Can exceed 15 for affected cells
- Bottom row cells have no effect on neighbors

**Special Case: Value 15**
- Divisible by both 3 and 5
- Triggers both rules simultaneously
- Cell turns red and becomes locked

## 🎨 Visual Design

- **Even Numbers**: Light gray background (#e0e0e0)
- **Odd Numbers**: Navy blue background (#1a237e) with white text
- **Value 15**: Red background - locked state
- **Style**: Retro design with 4px rounded corners and distinct black shadow

## 📸 Screenshots

### 🟢 Initial State (All Cells at 0)

![Initial Grid](<img width="1899" height="866" alt="Screenshot 2026-02-13 111344" src="https://github.com/user-attachments/assets/9574f730-fd21-4481-9811-a71b7be1f071" />
)

---

### 🌊 Ripple Effect Triggered (Divisible by 3 or 5)

![Ripple Effect](<img width="1893" height="864" alt="Screenshot 2026-02-13 111415" src="https://github.com/user-attachments/assets/977535ee-a1bd-4037-abf1-50e84b74dcd0" />
)

---

### 🔒 Locked State (Value ≥ 15)

![Locked State](<img width="1900" height="863" alt="Screenshot 2026-02-13 111434" src="https://github.com/user-attachments/assets/26d13265-3f44-49b8-be37-f54e7d50e408" />
)


## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd recursive-grid
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## 📁 Project Structure

```
recursive-grid/
├── app/
│   ├── page.tsx          # Main game component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies
└── README.md           # This file
```

## 🎯 Features

- Interactive 3x3 grid with click-to-increment functionality
- Real-time rule application based on divisibility
- Visual feedback with color-coded cells
- Reset button to restart the game
- Responsive design with notebook-style layout
- Dark theme with blue accents
- Detailed rule book displayed alongside the grid

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📝 License

This project is open source and available under the MIT License.

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
