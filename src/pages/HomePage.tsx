import { ArrowRight, CalendarCheck, Car, ClipboardCheck, ShieldCheck, ShoppingBag, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: Wrench, title: 'Запись в автосервис', text: 'Выберите услугу, механика и удобное время онлайн.', link: '/service' },
  { icon: ShoppingBag, title: 'Магазин запчастей', text: 'Подбор совместимых деталей и расходников для вашего авто.', link: '/shop' },
  { icon: ClipboardCheck, title: 'История по VIN', text: 'Работы, пробег, детали и рекомендации в едином журнале.', link: '/history' },
];

export function HomePage() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><ShieldCheck size={16} /> Надёжный уход за автомобилем</span>
          <h1>Ваш автомобиль.<br /><em>Под полным контролем.</em></h1>
          <p>Записывайтесь на сервис, заказывайте запчасти и храните полную историю обслуживания по VIN.</p>
          <div className="hero-actions"><Link className="button button--large" to="/service">Записаться на сервис <ArrowRight size={18} /></Link><Link className="button button--ghost button--large" to="/garage">Добавить авто</Link></div>
          <div className="hero-stats"><div><strong>12 000+</strong><span>обслуженных авто</span></div><div><strong>4.9</strong><span>средняя оценка</span></div><div><strong>8 лет</strong><span>опыта</span></div></div>
        </div>
        <div className="hero-card">
          <div className="car-visual"><Car size={112} strokeWidth={1.2} /></div>
          <div className="vehicle-head"><div><span>Ваш автомобиль</span><strong>Toyota Camry</strong></div><span className="online-dot">Активен</span></div>
          <div className="vehicle-meta"><div><span>VIN</span><b>JTNB11HK3K3••••••</b></div><div><span>Пробег</span><b>64 280 км</b></div></div>
          <div className="service-reminder"><CalendarCheck /><div><span>Следующее ТО</span><strong>Через 1 720 км</strong></div><ArrowRight size={18} /></div>
        </div>
      </div>
    </section>
    <section className="section container">
      <div className="section-title"><span>ВОЗМОЖНОСТИ</span><h2>Одна платформа — полный цикл заботы</h2><p>От первого визита до прозрачной истории каждого ремонта.</p></div>
      <div className="feature-grid">{features.map(({ icon: Icon, title, text, link }, i) => <Link to={link} className="feature-card" key={title}><div className={`feature-icon feature-icon--${i}`}><Icon /></div><h3>{title}</h3><p>{text}</p><span>Подробнее <ArrowRight size={16} /></span></Link>)}</div>
    </section>
  </>;
}
