from datetime import datetime
from sqlalchemy import (
    MetaData, Table, Column, Integer, Float, String, Enum, Text, DateTime,
    Boolean, JSON, ForeignKey
)


metadata = MetaData()


stays = Table(
    "stays",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("name", String(length=100), nullable=False),
    Column("stay_type", Enum(), nullable=False),
    Column("description", Text, nullable=True),

    # This is JSON list/array containing all the selected features
    Column("features_list", JSON, nullable=True),

    Column("address_line_1", String(length=100), nullable=True),
    Column("address_line_2", String(length=100), nullable=True),
    Column("address_lat", Float, nullable=True),
    Column("address_lon", Float, nullable=True),

    # We store a combination of the city, region and country for easy search or grouping
    Column("place_id", ForeignKey("places.id"), nullable=False, index=True),

    # Listed price per night, just for display purposes
    Column("listed_ppn", Float, nullable=True),
    # Possible discount % say if booking X nights, just for display purposes
    Column("possible_discount", Integer, nullable=True),

    Column("is_prepared", Boolean, nullable=False, default=False),
    Column("is_staff_checked", Boolean, nullable=False, default=False),
    Column("is_live", Boolean, nullable=False, default=False),

    Column("created_by_id", ForeignKey("users.id"), nullable=False),
    Column("created_at", DateTime, nullable=False, default=datetime.utcnow)
)
