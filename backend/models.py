from sqlalchemy import Column, Integer, String
from database import Base

class Chat(Base):

    __tablename__ = "chat_history"

    id = Column(Integer, primary_key=True, index=True)
    user_message = Column(String)
    ai_response = Column(String)