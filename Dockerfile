FROM python:3.8.13-slim-buster
WORKDIR /app
COPY ./ ./

RUN pip install --upgrade pip --no-cache-dir

RUN pip install -r requirements.txt --no-cache-dir

RUN sudo apt update

RUN sudo apt install nodejs npm

#CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]

CMD ["gunicorn", "csc648_team1.wsgi:application", "--bind", "0.0.0.0:8000", "--timeout", "90"]
