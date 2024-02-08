/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3jbcssyhc0q0hb9",
    "created": "2024-02-01 12:01:46.096Z",
    "updated": "2024-02-01 12:01:46.096Z",
    "name": "agents",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jpqzm4up",
        "name": "passowrd",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3jbcssyhc0q0hb9");

  return dao.deleteCollection(collection);
})
