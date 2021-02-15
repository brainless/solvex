from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel


class StayIn(BaseModel):
    name: str
    stay_type: str
    place_id: int


class Stay(BaseModel):
    id: int
    name: str
    stay_type: str
    description: Optional[str]

    features_list: Optional[List[str]]

    address_line_1: Optional[str]
    address_line_2: Optional[str]
    address_lat: Optional[float]
    address_lon: Optional[float]

    place_id: int

    listed_ppn: Optional[float]
    possible_discount: Optional[float]

    is_prepared: bool
    is_staff_checked: bool
    is_live: bool

    created_by_id: int
    created_at: datetime
