*cv*
## Django CV app
My Django + PostgreSQL CV app

[Cheat sheet](CHEATSHEET.md)

[API reference](API.md)

Setup PostgreSQl DB:
```shell
psql -U postgres
create database cv;
\q
```

Load project:
```shell
git clone git@github.com:IIPEKOLICT/cv.git
cd cv
pip install -r requirements.txt
python manage.py runserver
```

Create superuser:
```shell
python manage.py createsuperuser
```
