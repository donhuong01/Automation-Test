const login = {

    authenticated_user: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjA0QTMyMzY5NDYzMDhDNjhGNzE4RDRDQTM0MkRFREUzIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NzQwNTgyMjMsImV4cCI6MTY3NDA1ODUyMywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6InNhZnJhLmNsaWVudCIsImlhdCI6MTY3NDA1ODIyMywiYXRfaGFzaCI6IlpJbDlsejFySjF5WTByYUlGUmJuWHciLCJzX2hhc2giOiJVN2RMaGdkczJ5Yl96YWtBVGF3Y1J3Iiwic2lkIjoiM0IzQURBNTYzQTEwRTVDMTQ2MjBFNjEzNDJBQUQ1Q0MiLCJzdWIiOiJkMmE2YWFkMy02NGI2LTRhZGEtYTNiZC1iM2M3NWIzOTg0MzAiLCJhdXRoX3RpbWUiOjE2NzQwNTUzNDksImlkcCI6ImFhZCIsImFtciI6WyJleHRlcm5hbCJdfQ.SQa6sX3APVDIdA3cM3A2wQ72qVFoVqzRGbcuLtfSO7uNODi6E1P1WfYWQMMfuPGnkaMKzd2pdfAPm0T50PIKbOFv7uZELYkq85kOEvyp4ntE-drvnGsDx56BqWCZhke6GWYXw5dn0satzLFwY_oTrRbF0-mCjeOiyQ5te6sc6QE90pzoUKAxM2is6v7N8pRICgbvp1QdPrxZYphLm7X68wXiVDhTWsISDULRwk97SYj4Pxhevn9HDzM2xrriHgxW_S8PMt4J78jOmpdlWe58X80UbnA8jml51_uMYUk0fwtHGlJO3C109ioAl7htWSyFvvWaRO993F9TpWx_jiVZ7Q","session_state":"1tsHAMAYrsuwAp7M5ANM1ayvK081s4JWGrRL5kekZPg.4B7C57D46F122B0400FB9DD2D95C0CC4","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjA0QTMyMzY5NDYzMDhDNjhGNzE4RDRDQTM0MkRFREUzIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzQwNTgyMjMsImV4cCI6MTY3NDA2MTgyMywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6Imh0dHBzOi8vbG9naW4ucWEtc21jbXMuc2FmcmEuc2cvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoic2FmcmEuY2xpZW50Iiwic3ViIjoiZDJhNmFhZDMtNjRiNi00YWRhLWEzYmQtYjNjNzViMzk4NDMwIiwiYXV0aF90aW1lIjoxNjc0MDU1MzQ5LCJpZHAiOiJhYWQiLCJlbWFpbCI6ImZzaGFoemFkYUBzeW5lcmd5b25saW5lLmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6IkZTaGFoemFkYUBzeW5lcmd5b25saW5lLmNvbSIsInVuaXF1ZV9uYW1lIjoiRlNoYWh6YWRhQHN5bmVyZ3lvbmxpbmUuY29tIiwibG9naW5uYW1lIjoiZnNoYWh6YWRhQHN5bmVyZ3lvbmxpbmUuY29tIiwibmFtZSI6IkZhd2FkIFNoYWh6YWRhIiwianRpIjoiMkVGNEI5QzZDRTMyNUNEOTMyOUFFOTY1NjE3NEU2MUUiLCJzaWQiOiIzQjNBREE1NjNBMTBFNUMxNDYyMEU2MTM0MkFBRDVDQyIsImlhdCI6MTY3NDA1ODIyMywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.K6m3tPU0EEOJKKZbxD3XdZEWkraO6VPZwqkHPBrJSTAYygNutREyqcOjuir1WLgspogVqdusc26OCXxKCwHMsamZ8OoQ8Xl0hcP7xQMa-B_InFniKR1wk4_7JhHjKoW8FrDyrAoie5_F6PYOcXMARcdMyJjdy1_XymGaEQLyCQB-LTXvFiridlgQBT5Qoe-SDW8MxY2m_qmj7P6CeI1nLTLDTOXLJPWMu52lwR4paIgToVYd1U0ES2KZrsCDZi0i9tQSKx4T7HeehOiPE7MZ1SC2WgWhOqeFzxnQVcJubuwmmPGM028qEcaforq2yUj-9P4TJpm1BzKGuvnEyP8uVg","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"U7dLhgds2yb_zakATawcRw","sid":"3B3ADA563A10E5C14620E61342AAD5CC","sub":"d2a6aad3-64b6-4ada-a3bd-b3c75b398430","auth_time":1674055349,"idp":"aad","amr":["external"],"email":"fshahzada@synergyonline.com","preferred_username":"FShahzada@synergyonline.com","unique_name":"FShahzada@synergyonline.com","loginname":"fshahzada@synergyonline.com","name":"Fawad Shahzada"},"expires_at":1674061822,"state":{"sourceUrl":"/facilities/bookingDetail"}}`,
    active_location: `{"name":"SAFRA Jurong","id":"2E081645-6FAB-4E57-93B2-08D9AF1689EE"}`,
    safra_client: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjA0QTMyMzY5NDYzMDhDNjhGNzE4RDRDQTM0MkRFREUzIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NzQwNTgyMjMsImV4cCI6MTY3NDA1ODUyMywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6InNhZnJhLmNsaWVudCIsImlhdCI6MTY3NDA1ODIyMywiYXRfaGFzaCI6IlpJbDlsejFySjF5WTByYUlGUmJuWHciLCJzX2hhc2giOiJVN2RMaGdkczJ5Yl96YWtBVGF3Y1J3Iiwic2lkIjoiM0IzQURBNTYzQTEwRTVDMTQ2MjBFNjEzNDJBQUQ1Q0MiLCJzdWIiOiJkMmE2YWFkMy02NGI2LTRhZGEtYTNiZC1iM2M3NWIzOTg0MzAiLCJhdXRoX3RpbWUiOjE2NzQwNTUzNDksImlkcCI6ImFhZCIsImFtciI6WyJleHRlcm5hbCJdfQ.SQa6sX3APVDIdA3cM3A2wQ72qVFoVqzRGbcuLtfSO7uNODi6E1P1WfYWQMMfuPGnkaMKzd2pdfAPm0T50PIKbOFv7uZELYkq85kOEvyp4ntE-drvnGsDx56BqWCZhke6GWYXw5dn0satzLFwY_oTrRbF0-mCjeOiyQ5te6sc6QE90pzoUKAxM2is6v7N8pRICgbvp1QdPrxZYphLm7X68wXiVDhTWsISDULRwk97SYj4Pxhevn9HDzM2xrriHgxW_S8PMt4J78jOmpdlWe58X80UbnA8jml51_uMYUk0fwtHGlJO3C109ioAl7htWSyFvvWaRO993F9TpWx_jiVZ7Q","session_state":"1tsHAMAYrsuwAp7M5ANM1ayvK081s4JWGrRL5kekZPg.4B7C57D46F122B0400FB9DD2D95C0CC4","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjA0QTMyMzY5NDYzMDhDNjhGNzE4RDRDQTM0MkRFREUzIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzQwNTgyMjMsImV4cCI6MTY3NDA2MTgyMywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6Imh0dHBzOi8vbG9naW4ucWEtc21jbXMuc2FmcmEuc2cvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoic2FmcmEuY2xpZW50Iiwic3ViIjoiZDJhNmFhZDMtNjRiNi00YWRhLWEzYmQtYjNjNzViMzk4NDMwIiwiYXV0aF90aW1lIjoxNjc0MDU1MzQ5LCJpZHAiOiJhYWQiLCJlbWFpbCI6ImZzaGFoemFkYUBzeW5lcmd5b25saW5lLmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6IkZTaGFoemFkYUBzeW5lcmd5b25saW5lLmNvbSIsInVuaXF1ZV9uYW1lIjoiRlNoYWh6YWRhQHN5bmVyZ3lvbmxpbmUuY29tIiwibG9naW5uYW1lIjoiZnNoYWh6YWRhQHN5bmVyZ3lvbmxpbmUuY29tIiwibmFtZSI6IkZhd2FkIFNoYWh6YWRhIiwianRpIjoiMkVGNEI5QzZDRTMyNUNEOTMyOUFFOTY1NjE3NEU2MUUiLCJzaWQiOiIzQjNBREE1NjNBMTBFNUMxNDYyMEU2MTM0MkFBRDVDQyIsImlhdCI6MTY3NDA1ODIyMywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.K6m3tPU0EEOJKKZbxD3XdZEWkraO6VPZwqkHPBrJSTAYygNutREyqcOjuir1WLgspogVqdusc26OCXxKCwHMsamZ8OoQ8Xl0hcP7xQMa-B_InFniKR1wk4_7JhHjKoW8FrDyrAoie5_F6PYOcXMARcdMyJjdy1_XymGaEQLyCQB-LTXvFiridlgQBT5Qoe-SDW8MxY2m_qmj7P6CeI1nLTLDTOXLJPWMu52lwR4paIgToVYd1U0ES2KZrsCDZi0i9tQSKx4T7HeehOiPE7MZ1SC2WgWhOqeFzxnQVcJubuwmmPGM028qEcaforq2yUj-9P4TJpm1BzKGuvnEyP8uVg","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"U7dLhgds2yb_zakATawcRw","sid":"3B3ADA563A10E5C14620E61342AAD5CC","sub":"d2a6aad3-64b6-4ada-a3bd-b3c75b398430","auth_time":1674055349,"idp":"aad","amr":["external"],"email":"fshahzada@synergyonline.com","preferred_username":"FShahzada@synergyonline.com","unique_name":"FShahzada@synergyonline.com","loginname":"fshahzada@synergyonline.com","name":"Fawad Shahzada"},"expires_at":1674061822,"state":{"sourceUrl":"/facilities/bookingDetail"}}`,

    // authenticated_user_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4MDg4MzdEODE3QjQwNTIxMDY2MkI1NUMyNTZEMjAyIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NzEwMTM1MTMsImV4cCI6MTY3MTAxMzgxMywiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE2NzEwMTM1MTMsImF0X2hhc2giOiJmUTZVU3Yxck0zTU1oa3pjV3YwRkxBIiwic19oYXNoIjoiUDUyRHFzaGtoMkJpVnhiNFpvSnotZyIsInNpZCI6IjdFMjE5NkJFN0VCOTNBNTUzRjA1NzZEMEJDOTUzRDM4Iiwic3ViIjoiYTM4MjU2MmEtMmVhMi00ZjE5LTkzZTUtMDgyYjZlMmJiMzI2IiwiYXV0aF90aW1lIjoxNjcxMDEwNzYxLCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.PPV3gtQDL00Vfp3SXZ_vsJE3oZAgVF7SLZiYuJstFNN-pKywOvW5dZgYxJwYINkzsCWdfZaACm6Q7Z1rXxFObcull40A41RmkgsjJUGMAt3NBBT7imuI3sqt7EgU1XE9nUiddak7OE_n5glBymqXkRkPgMQiajMkA49Xw-_RMGoRhq23N72-Y-VWJFTXWiNNjz4d8PIjBkxErVdXFQnddqmzsgxtDgX1S4CJ7_QL5ZR_6vPBKT9Yt2U7c-MFEZo8R1g3OlFDFjZHUOPxgoUJnpW2wdq-mHooESi0FUCvyiLUioG3uuDGSUICWZX-9Pt5AYZmYL4hrLZk-sGJSHPu9Q","session_state":"tf-glQjo0PLZhhUswatziGBsaCJI1Vd3S9w7T6JPL4M.685E10596AC56FB29CA5B2E04F2B6520","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4MDg4MzdEODE3QjQwNTIxMDY2MkI1NUMyNTZEMjAyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzEwMTM1MTMsImV4cCI6MTY3MTAxNzExMywiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiJhMzgyNTYyYS0yZWEyLTRmMTktOTNlNS0wODJiNmUyYmIzMjYiLCJhdXRoX3RpbWUiOjE2NzEwMTA3NjEsImlkcCI6ImFhZCIsImVtYWlsIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiVHJhbiBIdW5nIiwianRpIjoiQzM1MDlDQkQ1NkMxQzA3RDEwN0M1NkVDRjg1NzQwMDYiLCJzaWQiOiI3RTIxOTZCRTdFQjkzQTU1M0YwNTc2RDBCQzk1M0QzOCIsImlhdCI6MTY3MTAxMzUxMywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.pA9_BdPXGs2yqq9PKSmkBt72a6NaYYDLdhJBh23tDO6w8sZZHQN7J0qAZtkux9ToPM8UDAJfB4SnS6IcgQunuifwXWVpajfoa_ZyjUv8tKes1xgsX6Or_RjOHQBKGynCfgpVZLXoP0-wNibOf6WHe8ykPQr6bWr9dW7KpaUIJUIvhnzS42cUkVHZux_52wXUxofv6gwuyFm6_eDNS6dx5plk-e0agdrBPJhTQm5qsmwV_dEA96cXKpxXUL55HE0G_LSsMOaUmLrjM8islBG6UrAyE-dvDOMwand4urEpfjZ0t95Fg38xQ3vBSrbWR1kp6UyMoSt5hrnV_7TMff4p2g","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"P52Dqshkh2BiVxb4ZoJz-g","sid":"7E2196BE7EB93A553F0576D0BC953D38","sub":"a382562a-2ea2-4f19-93e5-082b6e2bb326","auth_time":1671010761,"idp":"aad","amr":["external"],"email":"HTran@synergyonline.com","preferred_username":"fapl-thung@safra.sg","unique_name":"fapl-thung@safra.sg","loginname":"HTran@synergyonline.com","name":"Tran Hung"},"expires_at":1671017113}`,
    // active_location_uat: `{"name":"SAFRA Jurong","id":"2E081645-6FAB-4E57-93B2-08D9AF1689EE"}`,
    // safra_client_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4MDg4MzdEODE3QjQwNTIxMDY2MkI1NUMyNTZEMjAyIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NzEwMTM1MTMsImV4cCI6MTY3MTAxMzgxMywiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE2NzEwMTM1MTMsImF0X2hhc2giOiJmUTZVU3Yxck0zTU1oa3pjV3YwRkxBIiwic19oYXNoIjoiUDUyRHFzaGtoMkJpVnhiNFpvSnotZyIsInNpZCI6IjdFMjE5NkJFN0VCOTNBNTUzRjA1NzZEMEJDOTUzRDM4Iiwic3ViIjoiYTM4MjU2MmEtMmVhMi00ZjE5LTkzZTUtMDgyYjZlMmJiMzI2IiwiYXV0aF90aW1lIjoxNjcxMDEwNzYxLCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.PPV3gtQDL00Vfp3SXZ_vsJE3oZAgVF7SLZiYuJstFNN-pKywOvW5dZgYxJwYINkzsCWdfZaACm6Q7Z1rXxFObcull40A41RmkgsjJUGMAt3NBBT7imuI3sqt7EgU1XE9nUiddak7OE_n5glBymqXkRkPgMQiajMkA49Xw-_RMGoRhq23N72-Y-VWJFTXWiNNjz4d8PIjBkxErVdXFQnddqmzsgxtDgX1S4CJ7_QL5ZR_6vPBKT9Yt2U7c-MFEZo8R1g3OlFDFjZHUOPxgoUJnpW2wdq-mHooESi0FUCvyiLUioG3uuDGSUICWZX-9Pt5AYZmYL4hrLZk-sGJSHPu9Q","session_state":"tf-glQjo0PLZhhUswatziGBsaCJI1Vd3S9w7T6JPL4M.685E10596AC56FB29CA5B2E04F2B6520","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4MDg4MzdEODE3QjQwNTIxMDY2MkI1NUMyNTZEMjAyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzEwMTM1MTMsImV4cCI6MTY3MTAxNzExMywiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiJhMzgyNTYyYS0yZWEyLTRmMTktOTNlNS0wODJiNmUyYmIzMjYiLCJhdXRoX3RpbWUiOjE2NzEwMTA3NjEsImlkcCI6ImFhZCIsImVtYWlsIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiVHJhbiBIdW5nIiwianRpIjoiQzM1MDlDQkQ1NkMxQzA3RDEwN0M1NkVDRjg1NzQwMDYiLCJzaWQiOiI3RTIxOTZCRTdFQjkzQTU1M0YwNTc2RDBCQzk1M0QzOCIsImlhdCI6MTY3MTAxMzUxMywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.pA9_BdPXGs2yqq9PKSmkBt72a6NaYYDLdhJBh23tDO6w8sZZHQN7J0qAZtkux9ToPM8UDAJfB4SnS6IcgQunuifwXWVpajfoa_ZyjUv8tKes1xgsX6Or_RjOHQBKGynCfgpVZLXoP0-wNibOf6WHe8ykPQr6bWr9dW7KpaUIJUIvhnzS42cUkVHZux_52wXUxofv6gwuyFm6_eDNS6dx5plk-e0agdrBPJhTQm5qsmwV_dEA96cXKpxXUL55HE0G_LSsMOaUmLrjM8islBG6UrAyE-dvDOMwand4urEpfjZ0t95Fg38xQ3vBSrbWR1kp6UyMoSt5hrnV_7TMff4p2g","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"P52Dqshkh2BiVxb4ZoJz-g","sid":"7E2196BE7EB93A553F0576D0BC953D38","sub":"a382562a-2ea2-4f19-93e5-082b6e2bb326","auth_time":1671010761,"idp":"aad","amr":["external"],"email":"HTran@synergyonline.com","preferred_username":"fapl-thung@safra.sg","unique_name":"fapl-thung@safra.sg","loginname":"HTran@synergyonline.com","name":"Tran Hung"},"expires_at":1671017113}`

}
export default login
