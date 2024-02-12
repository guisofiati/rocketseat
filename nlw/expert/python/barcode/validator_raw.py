from cerberus.validator import Validator

body = {
  "data": {
    "id!!!": 123, # error, field unkown
    "name": 123, # error, must be string
  }
}

if "name" in body["data"]: print("yep!")
if isinstance(body["data"]["name"], str): print("yep!")

# cerbrus lib

body_validator = Validator({
  "data": {
    "type": "dict",
    "schema": {
      "id": { "type": "integer", "required": True, "empty": False },
      "name": { "type": "string", "required": True, "empty": True }
    }
  }
})

response = body_validator.validate(body)
print(response)

if response is False:
 print(body_validator.errors)
else:
 print("ok!")