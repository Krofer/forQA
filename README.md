# Auth App

## Описание

Это мини-приложение для демонстрации авторизации и регистрации пользователей, построенное на основе Flask (бэкенд).

## Установка и запуск

### Шаг 1: Клонирование репозитория

```sh
git clone <URL вашего репозитория>
cd backend
```

### Шаг 2: Настройка виртуального окружения

```sh
python -m venv venv
source venv/bin/activate  # На Windows используйте venv\Scripts\activate
```

### Шаг 3: Установка зависимостей

```sh
pip install -r requirements.txt
```

### Шаг 4: Инициализация базы данных

```sh
export FLASK_APP=wsgi
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

### Шаг 5: Запуск приложения

```sh
flask run
```

## Использование Docker

### Создайте и запустите контейнеры:у

```sh
docker-compose up --build
```

### Фронтенд будет доступен по адресу: http://localhost:3000

### Бэкенд будет доступен по адресу: http://localhost:5001/api