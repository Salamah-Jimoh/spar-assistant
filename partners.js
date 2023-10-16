// // Toggle dark mode
// let darkBtn = document.getElementById('dark')
// let lightBtn = document.getElementById('light')
// darkBtn.addEventListener('click', ()=>{
//     document.querySelector('body').style.backgroundColor='#000a1a';
//     document.querySelector('body').style.color='white';
//     darkBtn.style.display='none';
//     lightBtn.style.display='block'
// })
// // Toggle light mode
// lightBtn.addEventListener('click', ()=>{
//     document.querySelector('body').style.backgroundColor='white';
//     document.querySelector('body').style.color='black';
//    lightBtn.style.display='none';
//    darkBtn.style.display='block'
// })
let openingGoverment= document.getElementById('og');
let closingGoverment= document.getElementById('cg');
let openingOpposition= document.getElementById('oo');
let closingOpposition= document.getElementById('co');
//for four partnerships 
document.getElementById('generateFour').addEventListener('click', generateFour)
function generateFour(e){
    e.preventDefault();
    let nameInput = document.getElementById('input');
    let nameValue=document.getElementById('inputFour').value;
    // Check empty
    if(nameValue===''){
        nameInput.style.border='3px solid red';
        var errorDiv =document.querySelector('.error')
        errorDiv.innerHTML='<h4>Pls enter Teams name</h4>'
return
    }
    let nameSplit=nameValue.split(',');
    // Check if there are four teams
 if(nameSplit.length !==4 ){
    nameInput.style.border='3px solid red';
    var errorDiv =document.querySelector('.error')
    errorDiv.innerHTML='<h4>There must be four teams</h4>'
return
}
document.querySelector('.error').remove()// remove error message
nameInput.style.border='3px solid #ffb81c';
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
    let nameInput = document.getElementById('input');
    let nameValue=document.getElementById('inputTwo').value;
     // Check empty
     if(nameValue===''){
        nameInput.style.border='3px solid red';
        var errorDiv =document.querySelector('.error-two')
        errorDiv.innerHTML='<h4>Pls enter Teams and speakers name</h4>'
return
    }
    document.querySelector('.error-two').remove()// remove error message
nameInput.style.border='3px solid #ffb81c';
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
    let nameInput = document.getElementById('input');
    let nameValue=document.getElementById('input').value;
      // Check empty
      if(nameValue===''){
        nameInput.style.border='3px solid red';
        var errorDiv =document.querySelector('.error-three')
        errorDiv.innerHTML='<h4>Pls enter Teams and speakers name</h4>'
return
    }
    document.querySelector('.error-three').remove()// remove error message
nameInput.style.border='3px solid #ffb81c';
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
  // Menu
// Open menu
document.getElementById('menu-open').addEventListener('click', ()=>{
    document.getElementById('menu-expand').style.display="block";
    document.getElementById('menu-open').style.display ="none"
    document.getElementById('main').style.marginLeft="200px";  
})
//close menu
document.getElementById('menu-close').addEventListener('click', ()=>{
    document.getElementById('menu-expand').style.display="none";
    document.getElementById('menu-open').style.display ="block"
   document.getElementById('main').style.marginLeft="";   
})
// Close Menu Onclick Menu Items
let menuItems =document.getElementsByClassName('menu-item');
for(var i=0; i<menuItems.length; i++){
    let menu = menuItems[i];
    menu.addEventListener('click', ()=>{
        document.getElementById('menu-expand').style.display="none";
    document.getElementById('menu-open').style.display ="block"
   document.getElementById('main').style.marginLeft=""; 
    })
}
