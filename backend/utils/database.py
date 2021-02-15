import sqlite3
import databases


DATABASE_URL = "sqlite:///solvex.db"


class Connection(sqlite3.Connection):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.execute("PRAGMA FOREIGN_KEYS=1")


database = databases.Database(DATABASE_URL, factory=Connection)
