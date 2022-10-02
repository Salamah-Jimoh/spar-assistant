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
            /*var firstTeam =getFirstName + ' and ' + getSecondName;
           var secondTeam = getThirdName +' and ' +getFourthName;
           var thirdTeam = getFifthName +' and ' +getSixthName;
           var fourthTeam = getSeventhName +' and ' +getEightName;*/
           // clear input field
          document.getElementById('input').value='';
         //append to ul
         //OG
         let openingGoverment= document.getElementById('og');
         var firstName= document.createElement('li');
         firstName.innerHTML=getFirstName;
         openingGoverment.appendChild(firstName);
         var secondName= document.createElement('li');
         secondName.innerHTML=getSecondName;
         openingGoverment.appendChild(secondName);
         //CG
         let closingGoverment= document.getElementById('cg');
         var thirdName= document.createElement('li');
         thirdName.innerHTML=getThirdName;
         closingGoverment.appendChild(thirdName);
         var fourthName= document.createElement('li');
         fourthName.innerHTML=getFourthName;
         closingGoverment.appendChild(fourthName);
         // OO
         let openingOpposition= document.getElementById('oo');
         var fifthName= document.createElement('li');
         fifthName.innerHTML=getFifthName;
         openingOpposition.appendChild(fifthName);
         var sixthName= document.createElement('li');
         sixthName.innerHTML=getSixthName;
         openingOpposition.appendChild(sixthName);
         //CO
         let closingOpposition= document.getElementById('co');
         var seventhName= document.createElement('li');
         seventhName.innerHTML=getSeventhName;
         closingOpposition.appendChild(seventhName);
         var eightName= document.createElement('li');
         eightName.innerHTML=getEightName;
         closingOpposition.appendChild(eightName);
         document.getElementById('generate').innerHTML='Ballot is ready'
        });
        

