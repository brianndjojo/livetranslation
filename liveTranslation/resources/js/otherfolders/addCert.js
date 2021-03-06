function addCert(){
    
    var addPubButt = document.getElementById('addCert');
    var removeButton = document.getElementById('removeCert');
    var infoPos = document.getElementById('fillingCert');
    var outputPos = document.getElementById('certificationOutput');
    
    var init = document.getElementsByClassName('inputCert');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedCert");
    outputPos.appendChild(paraInit);
   
    config.certs.push(initFields);
    config.certPlaceholders.push(paraInit);

    addPubButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputCert');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedCert");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputCert" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputCert" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputCert" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.certs.push(newInputPos);
        config.certPlaceholders.push(para);

        
        console.log(config.certs);
        console.log(config.certPlaceholders);

        
        
    });

    removeButton.addEventListener('click', function(){
        config.chapters.pop(config.certs);
        config.chaptersPlaceholders.pop(config.certPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);

        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }
           

        console.log(config.certs);
        console.log(config.certPlaceholders);

    });

}

addCert();