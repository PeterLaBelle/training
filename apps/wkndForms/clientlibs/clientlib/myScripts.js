
function getDocID() {

	var tempDocID = "20-12345";

    //we would do something here to generate a number

    return tempDocID;

}


function createFullName(fName, lName, title) {

    // The function returns a full name and title as a single string
    var fullName = "";
 
    fullName = fName + " " + lName + " - " + title; 
    return fullName;
}


function calcTax(p1) {
    return p1 * .13; // The function returns tax amount on the purchase price
}

function setStateProv(sCountry) {

     var stateProv = "";
    
    try {
        //based on country set the string for the stateProv dropdown.
        switch (sCountry) {
            case "CA":
                stateProv = "AB= Alberta, BC= British Columbia, MB= Manitoba, NB= New Brunswick, NF= Newfoundland and Labrador,  NT= Northwest Territories, NS= Nova Scotia, NV= Nunavut, ON= Ontario, PE= Prince Edward Island, QC= Quebec, SK= Saskatchewan, YK= Yukon";
                
                break;
            case "MX":
                stateProv = "2=Sonora, 3=Coahuila, 4=Durango, 5=Oaxaca, 6=Tamaulipas, 7=Jalisco, 8=Zacatecas, 9=Baja California Sur, 10=Chiapas, 11=Veracruz, 12=Baja California, 13=Nuevo León, 14=Guerrero, 15=San Luis Potosí, 16=Michoacán, 17=Campeche, 18=Sinaloa, 19=Quintana Roo, 20=Yucatán, 21=Puebla, 22=Guanajuato, 23=Nayarit, 24=Tabasco, 25=México, 26=Hidalgo, 27=Querétaro, 28=Colima, 29=Aguascalientes, 30=Morelos, 31=Tlaxcala, 32=Mexico City";
                
                break;
            default:
               stateProv =  "AL =Alabama,AK = Alaska,AZ = Arizona,AR = Arkansas,CA = California,CO = Colorado,CT = Connecticut,DE = Delaware,DC = District of Columbia,FL = Florida,GA = Georgia,HI = Hawaii,ID = Idaho,IL = Illinois,IN = Indiana,IA = Iowa,KS = Kansas,KY = Kentucky,LA = Louisiana,ME = Maine,MD = Maryland,MA = Massachusetts,MI = Michigan,MN = Minnesota,MS = Mississippi,MO = Missouri,MT = Montana,NE = Nebraska,NV = Nevada,NH = New Hampshire,NJ = New Jersey,NM = New Mexico,NY = New York,NC = North Carolina,ND = North Dakota,OH = Ohio,OK = Oklahoma,OR = Oregon,PA = Pennsylvania,RI = Rhode Island,SC = South Carolina,SD = South Dakota,TN = Tennessee,TX = Texas,UT = Utah,VT = Vermont,VA = Virginia,WA = Washington,WV = West Virginia,WI = Wisconsin,WY = Wyoming";
        }
        
        return stateProv;

    } catch (err) {
        //document.getElementById("demo").innerHTML = err.message;
    }

}



function setRank(sBranch) {

     var rankList = "";
    
    try {
        //based on country set the string for the stateProv dropdown.
        switch (sBranch) {
            case "army":
                rankList = "forms=Forms Dev, Gen=General, LGen=Lieutenant-General, MGen=Major-General, BGen=Brigadier-General, Col=Colonel, LCol=Lieutenant-Colonel, Maj=Major, Capt=Captain, Lt=Lieutenant, 2Lt=Second Lieutenant, OCdt=Officer Cadet, CWO=Chief Warrant Officer, MWO=Master Warrant Officer, WO=Warrant Officer, Sgt=Sergeant, MCpl=Master Corporal, Cpl=Corporal, PteT=Private (Trained), PteB=Private (Basic)";

                break;
            case "rcn":
                rankList = "Adm=Admiral, VAdm=Vice-Admiral, RAdm=Rear-Admiral, Cmdre=Commodore, Capt=Captain, Cdr=Commander, LCdr=Lieutenant-Commander, Lt=Lieutenant, SLt=Sub-Lieutenant, ASlt=Acting Sub-Lieutenant, NCdt=Naval Cadet, CPO1=Chief Petty Officer 1st class, CPO2=Chief Petty Officer 2nd class, PO1=Petty Officer 1st class, PO2=Petty Officer 2nd class, MS=Master Seaman, LS=Leading Seaman, AB=Able Seaman, OS=Ordinary Seaman";

                break;
            case "rcaf":
                rankList = "Gen=General, LGen=Lieutenant-General, MGen=Major-General, BGen=Brigadier-General, Col=Colonel, LCol=Lieutenant-Colonel, Maj=Major, Capt=Captain, Lt=Lieutenant, 2Lt=2nd Lieutenant, OCdt=Officer Cadet, CWO=Chief Warrant Officer, MWO=Master Warrant Officer, WO=Warrant Officer, SGT=Sergeant, MCpl=Master  orporal, Cpl=Corporal, AvrT=Aviator (Trained), AvrB=Aviator (Basic), CFCWO=Canadian Forces Chief Warrant  Officer, CWO=Command Chief Warrant Officer, SCWO=Senior Appointment Chief Warrant Officer";

                break;                
            default:
               rankList =  "Select Branch";
        }
        
        return rankList;

    } catch (err) {
        //document.getElementById("demo").innerHTML = err.message;
    }

}




