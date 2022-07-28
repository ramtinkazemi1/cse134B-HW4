export function whenOn(){
    btn_off();
     document.getElementById("alertDialog").show();
 }

 document.getElementById("alertBtn").addEventListener("click", whenOn);

 export function whenOff(){
     btn_on() ;
     document.getElementById("alertDialog").close();
 }

 document.getElementById("button1").addEventListener("click", whenOff);


  export function btn_on(){
     document.getElementById("alertBtn").disabled = false;
     document.getElementById("confirmBtn").disabled = false;
     document.getElementById("promptBtn").disabled = false;
     document.getElementById("saferPromptBtn").disabled = false;
 }

 export function btn_off(){
     document.getElementById("alertBtn").disabled = true;
     document.getElementById("confirmBtn").disabled = true;
     document.getElementById("promptBtn").disabled = true;
     document.getElementById("saferPromptBtn").disabled = true;
 }

 export function whenConfClicked(){
     btn_off();
     document.getElementById("confirmDialog").show();
 }




 document.getElementById("confirmBtn").addEventListener("click",whenConfClicked);
 export function trueWhenConfOff(){
     let confirmBool;
     btn_on();
     confirmBool = true;
     document.getElementById("confirmDialog").close();
     document.getElementById("output1").innerHTML = `Confirm result: ${confirmBool}`;
     document.getElementById("output1").style.display = "initial";
     document.getElementById("output2").style.display = "none";
     document.getElementById("output3").style.display = "none";
 }



 document.getElementById("confirmOKBtn").addEventListener("click", trueWhenConfOff);
 export function falseWhenConfOff(){
     let confirmBool;
     btn_on();
     confirmBool = false;
     document.getElementById("confirmDialog").close();
     document.getElementById("output1").innerHTML = `Confirm result: ${confirmBool}`;
     document.getElementById("output1").style.display = "initial";
     document.getElementById("output2").style.display = "none";
     document.getElementById("output3").style.display = "none";
 }




 document.getElementById("confirmCancelBtn").addEventListener("click", falseWhenConfOff);
 export function promptClicked(){
     btn_off();
     document.getElementById("promptDialog").show();
 }




 document.getElementById("promptBtn").addEventListener("click", promptClicked);
 export function promptCloseWithOK(){
     let promptValue;
     btn_on();
     document.getElementById("promptDialog").close();
     promptValue = document.getElementById("promptInput").value;
     if(promptValue != null && promptValue != ""){    document.getElementById("output2").innerHTML = `Prompt result: ${promptValue}`;}
     else {
         document.getElementById("output2").innerHTML = "User didn't enter anything";
     }
     document.getElementById("output2").style.display = "initial";
     document.getElementById("output1").style.display = "none";
     document.getElementById("output3").style.display = "none";
 }




 document.getElementById("promptOKBtn").addEventListener("click", promptCloseWithOK);
 export function prompt_closeByCancel(){
     btn_on();
     document.getElementById("promptDialog").close();
     document.getElementById("output2").innerHTML = "User didn't enter anything";
     document.getElementById("output2").style.display = "initial";
     document.getElementById("output1").style.display = "none";
     document.getElementById("output3").style.display = "none";
 }




 document.getElementById("promptCancelBtn").addEventListener("click", prompt_closeByCancel);
 export function saferPromptClicked(){
     btn_off();
     document.getElementById("saferPromptDialog").show();
 }



 document.getElementById("saferPromptBtn").addEventListener("click", saferPromptClicked);
 export function saferPromptWhenOKclicked(){
     let SPval;
     btn_on();
     document.getElementById("saferPromptDialog").close();
     SPval = document.getElementById("saferPromptInput").value;
     let saferPromptValue = DOMPurify.sanitize(SPval);
     if(saferPromptValue != null && saferPromptValue != ""){

         document.getElementById("output3").innerHTML = `Safer Prompt result: ${saferPromptValue}`;
     }
     else {
         document.getElementById("output3").innerHTML = "User didn't enter anything";
     }
     document.getElementById("output3").style.display = "initial";
     document.getElementById("output2").style.display = "none";
     document.getElementById("output1").style.display = "none";
 }



 document.getElementById("saferPromptOKBtn").addEventListener("click", saferPromptWhenOKclicked);
 export function saferPromptWhenCancelClicked(){
     btn_on();
     document.getElementById("saferPromptDialog").close();
     document.getElementById("output3").innerHTML = "User didn't enter anything";
     document.getElementById("output3").style.display = "initial";
     document.getElementById("output2").style.display = "none";
     document.getElementById("output1").style.display = "none";
 }

 document.getElementById("saferPromptCancelBtn").addEventListener("click", saferPromptWhenCancelClicked);