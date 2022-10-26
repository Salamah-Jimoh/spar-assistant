// Toggle dark mode
let darkBtn = document.getElementById('dark')
let lightBtn = document.getElementById('light')
darkBtn.addEventListener('click', ()=>{
    document.querySelector('body').style.backgroundColor='#000a1a';
    document.querySelector('body').style.color='white';
    darkBtn.style.display='none';
    lightBtn.style.display='block'
})
// Toggle light mode
lightBtn.addEventListener('click', ()=>{
    document.querySelector('body').style.backgroundColor='white';
    document.querySelector('body').style.color='black';
   lightBtn.style.display='none';
   darkBtn.style.display='block'
})
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
 if(nameSplit.length !==4 ){
    nameInput.style.border='3px solid red';
    var errorDiv =document.querySelector('.error')
    errorDiv.innerHTML='<h4>There must be Four speakers</h4>'
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
    }

    var namesArray=Object.values(names);//get all names in an array
    const shuffleArray=(arr)=>arr.sort(() =>Math.random() -0.5);
    const list=shuffleArray(namesArray); //shuffle the names
    const pair=[
        {nameOne:list[0], partnerOne:list[1]},//pair names based on new index
        {nameTwo:list[2], partnerTwo:list[3]},
            ];
            var getFirstName=pair[0].nameOne;
            var getSecondName=pair[0].partnerOne;
            var getThirdName=pair[1].nameTwo;
            var getFourthName=pair[1].partnerTwo;
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
         //oo
         let closingGoverment= document.getElementById('oo');
         var thirdName= document.createElement('li');
         thirdName.innerHTML=getThirdName;
         closingGoverment.appendChild(thirdName);
         var fourthName= document.createElement('li');
         fourthName.innerHTML=getFourthName;
         closingGoverment.appendChild(fourthName);
         document.getElementById('generate').innerHTML='Ballot is ready'
        });
        

