/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5x4yf5jwrxmps0l",
    "created": "2023-11-11 03:45:58.961Z",
    "updated": "2023-11-11 03:45:58.961Z",
    "name": "INote",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "runuyx1y",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jcxakqa1",
        "name": "content",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5x4yf5jwrxmps0l");

  return dao.deleteCollection(collection);
})
