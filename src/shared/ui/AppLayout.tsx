import { Car, History, Menu, ShoppingBag, Wrench, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/', label: 'Главная', icon: Car },
  { to: '/garage', label: 'Мои авто', icon: Car },
  { to: '/service', label: 'Автосервис', icon: Wrench },
  { to: '/shop', label: 'Магазин', icon: ShoppingBag },
  { to: '/history', label: 'История', icon: History },
];

export function AppLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app-shell">
      <header className="header container">
        <NavLink to="/" className="logo"><span><Wrench size={19} /></span>AutoCare</NavLink>
        <nav className={open ? 'nav nav--open' : 'nav'}>
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>
              <Icon size={17} />{label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button className="button button--ghost">Войти</button>
          <button className="button">Регистрация</button>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Меню">
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <main><Outlet /></main>
      <footer className="footer">
        <div className="container footer-inner">
          <div><strong>AutoCare</strong><p>Всё для автомобиля в одном месте.</p></div>
          <p>© 2026 AutoCare · Учебный проект</p>
        </div>
      </footer>
    </div>
  );
}
