export function alertOn(){
    button_OFF();
     document.getElementById("alertDialog").show();
 }

 document.getElementById("alertBtn").addEventListener("click", alertOn);

 export function alertOff(){
     button_ON() ;
     document.getElementById("alertDialog").close();
 }

 document.getElementById("button1").addEventListener("click", alertOff);


  export function button_ON(){
     document.getElementById("alertBtn").disabled = false;
     document.getElementById("confirmBtn").disabled = false;
     document.getElementById("promptBtn").disabled = false;
     document.getElementById("saferPromptBtn").disabled = false;
 }

 export function button_OFF(){
     document.getElementById("alertBtn").disabled = true;
     document.getElementById("confirmBtn").disabled = true;
     document.getElementById("promptBtn").disabled = true;
     document.getElementById("saferPromptBtn").disabled = true;
 }

 export function confirmOn(){
     button_OFF();
     document.getElementById("confirmDialog").show();
 }

 document.getElementById("confirmBtn").addEventListener("click",confirmOn);


 export function true_conformOff(){
     let confirm_state;
     button_ON();
     confirm_state = true;
     document.getElementById("confirmDialog").close();
     document.getElementById("output1").innerHTML = `Confirm result: ${confirm_state}`;
     document.getElementById("output1").style.display = "initial";
     document.getElementById("output2").style.display = "none";
     document.getElementById("output3").style.display = "none";
 }

 document.getElementById("confirmOKBtn").addEventListener("click", true_conformOff);

 export function false_conformOff(){
     let confirm_state;
     button_ON();
     confirm_state = false;
     document.getElementById("confirmDialog").close();
     document.getElementById("output1").innerHTML = `Confirm result: ${confirm_state}`;
     document.getElementById("output1").style.display = "initial";
     document.getElementById("output2").style.display = "none";
     document.getElementById("output3").style.display = "none";
 }

 document.getElementById("confirmCancelBtn").addEventListener("click", false_conformOff);

 export function prompt_open(){
     button_OFF();
     document.getElementById("promptDialog").show();
 }

 document.getElementById("promptBtn").addEventListener("click", prompt_open);


 export function prompt_closeByOk(){
     let prompt_val;
     button_ON();
     document.getElementById("promptDialog").close();
     prompt_val = document.getElementById("pmt").value;

     if(prompt_val != null && prompt_val != ""){

         document.getElementById("output2").innerHTML = `Prompt result: ${prompt_val}`;
     }

     else {

         document.getElementById("output2").innerHTML = "User didn't enter anything";
     }
     document.getElementById("output2").style.display = "initial";
     document.getElementById("output1").style.display = "none";
     document.getElementById("output3").style.display = "none";
 }

 document.getElementById("promptOKBtn").addEventListener("click", prompt_closeByOk);

 export function prompt_closeByCancel(){
     button_ON();
     document.getElementById("promptDialog").close();
     document.getElementById("output2").innerHTML = "User didn't enter anything";
     document.getElementById("output2").style.display = "initial";
     document.getElementById("output1").style.display = "none";
     document.getElementById("output3").style.display = "none";
 }

 document.getElementById("promptCancelBtn").addEventListener("click", prompt_closeByCancel);

 export function safe_open(){
     button_OFF();
     document.getElementById("saferPromptDialog").show();
 }

 document.getElementById("saferPromptBtn").addEventListener("click", safe_open);

 export function safe_closeByOk(){
     let val;
     button_ON();
     document.getElementById("saferPromptDialog").close();
     val = document.getElementById("saferPromptInput").value;
     let safe_val = DOMPurify.sanitize(val);
     if(safe_val != null && safe_val != ""){

         document.getElementById("output3").innerHTML = `Prompt result: ${safe_val}`;
     }

     else {

         document.getElementById("output3").innerHTML = "User didn't enter anything";
     }

     document.getElementById("output3").style.display = "initial";
     document.getElementById("output2").style.display = "none";
     document.getElementById("output1").style.display = "none";
 }

 document.getElementById("saferPromptOKBtn").addEventListener("click", safe_closeByOk);

 export function safe_closeByCancel(){
     button_ON();
     document.getElementById("saferPromptDialog").close();
     document.getElementById("output3").innerHTML = "User didn't enter anything";
     document.getElementById("output3").style.display = "initial";
     document.getElementById("output2").style.display = "none";
     document.getElementById("output1").style.display = "none";
 }

 document.getElementById("safeBut1").addEventListener("click", safe_closeByCancel);