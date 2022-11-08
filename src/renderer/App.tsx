import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackPage from './components/Feedback';
import HomePage from './components/Home';
import CategoryPage from './components/option/Category';
import RandomPage from './components/option/Random';
import PromptPage from './components/Prompt';
import StartPage from './components/StartPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/random" element={<RandomPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
}
