# MyBlog – Django Web App

## Overview

**MyBlog** is a Django-based web application for publishing blog posts and managing user reviews.
It demonstrates full-stack fundamentals including backend logic, templating, and CRUD operations.

---

## Features

* Blog post listing & detail pages
* Review system (Create / Update / Delete)
* Image handling (media uploads)
* Static pages (About, Gallery, Contact)
* Basic chatbot UI (frontend)

---

## Tech Stack

* **Backend:** Django (Python)
* **Frontend:** HTML, CSS
* **Database:** SQLite

---

## Project Structure

```bash
myblog/
├── manage.py
├── db.sqlite3
├── media/
├── myapp/
│   ├── models.py
│   ├── views.py
│   ├── forms.py
│   ├── templates/
│   ├── static/
│   └── migrations/
```

---

## ⚙️ Setup

```bash
git clone <repo-url>
cd myblog

python -m venv venv
venv\Scripts\activate   # Windows

pip install django
python manage.py migrate
python manage.py runserver
```

App runs at:
http://127.0.0.1:8000/

---

## Core Concepts

* Django MVC (Models, Views, Templates)
* CRUD operations (Reviews)
* Form handling & validation
* Static & media file management

---

## Notes

* Minor code duplication in `views.py`
* Some template filenames can be standardized
* This was a project made last year, but posted now on my personal account.

---

## Future Improvements

* User authentication
* REST API (Django REST Framework)
* Enhanced chatbot integration

---

## Author

Vasiescu Adrian-Damian.
