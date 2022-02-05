*cv*
## Nest api app for my CV
My NestJS + PostgreSQL CV api app

Environment vars:
- `PORT` server port
- `DATABASE_URL` database url
- `JWT_SECRET` secret key for jwt tokens
- `ADMIN_LOGIN` login for get access to admin panel
- `ADMIN_PASSWORD` password for get access to admin panel

You need to set `PGSSLMODE`=no-verify for deploy on heroku

Setup PostgreSQl DB:
```shell
psql -U postgres
create database cv;
\q
```

Prepare project:
```shell
git clone git@github.com:IIPEKOLICT/cv.git
cd cv
npm i
```

Start project (development):
```shell
npm run start:dev
```

Start project (production):
```shell
npm run start:prod
```

[Nest guide](NEST.md)
