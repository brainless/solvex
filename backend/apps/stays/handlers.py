from datetime import datetime
from typing import List
from fastapi import APIRouter

from utils.database import database
from .models import stays
from .schema import StayIn, Stay


stays_router = APIRouter()


@stays_router.get("/", response_model=List[Stay])
async def list_stays():
    query = stays.select()
    return await database.fetch_all(query=query)


@stays_router.get("/{post_id}/", response_model=Stay)
async def get_stay(stay_id: int):
    query = stays.select().where(
        stays.c.id == stay_id
    )
    return await database.fetch_one(query=query)


@stays_router.post("/", response_model=Stay)
async def create_stay(stay: StayIn):
    created_at = datetime.utcnow()
    created_by_id = 1

    query = stays.insert().values(
        title=stay.name,
        stay_type=stay.stay_type,
        place_id=stay.place_id,
        created_by_id=created_by_id,
        created_at=created_at
    )
    last_record_id = await database.execute(query=query)
    return {
        **stay.dict(),
        "id": last_record_id,
        "created_at": created_at,
        "created_by_id": created_by_id,
    }
