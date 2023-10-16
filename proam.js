let proList = '';
let amList ='';
let errorMessage = '';
//toggle
// // Toggle dark mode
// let darkBtn = document.getElementById('dark')
// let lightBtn = document.getElementById('light')
// darkBtn.addEventListener('click', ()=>{
//     document.querySelector('body').style.backgroundColor='#000a1a';
//     document.querySelector('body').style.color='white';
//     darkBtn.style.display='none';
//     lightBtn.style.display='block'
// });
// // Toggle light mode
// lightBtn.addEventListener('click', ()=>{
//     document.querySelector('body').style.backgroundColor='white';
//     document.querySelector('body').style.color='black';
//    lightBtn.style.display='none';
//    darkBtn.style.display='block'
// });

document.getElementById('generate').addEventListener('click', function(e) {
    e.preventDefault();
    proList = generateRandomPro();
    document.getElementById('form-2').style.display= 'block';

})
document.getElementById('generate2').addEventListener('click', function(e) {
    e.preventDefault();
    amList = generateRandomAm();
    displayResults();
})

function generateRandomPro(){ //Generate Random pro speakers
    let formOne = document.getElementById('form-1');
    let nameInput = document.getElementById('input')
    let nameValue= nameInput.value; //get speakers name
    let errorDiv = document.getElementById('error');
    if(nameValue===''){
    nameInput.style.border='2px solid red';
    errorDiv.innerHTML = '<h4> Pls Enter Speakers Name';
  }
    let nameSplit=nameValue.split(','); // split name values
    const shuffleArray = (arr)=>arr.sort(() => Math.random() -0.5);
    const proSpeakers = shuffleArray(nameSplit);
    clearField(formOne);
    return proSpeakers;
   
}

function generateRandomAm(){ //Generate Random am speakers
    let formTwo= document.getElementById('form-2');
    let nameInput = document.getElementById('input2')
    let nameValue= nameInput.value; //get speakers name
    let errorDiv = document.getElementById('error');
    if(nameValue===''){
      nameInput.style.border='2px solid red';
      errorDiv.innerHTML = '<h4> Pls Enter Speakers Name';
      return
    }
    let nameSplit=nameValue.split(','); // split name values
    const shuffleArray=(arr)=>arr.sort(() =>Math.random() -0.5);
    const amSpeakers =shuffleArray(nameSplit);
    clearField(formTwo);
    return amSpeakers
}

function MergeAmAndPro(arr1, arr2){ //Merge Randomized Pro and Am together in an Array
  const paired = [];
   for(let i=0; i< arr1.length; i++){
      paired.push(arr1[i], arr2[i])
    }
    return paired;
  }

  function pairAmAndPro(){ // Pair Am and Pro
    let result = MergeAmAndPro(proList, amList);
    let newArr =[];
    for(let i=0; i<result.length; i+=2){
     newArr.push([result[i], result[i+1]])
  }
  document.getElementById('input2').value='';
  return newArr;
}

function displayResults(){
  let mySpeakers = (pairAmAndPro(proList, amList));
  document.getElementById('list');
  for(var i=0; i<mySpeakers.length; i++){
    let listItem = document.createElement('li');
    listItem.textContent = mySpeakers[i];
    list.appendChild(listItem);
  }
  let result = document.getElementById('result');
  result.style.display= 'block';
}

function clearField(input){ //clear input field after submit
  input.style.display = 'none';
}

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

        
