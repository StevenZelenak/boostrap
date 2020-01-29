//filter by rubber, color, gender
//multiple filters at once if possible

const ducks = [

    {
        isRubber: true,
        color: 'pink',
        gender: 'female',
        isMigrator: false,
        socialStatus: 'single pringle',
        diet: 'meat',
        age: 25,
        featherNum: 100,
        name: 'Regina',
        imageURL: "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2533_clipped_rev_1-min_1024x1024.jpeg?v=1506030781"
    },
    {
        isRubber: true,
        color: 'blue',
        gender: 'female',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Regiii',
        imageURL: "https://m.media-amazon.com/images/I/51WEvgpXwYL._SR500,500_.jpg"
    },
    {
        isRubber: false,
        color: 'green',
        gender: 'female',
        isMigrator: false,
        socialStatus: 'not ready yet',
        diet: 'crackers',
        age: 30,
        featherNum: 42,
        name: 'Tom',
        imageURL: "https://images.homedepot-static.com/productImages/c938f2d3-6474-4400-98ff-327f7b71f74e/svn/amscan-seasonal-decorations-399485-64_1000.jpg"
    },
    {
        isRubber: true,
        color: 'pink',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'hot stuff',
        diet: 'bread',
        age: 55,
        featherNum: 5,
        name: 'Denver',
        imageURL: "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2533_clipped_rev_1-min_1024x1024.jpeg?v=1506030781"
    },
    {
        isRubber: false,
        color: 'blue',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'coexist',
        diet: 'Humans',
        age: 100,
        featherNum: 1000,
        name: 'Duck God',
        imageURL: "https://m.media-amazon.com/images/I/51WEvgpXwYL._SR500,500_.jpg"
    },
    {
        isRubber: true,
        color: 'green',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'fight me bitch',
        diet: 'vegan',
        age: 15,
        featherNum: 150,
        name: 'Tiffany',
        imageURL: "https://images.homedepot-static.com/productImages/c938f2d3-6474-4400-98ff-327f7b71f74e/svn/amscan-seasonal-decorations-399485-64_1000.jpg"
    },
    {
        isRubber: false,
        color: 'pink',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'war, war never ends',
        diet: 'nothing',
        age: 35,
        featherNum: 4,
        name: 'Ryan',
        imageURL: "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2533_clipped_rev_1-min_1024x1024.jpeg?v=1506030781"
    },
    {
        isRubber: true,
        color: 'blue',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'ready to tingle',
        diet: 'fairies',
        age: 1000,
        featherNum: 90,
        name: 'Reg the fairy eater',
        imageURL: "https://m.media-amazon.com/images/I/51WEvgpXwYL._SR500,500_.jpg"
    },



];



const outputDom = (divID, str) =>{

        let selectedDiv = document.getElementById(divID);
        selectedDiv.innerHTML = str;
}

const printDuckName = (arr) =>{

    let domString = '';

    for(let value of arr){
        domString += '<div class ="col-md-4">';
        domString += '<div class="card">';
        domString += `   <img src="${value.imageURL}" class="card-img-top" alt="...">`;
        domString += '       <div class="card-body">';
        domString += `           <h5 class="card-title">${value.name}</h5>`;
        domString += `           <p class="card-text">${value.socialStatus}</p>`;
        domString += `           <p class="card-text">${value.diet}</p>`;
        domString += '       </div>';
        domString += '</div>';
        domString += '</div>';
    }

    outputDom('duckDiv', domString);
};

const choseBlue = () =>{
    
    let myArr = [];

    for(let value of ducks){
        if(value.color === 'blue'){
            myArr.push(value);
        }
    }

    printDuckName(myArr);
}

const chosePink = () =>{
    let myArr = [];

    for(let value of ducks){
        if(value.color === 'pink'){
            myArr.push(value);
        }
    }

    printDuckName(myArr);
}

const choseGreen = () =>{
    console.log("blue");
}

const choseFemale = () =>{
    console.log("blue");
}
const choseMale = () =>{
    console.log("blue");
}

const choseRubber = () =>{
    console.log("blue");
}
const events = () => {
    document.getElementById('blue').addEventListener('click', choseBlue);
    document.getElementById('pink').addEventListener('click', chosePink);
    document.getElementById('green').addEventListener('click', choseGreen);

    document.getElementById('female').addEventListener('click', choseFemale);
    document.getElementById('male').addEventListener('click', choseMale);

    document.getElementById('rubber').addEventListener('click', choseRubber);
}

const init = () =>{
    printDuckName(ducks);
    events();
};

init();