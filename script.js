
function randomCiv() {

    const civ = [];
    civ[0] = './images/HREFlag.jpg'
    civ[1] = './images/ChineseFlag.jpg'
    civ[2] = './images/DelhiFlag.jpg'
    civ[3] = './images/EnglishFlag.jpg'
    civ[4] = './images/FrenchFlag.jpg'
    civ[5] = './images/AbbasidFlag.jpg'
    civ[6] = './images/MongolsFlag.jpg'
    civ[7] = './images/RusFlag.jpg'

    let randomNumber = Math.floor(Math.random()*civ.length);

    return  '<img src="'+civ[randomNumber]+'"/>'
}

function randomMap(map){
    let mapList = [];
    const landMap = [];
    landMap[0] = './images/Altari.png'
    landMap[1] = './images/Arabia.png'
    landMap[2] = './images/French_Pass.png'
    landMap[3] = './images/High_View.png'
    landMap[4] = './images/King_of_the_Hill.png'
    landMap[5] = './images/Lipany.png'
    landMap[6] = './images/Mountain_Pass.png'

    const hybridMap = [];
    hybridMap[0] = './images/Ancient_Spires.png'
    hybridMap[1] = './images/Black_Forest.png'
    hybridMap[2] = './images/Boulder_Bay.png'
    hybridMap[3] = './images/Confluence.png'
    hybridMap[4] = './images/Danube_River.png'
    hybridMap[5] = './images/Mongolian_Heights.png'
    hybridMap[6] = './images/Nagari.png'
    
    const waterMap = [];
    waterMap[0] = './images/Archipelago.png'
    waterMap[1] = './images/Warring_Islands.png'

    

    if(map == 1){
       const newMapList = mapList.concat(landMap, hybridMap, waterMap);
        return '<img src="'+newMapList[Math.floor(Math.random()*newMapList.length)]+'"height="197px" width="350px"/>';
    }
    if (map == 2){
        return '<img src="'+landMap[Math.floor(Math.random()*landMap.length)]+'"height="197px" width="350px"/>';
    }
    if(map == 3){
        return '<img src="'+hybridMap[Math.floor(Math.random()*hybridMap.length)]+'"height="197px" width="350px"/>';
    }
    if(map == 4){
        const newMapList = mapList.concat(landMap, hybridMap);
        return '<img src="'+newMapList[Math.floor(Math.random()*newMapList.length)]+'"height="197px" width="350px"/>';
    }
    if(map == 5){
        return '<img src="'+waterMap[Math.floor(Math.random()*waterMap.length)]+'"height="197px" width="350px"/>';

    }
}


function randomAll(){
    let ele = document.getElementsByName('teamSize');
    let map = document.getElementsByName('mapType');

        document.getElementById('result1').innerHTML = "<img src='./images/placeholder.png'></img>";
        document.getElementById('result5').innerHTML = "<img src='./images/placeholder.png'></img>";
        document.getElementById('result2').innerHTML = "<img src='./images/placeholder.png'></img>";
        document.getElementById('result6').innerHTML = "<img src='./images/placeholder.png'></img>";
        document.getElementById('result3').innerHTML = "<img src='./images/placeholder.png'></img>";
        document.getElementById('result7').innerHTML = "<img src='./images/placeholder.png'></img>";
        document.getElementById('result4').innerHTML = "<img src='./images/placeholder.png'></img>";
        document.getElementById('result8').innerHTML = "<img src='./images/placeholder.png'></img>";

    for(i = 0; i < ele.length; i++){
        if(ele[i].checked)
        ele = ele[i].value;
    }

    for(i = 0; i < map.length; i++){
        if(map[i].checked)
        map = map[i].value;
    }

    if (ele >= 1){
        document.getElementById('result1').innerHTML = randomCiv();
        document.getElementById('result5').innerHTML = randomCiv();
    }

    if(ele >= 2){
        document.getElementById('result2').innerHTML = randomCiv();
        document.getElementById('result6').innerHTML = randomCiv();
    }

    if(ele >= 3){
        document.getElementById('result3').innerHTML = randomCiv();
        document.getElementById('result7').innerHTML = randomCiv();
    }

    if(ele >= 4){
        document.getElementById('result4').innerHTML = randomCiv();
        document.getElementById('result8').innerHTML = randomCiv();
    }    

    document.getElementById('map').innerHTML = randomMap(map);
}