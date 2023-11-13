/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yjsqs5cd7isshit",
    "created": "2023-11-11 03:47:33.868Z",
    "updated": "2023-11-11 03:47:33.868Z",
    "name": "INoteResponse",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0jqzsvht",
        "name": "status",
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
        "id": "e15c4gbp",
        "name": "note",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "5x4yf5jwrxmps0l",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("yjsqs5cd7isshit");

  return dao.deleteCollection(collection);
})
