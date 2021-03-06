function addOthers(){
    
    var addOthersButt = document.getElementById('addOthers');
    var removeButton = document.getElementById('removeOthers');
    var infoPos = document.getElementById('fillingOthers');
    var outputPos = document.getElementById('others');
    
    var init = document.getElementsByClassName('inputOthers');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedOthers");
    outputPos.appendChild(paraInit);

    config.others.push(initFields);
    config.otherPlaceholders.push(paraInit);

    addOthersButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputOthers');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedOthers");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3"> <input type="text" class="form-control inputOthers mt-3" placeholder="Authors"> </div> <div class="col-md-4  mb-3"> <input type="text" class="form-control inputOthers mt-3" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3"> <input type="date" class="form-control inputOthers mt-3" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.others.push(newInputPos);
        config.otherPlaceholders.push(para);

        
        console.log(config.others);
        console.log(config.otherPlaceholders);

        
        
    });

    removeButton.addEventListener('click', function(){
        config.others.pop(config.others);
        config.otherPlaceholders.pop(config.otherPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);
        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }
           

        console.log(config.others);
        console.log(config.otherPlaceholders)

    });

}

addOthers();