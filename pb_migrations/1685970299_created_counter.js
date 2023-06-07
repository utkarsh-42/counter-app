migrate((db) => {
  const collection = new Collection({
    "id": "dad338ebua872mn",
    "created": "2023-06-05 13:04:59.382Z",
    "updated": "2023-06-05 13:04:59.382Z",
    "name": "counter",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "82g5mntt",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nsj19ody",
        "name": "count",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ywbmjw9q",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("dad338ebua872mn");

  return dao.deleteCollection(collection);
})
