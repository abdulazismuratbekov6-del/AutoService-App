import { Search, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const products = [
  { name: 'Масло моторное 5W-30', brand: 'Toyota Genuine', price: '24 900 ₸', icon: '🛢️' },
  { name: 'Фильтр масляный', brand: 'MANN-FILTER', price: '4 500 ₸', icon: '⚙️' },
  { name: 'Тормозные колодки', brand: 'Brembo', price: '32 000 ₸', icon: '⭕' },
  { name: 'Воздушный фильтр', brand: 'Bosch', price: '7 800 ₸', icon: '▦' },
];
export function ShopPage() {
  const [cart, setCart] = useState(0);
  return <section className="section container page"><div className="page-heading"><div><span className="eyebrow">Магазин запчастей</span><h1>Подходит вашему автомобилю</h1><p>Детали проверены на совместимость с Toyota Camry 2019.</p></div><button className="cart"><ShoppingCart /> <span>{cart}</span></button></div><div className="searchbar"><Search /><input placeholder="Поиск по названию, артикулу или категории" /></div><div className="product-grid">{products.map(p => <article className="product-card" key={p.name}><div className="product-image">{p.icon}<span>В наличии</span></div><small>{p.brand}</small><h3>{p.name}</h3><p className="compatible">✓ Совместимо с вашим авто</p><div><strong>{p.price}</strong><button className="button" onClick={() => setCart(cart + 1)}><ShoppingCart size={17} /> В корзину</button></div></article>)}</div></section>;
}
