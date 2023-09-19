
/**
* Adaptive Form Change Log Event Filtering
* client library.
* 
* @see https://helpx.adobe.com/experience-manager/6-5/forms/javascript-api/GuideBridge.html
*/

//Attach document ready
$(function() {
    //Attach guideBridge ready
	guideBridge.connect(function() {       
       	//Attach to form value change events
		guideBridge.on("elementValueChanged" , function(event, payload) {
			try {
				//Validate field on change
				if(payload){
					payload.target.validate();
				}
			}
			catch(err) {
				console.error("Failed to validate field.");
			}
		});
    });
});