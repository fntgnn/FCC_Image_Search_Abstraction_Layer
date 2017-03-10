# Image Search Abstraction Layer

Free Code Camp challenge: https://www.freecodecamp.com/challenges/image-search-abstraction-layer

## Getting Started

Use the command `npm install` to install all the packages.

I also used `dotenv` so you have to create a `.env`file and store the variables:
* DB_URI: your mongodb database
* API_KEY: your API KEY from Google
* CX: your Google Custom Search Engine: https://developers.google.com/custom-search/

### User stories

* I can use `/imagesearch/cats` for search 10 cats image
* I can use `/imagesearch/cats?offset=10` for search 10 cats image with an offset of 10.
* I can see the latest search in `/latest`

#### Example usage
```
https://fntgnn-fcc-image-search.herokuapp.com/imagesearch/cats
```
Example creation output:

```
[{
url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Cat_crying_(Lolcat).jpg",
snippet: "Lolcat - Wikipedia",
thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYHRZ-aoumwW08SSvzu9xXEvuZX9yxaeYs1wQiw_ZYizo8uZvxtQs69Xj",
context: "https://en.wikipedia.org/wiki/Lolcat"
},
...
]
```

##### Usage
```
https://fntgnn-fcc-image-search.herokuapp.com/imagesearch/cats
https://fntgnn-fcc-image-search.herokuapp.com/imagesearch/cats?offset=2
```
Or:
```
https://fntgnn-fcc-image-search.herokuapp.com/latest
```

## Built With

* [Express generator](https://www.npmjs.com/package/express-generator) - The web framework used
* [Hogan.js](http://twitter.github.io/hogan.js/) - Template for the views
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [dot-env](https://www.npmjs.com/package/dotenv) - package for loading environment variables from a .env variable


## Author

* **Giovanni Fontana**
