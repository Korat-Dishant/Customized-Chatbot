# Customized-Chatbot

Using this project you create chatbot specifically tailored for your plateform.
to start follow the below mentioned procedure :

## BACKEND
download required packages by executing following command (run only once while setting up the project)
```sh
pip install -r requirements.txt
```
you would need to provide apikey in .env file
you can get api key from 
https://platform.openai.com/api-keys

after getting the api-key create a .env file inside the project and put your api key as follow without any extra spaces
API_KEY=##YOUR-API-KEY###

to start api service (backend) execute 

```sh
uvicorn API:app --reload
```

uvicorn will start api service at port 8000 by default
IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII


You can also see swagger documenation using path 
http://localhost:8000/docs

IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

I have use fastAPI to create these services and if you are developing front-end on your own , you can get data using params or using header as well.

the demo server is currenly hosted on render. 
https://customized-chatbot.onrender.com/docs

## FRONTEND

I haven't put much efforts on appearance because my focus was to develop customizable chatbot but you can surely take reference from it if you are planning to develop one on your own.

to initialize front end 
```sh
cd front-end
yarn 
```

to start the front-end 
```sh
yarn start 
```


IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII


if you are using your own backend then you would have to privide url to that backend in chatbot.js file. you would see that constant 
const LocalHostBackend = true
is set to true, in case you want to use local backend.
but if your backend is hosted then make LocalHostBackend = false and change url: https://customized-chatbot.onrender.com/ask to your own.

### CUSTOMIZE RESULTS
as you can see currently this chatbot is configured to work on provided dummy data of audioPro company.

to customize chatbot according to your data ...
- insert your products details inside data folder in text format
- empty the index folder as it contains index for dummy data
- create new index

you can create new indexes using command 
```sh
python OpenAI.py
```


