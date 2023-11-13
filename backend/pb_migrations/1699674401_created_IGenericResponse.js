/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j5tboi29fcz1dxq",
    "created": "2023-11-11 03:46:41.609Z",
    "updated": "2023-11-11 03:46:41.609Z",
    "name": "IGenericResponse",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qrjes3xc",
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
        "id": "zxvelvvs",
        "name": "message",
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
  const collection = dao.findCollectionByNameOrId("j5tboi29fcz1dxq");

  return dao.deleteCollection(collection);
})
