from datetime import datetime
from sqlalchemy import MetaData, Table, Column, Integer, Float, String, DateTime


metadata = MetaData()


places = Table(
    "places",
    metadata,

    Column("id", Integer, primary_key=True),

    Column("city", String(length=100), nullable=False, index=True),
    Column("region", String(length=100), nullable=True, index=True),
    Column("country", String(length=2), nullable=False, index=True),

    # The center of this place
    Column("place_lat", Float, nullable=True),
    Column("place_lon", Float, nullable=True),
)
