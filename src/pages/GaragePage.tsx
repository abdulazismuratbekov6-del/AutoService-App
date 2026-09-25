import { Car, Plus, Search } from 'lucide-react';
import { useState } from 'react';

export function GaragePage() {
  const [vin, setVin] = useState('');
  return <section className="section container page"><div className="page-heading"><div><span className="eyebrow">Личный гараж</span><h1>Мои автомобили</h1><p>Добавьте автомобиль по VIN, чтобы вести историю обслуживания.</p></div><button className="button"><Plus size={18} /> Добавить авто</button></div>
    <div className="garage-grid"><article className="vehicle-card"><div className="car-visual small"><Car size={80} /></div><span className="tag">Основной</span><h2>Toyota Camry</h2><p>2019 · Седан · 2.5 AT</p><dl><div><dt>VIN</dt><dd>JTNB11HK3K3••••••</dd></div><div><dt>Пробег</dt><dd>64 280 км</dd></div><div><dt>Последнее ТО</dt><dd>12.08.2026</dd></div></dl><button className="button button--dark">Открыть автомобиль</button></article>
      <article className="add-car-card"><Search size={34} /><h2>Добавить автомобиль</h2><p>Введите 17-значный VIN. Мы автоматически заполним данные автомобиля.</p><label>VIN автомобиля<input value={vin} onChange={e => setVin(e.target.value.toUpperCase())} maxLength={17} placeholder="Например, JTNB11HK3K3000000" /></label><button className="button" disabled={vin.length !== 17}>Найти автомобиль</button></article></div>
  </section>;
}
