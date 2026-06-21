import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
import LessonPage from './pages/LessonPage';
import ExamPage from './pages/ExamPage';

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:id" element={<TopicPage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/exam/:id" element={<ExamPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
