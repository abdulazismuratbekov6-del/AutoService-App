# AutoCare — Python/Flask

Учебная веб-платформа, объединяющая автосервис, магазин запчастей и электронную историю автомобиля по VIN.

## Стек

- Python 3.11+
- Flask 3 и Jinja2
- HTML5 и адаптивный CSS
- небольшой Vanilla JavaScript для интерактивности магазина

## Быстрый запуск

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python run.py
```

Откройте `http://127.0.0.1:5000`.

## Архитектура

```text
AutoService/
├── app/
│   ├── __init__.py          # фабрика Flask-приложения
│   ├── routes.py            # маршруты и обработка форм
│   ├── data.py              # демонстрационные данные
│   ├── models/statuses.py   # Enum статусов
│   └── templates/           # Jinja-страницы
├── src/styles/index.css     # адаптивные стили
├── run.py                   # точка запуска
└── requirements.txt
```

## Страницы

| URL | Назначение |
| --- | --- |
| `/` | Главная |
| `/garage` | Автомобили клиента и поиск по VIN |
| `/service` | Запись к механику |
| `/shop` | Магазин и поиск товаров |
| `/history` | История обслуживания |

## Статусы

- Бронирование: `PENDING`, `CONFIRMED`, `CANCELLED`, `ARRIVED`, `IN_PROGRESS`, `WAITING`, `COMPLETED`, `NO_SHOW`.
- Заказ: `CREATED`, `PAID`, `PROCESSING`, `SHIPPED`, `READY_FOR_PICKUP`, `RECEIVED`, `COMPLETED`, `CANCELLED`, `REFUNDED`.
- Платёж: `PENDING`, `PAID`, `HELD`, `RELEASED`, `REFUNDED`, `FAILED`.

Для production следует подключить SQLAlchemy/PostgreSQL, Flask-Login, Flask-WTF/CSRF, миграции Alembic и хранить `SECRET_KEY` в переменных окружения.
