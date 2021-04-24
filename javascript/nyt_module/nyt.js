const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'XGsq40iihoVgMsGMdVpcPBy1rAHAnHUc'; //2
let url; //3
 //SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false; 

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e){
    e.preventDefault();
    console.log("Page", pageNumber)
    //Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page' + pageNumber + '&q=' + searchTerm.Value;
    console.log("URL:", url);
    // !== means that we aren't forced to enter a start or end date
    // if the field is left blank'', the condition will be ignored
    if(startDate.value !== ''){
        console.log(startDate.value);
    url += '&begin_date' + startDate.value;
    };
    if(endDate.value !== ''){
        url += '&end_date'+ endDate.value;
    };
    fetch(url) 
    .then(function(result){
        console.log(result)
        return result.json();
    }).then(function(json){
        displayResults(json);
    });
}
// function displayResults(json){
//     console.log("DisplayResults", json);
// }
function displayResults(json){
    console.log(section);
    while(section.firstChild){
        section.removeChild(section.firstChild);
        console.log("Hello");
    }
    if(pageNumber <= 0){
        previousBtn.style.display = 'none'
    } else{
        previousBtn.style.display = 'block'
    }

    if(articles.length <= 10){
        nextBtn.style.display = 'none'
    }   else{
        nextBtn.style.display = 'block'
    }
    let articles = json.response.docs;
    
    if(articles.length >= 10){
        nav.style.display = 'block'; //shows the nav is 10 items are in the array 
    } else {
        nav.style.display = 'none';
        //hides the nav display if less than 10 items are in the array
    };
    
    if(articles.length === 0) {
        console.log("No results");
    } else {
        // console.log(articles);
    for(let i = 0; i < articles.length; i++ ) {
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');
        let para = document.createElement('p');
        let clearfix = document.createElement('div');
        
        let current = articles[i];
        // console.log("Current:", current);

        link.href = current.web_url;
        link.textContent = current.headline.main;
        
        para.textContent = 'Keywords: ';

        for(let j = 0; j < current.keywords.length; j++){
            let span = document.createElement('span')
            span.textContent += current.keywords[j].value + '';
            para.appendChild(span);
        }
        if(current.multimedia.length > 0){
            img.src = 'http://nytimes.com/' + current.multimedia[0].url;
            img.alt = current.headline.main;
        }

        clearfix.setAttribute('class', 'clearfix')

        article.appendChild(heading);
        heading.appendChild(link);
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
        }   
    }
};
function nextPage(e){
    pageNumber++
    fetchResults(e);
    console.log("Page number:", pageNumber);
}
// function nextPage(){
//     console.log("Next button clicked");
// }
// function previousPage(){
//     console.log("Previous button clicked");
// }
function previousPage(e){
    if(pageNumber > 0){
        pageNumber--;        
    } else {
        return;
    }
    fetchResults(e);
    // console.log("Page", pageNumber);
}