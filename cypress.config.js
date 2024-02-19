const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    "projectId": "2qznzd",
    "chromeWebSecurity": false,
    "env": {
      "url": "https://qa-smcms.safra.sg",
      "DB_HOST": "mongodb://qasmcmsdb:MC5iFa2aAJ0lC09BzZVFqpEu9Z7hoaUhFqUKNB0VVHxrJk46q85rhgqJJwQ3ewKPqXbDoF4sd76fxmceqSCpNw==@qasmcmsdb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@qasmcmsdb@",
      "DB_UI": "SAFRA-SMCMS-QA-UI",
      "FIXTURE_UPLOAD_PATH": "upload/"
    },
    "reporter": "../node_modules/mochawesome/src/mochawesome.js",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "charts": true,
      "reportPageTitle": "My Test Suite",
      "embeddedScreenshots": true,
      "html": true,
      "overwrite": true,
      "inlineAssets": true
    },
    "video": false,
    "baseUrl": "https://qa-smcms.safra.sg",
    "viewportWidth": 1520,
    "viewportHeight": 1420,
    setupNodeEvents(on, config) {
      on('task', {
        /*****************************************************
         * Plugin: GetDbCollectionData
         * Description: Gets Data from a specified Database 
         * and Collection
         *
         * @author: hstone
         * @param {string} url Database Host URL
         * @param {string} database Database Name
         * @param {string} collection Collection Name
         *****************************************************/

        GetDbCollectionData({ url, database, collection }) {
          return new Promise((resolve) => {
            MongoClient.connect(url, (err, client) => {
              if (err) {
                // Connection Error Catch Routine
                console.log('MONGO CONNECTION ERROR: ' + err)
                throw err;
              } else {
                // Connection Succesful Routine
                console.log('MONGODB CONNECTION ESTABLISHED TO: ' + url)

                // Database Select
                const db = client.db(database)

                // Collection Query
                db.collection(collection).find({}).toArray().then(collectionItems => {
                  console.log('MONGODB QUERY IN-PROGRESS: DB=' + database + ', COLLECTION=' + collection)
                  return collectionItems
                }).then(testData => {
                  // Query Completion Routine
                  db.close
                  client.close()
                  console.log('MONGODB QUERY COMPLETE')

                  if (testData.length === 0) {
                    // Log Empty Data is Found
                    console.log('MONGODB QUERY IS EMPTY. EITHER COLLECTION IS NOT FOUND OR COLLECTION IS EMPTY')
                    testData = [{}]
                  }

                  try {
                    // Delete Test Data Json Save File
                    fs.unlinkSync('cypress/fixtures/testdata.json');
                  }
                  catch (err) {
                    // Delete Test Data Json Dump File Error Routine
                    console.log("testdata.json DELETION FAILED: " + err);
                  }

                  // Save Queried Test Data on a JSON File
                  fs.appendFile('cypress/fixtures/testdata.json', JSON.stringify(testData), 'utf8',
                    function (err) { if (err) throw err; });

                  // Return Promise Resolution: Collections Items Queried as TestData
                  resolve(testData)
                })
              }
            })
          });
        },
        /*****************************************************
         * Plugin: GetDbCollectionObject
         * Description: Gets Data from a specified Database 
         * and Collection
         *
         * @author: hstone
         * @param {string} url Database Host URL
         * @param {string} database Database Name
         * @param {string} collection Collection Name
         * @param {string} objectLabel Object Label
         *****************************************************/
        GetDbCollectionObject({ url, database, collection, objectLabel }) {
          return new Promise((resolve) => {
            MongoClient.connect(url, (err, client) => {
              if (err) {
                // Connection Error Catch Routine
                console.log('MONGO CONNECTION ERROR: ' + err)
                throw err;
              } else {
                // Connection Succesful Routine
                console.log('MONGODB CONNECTION ESTABLISHED TO: ' + url)

                // Database Select
                const db = client.db(database)

                // Set Query Object
                let query = { ObjLabel: objectLabel }

                // Collection Query
                db.collection(collection).find(query).toArray().then(collectionItems => {
                  console.log('MONGODB QUERY IN-PROGRESS: DB=' + database + ', COLLECTION=' + collection + ', OBJECTLABEL=' + objectLabel)
                  return collectionItems
                }).then(testData => {
                  // Query Completion Routine
                  db.close
                  client.close()
                  console.log('MONGODB QUERY COMPLETE')

                  if (testData.length === 0) {
                    // Log Empty Data is Found
                    console.log('MONGODB QUERY IS EMPTY. EITHER COLLECTION IS NOT FOUND OR COLLECTION IS EMPTY')
                  } else if (testData.length > 1) {
                    console.log('WARNING!!! MORE THAN ONE QUERY RESULT FOUND!!! Query Objecy Used: ' + query)
                    console.log(testData)
                  } else {
                    // Log First Entry
                    console.log('MONGODB QUERY SUCCESFUL')
                    console.log(testData[0])
                  }

                  // Return Promise Resolution: Collections Items Queried as TestData
                  resolve(testData[0])
                })
              }
            })
          });
        },
        /*****************************************************
         * Plugin: UpdateDbCollectionData
         * Description: Updates Data on a specified Database, 
         * Collection and Object ID
         *
         * @author: hstone
         * @param {string} url Database Host URL
         * @param {string} database Database Name
         * @param {string} collection Collection Name
         * @param {string} objectReference Target Object ID or Object Label to Update
         * @param {JSON} newData New Collection Object Data
         *****************************************************/
        UpdateDbCollectionData({ url, database, collection, objectReference, newData }) {
          return new Promise((resolve) => {
            MongoClient.connect(url, (err, client) => {
              if (err) {
                // Connection Error Catch Routine
                console.log('MONGO CONNECTION ERROR: ${err}')
                throw err;
              } else {
                // Connection Succesful Routine
                console.log('MONGODB CONNECTION ESTABLISHED TO: ' + url)

                // Database Select
                const db = client.db(database)

                // Set Query Object
                if (ObjectId.isValid(objectReference)) {
                  var query = { _id: new ObjectId(objectReference) }
                } else {
                  var query = { ObjLabel: objectReference }
                }


                // Delete Object ID on New Data, since Object ID is immutable on a collection object
                delete newData["_id"]

                // Set New Values Object
                let newValues = { $set: newData };

                // Set 'updateOne' method's Options Object
                let options = { "upsert": false }

                // Collection Query: Check if Collection and Object Exists
                db.collection(collection).find(query).toArray().then(collectionItems => {
                  console.log('MONGODB UPDATE QUERY CHECK IN-PROGRESS: DB=' + database + ', COLLECTION=' + collection)
                  return collectionItems
                }).then(testData => {
                  if (testData.length === 0) {
                    // Empty Update Query Check Result Routine
                    console.log('MONGODB QUERY IS EMPTY. EITHER DB IS NOT FOUND, COLLECTION IS NOT FOUND or OBJECT ID NOT FOUND')
                    console.log('MONGODB UPDATE DID NOT PROCEED: DB=' + database + ', COLLECTION=' + collection + ', REFERENCE=' + objectReference)
                    console.log('DATA NOT SAVED: \n' + JSON.stringify(newData, null, 2))
                  } else {
                    // Collection Object Update Routine
                    console.log('MONGODB UPDATE QUERY CHECK SUCCESSFUL')
                    console.log('MONGODB UPDATE IN-PROGRESS: DB=' + database + ', COLLECTION=' + collection + ', REFERENCE=' + objectReference)
                    db.collection(collection).updateOne(query, newValues, options).then(() => {
                      // Collection Object Update Completion Routine
                      db.close
                      client.close()
                      console.log('MONGODB UPDATE COMPLETE')
                    })
                  }
                })

                // Return Nothing upon Promise Resolution
                resolve('')
              }
            })
          });
        }
      })
    }
  }
})