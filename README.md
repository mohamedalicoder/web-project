# Responsive Web Application with Flask

A modern, responsive web application built with Flask, featuring user authentication, dynamic content, and a beautiful UI.

## Features

- User Authentication (Signup/Login)
- Responsive Design
- Local Storage Integration
- Cookie Management
- Dynamic Content Loading
- Form Validation
- Custom Animations

## Setup Instructions

1. Clone the repository
2. Create a virtual environment:
   ```
   python -m venv venv
   ```
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Unix/MacOS: `source venv/bin/activate`
4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
5. Run the application:
   ```
   python app.py
   ```

## Project Structure

```
├── static/
│   ├── css/
│   ├── js/
│   └── img/
├── templates/
├── app.py
├── models.py
├── forms.py
└── requirements.txt
```

## Dependencies

- Flask 3.0.0
- Flask-SQLAlchemy 3.1.1
- Flask-Login 0.6.3
- Flask-WTF 1.2.1
- Werkzeug 3.0.1
- python-dotenv 1.0.0

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

MIT License
