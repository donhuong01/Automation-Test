const login = {

    authenticated_user: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjI3OUI0MzRDQUZBRjU3NEY4OEY5NTQ0OTYyRjY0MDJFIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MTAyOTI2ODcsImV4cCI6MTcxMDI5Mjk4NywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6InNhZnJhLmNsaWVudCIsImlhdCI6MTcxMDI5MjY4NywiYXRfaGFzaCI6IjVRdzF1WnBabU1XMjNDZGh4aXJRakEiLCJzX2hhc2giOiJON18tQlIwOEpRMTBqTTI3YlNoM0dnIiwic2lkIjoiQUE0QjY4MEYwQTlGOUVBNjU1MEMxRDkyQkU5NTlBRDIiLCJzdWIiOiI5MzZiNzAwNi01MGNlLTRjMzctOWM0MC05NDI0NTIzOWZmOTgiLCJhdXRoX3RpbWUiOjE3MTAyOTI2ODYsImlkcCI6ImFhZCIsImFtciI6WyJleHRlcm5hbCJdfQ.jYcLOFcQF0rhhWCrhKm7wvSUbyskiL0RhbYxRFLt3twHgzsoD1ecHVq6aPFdPfIzkqe9sMADPn_AmR-TxtuphGwigAsUr_Ljpn493GKkpTKWHxDAD7JJgSuCfxFqdieJQITXQi0kUOvx9C4dSiq4zvY1UYovXrw6z0ks-ex4PuIQE_IQAnpauSsgd54ZTxNZiOsxRF8nqlxqgaZ43fnYCcvGtYms3T-Yv3YAMd-YvjAavVqhSG-Bzbrvz6VhKE8NCNx2WJmDpRH8NVSATnThnE5GKNcA9Aj_xzIhqYLIZB2lWz_OCQAjaS8pr85HNos4SGbrPW73WY6OX-XTAYmrnw","session_state":"PqbAav9DBLX_s6QSL2RsLK7IRJplV7WEtU7EPlotXE0.FA3FC7900D51473EA12C23C566EF4112","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjI3OUI0MzRDQUZBRjU3NEY4OEY5NTQ0OTYyRjY0MDJFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTAyOTI2ODcsImV4cCI6MTcxMDI5NjI4NywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6Imh0dHBzOi8vbG9naW4ucWEtc21jbXMuc2FmcmEuc2cvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoic2FmcmEuY2xpZW50Iiwic3ViIjoiOTM2YjcwMDYtNTBjZS00YzM3LTljNDAtOTQyNDUyMzlmZjk4IiwiYXV0aF90aW1lIjoxNzEwMjkyNjg2LCJpZHAiOiJhYWQiLCJlbWFpbCI6InJkYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiUkRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJ1bmlxdWVfbmFtZSI6IlJEYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwibG9naW5uYW1lIjoicmRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiUnVuZWwgRGFjcGFubyIsImp0aSI6IkVGMUZFOEM0REFFQzg1RTEwODc3Q0I0NEZFQzlDRjhDIiwic2lkIjoiQUE0QjY4MEYwQTlGOUVBNjU1MEMxRDkyQkU5NTlBRDIiLCJpYXQiOjE3MTAyOTI2ODcsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJzY29wZTEiXSwiYW1yIjpbImV4dGVybmFsIl19.Oim_CIJ1Is59JRN2sEAxwDoKUKSjNwYtdZUYig4XvxHbkeWFPkOgaV5ywMyx0lc7zDPIYDMxyM2YvWooVsECPqRxyweWvJptzep-PTPTe9qaw4jrC8EVwQE5yJ7zSJhKM4VvVpE7S3Lf7oWfuPTCflpG54MhSqAf6gznX2Rq_HqMLzqYQMrIUnDDmU3dD-IzLCEYbuH4mlVNHaZ0dIy5tzl15CcU2yYZwAi2_EPfbra-C2L1Wu5Sba7T7RpWI_ki8CP1tDozhMTPmHhZvueYPHOQUa7_dogZe6zGBUN4eqeCpW2-6j-kec6nyv_HUhJqDKQpcTx42kGBkFJS72hcsw","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"N7_-BR08JQ10jM27bSh3Gg","sid":"AA4B680F0A9F9EA6550C1D92BE959AD2","sub":"936b7006-50ce-4c37-9c40-94245239ff98","auth_time":1710292686,"idp":"aad","amr":["external"],"email":"rdacpano@synergyonline.com","preferred_username":"RDacpano@synergyonline.com","unique_name":"RDacpano@synergyonline.com","loginname":"rdacpano@synergyonline.com","name":"Runel Dacpano"},"expires_at":1710296286}`,
    active_location: `{"name":"SAFRA Jurong","id":"2E081645-6FAB-4E57-93B2-08D9AF1689EE"}`,
    safra_client: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjI3OUI0MzRDQUZBRjU3NEY4OEY5NTQ0OTYyRjY0MDJFIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MTAyOTI2ODcsImV4cCI6MTcxMDI5Mjk4NywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6InNhZnJhLmNsaWVudCIsImlhdCI6MTcxMDI5MjY4NywiYXRfaGFzaCI6IjVRdzF1WnBabU1XMjNDZGh4aXJRakEiLCJzX2hhc2giOiJON18tQlIwOEpRMTBqTTI3YlNoM0dnIiwic2lkIjoiQUE0QjY4MEYwQTlGOUVBNjU1MEMxRDkyQkU5NTlBRDIiLCJzdWIiOiI5MzZiNzAwNi01MGNlLTRjMzctOWM0MC05NDI0NTIzOWZmOTgiLCJhdXRoX3RpbWUiOjE3MTAyOTI2ODYsImlkcCI6ImFhZCIsImFtciI6WyJleHRlcm5hbCJdfQ.jYcLOFcQF0rhhWCrhKm7wvSUbyskiL0RhbYxRFLt3twHgzsoD1ecHVq6aPFdPfIzkqe9sMADPn_AmR-TxtuphGwigAsUr_Ljpn493GKkpTKWHxDAD7JJgSuCfxFqdieJQITXQi0kUOvx9C4dSiq4zvY1UYovXrw6z0ks-ex4PuIQE_IQAnpauSsgd54ZTxNZiOsxRF8nqlxqgaZ43fnYCcvGtYms3T-Yv3YAMd-YvjAavVqhSG-Bzbrvz6VhKE8NCNx2WJmDpRH8NVSATnThnE5GKNcA9Aj_xzIhqYLIZB2lWz_OCQAjaS8pr85HNos4SGbrPW73WY6OX-XTAYmrnw","session_state":"PqbAav9DBLX_s6QSL2RsLK7IRJplV7WEtU7EPlotXE0.FA3FC7900D51473EA12C23C566EF4112","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjI3OUI0MzRDQUZBRjU3NEY4OEY5NTQ0OTYyRjY0MDJFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTAyOTI2ODcsImV4cCI6MTcxMDI5NjI4NywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6Imh0dHBzOi8vbG9naW4ucWEtc21jbXMuc2FmcmEuc2cvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoic2FmcmEuY2xpZW50Iiwic3ViIjoiOTM2YjcwMDYtNTBjZS00YzM3LTljNDAtOTQyNDUyMzlmZjk4IiwiYXV0aF90aW1lIjoxNzEwMjkyNjg2LCJpZHAiOiJhYWQiLCJlbWFpbCI6InJkYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiUkRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJ1bmlxdWVfbmFtZSI6IlJEYWNwYW5vQHN5bmVyZ3lvbmxpbmUuY29tIiwibG9naW5uYW1lIjoicmRhY3Bhbm9Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiUnVuZWwgRGFjcGFubyIsImp0aSI6IkVGMUZFOEM0REFFQzg1RTEwODc3Q0I0NEZFQzlDRjhDIiwic2lkIjoiQUE0QjY4MEYwQTlGOUVBNjU1MEMxRDkyQkU5NTlBRDIiLCJpYXQiOjE3MTAyOTI2ODcsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJzY29wZTEiXSwiYW1yIjpbImV4dGVybmFsIl19.Oim_CIJ1Is59JRN2sEAxwDoKUKSjNwYtdZUYig4XvxHbkeWFPkOgaV5ywMyx0lc7zDPIYDMxyM2YvWooVsECPqRxyweWvJptzep-PTPTe9qaw4jrC8EVwQE5yJ7zSJhKM4VvVpE7S3Lf7oWfuPTCflpG54MhSqAf6gznX2Rq_HqMLzqYQMrIUnDDmU3dD-IzLCEYbuH4mlVNHaZ0dIy5tzl15CcU2yYZwAi2_EPfbra-C2L1Wu5Sba7T7RpWI_ki8CP1tDozhMTPmHhZvueYPHOQUa7_dogZe6zGBUN4eqeCpW2-6j-kec6nyv_HUhJqDKQpcTx42kGBkFJS72hcsw","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"N7_-BR08JQ10jM27bSh3Gg","sid":"AA4B680F0A9F9EA6550C1D92BE959AD2","sub":"936b7006-50ce-4c37-9c40-94245239ff98","auth_time":1710292686,"idp":"aad","amr":["external"],"email":"rdacpano@synergyonline.com","preferred_username":"RDacpano@synergyonline.com","unique_name":"RDacpano@synergyonline.com","loginname":"rdacpano@synergyonline.com","name":"Runel Dacpano"},"expires_at":1710296286}`,

    //Approver - Hung's Token
    authenticated_user_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxNjdDQkE3QzI3M0I4Q0U3MTA2QzVEQkFFNEQ4QTBFIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MDk3MTY4MjIsImV4cCI6MTcwOTcxNzEyMiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE3MDk3MTY4MjIsImF0X2hhc2giOiJnbTBCSEYxaVY5dzQ0cE44YS14MU5RIiwic19oYXNoIjoiU0JVVS1MZmZ5LThDVmRUUnlZdjhYZyIsInNpZCI6IjE4N0U3MENBN0NCOTQ3NUQ3RkU5NTlDRDZGMzQ5NDQxIiwic3ViIjoiYTM4MjU2MmEtMmVhMi00ZjE5LTkzZTUtMDgyYjZlMmJiMzI2IiwiYXV0aF90aW1lIjoxNzA5NzE2ODIxLCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.W7cJbZ3kEwSkn12OXIbxZbXoLYHL5J2ieluDLX4I-uNLnePfY_lxMW1jqDfSSvXDqP5eaxLDm6Fje-2_jUJ6N5gLGyZef-k-j0kd5wz9S8SetGPIroAubQRsZgHpEu4JWMo--WWKKMsnbpiY9esyKtM_1Di7Lqg_Neouh8m0TF_rJ7Cc6bNmTD70kGgmvEYCprRdq8UtMU2wW0H_ZATCZFS0ojpyE-7VIV_s1cetsLP1myUt6VmVwY-a25bqPOble79z62Xd7eYHbw8aMjx3H5JMbUHzu9FGN6C2dkBCE0plFpgQ7iPy6VrLDjJzzkRclt1uqagFLRZoHqB2OKQV3w","session_state":"QeYwV1yodB8YWrlPTZexiuKBswHHjzyzVeEE_pcyfHU.D12D3E37D4EB9C43C6868955F303F3AC","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxNjdDQkE3QzI3M0I4Q0U3MTA2QzVEQkFFNEQ4QTBFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDk3MTY4MjIsImV4cCI6MTcwOTcyMDQyMiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiJhMzgyNTYyYS0yZWEyLTRmMTktOTNlNS0wODJiNmUyYmIzMjYiLCJhdXRoX3RpbWUiOjE3MDk3MTY4MjEsImlkcCI6ImFhZCIsImVtYWlsIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiVHJhbiBIdW5nIiwianRpIjoiQjE3OUZFNzA0RDE2ODM5NDlEREQzMUIxRTY3QUIzQTciLCJzaWQiOiIxODdFNzBDQTdDQjk0NzVEN0ZFOTU5Q0Q2RjM0OTQ0MSIsImlhdCI6MTcwOTcxNjgyMiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.TknMUlJzYrLJJbyY9le4jzS_e6BtmxxTXPzNl8RtVzJ1RoRCX-0lyD0no6Z3kUsUGQOr0USjqDTqF1tGfHaL8IueE4TeRZg76BAoemw3Iud4FsOU4e437GR-xMlTApj4jQe7swHX3l0CWOt7JpPJTat0U3mCHTepRx4v2O0bRb_vdy3eTElWF23eRCKN-xgb0-fANGiiFCe-fiemYAtwWHUt8z5tomZn7tisD2oe42Y4X8outXah6SqTx30vjuAZfwYZQewbiz-VmzBUAiBqbnVJv7ZfXspkdVVIvlIfe_iVCHV7O1pAQ_h86vj6eYU6KVeAOV2VZH25jgzd_3e7Gg","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"SBUU-Lffy-8CVdTRyYv8Xg","sid":"187E70CA7CB9475D7FE959CD6F349441","sub":"a382562a-2ea2-4f19-93e5-082b6e2bb326","auth_time":1709716821,"idp":"aad","amr":["external"],"email":"HTran@synergyonline.com","preferred_username":"fapl-thung@safra.sg","unique_name":"fapl-thung@safra.sg","loginname":"HTran@synergyonline.com","name":"Tran Hung"},"expires_at":1709720421}`,
    active_location_uat: `{"id":"b0967328-3ff2-4977-93b1-08d9af1689ee","name":"SAFRA HQ"}`,
    safra_client_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxNjdDQkE3QzI3M0I4Q0U3MTA2QzVEQkFFNEQ4QTBFIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MDk3MTY4MjIsImV4cCI6MTcwOTcxNzEyMiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE3MDk3MTY4MjIsImF0X2hhc2giOiJnbTBCSEYxaVY5dzQ0cE44YS14MU5RIiwic19oYXNoIjoiU0JVVS1MZmZ5LThDVmRUUnlZdjhYZyIsInNpZCI6IjE4N0U3MENBN0NCOTQ3NUQ3RkU5NTlDRDZGMzQ5NDQxIiwic3ViIjoiYTM4MjU2MmEtMmVhMi00ZjE5LTkzZTUtMDgyYjZlMmJiMzI2IiwiYXV0aF90aW1lIjoxNzA5NzE2ODIxLCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.W7cJbZ3kEwSkn12OXIbxZbXoLYHL5J2ieluDLX4I-uNLnePfY_lxMW1jqDfSSvXDqP5eaxLDm6Fje-2_jUJ6N5gLGyZef-k-j0kd5wz9S8SetGPIroAubQRsZgHpEu4JWMo--WWKKMsnbpiY9esyKtM_1Di7Lqg_Neouh8m0TF_rJ7Cc6bNmTD70kGgmvEYCprRdq8UtMU2wW0H_ZATCZFS0ojpyE-7VIV_s1cetsLP1myUt6VmVwY-a25bqPOble79z62Xd7eYHbw8aMjx3H5JMbUHzu9FGN6C2dkBCE0plFpgQ7iPy6VrLDjJzzkRclt1uqagFLRZoHqB2OKQV3w","session_state":"QeYwV1yodB8YWrlPTZexiuKBswHHjzyzVeEE_pcyfHU.D12D3E37D4EB9C43C6868955F303F3AC","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxNjdDQkE3QzI3M0I4Q0U3MTA2QzVEQkFFNEQ4QTBFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDk3MTY4MjIsImV4cCI6MTcwOTcyMDQyMiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiJhMzgyNTYyYS0yZWEyLTRmMTktOTNlNS0wODJiNmUyYmIzMjYiLCJhdXRoX3RpbWUiOjE3MDk3MTY4MjEsImlkcCI6ImFhZCIsImVtYWlsIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiVHJhbiBIdW5nIiwianRpIjoiQjE3OUZFNzA0RDE2ODM5NDlEREQzMUIxRTY3QUIzQTciLCJzaWQiOiIxODdFNzBDQTdDQjk0NzVEN0ZFOTU5Q0Q2RjM0OTQ0MSIsImlhdCI6MTcwOTcxNjgyMiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.TknMUlJzYrLJJbyY9le4jzS_e6BtmxxTXPzNl8RtVzJ1RoRCX-0lyD0no6Z3kUsUGQOr0USjqDTqF1tGfHaL8IueE4TeRZg76BAoemw3Iud4FsOU4e437GR-xMlTApj4jQe7swHX3l0CWOt7JpPJTat0U3mCHTepRx4v2O0bRb_vdy3eTElWF23eRCKN-xgb0-fANGiiFCe-fiemYAtwWHUt8z5tomZn7tisD2oe42Y4X8outXah6SqTx30vjuAZfwYZQewbiz-VmzBUAiBqbnVJv7ZfXspkdVVIvlIfe_iVCHV7O1pAQ_h86vj6eYU6KVeAOV2VZH25jgzd_3e7Gg","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"SBUU-Lffy-8CVdTRyYv8Xg","sid":"187E70CA7CB9475D7FE959CD6F349441","sub":"a382562a-2ea2-4f19-93e5-082b6e2bb326","auth_time":1709716821,"idp":"aad","amr":["external"],"email":"HTran@synergyonline.com","preferred_username":"fapl-thung@safra.sg","unique_name":"fapl-thung@safra.sg","loginname":"HTran@synergyonline.com","name":"Tran Hung"},"expires_at":1709720421}`,

    //Requestor - Erik's Token
    R_authenticated_user_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzMzUxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE2OTk5MzMyMTUsImF0X2hhc2giOiJSNHNabkZvalBybmFYX1luUnFSa2FBIiwic19oYXNoIjoiR29RN0Vxd20tVF9saFM4dUM3VGpjZyIsInNpZCI6IjJGNjlCRUM5MTJCMDUyMEE0QjY1MTNGMzIxQzJGQzRDIiwic3ViIjoiM2Q3ZTRhM2EtODU3Yi00ZTE0LWE3N2ItZTU5YTc5ZTU5OTZkIiwiYXV0aF90aW1lIjoxNjk5OTMzMjE0LCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.x9WAt7kF6HJQLpTRo1T3HdXJsH8i8kR0nnaQb8gEGH0xogmo20jMMSh_PZM3HZBWjQocSNlIiUp5Pq_8fZfTn2w4sv1u2q2bo70G0CQ4ImF8DZqOy8YedStFSb2c7w08LjPwp7wMxUnpPI_ciRAP4bzh7cIvNAQM7GUDsZ74bmrHY3iweBkQA69TE6AE6TvrusXYDCD3FYaL7VpRFdOnPDUAODAcU8kkQg3_ULaa_26MmFKfKne-raogmz5iFcRR0aRLSFbQGRKFXSl7_xNDMBi74BZTQAiWQLEERIzLMsUtYfuYHg1PlLOeos67EYRbQYgxWvxT3gHhKrCTpUdsIA","session_state":"cPLiw-RH6e1zsuw5kXTBsivaKbKHzQyVDTzOAOrpEUk.C570FA21B09739043B8C7CA90FC52E53","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzNjgxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiIzZDdlNGEzYS04NTdiLTRlMTQtYTc3Yi1lNTlhNzllNTk5NmQiLCJhdXRoX3RpbWUiOjE2OTk5MzMyMTQsImlkcCI6ImFhZCIsImVtYWlsIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiS3lhdyBFcmljIiwianRpIjoiNTkxMjU0NUIzMDk2ODdFRjQ4NzkyOTA4NDA5NTI4MkIiLCJzaWQiOiIyRjY5QkVDOTEyQjA1MjBBNEI2NTEzRjMyMUMyRkM0QyIsImlhdCI6MTY5OTkzMzIxNSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.xx1d-0oMs8cjDvU2Zcxo6fmG9-2QnVXzrmjrD40hg1nQpAyn_ZvstCk8SQe-5Xn7RR-aII-MbkBOwMKlSAIwbIjeXyyPDe9CXOrixELXSR-Zyqh7CUKOGkglDr0uSZ0xTl8Lv4xrj4XuOn6ArKK0jCpXrqRYQQaqyXYCTjizQcRcKQqKxEj3sFW3Cuw0YQbp5Ha2Esk33VCBMln2JgGBSI97nE30wItlzLBFW_WlTCD5xZzw1-mBzVn4XAHldO-vuPTW3StoM4qwscNewdfoKD4hj3bhuTZIDhVQU2PbtMN58QAbITT_bLQoZ6uGuQ_UgO0HEbST-NisUxbUc6-H_A","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"GoQ7Eqwm-T_lhS8uC7Tjcg","sid":"2F69BEC912B0520A4B6513F321C2FC4C","sub":"3d7e4a3a-857b-4e14-a77b-e59a79e5996d","auth_time":1699933214,"idp":"aad","amr":["external"],"email":"EKyaw@synergyonline.com","preferred_username":"fapl-keric@safra.sg","unique_name":"fapl-keric@safra.sg","loginname":"EKyaw@synergyonline.com","name":"Kyaw Eric"},"expires_at":1699936814}`,
    R_active_location_uat: `{"id":"b0967328-3ff2-4977-93b1-08d9af1689ee","name":"SAFRA HQ"}`,
    R_safra_client_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzMzUxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE2OTk5MzMyMTUsImF0X2hhc2giOiJSNHNabkZvalBybmFYX1luUnFSa2FBIiwic19oYXNoIjoiR29RN0Vxd20tVF9saFM4dUM3VGpjZyIsInNpZCI6IjJGNjlCRUM5MTJCMDUyMEE0QjY1MTNGMzIxQzJGQzRDIiwic3ViIjoiM2Q3ZTRhM2EtODU3Yi00ZTE0LWE3N2ItZTU5YTc5ZTU5OTZkIiwiYXV0aF90aW1lIjoxNjk5OTMzMjE0LCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.x9WAt7kF6HJQLpTRo1T3HdXJsH8i8kR0nnaQb8gEGH0xogmo20jMMSh_PZM3HZBWjQocSNlIiUp5Pq_8fZfTn2w4sv1u2q2bo70G0CQ4ImF8DZqOy8YedStFSb2c7w08LjPwp7wMxUnpPI_ciRAP4bzh7cIvNAQM7GUDsZ74bmrHY3iweBkQA69TE6AE6TvrusXYDCD3FYaL7VpRFdOnPDUAODAcU8kkQg3_ULaa_26MmFKfKne-raogmz5iFcRR0aRLSFbQGRKFXSl7_xNDMBi74BZTQAiWQLEERIzLMsUtYfuYHg1PlLOeos67EYRbQYgxWvxT3gHhKrCTpUdsIA","session_state":"cPLiw-RH6e1zsuw5kXTBsivaKbKHzQyVDTzOAOrpEUk.C570FA21B09739043B8C7CA90FC52E53","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzRkU0MzYzNDI3QkNERjE2N0E3N0RBRTIwM0FBMDhFIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTk5MzMyMTUsImV4cCI6MTY5OTkzNjgxNSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiIzZDdlNGEzYS04NTdiLTRlMTQtYTc3Yi1lNTlhNzllNTk5NmQiLCJhdXRoX3RpbWUiOjE2OTk5MzMyMTQsImlkcCI6ImFhZCIsImVtYWlsIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLWtlcmljQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiRUt5YXdAc3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiS3lhdyBFcmljIiwianRpIjoiNTkxMjU0NUIzMDk2ODdFRjQ4NzkyOTA4NDA5NTI4MkIiLCJzaWQiOiIyRjY5QkVDOTEyQjA1MjBBNEI2NTEzRjMyMUMyRkM0QyIsImlhdCI6MTY5OTkzMzIxNSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.xx1d-0oMs8cjDvU2Zcxo6fmG9-2QnVXzrmjrD40hg1nQpAyn_ZvstCk8SQe-5Xn7RR-aII-MbkBOwMKlSAIwbIjeXyyPDe9CXOrixELXSR-Zyqh7CUKOGkglDr0uSZ0xTl8Lv4xrj4XuOn6ArKK0jCpXrqRYQQaqyXYCTjizQcRcKQqKxEj3sFW3Cuw0YQbp5Ha2Esk33VCBMln2JgGBSI97nE30wItlzLBFW_WlTCD5xZzw1-mBzVn4XAHldO-vuPTW3StoM4qwscNewdfoKD4hj3bhuTZIDhVQU2PbtMN58QAbITT_bLQoZ6uGuQ_UgO0HEbST-NisUxbUc6-H_A","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"GoQ7Eqwm-T_lhS8uC7Tjcg","sid":"2F69BEC912B0520A4B6513F321C2FC4C","sub":"3d7e4a3a-857b-4e14-a77b-e59a79e5996d","auth_time":1699933214,"idp":"aad","amr":["external"],"email":"EKyaw@synergyonline.com","preferred_username":"fapl-keric@safra.sg","unique_name":"fapl-keric@safra.sg","loginname":"EKyaw@synergyonline.com","name":"Kyaw Eric"},"expires_at":1699936814}`

}
export default login

