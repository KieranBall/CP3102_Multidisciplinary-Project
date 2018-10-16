var description1 = "1";
var description2 = "2";
var description3 = "3";
var description4 = "4";
var description5 = "5";
var description6 = "6";
var description7 = "7";
var description8 = "8";
var description9 = "9";



    function on_card_click(card_id) {


    switch(card_id) {
        case "1":
            document.getElementById("modal_title").innerText = "";
            document.getElementById("modal_body").innerText = description1;
            break;
        case "2":
            document.getElementById("modal_title").innerText = "";
            document.getElementById("modal_body").innerText = description2;
            break;
        case "3":
            document.getElementById("modal_title").innerText = "";
            document.getElementById("modal_body").innerText = description3;
            break;
        case "4":
            document.getElementById("modal_title").innerText = "";
            document.getElementById("modal_body").innerText = description4;
            break;
        case "5":
            document.getElementById("modal_title").innerText = "";
            document.getElementById("modal_body").innerText = description5;
            break;
        case "6":
            document.getElementById("modal_title").innerText = "";
            document.getElementById("modal_body").innerText = description6;
            break;
        case "7":
            document.getElementById("modal_title").innerText = "";
            document.getElementById("modal_body").innerText = description7;
            break;
        case "8":
            document.getElementById("modal_title").innerText = "";
            document.getElementById("modal_body").innerText = description8;
            break;
        case "9":
            document.getElementById("modal_title").innerText = "";
            document.getElementById("modal_body").innerText = description9;
            break;
        default:
            document.getElementById("modal_title").innerText = "Fail";
            document.getElementById("modal_body").innerText = "No data";
    }

}

