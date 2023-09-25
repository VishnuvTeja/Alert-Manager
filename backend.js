const error = document.getElementById("error");
const latency = document.getElementById("latency");
const tps = document.getElementById("tps");
const checkboxerror = document.getElementById("checkboxerror")
const checkboxtps = document.getElementById("checkboxtps")
const checkboxlatency = document.getElementById("checkboxlatency")
const availability = document.getElementById("Availability");
const dashboard = document.getElementById("Dashboard");
const playbook = document.getElementById("Playbook");

function showfield(){
   

   if (error.checked == true) {
    checkboxerror.style.display = "block";
   }
   else{
    checkboxerror.style.display = "none" 
   }
   if (latency.checked == true) {
    checkboxlatency.style.display = "block";
   }
   else{
    checkboxlatency.style.display = "none";
   }
   if (tps.checked == true) {
    checkboxtps.style.display = "block";
   }
   else{
    checkboxtps.style.display = "none";
   }
   
   
   
}
// error.addEventListener('change', function() {
//     if (error =! null) {
//         availability.style.display = 'block';
        
//     } else{
//         availability.style.display = 'none';
    
//     }
// });





    // //send  data to python backend

    // fetch('/send-variables' , {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json' ,
    //     },
    //     body: JSON.stringify({ var1: ServiceName, var2:ClusterName }),
    // })
    //     .then(response => response.JSON())
    //     .then(data => {

    //     })
    //     .catch(error => {
    //         console.error('Error:', error);

    //     });
    
   
