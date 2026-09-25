import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../shared/ui/AppLayout';
import { HomePage } from '../pages/HomePage';
import { GaragePage } from '../pages/GaragePage';
import { BookingPage } from '../pages/BookingPage';
import { ShopPage } from '../pages/ShopPage';
import { HistoryPage } from '../pages/HistoryPage';

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="garage" element={<GaragePage />} />
        <Route path="service" element={<BookingPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
