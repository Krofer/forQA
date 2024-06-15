# Auth App

Приложение обладает следующими функциональностями:
1. Регистрация пользователя
2. Авторизация пользователя
3. Вывод всех пользователей

Технологии:
Backend: python, flask, sqlalchemy
Frontend: CRA, axios, bootstrap, styled-components

## Использование Docker

### Создайте и запустите контейнеры:

```sh
docker-compose up --build
```

### Фронтенд будет доступен по адресу: http://localhost:3000

### Бэкенд будет доступен по адресу: http://localhost:5001/api

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

### Шаг 5: Запуск бекенда

```sh
flask run
```

### Шаг 6: Запуск фронта

```sh
cd ..
cd frontend
npm install
npm start
```