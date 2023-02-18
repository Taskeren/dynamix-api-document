# Event Related

To `dynamix-server.c4-cat.com/`

## Enter a Event

### Request

```http
POST //event/enter HTTP/1.1
Host: dynamix-server.c4-cat.com
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Dynamix/316008 CFNetwork/1399 Darwin/22.1.0
Connection: keep-alive
Cookie: connect.sid=s%3A0kyWZ7cyUuPP9mPpiIcPTmIK2eY50sRs.NZE7CDUopqFW8fhthNEUHAd1DiWffq6KkNomWT9EQbk; Path=/; HttpOnly, AWSELB=F94D8FD7168C93D9EB5A7D4E794C46391A7C696D4A835A2209E2AEFED78EEB273CFA1FDD39908B8A35A97378EE6BB559C28CB473C0647DD4B64E598052219C48420CFDC8C0;PATH=/;SAMESITE=None
Accept-Language: zh-TW,zh-Hant;q=0.9
Content-Length: 86
Accept-Encoding: gzip, deflate, br
X-Unity-Version: 2019.4.31f1

credittype=FREE&mapid=_map_Laivisca_M&eventid=2997&assist=&avator=_char_HopefulWarrior
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Sat, 18 Feb 2023 08:09:12 GMT
ETag: W/"da-b07P3qp1+lWqX0JjENQQZUYui8c"
Server: nginx/1.20.0
X-Powered-By: Express
Content-Length: 218
Connection: keep-alive

{"userdata":{"userid":"101786411","freecredit":1,"paidcredit":60,"freecredittime":"1676707585074","assist":1,"frag":171894,"wavetestmap":{"s1":[4,4,4,4,4,4,4,3,3,3,2,2]}},"eventcreditrecord":{"code":"5jJwjgta4JqK0rz"}}
```

## Upload the Result

### Request

```http
POST //event/result HTTP/1.1
Host: dynamix-server.c4-cat.com
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Dynamix/316008 CFNetwork/1399 Darwin/22.1.0
Connection: keep-alive
Cookie: connect.sid=s%3A0kyWZ7cyUuPP9mPpiIcPTmIK2eY50sRs.NZE7CDUopqFW8fhthNEUHAd1DiWffq6KkNomWT9EQbk; Path=/; HttpOnly, AWSELB=F94D8FD7168C93D9EB5A7D4E794C46391A7C696D4A835A2209E2AEFED78EEB273CFA1FDD39908B8A35A97378EE6BB559C28CB473C0647DD4B64E598052219C48420CFDC8C0;PATH=/;SAMESITE=None
Accept-Language: zh-TW,zh-Hant;q=0.9
Content-Length: 41
Accept-Encoding: gzip, deflate, br
X-Unity-Version: 2019.4.31f1

code=5jJwjgta4JqK0rz&clear=T&score=938430
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Sat, 18 Feb 2023 08:11:36 GMT
ETag: W/"8c-Q9EmaXCGe0+uRTk1inOrSigA94E"
Server: nginx/1.20.0
X-Powered-By: Express
Content-Length: 140
Connection: keep-alive

{"eventresult":{"fragBonus":["BASE"],"fragBonusPc":[1542],"frag":1542,"itemRarity":0,"itemid":["FRAG:100","ITEM:_char_Laivisca","FRAG:20"]}}
```

## User Data

### Request

```http
GET //event/userdata HTTP/1.1
Host: dynamix-server.c4-cat.com
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Dynamix/316008 CFNetwork/1399 Darwin/22.1.0
Connection: keep-alive
Cookie: connect.sid=s%3A0kyWZ7cyUuPP9mPpiIcPTmIK2eY50sRs.NZE7CDUopqFW8fhthNEUHAd1DiWffq6KkNomWT9EQbk; Path=/; HttpOnly, AWSELB=F94D8FD7168C93D9EB5A7D4E794C46391A7C696D4A835A2209E2AEFED78EEB273CFA1FDD39908B8A35A97378EE6BB559C28CB473C0647DD4B64E598052219C48420CFDC8C0;PATH=/;SAMESITE=None
Accept-Language: zh-TW,zh-Hant;q=0.9
Content-Length: 0
Accept-Encoding: gzip, deflate, br
X-Unity-Version: 2019.4.31f1

```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Sat, 18 Feb 2023 08:11:37 GMT
ETag: W/"3a2c-G0hiVDKf6c6cUPTg7KJfqZjNRNI"
Server: nginx/1.20.0
X-Powered-By: Express
Content-Length: 14892
Connection: keep-alive

{"userdata":{"userid":"101786411","freecredit":1,"paidcredit":60,"freecredittime":"1676707585074","assist":1,"frag":173536,"wavetestmap":{"s1":[4,4,4,4,4,4,4,3,3,3,2,2]},"frtime":8},"events":[{"eventid":3005,"timestart":"1677297600000","timeend":"1677643200000","info":{"songid":"_wavetest_s1c3","eventType":"WAVE_TEST","maps":[{"mapid":"_map_DreamStarter_N","level":7},{"mapid":"_map_moonlight_N","level":7},{"mapid":"_map_Ornament_H","level":7}]}},{"eventid":3006,"timestart":"1677297600000","timeend":"1677643200000","info":{"songid":"_wavetest_s1c6","eventType":"WAVE_TEST","maps":[{"mapid":"_map_Rising_Soul_H","level":11},{"mapid":"_map_contour_H","level":11},{"mapid":"_map_Bewitched_M","level":11}]}},{"eventid":3007,"timestart":"1677297600000","timeend":"1677643200000","info":{"songid":"_wavetest_s1c9","eventType":"WAVE_TEST","maps":[{"mapid":"_map_lunar_arrow_M","level":13},{"mapid":"_map_HeartEyes_M","level":13},{"mapid":"_map_Energy_M","level":13}]}},{"eventid":2998,"timestart":"1676952000000","timeend":"1677326400000","info":{"songid":"_song_Hong","eventType":"REGULAR","maps":[{"mapid":"_map_Hong_N","level":7},{"mapid":"_map_Hong_H","level":10},{"mapid":"_map_Hong_G","level":15}]}},{"eventid":3002,"timestart":"1676952000000","timeend":"1677297600000","info":{"songid":"_wavetest_s1c2","eventType":"WAVE_TEST","maps":[{"mapid":"_map_teardrops_N","level":5},{"mapid":"_map_Firefly_N","level":5},{"mapid":"_map_EvilsWasComing_N","level":5}]}},{"eventid":3003,"timestart":"1676952000000","timeend":"1677297600000","info":{"songid":"_wavetest_s1c5","eventType":"WAVE_TEST","maps":[{"mapid":"_map_GrapeJelly_H","level":9},{"mapid":"_map_PARALLEL_ADDRESS_H","level":9},{"mapid":"_map_Utopia_H","level":9}]}},{"eventid":3004,"timestart":"1676952000000","timeend":"1677297600000","info":{"songid":"_wavetest_s1c8","eventType":"WAVE_TEST","maps":[{"mapid":"_map_offshore_M","level":13},{"mapid":"_map_BloodChivalry_M","level":13},{"mapid":"_map_GleamStone_M","level":13}]}},{"eventid":2997,"timestart":"1676606401000","timeend":"1676980800000","info":{"songid":"_song_Laivisca","eventType":"REGULAR","maps":[{"mapid":"_map_Laivisca_B","level":1},{"mapid":"_map_Laivisca_N","level":5},{"mapid":"_map_Laivisca_M","level":11}]}},{"eventid":2996,"timestart":"1676606400000","timeend":"1676980800000","info":{"songid":"_song_PhysicalCosmology","eventType":"REGULAR","maps":[{"mapid":"_map_PhysicalCosmology_B","level":3},{"mapid":"_map_PhysicalCosmology_N","level":6},{"mapid":"_map_PhysicalCosmology_H","level":10},{"mapid":"_map_PhysicalCosmology_M","level":14},{"mapid":"_map_PhysicalCosmology_G","level":14}]}},{"eventid":2999,"timestart":"1676606400000","timeend":"1676952000000","info":{"songid":"_wavetest_s1c1","eventType":"WAVE_TEST","maps":[{"mapid":"_map_surrealism_B","level":3},{"mapid":"_map_Voyagers_B","level":3},{"mapid":"_map_anamnesis_B","level":3}]}},{"eventid":3000,"timestart":"1676606400000","timeend":"1676952000000","info":{"songid":"_wavetest_s1c4","eventType":"WAVE_TEST","maps":[{"mapid":"_map_rave-olution_H","level":8},{"mapid":"_map_Forsaken_H","level":8},{"mapid":"_map_reversive_H","level":8}]}},{"eventid":3001,"timestart":"1676606400000","timeend":"1676952000000","info":{"songid":"_wavetest_s1c7","eventType":"WAVE_TEST","maps":[{"mapid":"_map_FengZeoi_M","level":12},{"mapid":"_map_HatsukoiMemories_M","level":12},{"mapid":"_map_Crocus_M","level":12}]}},{"eventid":2995,"timestart":"1676347200000","timeend":"1676721600000","info":{"songid":"_song_Kanashii_Ryuu_to_Kaitul","eventType":"REGULAR","maps":[{"mapid":"_map_Kanashii_Ryuu_to_Kaitul_N","level":6},{"mapid":"_map_Kanashii_Ryuu_to_Kaitul_H","level":11},{"mapid":"_map_Kanashii_Ryuu_to_Kaitul_M","level":12}]}}],"tracks":{"tracks":[{"trackid":1170,"timestart":"1675396800000","timeend":"1676808000000","type":"TIME_LIMIT","info":{"maps":[{"mapid":"_map_RuleTheWorld_B","price":400,"unlocktype":"NONE","unlockreq":"_map_RuleTheWorld_B,_map_RuleTheWorld_N,_map_RuleTheWorld_H"},{"mapid":"_map_RuleTheWorld_N","price":1000,"unlocktype":"NONE","unlockreq":"_map_RuleTheWorld_B,_map_RuleTheWorld_N,_map_RuleTheWorld_H"},{"mapid":"_map_RuleTheWorld_H","price":5000,"unlocktype":"NONE","unlockreq":"_map_RuleTheWorld_N,_map_RuleTheWorld_H"}]}},{"trackid":1171,"timestart":"1675396800000","timeend":"1676808000000","type":"TIME_LIMIT","info":{"maps":[{"mapid":"_map_SakuraFubuki_B","price":400,"unlocktype":"NONE","unlockreq":"_map_SakuraFubuki_B,_map_SakuraFubuki_N,_map_SakuraFubuki_H,_map_SakuraFubuki_M,_map_SakuraFubuki_G"},{"mapid":"_map_SakuraFubuki_N","price":1000,"unlocktype":"NONE","unlockreq":"_map_SakuraFubuki_B,_map_SakuraFubuki_N,_map_SakuraFubuki_H,_map_SakuraFubuki_M,_map_SakuraFubuki_G"},{"mapid":"_map_SakuraFubuki_H","price":5000,"unlocktype":"NONE","unlockreq":"_map_SakuraFubuki_N,_map_SakuraFubuki_H,_map_SakuraFubuki_M,_map_SakuraFubuki_G"},{"mapid":"_map_SakuraFubuki_M","price":11000,"unlocktype":"NONE","unlockreq":"_map_SakuraFubuki_H,_map_SakuraFubuki_M,_map_SakuraFubuki_G"},{"mapid":"_map_SakuraFubuki_G","price":23000,"unlocktype":"NONE","unlockreq":"_map_SakuraFubuki_M,_map_SakuraFubuki_G"}]}},{"trackid":1172,"timestart":"1675742400000","timeend":"1677153600000","type":"TIME_LIMIT","info":{"maps":[{"mapid":"_map_Kanashii_Ryuu_to_Kaitul_N","price":1000,"unlocktype":"NONE","unlockreq":"_map_Kanashii_Ryuu_to_Kaitul_N,_map_Kanashii_Ryuu_to_Kaitul_H,_map_Kanashii_Ryuu_to_Kaitul_M"},{"mapid":"_map_Kanashii_Ryuu_to_Kaitul_H","price":5000,"unlocktype":"NONE","unlockreq":"_map_Kanashii_Ryuu_to_Kaitul_N,_map_Kanashii_Ryuu_to_Kaitul_H,_map_Kanashii_Ryuu_to_Kaitul_M"},{"mapid":"_map_Kanashii_Ryuu_to_Kaitul_M","price":11000,"unlocktype":"NONE","unlockreq":"_map_Kanashii_Ryuu_to_Kaitul_H,_map_Kanashii_Ryuu_to_Kaitul_M"}]}},{"trackid":1174,"timestart":"1676001600000","timeend":"1677412800000","type":"TIME_LIMIT","info":{"maps":[{"mapid":"_map_Laivisca_B","price":400,"unlocktype":"NONE","unlockreq":"_map_Laivisca_B,_map_Laivisca_N,_map_Laivisca_M"},{"mapid":"_map_Laivisca_N","price":1000,"unlocktype":"NONE","unlockreq":"_map_Laivisca_B,_map_Laivisca_N,_map_Laivisca_M"},{"mapid":"_map_Laivisca_M","price":11000,"unlocktype":"NONE","unlockreq":"_map_Laivisca_N,_map_Laivisca_M"}]}},{"trackid":1173,"timestart":"1676001600000","timeend":"1677412800000","type":"TIME_LIMIT","info":{"maps":[{"mapid":"_map_PhysicalCosmology_B","price":400,"unlocktype":"NONE","unlockreq":"_map_PhysicalCosmology_B,_map_PhysicalCosmology_N,_map_PhysicalCosmology_H,_map_PhysicalCosmology_M,_map_PhysicalCosmology_G"},{"mapid":"_map_PhysicalCosmology_N","price":1000,"unlocktype":"NONE","unlockreq":"_map_PhysicalCosmology_B,_map_PhysicalCosmology_N,_map_PhysicalCosmology_H,_map_PhysicalCosmology_M,_map_PhysicalCosmology_G"},{"mapid":"_map_PhysicalCosmology_H","price":5000,"unlocktype":"NONE","unlockreq":"_map_PhysicalCosmology_N,_map_PhysicalCosmology_H,_map_PhysicalCosmology_M,_map_PhysicalCosmology_G"},{"mapid":"_map_PhysicalCosmology_M","price":11000,"unlocktype":"NONE","unlockreq":"_map_PhysicalCosmology_H,_map_PhysicalCosmology_M,_map_PhysicalCosmology_G"},{"mapid":"_map_PhysicalCosmology_G","price":23000,"unlocktype":"NONE","unlockreq":"_map_PhysicalCosmology_M,_map_PhysicalCosmology_G"}]}},{"trackid":1175,"timestart":"1676347200000","timeend":"1677758400000","type":"TIME_LIMIT","info":{"maps":[{"mapid":"_map_Hong_N","price":1000,"unlocktype":"NONE","unlockreq":"_map_Hong_N,_map_Hong_H,_map_Hong_G"},{"mapid":"_map_Hong_H","price":5000,"unlocktype":"NONE","unlockreq":"_map_Hong_N,_map_Hong_H,_map_Hong_G"},{"mapid":"_map_Hong_G","price":23000,"unlocktype":"NONE","unlockreq":"_map_Hong_H,_map_Hong_G"}]}},{"trackid":1,"timestart":"1453248000000","timeend":"1453248000000","type":"PERSIST","info":{"maps":[{"mapid":"_map_YeutHaYengTinGwok_B","levelName":0,"price":400,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_YeutHaYengTinGwok_N","levelName":0,"price":1000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_YeutHaYengTinGwok_H","levelName":0,"price":4000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":2,"timestart":"1453248000000","timeend":"1453248000000","type":"PERSIST","info":{"maps":[{"mapid":"_map_playaday_B","levelName":0,"price":400,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_playaday_N","levelName":0,"price":1000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_playaday_H","levelName":0,"price":4000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":71,"timestart":"1484870400000","timeend":"1484870100001","type":"PERSIST","info":{"maps":[{"mapid":"_map_anamnesis_B","price":400,"unlocktype":"NONE","unlockreq":"s1:1:1"}]}},{"trackid":72,"timestart":"1484870400000","timeend":"1484870100002","type":"PERSIST","info":{"maps":[{"mapid":"_map_EvilsWasComing_N","price":1000,"unlocktype":"NONE","unlockreq":"s1:2:1"}]}},{"trackid":73,"timestart":"1484870400000","timeend":"1484870100003","type":"PERSIST","info":{"maps":[{"mapid":"_map_Ornament_H","price":5000,"unlocktype":"NONE","unlockreq":"s1:3:1"}]}},{"trackid":74,"timestart":"1484870400000","timeend":"1484870200001","type":"PERSIST","info":{"maps":[{"mapid":"_map_reversive_H","price":5000,"unlocktype":"NONE","unlockreq":"s1:4:1"}]}},{"trackid":75,"timestart":"1484870400000","timeend":"1484870200002","type":"PERSIST","info":{"maps":[{"mapid":"_map_Utopia_H","price":5000,"unlocktype":"NONE","unlockreq":"s1:5:1"}]}},{"trackid":76,"timestart":"1484870400000","timeend":"1484870200003","type":"PERSIST","info":{"maps":[{"mapid":"_map_Bewitched_M","price":11000,"unlocktype":"NONE","unlockreq":"s1:6:1"}]}},{"trackid":77,"timestart":"1484870400000","timeend":"1484870300001","type":"PERSIST","info":{"maps":[{"mapid":"_map_Crocus_M","price":11000,"unlocktype":"NONE","unlockreq":"s1:7:1"}]}},{"trackid":78,"timestart":"1484870400000","timeend":"1484870300002","type":"PERSIST","info":{"maps":[{"mapid":"_map_GleamStone_M","price":11000,"unlocktype":"NONE","unlockreq":"s1:8:1"}]}},{"trackid":79,"timestart":"1484870400000","timeend":"1484870300003","type":"PERSIST","info":{"maps":[{"mapid":"_map_Energy_M","price":11000,"unlocktype":"NONE","unlockreq":"s1:9:1"}]}},{"trackid":136,"timestart":"1484870400000","timeend":"1484870400000","type":"PERSIST","info":{"maps":[{"mapid":"_map_Actinium_M","levelName":0,"price":14000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":137,"timestart":"1484870400000","timeend":"1484870400000","type":"PERSIST","info":{"maps":[{"mapid":"_map_Pantomime_M","levelName":0,"price":11111,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":142,"timestart":"1484870400000","timeend":"1484870400000","type":"PERSIST","info":{"maps":[{"mapid":"_map_little_boy_G","levelName":0,"price":30000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":103,"timestart":"1484870400000","timeend":"1484870400000","type":"PERSIST","info":{"maps":[{"mapid":"_map_WorldwideRaveAttack_G","price":23000,"unlocktype":"NONE","unlockreq":"s1:11:1"}]}},{"trackid":102,"timestart":"1484870400000","timeend":"1484870400000","type":"PERSIST","info":{"maps":[{"mapid":"_map_Prime_G","price":23000,"unlocktype":"NONE","unlockreq":"s1:10:1"}]}},{"trackid":134,"timestart":"1509076800000","timeend":"1510488000000","type":"PERSIST","info":{"maps":[{"mapid":"_map_stardust_M","levelName":0,"price":10300,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":135,"timestart":"1509076800000","timeend":"1510488000000","type":"PERSIST","info":{"maps":[{"mapid":"_map_moonlight_M","levelName":0,"price":18888,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":140,"timestart":"1510286400000","timeend":"1511697600000","type":"PERSIST","info":{"maps":[{"mapid":"_map_Firefly_G","levelName":0,"price":30000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":419,"timestart":"1516406400000","timeend":"1516406400000","type":"PERSIST","info":{"maps":[{"mapid":"_map_ceng1fong1_M","levelName":0,"price":8888,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":388,"timestart":"1516406400000","timeend":"1516406400000","type":"PERSIST","info":{"maps":[{"mapid":"_map_HongKongMagician_B","levelName":0,"price":100,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_HongKongMagician_N","levelName":0,"price":200,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_HongKongMagician_H","levelName":0,"price":500,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_HongKongMagician_M","levelName":0,"price":1000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":420,"timestart":"1516406400000","timeend":"1516406400000","type":"PERSIST","info":{"maps":[{"mapid":"_map_axis_M","levelName":0,"price":5555,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":387,"timestart":"1516406400000","timeend":"1516406400000","type":"PERSIST","info":{"maps":[{"mapid":"_map_Meng4Mou4_B","levelName":0,"price":100,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_Meng4Mou4_N","levelName":0,"price":200,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_Meng4Mou4_H","levelName":0,"price":500,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_Meng4Mou4_M","levelName":0,"price":1000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":425,"timestart":"1571976000000","timeend":"1573387200000","type":"PERSIST","info":{"maps":[{"mapid":"_map_decomposition_G","levelName":0,"price":15550,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":426,"timestart":"1571976000000","timeend":"1573387200000","type":"PERSIST","info":{"maps":[{"mapid":"_map_Goldelius_G","levelName":0,"price":12415,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":301,"timestart":"1571630400000","timeend":"1575806400000","type":"PERSIST","info":{"maps":[{"mapid":"_map_Lecielheureux_B","levelName":0,"price":2000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_Lecielheureux_N","levelName":0,"price":5000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_Lecielheureux_H","levelName":0,"price":25000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""},{"mapid":"_map_Lecielheureux_M","levelName":0,"price":55000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":605,"timestart":"1596513600000","timeend":"1597924800000","type":"PERSIST","info":{"maps":[{"mapid":"_map_perspicuus_aestus_G","levelName":0,"price":60000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}},{"trackid":606,"timestart":"1596513600000","timeend":"1597924800000","type":"PERSIST","info":{"maps":[{"mapid":"_map_ceon1guk1_G","levelName":0,"price":60000,"unlocktype":"NONE","unlockreq":"","unlockprogress":""}]}}]}}
```

## `uploadRecord`

### Request

```http
POST //uploadRecord HTTP/1.1
Host: dynamix-server.c4-cat.com
Accept: */*
Content-Type: multipart/form-data; boundary="dr8LfGxTYrtu8xekyGQb0FNzTU3oizW8JJgyWWDr"
User-Agent: Dynamix/316008 CFNetwork/1399 Darwin/22.1.0
Connection: keep-alive
Cookie: connect.sid=s%3A0kyWZ7cyUuPP9mPpiIcPTmIK2eY50sRs.NZE7CDUopqFW8fhthNEUHAd1DiWffq6KkNomWT9EQbk; Path=/; HttpOnly, AWSELB=F94D8FD7168C93D9EB5A7D4E794C46391A7C696D4A835A2209E2AEFED78EEB273CFA1FDD39908B8A35A97378EE6BB559C28CB473C0647DD4B64E598052219C48420CFDC8C0;PATH=/;SAMESITE=None
Accept-Language: zh-TW,zh-Hant;q=0.9
Content-Length: 461
Accept-Encoding: gzip, deflate, br
X-Unity-Version: 2019.4.31f1

[此处非文本，暂不支持显示]
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Sat, 18 Feb 2023 08:11:37 GMT
ETag: W/"14-MSqc2BHRKWMUVAR3/Hgeb+SoSIg"
Server: nginx/1.20.0
X-Powered-By: Express
Content-Length: 20
Connection: keep-alive

{"result":"succeed"}
```

## `submitScore`

### Request

```http
POST //submitScore HTTP/1.1
Host: dynamix-server.c4-cat.com
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Dynamix/316008 CFNetwork/1399 Darwin/22.1.0
Connection: keep-alive
Cookie: connect.sid=s%3A0kyWZ7cyUuPP9mPpiIcPTmIK2eY50sRs.NZE7CDUopqFW8fhthNEUHAd1DiWffq6KkNomWT9EQbk; Path=/; HttpOnly, AWSELB=F94D8FD7168C93D9EB5A7D4E794C46391A7C696D4A835A2209E2AEFED78EEB273CFA1FDD39908B8A35A97378EE6BB559C28CB473C0647DD4B64E598052219C48420CFDC8C0;PATH=/;SAMESITE=None
Accept-Language: zh-TW,zh-Hant;q=0.9
Content-Length: 71
Accept-Encoding: gzip, deflate, br
X-Unity-Version: 2019.4.31f1

mapId=_map_Laivisca_M&userId=101786411&score=938430&playerName=Taskeren
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Sat, 18 Feb 2023 08:11:37 GMT
ETag: W/"15c-tOVnHV6DERpJ4F9GgXYukxHeiUA"
Server: nginx/1.20.0
X-Powered-By: Express
Content-Length: 348
Connection: keep-alive

{"record":{"id":459746,"mapId":"_map_Laivisca_M","time":"1676707897461","userId":101786411,"playerName":"Taskeren","score":"938430","valid":"valid","rank":1711},"previousRecord":{"id":459746,"mapId":"_map_Laivisca_M","time":"1635722643780","userId":101786411,"playerName":"Taskeren","score":"903735","valid":"valid","rank":3267},"isHighScore":true}
```

## `amazon?`

### Request

```http
GET /AssetBundles/releaseiOS031605.json?t=638123335128468960 HTTP/1.1
Host: asset.dynamix.c4-cat.com.s3-website-ap-southeast-1.amazonaws.com
Accept-Encoding: gzip, deflate
Connection: keep-alive
Accept: */*
User-Agent: Dynamix/316008 CFNetwork/1399 Darwin/22.1.0
Content-Length: 0
Accept-Language: zh-TW,zh-Hant;q=0.9
X-Unity-Version: 2019.4.31f1


```

### Response

```http
HTTP/1.1 200 OK
x-amz-id-2: 68ERfO9qbfc9OQ+eQLWRlzpHL8y0RMtMQwjitL8yJMQzhXzwIJo5VSnJf4cX+V4d7Gd891HV/tY=
x-amz-request-id: 1Y3H7ZMS1F1WQ74N
Date: Sat, 18 Feb 2023 08:11:54 GMT
Last-Modified: Fri, 17 Feb 2023 04:02:02 GMT
ETag: "09a4cd5a1ab5decc358e22eda9e45130"
Content-Type: application/json
Server: AmazonS3
Content-Length: 38

{"version":"03160565","min":"3.16.3" }
```