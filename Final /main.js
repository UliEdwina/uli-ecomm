window.onload = init;

function init(){
side();
schoolZ();
details();
schoolO();
detailsO();
schoolT();
detailsT();
exOne();
empD();
exTwo();
empT();
exThree();
empTh();
}
function side(){
    let speed = 90;
    let sideMenu = document.createElement('li');
    sideMenu.innerText = `${resume.menu.contact} ${resume.menu.skills} ${resume.menu.blog}`;
    const dispMenu = document.getElementById('side');
    dispMenu.appendChild(sideMenu);
    
}

//Heading for School one
function schoolZ(){
    let heading = document.createElement('h1');
    heading.innerText = resume.school.nameTwo;
    const display = document.getElementById('upper_heading_zero');
    display.appendChild(heading);
}
//Details for School one
details = () => {
    let newLiZ = document.createElement('li');
    newLiZ.innerText = `${resume.school.degreeThree}` + ' In Progress | 2019';
    const outComeZ = document.getElementById('zero');
    outComeZ.appendChild(newLiZ);

}

//Heading for School Two
function schoolO(){
    let headingO= document.createElement('h1');
    headingO.innerText = resume.school.name;
    const displayO = document.getElementById('upper_heading_one');
    displayO.appendChild(headingO);
}
//Details for School Two
detailsO = () => {
    let newLiO = document.createElement('li');
    newLiO.innerText = `${resume.school.degreeOne}` + ` Completed 2018`;
    const outComeO = document.getElementById('one');
    outComeO.appendChild(newLiO);
}

//Heading for School Three
function schoolT(){
    let headingT= document.createElement('h1');
    headingT.innerText = resume.school.nameOne;
    const displayT = document.getElementById('upper_heading_two');
    displayT.appendChild(headingT);
}
//Details for School Three
detailsT = () => {
    let newLiT = document.createElement('li');
    newLiT.innerText = `${resume.school.degreeTwo}` + ` Completed 2018`;
    const outComeT = document.getElementById('two');
    outComeT.appendChild(newLiT);
}
//Adds First Exprience
function exOne(){
    let headingEx= document.createElement('h1');
    headingEx.innerText = resume.work.workHistoryOne;
    const displayEx = document.getElementById('exp');
    displayEx.appendChild(headingEx);
}
//Adds Forst Job Details
empD = () => {
    let empOne = document.createElement('li');
    empOne.innerText = `${resume.work.dates}` ;
    const empDisplay = document.getElementById('expOne');
    empDisplay.appendChild(empOne);
}
//Adds Second Exprience
function exTwo(){
    let headingExTwo= document.createElement('h1');
    headingExTwo.innerText = resume.work.workHistoryTwo;
    const displayExTwo = document.getElementById('secondexp');
    displayExTwo.appendChild(headingExTwo);
}
//Adds Second JobDetails
empT = () => {
    let empTwo = document.createElement('li');
    empTwo.innerText = `${resume.work.datesOne}` ;
    const empDisplayTwo = document.getElementById('exptwo');
    empDisplayTwo.appendChild(empTwo);
}
//Adds third Exprience
function exThree(){
    let headingExThree= document.createElement('h1');
    headingExThree.innerText = resume.work.workHistoryThree;
    const displayExThree = document.getElementById('thirdexp');
    displayExThree.appendChild(headingExThree);
}
//Adds Second JobDetails
empTh = () => {
    let empThree = document.createElement('li');
    empThree.innerText = `${resume.work.datesTwo}` ;
    const empDisplayThree = document.getElementById('expthree');
    empDisplayThree.appendChild(empThree);
}

