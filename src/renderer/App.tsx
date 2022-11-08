import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackPage from './components/Feedback';
import HomePage from './components/Home';
import CategoryPage from './components/option/Category';
import RandomPage from './components/option/Random';
import SpecificPage from './components/option/Specific';
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
        <Route path="/specific" element={<SpecificPage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
}
