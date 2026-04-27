from peewee import PostgresqlDatabase, Model

db = PostgresqlDatabase(
    "postgres",
    user="postgres",
    password="c204",
    host="localhost",
    port=5432
)

class BaseModel(Model):
    class Meta:
        database = db