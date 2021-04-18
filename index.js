const fs = require('fs');
const fetch = require("node-fetch");

const url = "http://jsonplaceholder.typicode.com/posts";

//fetch data from url

const getData = async(url) => {

    try {
        const response = await fetch(url);
        const Posts = await response.json();

        //write fetched data to a file
        fs.writeFile('result/posts.json', JSON.stringify(Posts, null, 2), 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    } catch (error) {
        console.log(error);
   }   
};

getData(url);