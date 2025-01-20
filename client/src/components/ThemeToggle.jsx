import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-5 right-5 p-3 rounded-full transition-all duration-300 ${
        isDark ? 'bg-gray-800 text-yellow-400' : 'bg-blue-100 text-gray-800'
      } hover:scale-110`}
      aria-label="Toggle Theme"
    >
      {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  );
}
