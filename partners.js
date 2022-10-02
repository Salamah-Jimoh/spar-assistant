let openingGoverment= document.getElementById('og');
let closingGoverment= document.getElementById('cg');
let openingOpposition= document.getElementById('oo');
let closingOpposition= document.getElementById('co');
//for four partnerships 
document.getElementById('generateFour').addEventListener('click', generateFour)
function generateFour(e){
    e.preventDefault();
    let nameValue=document.getElementById('inputFour').value;
    let nameSplit=nameValue.split(',');
    let names={
        "Team one":nameSplit[0],
        "Team Two":nameSplit[1],
        "Team Three":nameSplit[2],
        "Team Four":nameSplit[3],
    }
    let namesArray=Object.values(names);//get all names in an array
    let shuffleArray=(arr)=>arr.sort(() =>Math.random() -0.5);
    let list=shuffleArray(namesArray); //shuffle the names
    // clear input field
    document.getElementById('inputFour').value='';
    var firstTeam= document.createElement('li');
    firstTeam.innerHTML=list[0];
    openingGoverment.appendChild(firstTeam);
    var secondTeam= document.createElement('li');
    secondTeam.innerHTML=list[1];
    closingGoverment.appendChild(secondTeam);
    var thirdTeam= document.createElement('li');
    thirdTeam.innerHTML=list[2];
    openingOpposition.appendChild(thirdTeam);
    var fourthTeam= document.createElement('li');
    fourthTeam.innerHTML=list[3];
    closingOpposition.appendChild(fourthTeam);
    document.getElementById('generateFour').innerHTML='Ballot is ready'
}

// for two partnerships
document.getElementById('generateTwo').addEventListener('click', generateTwo);
function generateTwo(e){
    e.preventDefault();
    let nameValue=document.getElementById('inputTwo').value;
    let nameSplit=nameValue.split(',');
    let lastTeams= nameSplit.splice(0,2);// cut of paired teams
    let TeamOne= lastTeams[0];
    let TeamTwo= lastTeams[1];
    let names={
        "Speaker one":nameSplit[0],
        "Speaker Two":nameSplit[1],
        "Speaker Three":nameSplit[2],
        "Speaker Four":nameSplit[3],
    }
    let namesArray=Object.values(names);//get all names in an array
    let shuffleArray=(arr)=>arr.sort(() =>Math.random() -0.5);
    let list=shuffleArray(namesArray); //shuffle the names
    let pair=[
        {nameOne:list[0], partnerOne:list[1]},//pair names based on new index
        {nameTwo:list[2], partnerTwo:list[3]},
        {TeamOne: TeamOne},
        {TeamTwo: TeamTwo}
            ];
           var getFirstName=pair[0].nameOne;
            var getSecondName=pair[0].partnerOne;
            var getThirdName=pair[1].nameTwo;
            var getFourthName=pair[1].partnerTwo;
            var getFirstTeam =pair[2].TeamOne;
            var getSecondTeam =pair[3].TeamTwo;
          //reshuffle
            var firstTeam =getFirstName + ' & ' + getSecondName;
           var secondTeam = getThirdName +' & ' +getFourthName;
           var thirdTeam = getFirstTeam
           var fourthTeam = getSecondTeam;
          let newArray =[firstTeam, secondTeam, thirdTeam, fourthTeam];
          let newPair =shuffleArray(newArray);
           // clear input field
    document.getElementById('inputTwo').value='';
    var firstTeam= document.createElement('li');
    firstTeam.innerHTML=newPair[0];
    openingGoverment.appendChild(firstTeam);
    var secondTeam= document.createElement('li');
    secondTeam.innerHTML=newPair[1];
    closingGoverment.appendChild(secondTeam);
    var thirdTeam= document.createElement('li');
    thirdTeam.innerHTML=newPair[2];
    openingOpposition.appendChild(thirdTeam);
    var fourthTeam= document.createElement('li');
    fourthTeam.innerHTML=newPair[3];
    closingOpposition.appendChild(fourthTeam);
    document.getElementById('generateTwo').innerHTML='Ballot is ready'
        }
// for one partnerships
document.getElementById('generate').addEventListener('click', generateOne)
function generateOne(e){
    e.preventDefault();
    let nameValue=document.getElementById('input').value;
    let nameSplit=nameValue.split(',');
    let LastTeam= nameSplit.shift();// cut of paired teams
    let names={
        "Speaker one":nameSplit[0],
        "Speaker Two":nameSplit[1],
        "Speaker Three":nameSplit[2],
        "Speaker Four":nameSplit[3],
        "Speaker Five":nameSplit[4],
        "Speaker Six":nameSplit[5]
    }

    let namesArray=Object.values(names);//get all names in an array
    let shuffleArray=(arr)=>arr.sort(() =>Math.random() -0.5);
    let list=shuffleArray(namesArray); //shuffle the names
    let pair=[
        {nameOne:list[0], partnerOne:list[1]},//pair names based on new index
        {nameTwo:list[2], partnerTwo:list[3]},
        {nameThree:list[4], partnerThree:list[5]},
        {nameFour:LastTeam},
            ];
            var getFirstName=pair[0].nameOne;
            var getSecondName=pair[0].partnerOne;
            var getThirdName=pair[1].nameTwo;
            var getFourthName=pair[1].partnerTwo;
            var getFifthName=pair[2].nameThree;
            var getSixthName=pair[2].partnerThree;
            var getLastTeam =pair[3].nameFour;
          //shuffle again so that fourth team won't always be fourth
            var firstTeam =getFirstName + ' & ' + getSecondName;
           var secondTeam = getThirdName +' & ' +getFourthName;
           var thirdTeam = getFifthName +' & ' +getSixthName;
           var fourthTeam = getLastTeam;
          let newArray =[firstTeam, secondTeam, thirdTeam, fourthTeam];
          let newPair =shuffleArray(newArray);
              // clear input field
    document.getElementById('input').value='';
    var firstTeam= document.createElement('li');
    firstTeam.innerHTML=newPair[0];
    openingGoverment.appendChild(firstTeam);
    var secondTeam= document.createElement('li');
    secondTeam.innerHTML=newPair[1];
    closingGoverment.appendChild(secondTeam);
    var thirdTeam= document.createElement('li');
    thirdTeam.innerHTML=newPair[2];
    openingOpposition.appendChild(thirdTeam);
    var fourthTeam= document.createElement('li');
    fourthTeam.innerHTML=newPair[3];
    closingOpposition.appendChild(fourthTeam);
    document.getElementById('generate').innerHTML='Ballot is ready'
        };

