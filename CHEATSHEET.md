## Commands
Most used:
```shell
pip install -r requirements.txt
python manage.py startapp [appname]
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Manage db in console:
```shell
psql -U postgres
```

For create named heroku app:
```shell
heroku create [app name]
git push heroku [branch name]
```

Deploy commands (important):
```shell
git add .
git commit -m [message]
git push
heroku run python manage.py migrate
heroku run python manage.py createsuperuser
```