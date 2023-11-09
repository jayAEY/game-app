import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";

function App() {
  return (
    // <div className="min-w-screen min-h-scree">
    <div className="min-w-full min-h-screen bg-secondary">
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
