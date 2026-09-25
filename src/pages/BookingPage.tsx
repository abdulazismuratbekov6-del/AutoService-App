import { CalendarDays, Check, Clock, UserRound, Wrench } from 'lucide-react';
import { useState } from 'react';

const services = ['Плановое ТО', 'Диагностика', 'Ремонт двигателя', 'Ходовая часть'];
const mechanics = ['Алексей Морозов', 'Данияр Садыков', 'Михаил Волков'];

export function BookingPage() {
  const [service, setService] = useState(services[0]);
  const [mechanic, setMechanic] = useState(mechanics[0]);
  return <section className="section container page"><div className="section-title left"><span>ОНЛАЙН-ЗАПИСЬ</span><h1>Запись в автосервис</h1><p>Выберите услугу и специалиста — это займёт меньше двух минут.</p></div>
    <div className="booking-layout"><div className="booking-form"><div className="step"><span>1</span><div><h3><Wrench size={20} /> Выберите услугу</h3><div className="choice-grid">{services.map(item => <button className={service === item ? 'choice active' : 'choice'} onClick={() => setService(item)} key={item}>{item}{service === item && <Check size={17} />}</button>)}</div></div></div>
      <div className="step"><span>2</span><div><h3><UserRound size={20} /> Выберите механика</h3><div className="choice-grid">{mechanics.map(item => <button className={mechanic === item ? 'choice active' : 'choice'} onClick={() => setMechanic(item)} key={item}>{item}<small>Опыт 7+ лет · ★ 4.9</small></button>)}</div></div></div>
      <div className="step"><span>3</span><div><h3><CalendarDays size={20} /> Дата и время</h3><div className="date-row"><input type="date" defaultValue="2026-09-28" /><select defaultValue="10:00"><option>09:00</option><option>10:00</option><option>12:30</option><option>15:00</option></select></div></div></div></div>
      <aside className="summary"><h3>Ваша запись</h3><div><span>Автомобиль</span><b>Toyota Camry</b></div><div><span>Услуга</span><b>{service}</b></div><div><span>Механик</span><b>{mechanic}</b></div><div><span><Clock size={15} /> Время</span><b>28 сентября, 10:00</b></div><hr /><div><span>Предоплата</span><strong>5 000 ₸</strong></div><button className="button button--large">Подтвердить запись</button><small>Безопасная оплата. Бесплатная отмена за 24 часа.</small></aside></div>
  </section>;
}
