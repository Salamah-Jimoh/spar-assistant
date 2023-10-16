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
// for no partnerships
document.getElementById('generate').addEventListener('click', (e)=>{
    e.preventDefault();
    let nameInput = document.getElementById('input');
    let nameValue=document.getElementById('input').value;
    // Check Empty input
    if(nameValue===''){
        nameInput.style.border='3px solid red';
        var errorDiv =document.querySelector('.error')
        errorDiv.innerHTML='<h4>Pls enter Speakers name</h4>'
return
    }

 let nameSplit=nameValue.split(','); // split name values
 // Check if there are eight speakers
 if(nameSplit.length !==8 ){
    nameInput.style.border='3px solid red';
    var errorDiv =document.querySelector('.error')
    errorDiv.innerHTML='<h4>There must be eight speakers</h4>'
return
}
document.querySelector('.error').remove()// remove error message
nameInput.style.border='3px solid #ffb81c';
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
          
          document.getElementById('input').value='';  // clear input field
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

