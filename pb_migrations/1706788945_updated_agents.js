/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3jbcssyhc0q0hb9")

  // remove
  collection.schema.removeField("jpqzm4up")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3jbcssyhc0q0hb9")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
