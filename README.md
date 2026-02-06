# Timer Game - React Learning Project

A React-based timer challenge game where players test their time estimation skills by stopping timers at specific target times. Features multiple difficulty levels and real-time feedback through modal dialogs.

## 🎮 How It Works

Players select a challenge (Easy, Medium, Hard, or Insane) and try to stop the timer as close as possible to the target time. The game provides instant feedback on performance through a modal dialog.

## ⚛️ React Concepts Learned

### React Hooks
- **useState**: Managed component state for `timeRemaining` and `enteredPlayerName`
- **useRef**: Used refs for two purposes:
  - Accessing DOM elements directly (`dialog.current.showModal()`)
  - Storing mutable values that don't trigger re-renders (`timer.current` for interval IDs)
- **useImperativeHandle**: Exposed custom methods from child to parent components through refs

### React Refs
- Learned when to use refs vs state
- Accessed DOM elements imperatively (opening modals)
- Stored values that persist across renders without re-renders
- Implemented ref forwarding with `forwardRef`

### React Portals
- Used `createPortal` to render components outside the normal React tree
- Implemented modal rendering in a separate DOM node
- Understood why portals are essential for modals and overlays

### Component Architecture
- Broke down the app into reusable components (`Player`, `TimerChallenge`, `ResultModal`)
- Practiced component composition and prop passing
- Separated concerns across components

### State Management
- Managed multiple pieces of state across components
- Derived state values (`timerIsActive` from `timeRemaining`)
- Used functional state updates (`prev => prev - 10`)
- Handled side effects with `setInterval` and proper cleanup with `clearInterval`

### Conditional Rendering
- Rendered different UI based on state (active/inactive timer, win/lose messages)
- Applied conditional CSS classes dynamically

## 🔑 Key React Patterns
- **Refs + Portals**: Combined refs and portals to create accessible modals
- **Imperative vs Declarative**: Balanced React's declarative approach with imperative DOM access when needed
- **Component Communication**: Used refs and callbacks for parent-child communication
- **Side Effect Management**: Properly cleaned up intervals to prevent memory leaks

## 🚀 Getting Started

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
