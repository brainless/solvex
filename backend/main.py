from fastapi import FastAPI

from utils.database import database
from apps.posts.handlers import stays_router
from apps.replies.handlers import replies_router
from apps.reactions.handlers import reactions_router
from apps.tags.handlers import tags_router


app = FastAPI()


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


@app.get("/")
async def api_home():
    return {"status": "ok"}


app.include_router(
    stays_router,
    prefix="/posts"
)
app.include_router(
    replies_router,
    prefix="/replies"
)
app.include_router(
    reactions_router,
    prefix="/reactions"
)
app.include_router(
    tags_router,
    prefix="/tags"
)
