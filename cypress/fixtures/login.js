const login = {

    authenticated_user: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkU4OEUxOUVDNEMzRTUzQThBNDQ3RDE4RjBBNDU0QTM2IiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NzU5MTE3NDMsImV4cCI6MTY3NTkxMjA0MywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6InNhZnJhLmNsaWVudCIsImlhdCI6MTY3NTkxMTc0MywiYXRfaGFzaCI6IlRrZXcyZVVPcUtnanFOdHM2UGpVY1EiLCJzX2hhc2giOiIzUHZvcnZjZEtydThoVXI1bmlwOGRRIiwic2lkIjoiOTNEM0UyOEY4QkZDQkQ1OTUzNUIwRkJERDNGNTgyNzQiLCJzdWIiOiJkMmE2YWFkMy02NGI2LTRhZGEtYTNiZC1iM2M3NWIzOTg0MzAiLCJhdXRoX3RpbWUiOjE2NzU5MTA1NTIsImlkcCI6ImFhZCIsImFtciI6WyJleHRlcm5hbCJdfQ.DPaYnccLExtHJn0uEQ2OS3IJigY1xNp9ZzxuhvcpwYjKplBfqd6iUn4gSnsJlk9zkJX3AuBnCTSgtXzsgWZd0Rg84jeWXYG2CAPXR3CsW1PBHG4RaKFo8nXlvqj4W6px_OV21sYTvqhOjQzsL7CZgzCZh6kYWdOTab6ccjFVXcPQb8LRckYOVr7BSYX_Zr1hKBVZoEynPGNpNwCkSuK3Hv5zBw4OTfER4ACCKoKHxIcEavaP7NS58Uy6CRZKkl3dztDQ5Sray3rv0Z1hHVh2kPz0txJgyOLffDglhq1pQYOFNb9m5nhImohtXI88TfzEAvOTasn19Jq2meCJ45bS4Q","session_state":"x_W_NPcuUG9tS0AWDLLCOmT3mT8i4eK9p2TVAfOegRA.AED7957D97F1F6E896EBD9DAC1D83E9F","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkU4OEUxOUVDNEMzRTUzQThBNDQ3RDE4RjBBNDU0QTM2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzU5MTE3NDMsImV4cCI6MTY3NTkxNTM0MywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6Imh0dHBzOi8vbG9naW4ucWEtc21jbXMuc2FmcmEuc2cvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoic2FmcmEuY2xpZW50Iiwic3ViIjoiZDJhNmFhZDMtNjRiNi00YWRhLWEzYmQtYjNjNzViMzk4NDMwIiwiYXV0aF90aW1lIjoxNjc1OTEwNTUyLCJpZHAiOiJhYWQiLCJlbWFpbCI6ImZzaGFoemFkYUBzeW5lcmd5b25saW5lLmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6IkZTaGFoemFkYUBzeW5lcmd5b25saW5lLmNvbSIsInVuaXF1ZV9uYW1lIjoiRlNoYWh6YWRhQHN5bmVyZ3lvbmxpbmUuY29tIiwibG9naW5uYW1lIjoiZnNoYWh6YWRhQHN5bmVyZ3lvbmxpbmUuY29tIiwibmFtZSI6IkZhd2FkIFNoYWh6YWRhIiwianRpIjoiNkUxRENGMTU3QTM1MDVGNDRCNUJFNEU5MDVFNjUzMjIiLCJzaWQiOiI5M0QzRTI4RjhCRkNCRDU5NTM1QjBGQkREM0Y1ODI3NCIsImlhdCI6MTY3NTkxMTc0Mywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.ZL870j4aDr0wxOF3yJ1uEACw9rmlIlgaxJLH7wudnzlh-TrR0m_s_1SaXa-f3LbtWC0sJhmqqodPU7POrUUJCAxVxdnERn7RT79nn7yZNPyZ-aWcZ4ZasaQsRmANby5Nrdx3Ss1OQciIkJMQLmxBK1g9AMp0Vc1cUGhTB7N_sqj7OZpRRb5Qn56AHbMfgUiBxFaIW_z_AXH2h175HdDiio6IeTlnvZk-kes449I_cGjfpBtdWWID8awEzOf8BMX_NuE6XWeWdQiSpAgww0vsgFO0KHVlqeGikmpWqa1xCnnkpM4kVRebutxSZHl-RRLamNsFJtwSqYqW3ey7lHY1EQ","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"3PvorvcdKru8hUr5nip8dQ","sid":"93D3E28F8BFCBD59535B0FBDD3F58274","sub":"d2a6aad3-64b6-4ada-a3bd-b3c75b398430","auth_time":1675910552,"idp":"aad","amr":["external"],"email":"fshahzada@synergyonline.com","preferred_username":"FShahzada@synergyonline.com","unique_name":"FShahzada@synergyonline.com","loginname":"fshahzada@synergyonline.com","name":"Fawad Shahzada"},"expires_at":1675915343,"state":{"sourceUrl":"/membership/e1GymMembershipRenewalAdviceList?pageNumber=1&pageSize=20&orderBy=interestGroupRenewalAdviceNumber"}}`,
    active_location: `{"name":"SAFRA Jurong","id":"2E081645-6FAB-4E57-93B2-08D9AF1689EE"}`,
    safra_client: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkU4OEUxOUVDNEMzRTUzQThBNDQ3RDE4RjBBNDU0QTM2IiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NzU5MTE3NDMsImV4cCI6MTY3NTkxMjA0MywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6InNhZnJhLmNsaWVudCIsImlhdCI6MTY3NTkxMTc0MywiYXRfaGFzaCI6IlRrZXcyZVVPcUtnanFOdHM2UGpVY1EiLCJzX2hhc2giOiIzUHZvcnZjZEtydThoVXI1bmlwOGRRIiwic2lkIjoiOTNEM0UyOEY4QkZDQkQ1OTUzNUIwRkJERDNGNTgyNzQiLCJzdWIiOiJkMmE2YWFkMy02NGI2LTRhZGEtYTNiZC1iM2M3NWIzOTg0MzAiLCJhdXRoX3RpbWUiOjE2NzU5MTA1NTIsImlkcCI6ImFhZCIsImFtciI6WyJleHRlcm5hbCJdfQ.DPaYnccLExtHJn0uEQ2OS3IJigY1xNp9ZzxuhvcpwYjKplBfqd6iUn4gSnsJlk9zkJX3AuBnCTSgtXzsgWZd0Rg84jeWXYG2CAPXR3CsW1PBHG4RaKFo8nXlvqj4W6px_OV21sYTvqhOjQzsL7CZgzCZh6kYWdOTab6ccjFVXcPQb8LRckYOVr7BSYX_Zr1hKBVZoEynPGNpNwCkSuK3Hv5zBw4OTfER4ACCKoKHxIcEavaP7NS58Uy6CRZKkl3dztDQ5Sray3rv0Z1hHVh2kPz0txJgyOLffDglhq1pQYOFNb9m5nhImohtXI88TfzEAvOTasn19Jq2meCJ45bS4Q","session_state":"x_W_NPcuUG9tS0AWDLLCOmT3mT8i4eK9p2TVAfOegRA.AED7957D97F1F6E896EBD9DAC1D83E9F","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkU4OEUxOUVDNEMzRTUzQThBNDQ3RDE4RjBBNDU0QTM2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzU5MTE3NDMsImV4cCI6MTY3NTkxNTM0MywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5xYS1zbWNtcy5zYWZyYS5zZyIsImF1ZCI6Imh0dHBzOi8vbG9naW4ucWEtc21jbXMuc2FmcmEuc2cvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoic2FmcmEuY2xpZW50Iiwic3ViIjoiZDJhNmFhZDMtNjRiNi00YWRhLWEzYmQtYjNjNzViMzk4NDMwIiwiYXV0aF90aW1lIjoxNjc1OTEwNTUyLCJpZHAiOiJhYWQiLCJlbWFpbCI6ImZzaGFoemFkYUBzeW5lcmd5b25saW5lLmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6IkZTaGFoemFkYUBzeW5lcmd5b25saW5lLmNvbSIsInVuaXF1ZV9uYW1lIjoiRlNoYWh6YWRhQHN5bmVyZ3lvbmxpbmUuY29tIiwibG9naW5uYW1lIjoiZnNoYWh6YWRhQHN5bmVyZ3lvbmxpbmUuY29tIiwibmFtZSI6IkZhd2FkIFNoYWh6YWRhIiwianRpIjoiNkUxRENGMTU3QTM1MDVGNDRCNUJFNEU5MDVFNjUzMjIiLCJzaWQiOiI5M0QzRTI4RjhCRkNCRDU5NTM1QjBGQkREM0Y1ODI3NCIsImlhdCI6MTY3NTkxMTc0Mywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.ZL870j4aDr0wxOF3yJ1uEACw9rmlIlgaxJLH7wudnzlh-TrR0m_s_1SaXa-f3LbtWC0sJhmqqodPU7POrUUJCAxVxdnERn7RT79nn7yZNPyZ-aWcZ4ZasaQsRmANby5Nrdx3Ss1OQciIkJMQLmxBK1g9AMp0Vc1cUGhTB7N_sqj7OZpRRb5Qn56AHbMfgUiBxFaIW_z_AXH2h175HdDiio6IeTlnvZk-kes449I_cGjfpBtdWWID8awEzOf8BMX_NuE6XWeWdQiSpAgww0vsgFO0KHVlqeGikmpWqa1xCnnkpM4kVRebutxSZHl-RRLamNsFJtwSqYqW3ey7lHY1EQ","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"3PvorvcdKru8hUr5nip8dQ","sid":"93D3E28F8BFCBD59535B0FBDD3F58274","sub":"d2a6aad3-64b6-4ada-a3bd-b3c75b398430","auth_time":1675910552,"idp":"aad","amr":["external"],"email":"fshahzada@synergyonline.com","preferred_username":"FShahzada@synergyonline.com","unique_name":"FShahzada@synergyonline.com","loginname":"fshahzada@synergyonline.com","name":"Fawad Shahzada"},"expires_at":1675915343,"state":{"sourceUrl":"/membership/e1GymMembershipRenewalAdviceList?pageNumber=1&pageSize=20&orderBy=interestGroupRenewalAdviceNumber"}}`,

    // authenticated_user_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCQTMyNUE3RjVDQjJDODVEMkYxQzI4QzlEOTkzNjk4IiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NzQ2Mzc1NjMsImV4cCI6MTY3NDYzNzg2MywiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE2NzQ2Mzc1NjMsImF0X2hhc2giOiJscGNVQ1d0elVHTXZFWE5MZnBFM1JBIiwic19oYXNoIjoiZVU1amhIVFRLNjZYQzFzRmE5b2hIdyIsInNpZCI6IkE1OEI5NDJGNTIyMjIyQ0M4MjU4NTQ4NTZDNDAxMkIxIiwic3ViIjoiYTM4MjU2MmEtMmVhMi00ZjE5LTkzZTUtMDgyYjZlMmJiMzI2IiwiYXV0aF90aW1lIjoxNjc0NjI3NjE3LCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.xIvaQyvtLsYiYGUDv0N-bq9LMYlhAK9JOmemG3dCp2aQLrNgNJX_ADqa-dPQjIGqtJicoQmusWrSKJ2iXIijCZ-2mUm63TD_DUJb3xJR9BA77qzNRthnnUxujuim-wiUqB0v-QhdX5n7xN-ccj-txt4fVM3TYkF52E4E81n-7_geWh1Rl7WTBirQDqtV9Ys4URbLUTzeRYbSacT9ya7uqnn6ympXEAm3MA8Myl0tnVZ6uZcDMPPwOPysY6qGk2GYKVVWfaZrMIcMz3FMkQaPmGeNS5yLMHrP5QVMlamN8Ylw-E-E1MH6lh5MK2fyxYYhOjNM8Gv8yICLtH7sv0qcPQ","session_state":"51WEDMh3U9KT8t8jChPti1Q8O1ltOr0wd3_Cs-vRPrY.BC0380604EB88D8ABC80D48AE626C569","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCQTMyNUE3RjVDQjJDODVEMkYxQzI4QzlEOTkzNjk4IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzQ2Mzc1NjMsImV4cCI6MTY3NDY0MTE2MywiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiJhMzgyNTYyYS0yZWEyLTRmMTktOTNlNS0wODJiNmUyYmIzMjYiLCJhdXRoX3RpbWUiOjE2NzQ2Mjc2MTcsImlkcCI6ImFhZCIsImVtYWlsIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiVHJhbiBIdW5nIiwianRpIjoiNjExMUNDMjhCNTkyNjY0QjlEMDBGNjMyRUMxNEVCRDEiLCJzaWQiOiJBNThCOTQyRjUyMjIyMkNDODI1ODU0ODU2QzQwMTJCMSIsImlhdCI6MTY3NDYzNzU2Mywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.Xm9o9EB2ITwPp4jLCVA7VM-rRVEbKnPFxAaQdlkPab3Nyw-FRJfijiyY_HPn-2Srx4r1-cenvAWNKO6UxvrrhGOrFnBkerDQPhvFUD4NoNrf8DZzW6DyFhtE6Bb9q7PVry4P7CKzdUJGPKgi3k1AL2sgDIK4Zfk3ltXjDYFtHVEFqTauXzPUN0hghPZbiwEg6kl99D-ARygL8LZN-BmYhtKubAHUbe8iO15xWwN5U3sIkUqk4ghVutSqmsUOUa4kyGdJ7yVfogHjmG2fkRYKBKYR2XNlRBsampQGEAV8HnVQtdJuuGIt7I006XHGUdh3kseaO8mmMo6Ds2gxw9Y5eA","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"eU5jhHTTK66XC1sFa9ohHw","sid":"A58B942F522222CC825854856C4012B1","sub":"a382562a-2ea2-4f19-93e5-082b6e2bb326","auth_time":1674627617,"idp":"aad","amr":["external"],"email":"HTran@synergyonline.com","preferred_username":"fapl-thung@safra.sg","unique_name":"fapl-thung@safra.sg","loginname":"HTran@synergyonline.com","name":"Tran Hung"},"expires_at":1674641163}`,
    // active_location_uat: `{"name":"SAFRA Jurong","id":"2E081645-6FAB-4E57-93B2-08D9AF1689EE"}`,
    // safra_client_uat: `{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCQTMyNUE3RjVDQjJDODVEMkYxQzI4QzlEOTkzNjk4IiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NzQ2Mzc1NjMsImV4cCI6MTY3NDYzNzg2MywiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJzYWZyYS5jbGllbnQiLCJpYXQiOjE2NzQ2Mzc1NjMsImF0X2hhc2giOiJscGNVQ1d0elVHTXZFWE5MZnBFM1JBIiwic19oYXNoIjoiZVU1amhIVFRLNjZYQzFzRmE5b2hIdyIsInNpZCI6IkE1OEI5NDJGNTIyMjIyQ0M4MjU4NTQ4NTZDNDAxMkIxIiwic3ViIjoiYTM4MjU2MmEtMmVhMi00ZjE5LTkzZTUtMDgyYjZlMmJiMzI2IiwiYXV0aF90aW1lIjoxNjc0NjI3NjE3LCJpZHAiOiJhYWQiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.xIvaQyvtLsYiYGUDv0N-bq9LMYlhAK9JOmemG3dCp2aQLrNgNJX_ADqa-dPQjIGqtJicoQmusWrSKJ2iXIijCZ-2mUm63TD_DUJb3xJR9BA77qzNRthnnUxujuim-wiUqB0v-QhdX5n7xN-ccj-txt4fVM3TYkF52E4E81n-7_geWh1Rl7WTBirQDqtV9Ys4URbLUTzeRYbSacT9ya7uqnn6ympXEAm3MA8Myl0tnVZ6uZcDMPPwOPysY6qGk2GYKVVWfaZrMIcMz3FMkQaPmGeNS5yLMHrP5QVMlamN8Ylw-E-E1MH6lh5MK2fyxYYhOjNM8Gv8yICLtH7sv0qcPQ","session_state":"51WEDMh3U9KT8t8jChPti1Q8O1ltOr0wd3_Cs-vRPrY.BC0380604EB88D8ABC80D48AE626C569","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCQTMyNUE3RjVDQjJDODVEMkYxQzI4QzlEOTkzNjk4IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzQ2Mzc1NjMsImV4cCI6MTY3NDY0MTE2MywiaXNzIjoiaHR0cHM6Ly9sb2dpbi11YXQtc21jbXMuc2FmcmEuc2ciLCJhdWQiOiJodHRwczovL2xvZ2luLXVhdC1zbWNtcy5zYWZyYS5zZy9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJzYWZyYS5jbGllbnQiLCJzdWIiOiJhMzgyNTYyYS0yZWEyLTRmMTktOTNlNS0wODJiNmUyYmIzMjYiLCJhdXRoX3RpbWUiOjE2NzQ2Mjc2MTcsImlkcCI6ImFhZCIsImVtYWlsIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwidW5pcXVlX25hbWUiOiJmYXBsLXRodW5nQHNhZnJhLnNnIiwibG9naW5uYW1lIjoiSFRyYW5Ac3luZXJneW9ubGluZS5jb20iLCJuYW1lIjoiVHJhbiBIdW5nIiwianRpIjoiNjExMUNDMjhCNTkyNjY0QjlEMDBGNjMyRUMxNEVCRDEiLCJzaWQiOiJBNThCOTQyRjUyMjIyMkNDODI1ODU0ODU2QzQwMTJCMSIsImlhdCI6MTY3NDYzNzU2Mywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNjb3BlMSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.Xm9o9EB2ITwPp4jLCVA7VM-rRVEbKnPFxAaQdlkPab3Nyw-FRJfijiyY_HPn-2Srx4r1-cenvAWNKO6UxvrrhGOrFnBkerDQPhvFUD4NoNrf8DZzW6DyFhtE6Bb9q7PVry4P7CKzdUJGPKgi3k1AL2sgDIK4Zfk3ltXjDYFtHVEFqTauXzPUN0hghPZbiwEg6kl99D-ARygL8LZN-BmYhtKubAHUbe8iO15xWwN5U3sIkUqk4ghVutSqmsUOUa4kyGdJ7yVfogHjmG2fkRYKBKYR2XNlRBsampQGEAV8HnVQtdJuuGIt7I006XHGUdh3kseaO8mmMo6Ds2gxw9Y5eA","token_type":"Bearer","scope":"openid profile scope1","profile":{"s_hash":"eU5jhHTTK66XC1sFa9ohHw","sid":"A58B942F522222CC825854856C4012B1","sub":"a382562a-2ea2-4f19-93e5-082b6e2bb326","auth_time":1674627617,"idp":"aad","amr":["external"],"email":"HTran@synergyonline.com","preferred_username":"fapl-thung@safra.sg","unique_name":"fapl-thung@safra.sg","loginname":"HTran@synergyonline.com","name":"Tran Hung"},"expires_at":1674641163}`

}
export default login
