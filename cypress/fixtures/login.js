const login = {

    authenticated_user: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2Qjk2NEZDRjU1RTU0NUVCNzdCOEFEMzQ2M0FERDNBIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MDg5MTk1MTksImV4cCI6MTcwODkxOTgxOSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6InNhZnJhLmNsaWVudCIsImlhdCI6MTcwODkxOTUxOSwiYXRfaGFzaCI6IjZWYm5kMUFPTnBZekRYQURkdGNMQ3ciLCJzX2hhc2giOiJLQlNQZEVscmV4R04tV1N3b21mWThRIiwic2lkIjoiNjNFNkM1MkQ4NUM1ODU5QkY4MTRFQjZEQkEyNUFDRUQiLCJzdWIiOiI5MzZiNzAwNi01MGNlLTRjMzctOWM0MC05NDI0NTIzOWZmOTgiLCJhdXRoX3RpbWUiOjE3MDg5MTk1MTgsImlkcCI6ImFhZCIsImFtciI6WyJleHRlcm5hbCJdfQ.pKhz7g4NoRTy63kl4X7mbU_NOJ62Yspazf3AZF0TvtxwGXjkr-H_xgro5Cxt72flETjYrbXGCSJW2p7u7wk1o8djhThnhAWd42-aSrq6ft3F8wkM2_vD37taqVSliXwqWFAMHiyn6IA3NdUJzeLygAQCjY1NU6OU_HPsDbeO4bFGHbzucb1MQo9bm7jtkGmmJoWRi4RrVvWIZJqoqPMFdo22zJGGTXqrRc8tH64ptxaTknZDP_MwcvTU3Z6eH5aP3NDbd7YGpjZzZxgDeeEQ36BKDLfKs6MU2TVc52SrMkIBoPLLy8N4a86_4wlK9yupH69zUAFHiC8OkFoTnU4luA","session_state":"cjPwtbZcu2-4nMngI5zatvgFWa3bkl7BY_iU3194uFI.A43398910761BFC93C31405B59940E51","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2Qjk2NEZDRjU1RTU0NUVCNzdCOEFEMzQ2M0FERDNBIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDg5MTk1MTgsImV4cCI6MTcwODkyMzExOCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6Imh0dHBzOi8vbG9naW4ucWEtc21jbXMuc2FmcmEuc2cvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoic2FmcmEuY2xpZW50Iiwic3ViIjoiOTM2YjcwMDYtNTBjZS00YzM3LTljNDAtOTQyNDUyMzlmZjk4IiwiYXV0aF90aW1lIjoxNzA4OTE5NTE4LCJpZHAiOiJhYWQiLCJlbWFpbCI6InJkYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiUkRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJ1bmlxdWVfbmFtZSI6IlJEYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwibG9naW5uYW1lIjoicmRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiUnVuZWwgRGFjcGFubyIsImp0aSI6IkZBMzFGMEE0RjhDOTJCMUZCRTQyNjI3MDBCQzM1RjUyIiwic2lkIjoiNjNFNkM1MkQ4NUM1ODU5QkY4MTRFQjZEQkEyNUFDRUQiLCJpYXQiOjE3MDg5MTk1MTgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJzY29wZTEiXSwiYW1yIjpbImV4dGVybmFsIl19.xyyf-z-DO-Y6gH-ylnjk17YpHpPNoW3qpZ5JKCmnKcu0DV2W4FzMbsEuk45ICJGmeujBihfgVrZ21wRU4MDu_9zCP1HK6iRccwnP4aUFcbYkZDnNgS482fgLaSaIh0f6snwGl9y0yogs9Ryk62JqFlPD28qVn8QC36-3nmVPFzCdOFC1BqIq66Qgz0bHC2A8pwMSV_mpdizlBTh1lKrjpxsAUKkS81OHShzAMu9tYs1EhNU_rN1WGFXpjRkFxxtPe7QIXVOkXB724sbVqaSlBJE99Op21RcgRSkKwRwJlPSPG3l0tn1TiJqyP7wuz2pfwKAKYdyFsWflOt2WD_0OQw","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"KBSPdElrexGN-WSwomfY8Q","sid":"63E6C52D85C5859BF814EB6DBA25ACED","sub":"936b7006-50ce-4c37-9c40-94245239ff98","auth_time":1708919518,"idp":"aad","amr":["external"],"email":"rdacpano@synergyonline.com","preferred_username":"RDacpano@synergyonline.com","unique_name":"RDacpano@synergyonline.com","loginname":"rdacpano@synergyonline.com","name":"Runel Dacpano"},"expires_at":1708923119}`,
    active_location: `{"name":"SAFRA Jurong","id":"2E081645-6FAB-4E57-93B2-08D9AF1689EE"}`,
    safra_client: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2Qjk2NEZDRjU1RTU0NUVCNzdCOEFEMzQ2M0FERDNBIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MDg5MTk1MTksImV4cCI6MTcwODkxOTgxOSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6InNhZnJhLmNsaWVudCIsImlhdCI6MTcwODkxOTUxOSwiYXRfaGFzaCI6IjZWYm5kMUFPTnBZekRYQURkdGNMQ3ciLCJzX2hhc2giOiJLQlNQZEVscmV4R04tV1N3b21mWThRIiwic2lkIjoiNjNFNkM1MkQ4NUM1ODU5QkY4MTRFQjZEQkEyNUFDRUQiLCJzdWIiOiI5MzZiNzAwNi01MGNlLTRjMzctOWM0MC05NDI0NTIzOWZmOTgiLCJhdXRoX3RpbWUiOjE3MDg5MTk1MTgsImlkcCI6ImFhZCIsImFtciI6WyJleHRlcm5hbCJdfQ.pKhz7g4NoRTy63kl4X7mbU_NOJ62Yspazf3AZF0TvtxwGXjkr-H_xgro5Cxt72flETjYrbXGCSJW2p7u7wk1o8djhThnhAWd42-aSrq6ft3F8wkM2_vD37taqVSliXwqWFAMHiyn6IA3NdUJzeLygAQCjY1NU6OU_HPsDbeO4bFGHbzucb1MQo9bm7jtkGmmJoWRi4RrVvWIZJqoqPMFdo22zJGGTXqrRc8tH64ptxaTknZDP_MwcvTU3Z6eH5aP3NDbd7YGpjZzZxgDeeEQ36BKDLfKs6MU2TVc52SrMkIBoPLLy8N4a86_4wlK9yupH69zUAFHiC8OkFoTnU4luA","session_state":"cjPwtbZcu2-4nMngI5zatvgFWa3bkl7BY_iU3194uFI.A43398910761BFC93C31405B59940E51","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2Qjk2NEZDRjU1RTU0NUVCNzdCOEFEMzQ2M0FERDNBIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDg5MTk1MTgsImV4cCI6MTcwODkyMzExOCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6Imh0dHBzOi8vbG9naW4ucWEtc21jbXMuc2FmcmEuc2cvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoic2FmcmEuY2xpZW50Iiwic3ViIjoiOTM2YjcwMDYtNTBjZS00YzM3LTljNDAtOTQyNDUyMzlmZjk4IiwiYXV0aF90aW1lIjoxNzA4OTE5NTE4LCJpZHAiOiJhYWQiLCJlbWFpbCI6InJkYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiUkRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJ1bmlxdWVfbmFtZSI6IlJEYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwibG9naW5uYW1lIjoicmRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiUnVuZWwgRGFjcGFubyIsImp0aSI6IkZBMzFGMEE0RjhDOTJCMUZCRTQyNjI3MDBCQzM1RjUyIiwic2lkIjoiNjNFNkM1MkQ4NUM1ODU5QkY4MTRFQjZEQkEyNUFDRUQiLCJpYXQiOjE3MDg5MTk1MTgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJzY29wZTEiXSwiYW1yIjpbImV4dGVybmFsIl19.xyyf-z-DO-Y6gH-ylnjk17YpHpPNoW3qpZ5JKCmnKcu0DV2W4FzMbsEuk45ICJGmeujBihfgVrZ21wRU4MDu_9zCP1HK6iRccwnP4aUFcbYkZDnNgS482fgLaSaIh0f6snwGl9y0yogs9Ryk62JqFlPD28qVn8QC36-3nmVPFzCdOFC1BqIq66Qgz0bHC2A8pwMSV_mpdizlBTh1lKrjpxsAUKkS81OHShzAMu9tYs1EhNU_rN1WGFXpjRkFxxtPe7QIXVOkXB724sbVqaSlBJE99Op21RcgRSkKwRwJlPSPG3l0tn1TiJqyP7wuz2pfwKAKYdyFsWflOt2WD_0OQw","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"KBSPdElrexGN-WSwomfY8Q","sid":"63E6C52D85C5859BF814EB6DBA25ACED","sub":"936b7006-50ce-4c37-9c40-94245239ff98","auth_time":1708919518,"idp":"aad","amr":["external"],"email":"rdacpano@synergyonline.com","preferred_username":"RDacpano@synergyonline.com","unique_name":"RDacpano@synergyonline.com","loginname":"rdacpano@synergyonline.com","name":"Runel Dacpano"},"expires_at":1708923119}`,

    //Approver - Hung's Token
    authenticated_user_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjVBNkI0RDkyQjBBQTgwQ0EzNjE2NjAzM0NGMzJFRDAxIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MDg5MTU0MjYsImV4cCI6MTcwODkxNTcyNiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE3MDg5MTU0MjYsImF0X2hhc2giOiI3ZXNjQVY3SHVpT0Exc3ZiaXd0SUZnIiwic19oYXNoIjoiN25BVnpwZFczZzhmMzBzTDNkY3F4dyIsInNpZCI6IjNBMzgzOTdBQjU4MjRFRDhERjcxMDkxQjI3RkY5NTc3Iiwic3ViIjoiYTM4MjU2MmEtMmVhMi00ZjE5LTkzZTUtMDgyYjZlMmJiMzI2IiwiYXV0aF90aW1lIjoxNzA4OTE1NDI1LCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.iVGgiKzWkQy_klN97CNMK72sycfc7Q0ilqCS1OjArgtH5gGEAE9-cZ4PEi5f716DhiZ1gJNGGckHJBZqBeaTW-LkOuBKTZ4NDWw8mA5zqWEdYssGkj8cgM0H_QzXdQE2vIlPFUYOB8kwG9-WU2-f2gj6nNAaRbLJZrzZviXrhWQe2BdxIRO-buz3CNe2zn74PxiKdtoy7xRM3APd6OZc-cYq7HTIKRsNNkJnlRdf4S_oP87sqMi3ZWm9J-AgEZN0Bpl18kwFwD_NE4-GUUvj8puEZxTlP0Q73D5Tzy1sQ3nOHzc25SPpRB6X6g8gQhBC9zvjsSAJjoxAUbZUWBedCg","session_state":"6p7tEmZRnpBNfknL3rcS_9fcDq-dxjgIVU-Fwj-BxFw.136438FFCC0B2AAB5B422903DFAE25C6","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjVBNkI0RDkyQjBBQTgwQ0EzNjE2NjAzM0NGMzJFRDAxIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDg5MTU0MjYsImV4cCI6MTcwODkxOTAyNiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiJhMzgyNTYyYS0yZWEyLTRmMTktOTNlNS0wODJiNmUyYmIzMjYiLCJhdXRoX3RpbWUiOjE3MDg5MTU0MjUsImlkcCI6ImFhZCIsImVtYWlsIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiVHJhbiBIdW5nIiwianRpIjoiRjU4NjNGNjE5ODA4NTBBMTdBMEREN0IzRkE4MEIwQTciLCJzaWQiOiIzQTM4Mzk3QUI1ODI0RUQ4REY3MTA5MUIyN0ZGOTU3NyIsImlhdCI6MTcwODkxNTQyNiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.JnAdmzbuFotPfHH6BX1y-5C4iKYcf2OQg52N2HdDIl5BUbiCAfSksIpPRJb5ArA3UOLkKRnggvQQy_xf1xshost9d2p_Di-Z3AbZxAHXIoHgdkPOjI_1QplEVTaYvkGEJZ5kYcFW9oxNHYajG0Deysl4BR1GEFnmKASa-DbkKEBu11adQRggkLtSBwdoUza1DqCYC4Vcm5Ud4MnaKV1ULE2OCYkLo0kz4Vtdx6CafQLdPjdst4Hk_mJV8RhB8r8cFfAQCnjIoX1sal0MLUxps8hGPKNDmoxxz6D0X9r6HHm5vn-5qGZ-zTGn0ATkpJdBKDwzR_VHPztttnZx0AVwXQ","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"7nAVzpdW3g8f30sL3dcqxw","sid":"3A38397AB5824ED8DF71091B27FF9577","sub":"a382562a-2ea2-4f19-93e5-082b6e2bb326","auth_time":1708915425,"idp":"aad","amr":["external"],"email":"HTran@synergyonline.com","preferred_username":"fapl-thung@safra.sg","unique_name":"fapl-thung@safra.sg","loginname":"HTran@synergyonline.com","name":"Tran Hung"},"expires_at":1708919027}`,
    active_location_uat: `{"id":"b0967328-3ff2-4977-93b1-08d9af1689ee","name":"SAFRA HQ"}`,
    safra_client_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjVBNkI0RDkyQjBBQTgwQ0EzNjE2NjAzM0NGMzJFRDAxIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MDg5MTU0MjYsImV4cCI6MTcwODkxNTcyNiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE3MDg5MTU0MjYsImF0X2hhc2giOiI3ZXNjQVY3SHVpT0Exc3ZiaXd0SUZnIiwic19oYXNoIjoiN25BVnpwZFczZzhmMzBzTDNkY3F4dyIsInNpZCI6IjNBMzgzOTdBQjU4MjRFRDhERjcxMDkxQjI3RkY5NTc3Iiwic3ViIjoiYTM4MjU2MmEtMmVhMi00ZjE5LTkzZTUtMDgyYjZlMmJiMzI2IiwiYXV0aF90aW1lIjoxNzA4OTE1NDI1LCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.iVGgiKzWkQy_klN97CNMK72sycfc7Q0ilqCS1OjArgtH5gGEAE9-cZ4PEi5f716DhiZ1gJNGGckHJBZqBeaTW-LkOuBKTZ4NDWw8mA5zqWEdYssGkj8cgM0H_QzXdQE2vIlPFUYOB8kwG9-WU2-f2gj6nNAaRbLJZrzZviXrhWQe2BdxIRO-buz3CNe2zn74PxiKdtoy7xRM3APd6OZc-cYq7HTIKRsNNkJnlRdf4S_oP87sqMi3ZWm9J-AgEZN0Bpl18kwFwD_NE4-GUUvj8puEZxTlP0Q73D5Tzy1sQ3nOHzc25SPpRB6X6g8gQhBC9zvjsSAJjoxAUbZUWBedCg","session_state":"6p7tEmZRnpBNfknL3rcS_9fcDq-dxjgIVU-Fwj-BxFw.136438FFCC0B2AAB5B422903DFAE25C6","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjVBNkI0RDkyQjBBQTgwQ0EzNjE2NjAzM0NGMzJFRDAxIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDg5MTU0MjYsImV4cCI6MTcwODkxOTAyNiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiJhMzgyNTYyYS0yZWEyLTRmMTktOTNlNS0wODJiNmUyYmIzMjYiLCJhdXRoX3RpbWUiOjE3MDg5MTU0MjUsImlkcCI6ImFhZCIsImVtYWlsIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiVHJhbiBIdW5nIiwianRpIjoiRjU4NjNGNjE5ODA4NTBBMTdBMEREN0IzRkE4MEIwQTciLCJzaWQiOiIzQTM4Mzk3QUI1ODI0RUQ4REY3MTA5MUIyN0ZGOTU3NyIsImlhdCI6MTcwODkxNTQyNiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.JnAdmzbuFotPfHH6BX1y-5C4iKYcf2OQg52N2HdDIl5BUbiCAfSksIpPRJb5ArA3UOLkKRnggvQQy_xf1xshost9d2p_Di-Z3AbZxAHXIoHgdkPOjI_1QplEVTaYvkGEJZ5kYcFW9oxNHYajG0Deysl4BR1GEFnmKASa-DbkKEBu11adQRggkLtSBwdoUza1DqCYC4Vcm5Ud4MnaKV1ULE2OCYkLo0kz4Vtdx6CafQLdPjdst4Hk_mJV8RhB8r8cFfAQCnjIoX1sal0MLUxps8hGPKNDmoxxz6D0X9r6HHm5vn-5qGZ-zTGn0ATkpJdBKDwzR_VHPztttnZx0AVwXQ","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"7nAVzpdW3g8f30sL3dcqxw","sid":"3A38397AB5824ED8DF71091B27FF9577","sub":"a382562a-2ea2-4f19-93e5-082b6e2bb326","auth_time":1708915425,"idp":"aad","amr":["external"],"email":"HTran@synergyonline.com","preferred_username":"fapl-thung@safra.sg","unique_name":"fapl-thung@safra.sg","loginname":"HTran@synergyonline.com","name":"Tran Hung"},"expires_at":1708919027}`,

    //Requestor - Erik's Token
    R_authenticated_user_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzMzUxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE2OTk5MzMyMTUsImF0X2hhc2giOiJSNHNabkZvalBybmFYX1luUnFSa2FBIiwic19oYXNoIjoiR29RN0Vxd20tVF9saFM4dUM3VGpjZyIsInNpZCI6IjJGNjlCRUM5MTJCMDUyMEE0QjY1MTNGMzIxQzJGQzRDIiwic3ViIjoiM2Q3ZTRhM2EtODU3Yi00ZTE0LWE3N2ItZTU5YTc5ZTU5OTZkIiwiYXV0aF90aW1lIjoxNjk5OTMzMjE0LCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.x9WAt7kF6HJQLpTRo1T3HdXJsH8i8kR0nnaQb8gEGH0xogmo20jMMSh_PZM3HZBWjQocSNlIiUp5Pq_8fZfTn2w4sv1u2q2bo70G0CQ4ImF8DZqOy8YedStFSb2c7w08LjPwp7wMxUnpPI_ciRAP4bzh7cIvNAQM7GUDsZ74bmrHY3iweBkQA69TE6AE6TvrusXYDCD3FYaL7VpRFdOnPDUAODAcU8kkQg3_ULaa_26MmFKfKne-raogmz5iFcRR0aRLSFbQGRKFXSl7_xNDMBi74BZTQAiWQLEERIzLMsUtYfuYHg1PlLOeos67EYRbQYgxWvxT3gHhKrCTpUdsIA","session_state":"cPLiw-RH6e1zsuw5kXTBsivaKbKHzQyVDTzOAOrpEUk.C570FA21B09739043B8C7CA90FC52E53","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzNjgxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiIzZDdlNGEzYS04NTdiLTRlMTQtYTc3Yi1lNTlhNzllNTk5NmQiLCJhdXRoX3RpbWUiOjE2OTk5MzMyMTQsImlkcCI6ImFhZCIsImVtYWlsIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiS3lhdyBFcmljIiwianRpIjoiNTkxMjU0NUIzMDk2ODdFRjQ4NzkyOTA4NDA5NTI4MkIiLCJzaWQiOiIyRjY5QkVDOTEyQjA1MjBBNEI2NTEzRjMyMUMyRkM0QyIsImlhdCI6MTY5OTkzMzIxNSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.xx1d-0oMs8cjDvU2Zcxo6fmG9-2QnVXzrmjrD40hg1nQpAyn_ZvstCk8SQe-5Xn7RR-aII-MbkBOwMKlSAIwbIjeXyyPDe9CXOrixELXSR-Zyqh7CUKOGkglDr0uSZ0xTl8Lv4xrj4XuOn6ArKK0jCpXrqRYQQaqyXYCTjizQcRcKQqKxEj3sFW3Cuw0YQbp5Ha2Esk33VCBMln2JgGBSI97nE30wItlzLBFW_WlTCD5xZzw1-mBzVn4XAHldO-vuPTW3StoM4qwscNewdfoKD4hj3bhuTZIDhVQU2PbtMN58QAbITT_bLQoZ6uGuQ_UgO0HEbST-NisUxbUc6-H_A","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"GoQ7Eqwm-T_lhS8uC7Tjcg","sid":"2F69BEC912B0520A4B6513F321C2FC4C","sub":"3d7e4a3a-857b-4e14-a77b-e59a79e5996d","auth_time":1699933214,"idp":"aad","amr":["external"],"email":"EKyaw@synergyonline.com","preferred_username":"fapl-keric@safra.sg","unique_name":"fapl-keric@safra.sg","loginname":"EKyaw@synergyonline.com","name":"Kyaw Eric"},"expires_at":1699936814}`,
    R_active_location_uat: `{"id":"b0967328-3ff2-4977-93b1-08d9af1689ee","name":"SAFRA HQ"}`,
    R_safra_client_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzMzUxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE2OTk5MzMyMTUsImF0X2hhc2giOiJSNHNabkZvalBybmFYX1luUnFSa2FBIiwic19oYXNoIjoiR29RN0Vxd20tVF9saFM4dUM3VGpjZyIsInNpZCI6IjJGNjlCRUM5MTJCMDUyMEE0QjY1MTNGMzIxQzJGQzRDIiwic3ViIjoiM2Q3ZTRhM2EtODU3Yi00ZTE0LWE3N2ItZTU5YTc5ZTU5OTZkIiwiYXV0aF90aW1lIjoxNjk5OTMzMjE0LCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.x9WAt7kF6HJQLpTRo1T3HdXJsH8i8kR0nnaQb8gEGH0xogmo20jMMSh_PZM3HZBWjQocSNlIiUp5Pq_8fZfTn2w4sv1u2q2bo70G0CQ4ImF8DZqOy8YedStFSb2c7w08LjPwp7wMxUnpPI_ciRAP4bzh7cIvNAQM7GUDsZ74bmrHY3iweBkQA69TE6AE6TvrusXYDCD3FYaL7VpRFdOnPDUAODAcU8kkQg3_ULaa_26MmFKfKne-raogmz5iFcRR0aRLSFbQGRKFXSl7_xNDMBi74BZTQAiWQLEERIzLMsUtYfuYHg1PlLOeos67EYRbQYgxWvxT3gHhKrCTpUdsIA","session_state":"cPLiw-RH6e1zsuw5kXTBsivaKbKHzQyVDTzOAOrpEUk.C570FA21B09739043B8C7CA90FC52E53","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzNjgxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiIzZDdlNGEzYS04NTdiLTRlMTQtYTc3Yi1lNTlhNzllNTk5NmQiLCJhdXRoX3RpbWUiOjE2OTk5MzMyMTQsImlkcCI6ImFhZCIsImVtYWlsIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiS3lhdyBFcmljIiwianRpIjoiNTkxMjU0NUIzMDk2ODdFRjQ4NzkyOTA4NDA5NTI4MkIiLCJzaWQiOiIyRjY5QkVDOTEyQjA1MjBBNEI2NTEzRjMyMUMyRkM0QyIsImlhdCI6MTY5OTkzMzIxNSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.xx1d-0oMs8cjDvU2Zcxo6fmG9-2QnVXzrmjrD40hg1nQpAyn_ZvstCk8SQe-5Xn7RR-aII-MbkBOwMKlSAIwbIjeXyyPDe9CXOrixELXSR-Zyqh7CUKOGkglDr0uSZ0xTl8Lv4xrj4XuOn6ArKK0jCpXrqRYQQaqyXYCTjizQcRcKQqKxEj3sFW3Cuw0YQbp5Ha2Esk33VCBMln2JgGBSI97nE30wItlzLBFW_WlTCD5xZzw1-mBzVn4XAHldO-vuPTW3StoM4qwscNewdfoKD4hj3bhuTZIDhVQU2PbtMN58QAbITT_bLQoZ6uGuQ_UgO0HEbST-NisUxbUc6-H_A","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"GoQ7Eqwm-T_lhS8uC7Tjcg","sid":"2F69BEC912B0520A4B6513F321C2FC4C","sub":"3d7e4a3a-857b-4e14-a77b-e59a79e5996d","auth_time":1699933214,"idp":"aad","amr":["external"],"email":"EKyaw@synergyonline.com","preferred_username":"fapl-keric@safra.sg","unique_name":"fapl-keric@safra.sg","loginname":"EKyaw@synergyonline.com","name":"Kyaw Eric"},"expires_at":1699936814}`

}
export default login

