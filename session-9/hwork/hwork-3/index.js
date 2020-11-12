 
axios.get('https://sheetdb.io/api/v1/58f61be4dda40')
.then(response => {
    console.log(response.data);
});


axios.get('https://sheetdb.io/api/v1/58f61be4dda40?limit=4&offset=4')
.then(response => {
    console.log(response.data);
});


axios.get('https://sheetdb.io/api/v1/58f61be4dda40?sort_by=name&sort_order=asc')
.then(response => {
    console.log(response.data);
});


axios.get('https://sheetdb.io/api/v1/58f61be4dda40/keys')
.then(response => {
    console.log(response.data);
});


axios.get('https://sheetdb.io/api/v1/58f61be4dda40/name')
.then(response => {
    console.log(response.data);
});


axios.get('https://sheetdb.io/api/v1/58f61be4dda40/sheets')
.then(response => {
    console.log(response.data);
});


axios.get('https://sheetdb.io/api/v1/58f61be4dda40/count')
.then(response => {
console.log(response.data);
});


axios.get('https://sheetdb.io/api/v1/58f61be4dda40/search?name=Steve&age=22&casesensitive=true')
.then(response => {
console.log(response.data);
});

 
axios.get('https://sheetdb.io/api/v1/58f61be4dda40',{
    "data": {"id":5,"name":"Frank"}
}).then ( response => {
    console.log(response.data);
});


axios.delete('https://sheetdb.io/api/v1/58f61be4dda40/id/61')
.then(response => {
    console.log(response.data);
});



axios.patch('https://sheetdb.io/api/v1/58f61be4dda40/id/61',{
    "data":{"id":10,"name":"huy"}
}).then(response =>{
    console.log(response.data);
});