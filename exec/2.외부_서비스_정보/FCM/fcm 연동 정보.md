# 백엔드

> Backend/src/main/resources/certification.json

```json
{
  "type": "service_account",
  "project_id": "ffing-9c142",
  "private_key_id": "dd2dad15d970dbc4286bfb8666a35656703605ea",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDk83LGYBeGF25t\ngDs4W9h376xjHyK47M6/t+R8YWjCRzrYaUEKoLtKjBePHYDRsqbhSmW04WJkLeuP\nRomFSlKEtjvfAlEAcY0gB35vTesNFIXrjHiIkoQTwI0gw7tXai1p3LaTBsALbjl9\nZNwK8Wh2/MxpPauWKjWPw937gmzv2gLUf+BRbH47xoBFTpXXjWBBECeFv/3PdGHJ\nVEzpg8P2O1+rL0+jbmSzxfIfjkBdtbDrfZlZp0GYQw0XneooLKd6n3yt98ewBn2h\nDiXJtrXU+lX1K2ONvuHA+I8KlWMknFuasrCOlNln42SscVbIz7oMeOkKSH9qRZl5\n1gpx0tQTAgMBAAECggEAXnsMgUrESmS/AFcrmR1l3lC83gbKSHAI/dsAYke8eHf2\nk7oTyjP8Nk5LppaxQ1grP8t430UnWloM3IpqU+QQ241sdaI6FSnG6FHPXlVUS4iN\nn1/PmeSEtrX+R2gelntNlGMtwMzHUbBB7zpBCA8JYhj+retyNLzkb5iPsavoEq4o\nLdLAO8bIkGg9KAihU1r1dbu9dHCJepRSoJWQjKt1j+gp8xz66LQ9Qt+jQ1pbpJ9/\nvIr8Hizy5ZI+gE4jN2B6qw2d59W6vPQP4yC0oS2H4LwmmjgIALe3gdBBucoTiKUR\nleoxB8tYWWnnZhv5/1DTI9rcdm3rK1HoLxC5OAgqQQKBgQDy+03d7GECMP/mpLdu\n711OklfDAtCZvw2IDY3zo3fI+58+p1C7X7PsatICXjvfHAAHg6xH3b/xicmYFgqv\n5cFuafgRSUaIUh0dqDdSfA9zzSvDJbHtHasNOAQgVuxKe/cdm2k2Sj+mshQ1dWTU\nAjM1iDwGgukyorZiIFWpAWfPoQKBgQDxN7Oc/jpr969xEG4FJJhfmP6d7cF0X1Qk\n8ukktVXDa9dbdClqMUdA7a99HbhanxP3FKoAP2+eQdzHrxNQBCgEFwWOa+/lRneK\ntThTECTIOSktD2GDJxI1nqSaYEnZbjU95Kvr5LTp9/Gc7CSoJzN9x65UDsaL0aFW\nmJ6jyV0XMwKBgCGLwHxbHimHSk01gH24XlFystshkFspnVyjQm3Yq7j7xEiKIQM9\ne0Gwnb3l9K4g14AyFZ72ZoGaXFK6+E7AkawExVLdovc/HvXxO3IP3rJGKTyP/7iU\n2ADDMw6j8Yt3Ae78fdIY/iCthUy8IGeExj0lyeO8PyXWgQebHzhuET8BAoGAHLOa\nBZYicXJZR8TCso32K3nS4gvGNwiYxIS6xQlmmQgd6d3ah64xYkJl3SdKJk5DW+Tz\njW/+4f/IO2JTk/PKpyHuIVIqi0dlNfX2K7wCBGj4w0nPOoHNot+rikrmvp5ka2bo\nJftio2xDLX7TpcZ0VAUMcygG6+AXqGwkhCyTjQ0CgYAhD10lEBir9Ph217vjJ+kG\nRRtsuCL+5y/xbM1zbJgASFARYsISqkrWYJ1Xu1eiUR4vtL2RB6e4/BJCceTmIr6+\nOsI0RPer2m9bHypSi19pBU8qixXyEH2LTpsjVI2dBzCWI5evVpYNNxZgFDHSgake\nY2zFzhmVo92wSokLGE3bXQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-i2i0u@ffing-9c142.iam.gserviceaccount.com",
  "client_id": "112427857958562728425",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i2i0u%40ffing-9c142.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
```

# Frontend

> Frontend/FFING/.env.production (env 파일 아래쪽에 해당 설정 추가하기)

```.env
VITE_FCM_KEY=BGCPW7Xakus1G_ZjhcAsty4p-S5_s8WUIDFNYdtUSHiwhxdnTRLLKBptKib2TwvAHnkaxly05pdSbml3_Sm_yVg

VITE_APP_FCM_API_KEY=AIzaSyAARBiN91sAOuOWcXLvWdy7yVjPs5LDPFo
VITE_APP_FCM_AUTH_DOMAIN=ffing-9c142.firebaseapp.com
VITE_APP_FCM_PROJECT_ID=ffing-9c142
VITE_APP_FCM_STORAGE_BUCKET=ffing-9c142.appspot.com
VITE_APP_FCM_MESSAGING_SENDER_ID=288287873787
VITE_APP_FCM_APP_ID=1:288287873787:web:ed19eb9f0b101bf3b12e5e
VITE_APP_FCM_MEASUREMENT_ID=G-1KYWB1FN61
```
