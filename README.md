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


<img width="759" alt="localhost" src="https://github.com/Korat-Dishant/Customized-Chatbot/assets/86142546/a2874cfd-85e6-48d4-95a6-3b4c5d5e30e0">


You can also see swagger documenation using path 
http://localhost:8000/docs

<img width="902" alt="swagger" src="https://github.com/Korat-Dishant/Customized-Chatbot/assets/86142546/50a8b3f1-be27-4851-bff8-58b9752e5821">


I have use fastAPI to create these services and if you are developing front-end on your own , you can get data using params or using header as well.

<img width="566" alt="swagger action" src="https://github.com/Korat-Dishant/Customized-Chatbot/assets/86142546/9c1b2dac-97be-48a5-a277-8ba94966375d">


the demo server is currenly hosted on render. 
https://customized-chatbot.onrender.com/docs

Note : you might not be able to access this hosted server because my API key is about to expire.

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

<img width="721" alt="frontend" src="https://github.com/Korat-Dishant/Customized-Chatbot/assets/86142546/9a349a0d-eedb-4099-85e6-e527fb099e20">



if you are using your own backend then you would have to privide url to that backend in chatbot.js file. you would see that constant 
const LocalHostBackend = true
is set to true, in case you want to use local backend.
but if your backend is hosted then make LocalHostBackend = false and change url: https://customized-chatbot.onrender.com/ask to your own.

<img width="716" alt="frontend2" src="https://github.com/Korat-Dishant/Customized-Chatbot/assets/86142546/03a60d36-0aa8-40ea-a64f-d1db836ead51">



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


