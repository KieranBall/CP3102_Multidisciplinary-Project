var test0 = "With a Budget of 250 million Townsville is Receiving a much-needed boost to its businesses overall Townsville economy. The Queensland government has Contributed $140 million to the project. The Australian Government had contributed 100 Million and the national rugby league and North Queensland cowboys have contributed 10 million. With 354 business affected directly by the construction of the stadium 342 are local meaning the money spent here will stay here. NQ Reo is one of the business involved in construction. NQ Reo manufactured the Piles the stadium rests on and uses locally sourced materials in their construction with 44 business it sourced their materials and services from only 3 were not local. The money is being spend in Townsville and it is staying in Townsville. ";
var test1 = "When asked “Has working on the stadium given your businesses more prestige in the industry?” Businesses involved replied with an enthusiastic yes. They value the participation and collaboration of working on such a milestone project. Working or many years in the north Queensland area this is the kind of project that ends up on business CV’s when looking for new work their collaboration in building the stadium will be remembered and serve as catalyst for building a better name and reputation throughout the industry and region.";



function on_card_click(card_id) {


    switch(card_id) {
        case "0":
            document.getElementById("modal_title").innerText = "Employment prospects have improved in Townsville";
            document.getElementById("modal_body").innerText = test0;
            break;
        case "1":
            document.getElementById("modal_title").innerText = "Townsville business feel their image has improved";
            document.getElementById("modal_body").innerText = test1;
            break;
        default:
            document.getElementById("modal_title").innerText = "Fail";
            document.getElementById("modal_body").innerText = "No data";
    }

}

