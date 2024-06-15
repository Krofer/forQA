from . import ma
from .models import User
from marshmallow import fields


class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

    password = fields.String(load_only=True)
