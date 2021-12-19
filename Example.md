addCords to tableangular2html
```
post localhost:3000/coords/table

	[
  {
    "hid": "123456",
    "latitude": "52.19101866148346",
    "longitude": "21.176566217200435",
    "date": "4-5-2021 17:35:41"
  },
  {
    "hid": "123456",
    "latitude": "52.188594038994765",
    "longitude": "21.171509286809457",
    "date": "4-5-2021 18:36:42"
  },
		{
    "hid": "123456",
    "latitude": "52.18863022835559",
    "longitude": "21.16446500243418",
    "date": "4-5-2021 19:35:43"
  },
		{
    "hid": "123456",
    "latitude": "52.185517835130426",
    "longitude": "21.16110027436246",
    "date": "4-5-2021 20:35:43"
  },
		{
    "hid": "123456",
    "latitude": "52.18490256877656",
    "longitude": "21.15968354660691",
    "date": "4-5-2021 21:35:43"
  }
	]

```

- add hid

```angular2html
post localhost:3000/user/addhid
  {
    "hid": "123456",
		"catName": "Ciapek",
		"name": "test"
  }

```

- login
```angular2html
post localhost:3000/auth/login
{
"email": "test@test.pl",
"pwd": "12345"
}

```