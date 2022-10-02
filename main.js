//strind.include('substring');
/*const bio ='Salamah is a girl';
console.log(bio.includes('Salamah'))
console.log('Anu,Ola,Ayo, Olu');*/
console.log('Anu&Ola, sala, Ayo& Olu, ma')
document.getElementById('generate').addEventListener('click', (e)=>{
    e.preventDefault();
    var nameValue=document.getElementById('input').value;
    var nameSplit=nameValue.split(',');
    //console.log(nameSplit)
    var names={
        "Speaker one":nameSplit[0],
        "Speaker Two":nameSplit[1],
        "Speaker Three":nameSplit[2],
        "Speaker Four":nameSplit[3]
    }
    var namesArray=Object.values(names);//get all names in an array
    let nameFilter=namesArray.filter(name=>name.includes('&')) // filter off names with '&'
   // console.log(nameFilter)
var splitter =namesArray.splice(0, 2)
console.log(splitter);
//console.log(namesArray)
    /*const shuffleArray=(arr)=>arr.sort(() =>Math.random() -0.5);
    const list=shuffleArray(namesArray); //shuffle the names
    //console.log(list);
    //var name=names[Math.floor(Math.random()*names.length)];//
   // console.log(name)
    const pair=[
{nameOne:list[0], partnerOne:list[1]},//pair names based on new index
{nameTwo:list[2], partnerTwo:list[3]},
    ];
    var getFirstName=pair[0].nameOne;
    var getSecondName=pair[0].partnerOne;
    var getThirdName=pair[1].nameTwo;
    var getFourthName=pair[1].partnerTwo;
    //console.log(getFourthName)
    var firstTeam =getFirstName + ' and ' + getSecondName;
   var secondTeam = getThirdName +' and ' +getFourthName;
    console.log(firstTeam);
    console.log(secondTeam)*/
});
// for no partnerships
document.getElementById('generate').addEventListener('click', (e)=>{
    e.preventDefault();
    let nameValue=document.getElementById('input').value;
    let nameSplit=nameValue.split(',');
   // var LastTeam= nameSplit.shift();// cut of paired teams
    var names={
        "Speaker one":nameSplit[0],
        "Speaker Two":nameSplit[1],
        "Speaker Three":nameSplit[2],
        "Speaker Four":nameSplit[3],
        "Speaker Five":nameSplit[4],
        "Speaker Six":nameSplit[5],
        "Speaker Seven":nameSplit[6],
        "Speaker Eight":nameSplit[7],
    }

    var namesArray=Object.values(names);//get all names in an array
    const shuffleArray=(arr)=>arr.sort(() =>Math.random() -0.5);
    const list=shuffleArray(namesArray); //shuffle the names
    const pair=[
        {nameOne:list[0], partnerOne:list[1]},//pair names based on new index
        {nameTwo:list[2], partnerTwo:list[3]},
        {nameThree:list[4], partnerThree:list[5]},
        {nameFour:list[6], partnerFour:list[7]},
            ];
            document.getElementById('og')
            var li=document.createElement('li');
            //add class to new li
            li.className="list-group-item";
            li.appendChild(pair[0].nameOne);
            document.getElementById('og').appendChild(li);
            /*var getFirstName=pair[0].nameOne;
            var getSecondName=pair[0].partnerOne;
            var getThirdName=pair[1].nameTwo;
            var getFourthName=pair[1].partnerTwo;
            var getFifthName=pair[2].nameThree;
            var getSixthName=pair[2].partnerThree;
            var getSeventhName=pair[3].nameFour;
            var getEightName=pair[3].partnerFour;*/

       // append to ul
            /*var firstTeam =getFirstName + ' and ' + getSecondName;
           var secondTeam = getThirdName +' and ' +getFourthName;
           var thirdTeam = getFifthName +' and ' +getSixthName;
           var fourthTeam = getSeventhName +' and ' +getEightName;*/
            
        });
        

/*console.log('ayo&olu, anu&ola, sa&la, ma&tu')
//for four partnerships 
document.getElementById('generate').addEventListener('click', (e)=>{
    e.preventDefault();
    let nameValue=document.getElementById('input').value;
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
    console.log(list);
    document.getElementById('og').innerHTML=list[0];
})
/*
// for two partnerships
document.getElementById('generate').addEventListener('click', (e)=>{
    e.preventDefault();
    let nameValue=document.getElementById('input').value;
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
          //shuffle again so that fourth team won't always be fourth
            var firstTeam =getFirstName + ' and ' + getSecondName;
           var secondTeam = getThirdName +' and ' +getFourthName;
           var thirdTeam = getFirstTeam
           var fourthTeam = getSecondTeam;
          let newArray =[firstTeam, secondTeam, thirdTeam, fourthTeam];
          let newPair =shuffleArray(newArray);
          console.log(newPair);
          document.getElementById('og').innerHTML=newPair[0];

})*/




/*
// for one partnerships
document.getElementById('generate').addEventListener('click', (e)=>{
    e.preventDefault();
    let nameValue=document.getElementById('input').value;
    let nameSplit=nameValue.split(',');
    let LastTeam= nameSplit.shift();// cut of paired teams
    console.log(LastTeam)
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
            var firstTeam =getFirstName + ' and ' + getSecondName;
           var secondTeam = getThirdName +' and ' +getFourthName;
           var thirdTeam = getFifthName +' and ' +getSixthName;
           var fourthTeam = getLastTeam;
          let newArray =[firstTeam, secondTeam, thirdTeam, fourthTeam];
          let newPair =shuffleArray(newArray);
          console.log(newPair);
          document.getElementById('og').innerHTML=newPair[0];
        });


// for no partnerships
document.getElementById('generate').addEventListener('click', (e)=>{
    e.preventDefault();
    let nameValue=document.getElementById('input').value;
    let nameSplit=nameValue.split(',');
   // var LastTeam= nameSplit.shift();// cut of paired teams
    var names={
        "Speaker one":nameSplit[0],
        "Speaker Two":nameSplit[1],
        "Speaker Three":nameSplit[2],
        "Speaker Four":nameSplit[3],
        "Speaker Five":nameSplit[4],
        "Speaker Six":nameSplit[5],
        "Speaker Seven":nameSplit[6],
        "Speaker Eight":nameSplit[7],
    }

    var namesArray=Object.values(names);//get all names in an array
    const shuffleArray=(arr)=>arr.sort(() =>Math.random() -0.5);
    const list=shuffleArray(namesArray); //shuffle the names
    const pair=[
        {nameOne:list[0], partnerOne:list[1]},//pair names based on new index
        {nameTwo:list[2], partnerTwo:list[3]},
        {nameThree:list[4], partnerThree:list[5]},
        {nameFour:list[6], partnerFour:list[7]},
            ];
            var getFirstName=pair[0].nameOne;
            var getSecondName=pair[0].partnerOne;
            var getThirdName=pair[1].nameTwo;
            var getFourthName=pair[1].partnerTwo;
            var getFifthName=pair[2].nameThree;
            var getSixthName=pair[2].partnerThree;
            var getSeventhName=pair[3].nameFour;
            var getEightName=pair[3].partnerFour;
            //console.log(getFourthName)
            var firstTeam =getFirstName + ' and ' + getSecondName;
           var secondTeam = getThirdName +' and ' +getFourthName;
           var thirdTeam = getFifthName +' and ' +getSixthName;
           var fourthTeam = getSeventhName +' and ' +getEightName;
            console.log(firstTeam);
            console.log(secondTeam);
            console.log(thirdTeam);
            console.log(fourthTeam);
        });
       */ 