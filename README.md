# Instructions (2 options available):
## a) Docker
```yml
version: '3.0'
services:
	parser:  
    	image: lycos-parser 
    	restart: always  
    	ports:  
        	- "8000:3000"
```
## b) Run the project on local
1. install node: https://nodejs.org/en/download
2. check node: `node -v` or `npm -v`
3. install nest.js: `npm i -g @nestjs/cli`
4. install npm: from the project folder run `npm install` 
5. run the project: `npm run start`

# How to use
Ex. to search for "moldova" use the following url: http://localhost:3000/search?q=moldova