const login = {

    authenticated_user: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkM3MzZENDMxRkYyNTg4NjIxQTc1RUZCNzc5NjU5RUZCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MTA4MzI1MjcsImV4cCI6MTcxMDgzMjgyNywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6InNhZnJhLmNsaWVudCIsImlhdCI6MTcxMDgzMjUyNywiYXRfaGFzaCI6IkthaTJraDV5blVHdmVrUERvd0FuMGciLCJzX2hhc2giOiJKQjhLT2Z5RXF3NzM4VU5KMDQya0hnIiwic2lkIjoiNzkzODU3QTM2NDA4MzQ0QjU2NkM1MEZENDNGREQ4NEQiLCJzdWIiOiI5MzZiNzAwNi01MGNlLTRjMzctOWM0MC05NDI0NTIzOWZmOTgiLCJhdXRoX3RpbWUiOjE3MTA4MjI5OTUsImlkcCI6ImFhZCIsImFtciI6WyJleHRlcm5hbCJdfQ.wz8yycYvHsb3WHjALkvNyhz4KHqMO1o4taooGBpQ4o1s1tdq43UikTRD_NWMIanbrgqs8hbGqd8UxelmHLyetgKRiDbZGMIPXrZyg1NNg_rj5NoyDB3D7YS_WN1jYsCxf9BLSnSnXO7bQOBn_wMCE48NJg9Mpp1tKAKLABywZla9yYLV1wSrC2Axazl3KkgB0985FF4je6BAoA3-H_YozvKYQorqDF0rv5undKBbWzrG70uH7_f7qW3-KUX8_MZ6baUovUciCc5sFNWbq4itb6iZtcBRn19BqDomx_IzEB_YKA5AJgHd14LTxaIu8lVKmHHv4m3KLYKYLChmLHkdYw","session_state":"uOYPvXyqj_2VvdcIK1wP4Yh9gjiRVuHb6SfYMEJwWZs.594E10A59D310348BA2C29981A9FB7FE","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkM3MzZENDMxRkYyNTg4NjIxQTc1RUZCNzc5NjU5RUZCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTA4MzI1MjcsImV4cCI6MTcxMDgzNjEyNywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6Imh0dHBzOi8vbG9naW4ucWEtc21jbXMuc2FmcmEuc2cvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoic2FmcmEuY2xpZW50Iiwic3ViIjoiOTM2YjcwMDYtNTBjZS00YzM3LTljNDAtOTQyNDUyMzlmZjk4IiwiYXV0aF90aW1lIjoxNzEwODIyOTk1LCJpZHAiOiJhYWQiLCJlbWFpbCI6InJkYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiUkRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJ1bmlxdWVfbmFtZSI6IlJEYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwibG9naW5uYW1lIjoicmRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiUnVuZWwgRGFjcGFubyIsImp0aSI6IjMzMTNDRjdDNDQ3NjY4MTEzMDM0MUI5Q0ZGMzdDRDE1Iiwic2lkIjoiNzkzODU3QTM2NDA4MzQ0QjU2NkM1MEZENDNGREQ4NEQiLCJpYXQiOjE3MTA4MzI1MjcsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJzY29wZTEiXSwiYW1yIjpbImV4dGVybmFsIl19.kI8k9EC678kIv5AdYT8iMre2vZYl7az5ZHs7n_9PuLvJmkNdvGEHdM2o0gfJC1xftVViMFy3d2MKXTPpwy_OhAGkVo9IapTGxOGV2vhGrqPGyiAisl5-tDHpSFnT1Y9ua4s79hinwFcRhJ1qZDvQ3NzG3NBNHhgzrkx5QRyEiRSmabhg2S7AiRTfchAzLO-mMPbR1T7YTlrSKMbQgx-NsmzyFGj7fE3z_-viMGyyIrXfcYN9YowL4HAgqhNPT30q7pdF7RIO5yVqy5VXDZVZ0yMhiLgtU3kQJXg_pAGm6HOPckB7C1OzNFSaddB80OJAU_J9guo8xrxEGtnIjDbd3Q","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"JB8KOfyEqw738UNJ042kHg","sid":"793857A36408344B566C50FD43FDD84D","sub":"936b7006-50ce-4c37-9c40-94245239ff98","auth_time":1710822995,"idp":"aad","amr":["external"],"email":"rdacpano@synergyonline.com","preferred_username":"RDacpano@synergyonline.com","unique_name":"RDacpano@synergyonline.com","loginname":"rdacpano@synergyonline.com","name":"Runel Dacpano"},"expires_at":1710836128}`,
    active_location: `{"name":"SAFRA Jurong","id":"2E081645-6FAB-4E57-93B2-08D9AF1689EE"}`,
    safra_client: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkM3MzZENDMxRkYyNTg4NjIxQTc1RUZCNzc5NjU5RUZCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MTA4MzI1MjcsImV4cCI6MTcxMDgzMjgyNywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6InNhZnJhLmNsaWVudCIsImlhdCI6MTcxMDgzMjUyNywiYXRfaGFzaCI6IkthaTJraDV5blVHdmVrUERvd0FuMGciLCJzX2hhc2giOiJKQjhLT2Z5RXF3NzM4VU5KMDQya0hnIiwic2lkIjoiNzkzODU3QTM2NDA4MzQ0QjU2NkM1MEZENDNGREQ4NEQiLCJzdWIiOiI5MzZiNzAwNi01MGNlLTRjMzctOWM0MC05NDI0NTIzOWZmOTgiLCJhdXRoX3RpbWUiOjE3MTA4MjI5OTUsImlkcCI6ImFhZCIsImFtciI6WyJleHRlcm5hbCJdfQ.wz8yycYvHsb3WHjALkvNyhz4KHqMO1o4taooGBpQ4o1s1tdq43UikTRD_NWMIanbrgqs8hbGqd8UxelmHLyetgKRiDbZGMIPXrZyg1NNg_rj5NoyDB3D7YS_WN1jYsCxf9BLSnSnXO7bQOBn_wMCE48NJg9Mpp1tKAKLABywZla9yYLV1wSrC2Axazl3KkgB0985FF4je6BAoA3-H_YozvKYQorqDF0rv5undKBbWzrG70uH7_f7qW3-KUX8_MZ6baUovUciCc5sFNWbq4itb6iZtcBRn19BqDomx_IzEB_YKA5AJgHd14LTxaIu8lVKmHHv4m3KLYKYLChmLHkdYw","session_state":"uOYPvXyqj_2VvdcIK1wP4Yh9gjiRVuHb6SfYMEJwWZs.594E10A59D310348BA2C29981A9FB7FE","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkM3MzZENDMxRkYyNTg4NjIxQTc1RUZCNzc5NjU5RUZCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTA4MzI1MjcsImV4cCI6MTcxMDgzNjEyNywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6Imh0dHBzOi8vbG9naW4ucWEtc21jbXMuc2FmcmEuc2cvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoic2FmcmEuY2xpZW50Iiwic3ViIjoiOTM2YjcwMDYtNTBjZS00YzM3LTljNDAtOTQyNDUyMzlmZjk4IiwiYXV0aF90aW1lIjoxNzEwODIyOTk1LCJpZHAiOiJhYWQiLCJlbWFpbCI6InJkYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiUkRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJ1bmlxdWVfbmFtZSI6IlJEYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwibG9naW5uYW1lIjoicmRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiUnVuZWwgRGFjcGFubyIsImp0aSI6IjMzMTNDRjdDNDQ3NjY4MTEzMDM0MUI5Q0ZGMzdDRDE1Iiwic2lkIjoiNzkzODU3QTM2NDA4MzQ0QjU2NkM1MEZENDNGREQ4NEQiLCJpYXQiOjE3MTA4MzI1MjcsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJzY29wZTEiXSwiYW1yIjpbImV4dGVybmFsIl19.kI8k9EC678kIv5AdYT8iMre2vZYl7az5ZHs7n_9PuLvJmkNdvGEHdM2o0gfJC1xftVViMFy3d2MKXTPpwy_OhAGkVo9IapTGxOGV2vhGrqPGyiAisl5-tDHpSFnT1Y9ua4s79hinwFcRhJ1qZDvQ3NzG3NBNHhgzrkx5QRyEiRSmabhg2S7AiRTfchAzLO-mMPbR1T7YTlrSKMbQgx-NsmzyFGj7fE3z_-viMGyyIrXfcYN9YowL4HAgqhNPT30q7pdF7RIO5yVqy5VXDZVZ0yMhiLgtU3kQJXg_pAGm6HOPckB7C1OzNFSaddB80OJAU_J9guo8xrxEGtnIjDbd3Q","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"JB8KOfyEqw738UNJ042kHg","sid":"793857A36408344B566C50FD43FDD84D","sub":"936b7006-50ce-4c37-9c40-94245239ff98","auth_time":1710822995,"idp":"aad","amr":["external"],"email":"rdacpano@synergyonline.com","preferred_username":"RDacpano@synergyonline.com","unique_name":"RDacpano@synergyonline.com","loginname":"rdacpano@synergyonline.com","name":"Runel Dacpano"},"expires_at":1710836128}`,

    //Approver - Hung's Token
    authenticated_user_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkI1RTlGQTY4ODUwQzFGMDExQjVGM0Q2ODA3N0EyODI4IiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MTc0MDUzNjAsImV4cCI6MTcxNzQwNTY2MCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE3MTc0MDUzNjAsImF0X2hhc2giOiIzb1hxUWR1bGVmSVRfUkdwb2FGSUN3Iiwic19oYXNoIjoiN284Y25CTmpla29lcDlwelhtbnRvUSIsInNpZCI6IjM3NzdCQkUzNTMzQjcwMjY5OEYyNEMwRTVGNjg0QTREIiwic3ViIjoiYTM4MjU2MmEtMmVhMi00ZjE5LTkzZTUtMDgyYjZlMmJiMzI2IiwiYXV0aF90aW1lIjoxNzE3Mzc4NTcwLCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.Wu_cvZwLhxkXJSKuKBT9XLAyDhB1UesgyN3FZH72KAliFIAxm4GpXBIDrvbdFFTHHa3E_lbLpYjDgJvQmrqcTikHOra9eg9Qj7th_TCL4gHc_yRwblbyutNfQTiJrOnj8TsPr26J5PN9snnDSLmInFwcnhQ_Ix3phv87PqjCgpUfNKgkhhWPOdHcgB8sRd5X5jxzVRubmEQ_ju1votO-6MmJj7xjkRA6MApIiseU5gDqm4Pbg4t1CFoEBxNDdEsQB9RcVw819fNMC80vklmlrcv72f57AogbB4wMlkvS0owiHDscUl3Li5D8YFBJEW3iWjIGMKhjtlIpu-131CLY-w","session_state":"diqqmGpGU8o6QlwXn4o4LxMr9kr0dnJhPxfkVykZD2k.D018791D220322A1CAA6283F219F3DE0","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkI1RTlGQTY4ODUwQzFGMDExQjVGM0Q2ODA3N0EyODI4IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTc0MDUzNjAsImV4cCI6MTcxNzQwODk2MCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiJhMzgyNTYyYS0yZWEyLTRmMTktOTNlNS0wODJiNmUyYmIzMjYiLCJhdXRoX3RpbWUiOjE3MTczNzg1NzAsImlkcCI6ImFhZCIsImVtYWlsIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiVHJhbiBIdW5nIiwianRpIjoiRTZFNzRBMjc1QTIzRDMwMkEwNEU1RTk2Q0UxOTlCQTkiLCJzaWQiOiIzNzc3QkJFMzUzM0I3MDI2OThGMjRDMEU1RjY4NEE0RCIsImlhdCI6MTcxNzQwNTM2MCwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.nLwt2YU-FZf8Vqfhl-SwYfo9sgezx6qtwERTO_R6CW67kmJfsIiHjKtvirvpZrqvhLiy3E4ylnvaEvop9mZ-dzz2QJICi4UOj2CgRo_TMZ--pA_zXMkM4eByK1Uu5Ifeh8z7aq2g0cOE83nDWeY1zn71xzQU5Jhn1i9puUoagC01ma5cNvfhe3AGqOBqxtFM6E3exoWI4HFnjvKcZ-r4y-oJv0IE1wz6HuHUUM4t_EvffHMceEvXfxoLjebcNmAQh0gWn2EerpFZo3uObjbWa6Oz2eAC35wBy22wO3VqpEcdu33OBZkT98Ae2qMvl7UmHUqHzDiCs5xNCrV3Q_BRuA","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"7o8cnBNjekoep9pzXmntoQ","sid":"3777BBE3533B702698F24C0E5F684A4D","sub":"a382562a-2ea2-4f19-93e5-082b6e2bb326","auth_time":1717378570,"idp":"aad","amr":["external"],"email":"HTran@synergyonline.com","preferred_username":"fapl-thung@safra.sg","unique_name":"fapl-thung@safra.sg","loginname":"HTran@synergyonline.com","name":"Tran Hung"},"expires_at":1717408959}`,
    active_location_uat: `{"id":"b0967328-3ff2-4977-93b1-08d9af1689ee","name":"SAFRA HQ"}`,
    safra_client_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkI1RTlGQTY4ODUwQzFGMDExQjVGM0Q2ODA3N0EyODI4IiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MTc0MDUzNjAsImV4cCI6MTcxNzQwNTY2MCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE3MTc0MDUzNjAsImF0X2hhc2giOiIzb1hxUWR1bGVmSVRfUkdwb2FGSUN3Iiwic19oYXNoIjoiN284Y25CTmpla29lcDlwelhtbnRvUSIsInNpZCI6IjM3NzdCQkUzNTMzQjcwMjY5OEYyNEMwRTVGNjg0QTREIiwic3ViIjoiYTM4MjU2MmEtMmVhMi00ZjE5LTkzZTUtMDgyYjZlMmJiMzI2IiwiYXV0aF90aW1lIjoxNzE3Mzc4NTcwLCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.Wu_cvZwLhxkXJSKuKBT9XLAyDhB1UesgyN3FZH72KAliFIAxm4GpXBIDrvbdFFTHHa3E_lbLpYjDgJvQmrqcTikHOra9eg9Qj7th_TCL4gHc_yRwblbyutNfQTiJrOnj8TsPr26J5PN9snnDSLmInFwcnhQ_Ix3phv87PqjCgpUfNKgkhhWPOdHcgB8sRd5X5jxzVRubmEQ_ju1votO-6MmJj7xjkRA6MApIiseU5gDqm4Pbg4t1CFoEBxNDdEsQB9RcVw819fNMC80vklmlrcv72f57AogbB4wMlkvS0owiHDscUl3Li5D8YFBJEW3iWjIGMKhjtlIpu-131CLY-w","session_state":"diqqmGpGU8o6QlwXn4o4LxMr9kr0dnJhPxfkVykZD2k.D018791D220322A1CAA6283F219F3DE0","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkI1RTlGQTY4ODUwQzFGMDExQjVGM0Q2ODA3N0EyODI4IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTc0MDUzNjAsImV4cCI6MTcxNzQwODk2MCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiJhMzgyNTYyYS0yZWEyLTRmMTktOTNlNS0wODJiNmUyYmIzMjYiLCJhdXRoX3RpbWUiOjE3MTczNzg1NzAsImlkcCI6ImFhZCIsImVtYWlsIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiVHJhbiBIdW5nIiwianRpIjoiRTZFNzRBMjc1QTIzRDMwMkEwNEU1RTk2Q0UxOTlCQTkiLCJzaWQiOiIzNzc3QkJFMzUzM0I3MDI2OThGMjRDMEU1RjY4NEE0RCIsImlhdCI6MTcxNzQwNTM2MCwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.nLwt2YU-FZf8Vqfhl-SwYfo9sgezx6qtwERTO_R6CW67kmJfsIiHjKtvirvpZrqvhLiy3E4ylnvaEvop9mZ-dzz2QJICi4UOj2CgRo_TMZ--pA_zXMkM4eByK1Uu5Ifeh8z7aq2g0cOE83nDWeY1zn71xzQU5Jhn1i9puUoagC01ma5cNvfhe3AGqOBqxtFM6E3exoWI4HFnjvKcZ-r4y-oJv0IE1wz6HuHUUM4t_EvffHMceEvXfxoLjebcNmAQh0gWn2EerpFZo3uObjbWa6Oz2eAC35wBy22wO3VqpEcdu33OBZkT98Ae2qMvl7UmHUqHzDiCs5xNCrV3Q_BRuA","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"7o8cnBNjekoep9pzXmntoQ","sid":"3777BBE3533B702698F24C0E5F684A4D","sub":"a382562a-2ea2-4f19-93e5-082b6e2bb326","auth_time":1717378570,"idp":"aad","amr":["external"],"email":"HTran@synergyonline.com","preferred_username":"fapl-thung@safra.sg","unique_name":"fapl-thung@safra.sg","loginname":"HTran@synergyonline.com","name":"Tran Hung"},"expires_at":1717408959}`,

    //Requestor - Erik's Token
    R_authenticated_user_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzMzUxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE2OTk5MzMyMTUsImF0X2hhc2giOiJSNHNabkZvalBybmFYX1luUnFSa2FBIiwic19oYXNoIjoiR29RN0Vxd20tVF9saFM4dUM3VGpjZyIsInNpZCI6IjJGNjlCRUM5MTJCMDUyMEE0QjY1MTNGMzIxQzJGQzRDIiwic3ViIjoiM2Q3ZTRhM2EtODU3Yi00ZTE0LWE3N2ItZTU5YTc5ZTU5OTZkIiwiYXV0aF90aW1lIjoxNjk5OTMzMjE0LCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.x9WAt7kF6HJQLpTRo1T3HdXJsH8i8kR0nnaQb8gEGH0xogmo20jMMSh_PZM3HZBWjQocSNlIiUp5Pq_8fZfTn2w4sv1u2q2bo70G0CQ4ImF8DZqOy8YedStFSb2c7w08LjPwp7wMxUnpPI_ciRAP4bzh7cIvNAQM7GUDsZ74bmrHY3iweBkQA69TE6AE6TvrusXYDCD3FYaL7VpRFdOnPDUAODAcU8kkQg3_ULaa_26MmFKfKne-raogmz5iFcRR0aRLSFbQGRKFXSl7_xNDMBi74BZTQAiWQLEERIzLMsUtYfuYHg1PlLOeos67EYRbQYgxWvxT3gHhKrCTpUdsIA","session_state":"cPLiw-RH6e1zsuw5kXTBsivaKbKHzQyVDTzOAOrpEUk.C570FA21B09739043B8C7CA90FC52E53","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzNjgxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiIzZDdlNGEzYS04NTdiLTRlMTQtYTc3Yi1lNTlhNzllNTk5NmQiLCJhdXRoX3RpbWUiOjE2OTk5MzMyMTQsImlkcCI6ImFhZCIsImVtYWlsIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiS3lhdyBFcmljIiwianRpIjoiNTkxMjU0NUIzMDk2ODdFRjQ4NzkyOTA4NDA5NTI4MkIiLCJzaWQiOiIyRjY5QkVDOTEyQjA1MjBBNEI2NTEzRjMyMUMyRkM0QyIsImlhdCI6MTY5OTkzMzIxNSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.xx1d-0oMs8cjDvU2Zcxo6fmG9-2QnVXzrmjrD40hg1nQpAyn_ZvstCk8SQe-5Xn7RR-aII-MbkBOwMKlSAIwbIjeXyyPDe9CXOrixELXSR-Zyqh7CUKOGkglDr0uSZ0xTl8Lv4xrj4XuOn6ArKK0jCpXrqRYQQaqyXYCTjizQcRcKQqKxEj3sFW3Cuw0YQbp5Ha2Esk33VCBMln2JgGBSI97nE30wItlzLBFW_WlTCD5xZzw1-mBzVn4XAHldO-vuPTW3StoM4qwscNewdfoKD4hj3bhuTZIDhVQU2PbtMN58QAbITT_bLQoZ6uGuQ_UgO0HEbST-NisUxbUc6-H_A","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"GoQ7Eqwm-T_lhS8uC7Tjcg","sid":"2F69BEC912B0520A4B6513F321C2FC4C","sub":"3d7e4a3a-857b-4e14-a77b-e59a79e5996d","auth_time":1699933214,"idp":"aad","amr":["external"],"email":"EKyaw@synergyonline.com","preferred_username":"fapl-keric@safra.sg","unique_name":"fapl-keric@safra.sg","loginname":"EKyaw@synergyonline.com","name":"Kyaw Eric"},"expires_at":1699936814}`,
    R_active_location_uat: `{"id":"b0967328-3ff2-4977-93b1-08d9af1689ee","name":"SAFRA HQ"}`,
    R_safra_client_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzMzUxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE2OTk5MzMyMTUsImF0X2hhc2giOiJSNHNabkZvalBybmFYX1luUnFSa2FBIiwic19oYXNoIjoiR29RN0Vxd20tVF9saFM4dUM3VGpjZyIsInNpZCI6IjJGNjlCRUM5MTJCMDUyMEE0QjY1MTNGMzIxQzJGQzRDIiwic3ViIjoiM2Q3ZTRhM2EtODU3Yi00ZTE0LWE3N2ItZTU5YTc5ZTU5OTZkIiwiYXV0aF90aW1lIjoxNjk5OTMzMjE0LCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.x9WAt7kF6HJQLpTRo1T3HdXJsH8i8kR0nnaQb8gEGH0xogmo20jMMSh_PZM3HZBWjQocSNlIiUp5Pq_8fZfTn2w4sv1u2q2bo70G0CQ4ImF8DZqOy8YedStFSb2c7w08LjPwp7wMxUnpPI_ciRAP4bzh7cIvNAQM7GUDsZ74bmrHY3iweBkQA69TE6AE6TvrusXYDCD3FYaL7VpRFdOnPDUAODAcU8kkQg3_ULaa_26MmFKfKne-raogmz5iFcRR0aRLSFbQGRKFXSl7_xNDMBi74BZTQAiWQLEERIzLMsUtYfuYHg1PlLOeos67EYRbQYgxWvxT3gHhKrCTpUdsIA","session_state":"cPLiw-RH6e1zsuw5kXTBsivaKbKHzQyVDTzOAOrpEUk.C570FA21B09739043B8C7CA90FC52E53","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzNjgxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiIzZDdlNGEzYS04NTdiLTRlMTQtYTc3Yi1lNTlhNzllNTk5NmQiLCJhdXRoX3RpbWUiOjE2OTk5MzMyMTQsImlkcCI6ImFhZCIsImVtYWlsIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiS3lhdyBFcmljIiwianRpIjoiNTkxMjU0NUIzMDk2ODdFRjQ4NzkyOTA4NDA5NTI4MkIiLCJzaWQiOiIyRjY5QkVDOTEyQjA1MjBBNEI2NTEzRjMyMUMyRkM0QyIsImlhdCI6MTY5OTkzMzIxNSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.xx1d-0oMs8cjDvU2Zcxo6fmG9-2QnVXzrmjrD40hg1nQpAyn_ZvstCk8SQe-5Xn7RR-aII-MbkBOwMKlSAIwbIjeXyyPDe9CXOrixELXSR-Zyqh7CUKOGkglDr0uSZ0xTl8Lv4xrj4XuOn6ArKK0jCpXrqRYQQaqyXYCTjizQcRcKQqKxEj3sFW3Cuw0YQbp5Ha2Esk33VCBMln2JgGBSI97nE30wItlzLBFW_WlTCD5xZzw1-mBzVn4XAHldO-vuPTW3StoM4qwscNewdfoKD4hj3bhuTZIDhVQU2PbtMN58QAbITT_bLQoZ6uGuQ_UgO0HEbST-NisUxbUc6-H_A","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"GoQ7Eqwm-T_lhS8uC7Tjcg","sid":"2F69BEC912B0520A4B6513F321C2FC4C","sub":"3d7e4a3a-857b-4e14-a77b-e59a79e5996d","auth_time":1699933214,"idp":"aad","amr":["external"],"email":"EKyaw@synergyonline.com","preferred_username":"fapl-keric@safra.sg","unique_name":"fapl-keric@safra.sg","loginname":"EKyaw@synergyonline.com","name":"Kyaw Eric"},"expires_at":1699936814}`

}
export default login

