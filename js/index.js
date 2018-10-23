var description1 = "With a Budget of 250 million Townsville is Receiving a much-needed boost to its businesses overall Townsville economy. The Queensland government has Contributed $140 million to the project. The Australian Government had contributed 100 Million and the national rugby league and North Queensland cowboys have contributed 10 million. With 354 business affected directly by the construction of the stadium 342 are local meaning the money spent here will stay here. NQ Reo is one of the business involved in construction. NQ Reo manufactured the Piles the stadium rests on and uses locally sourced materials in their construction with 44 business it sourced their materials and services from only 3 were not local. The money is being spend in Townsville and it is staying in Townsville.  ";
var description2 = "Since taking on the North Queensland stadium project KLN electrical services NQ REO, and GPB Constructions have all taken on new employees since working on the stadium project.   Project Manager, Kurt Poplin, hadn’t had a new apprentice on the books in eight years. New plant operators’ electricians and apprentices have all found work thanks to the North Queensland Stadium. These are just four business and collectively they have created 10 jobs because of the Construction of the stadium for just four business.    ";
var description3 = "When asked “Has working on the stadium given your businesses more prestige in the industry?” Businesses involved replied with an enthusiastic yes. They value the participation and collaboration of working on such a milestone project. Working or many years in the north Queensland area this is the kind of project that ends up on business CV’s when looking for new work their collaboration in building the stadium will be remembered and serve as catalyst for building a better name and reputation throughout the industry and region.";
var description4 = "New training and available products help Business to grow as the knowledge base of their employees grow so does the potential for their further employability.  Wagstaff pilling a Brisbane based company has been a part of the training and growth process for NQ REO. NQ REO has been able to Make the Piles for the stadium thanks for the guidance and training of Wagstaff bringing new production capabilities to the North Queensland thanks to the relations with Watpac the managing contractor. Five apprentices have been employed with NQ REO as they complete their Certificate III in Concreting. KLN electrical has sourced Multiple licences required for machinery in industry tickets. EG Excavator Licence, Working at Heights Ticket. GPB has also unskilled staff during the construction of the Stadium.";
var description5 = "When the government spends money, it is called expansionary fiscal policy. This added speeding on whatever it is will help the everyday people that live in the area of speeding. As more money is focused on a region that money changes hands in that region as salary’s and goods and payed for and consumed. The initial effect the increase spending by the government has on the economy is that the total amount of work business is willing to take on increases this leads to more work load and potentially training more new employees as there is greater certainty for future prosperity.";
var description6 = "The once off increased speeding by the government is not only spent once in the economy. Spending is again spent by a chain of businesses and industry’s as spending that otherwise would not have happened increases thanks to the new money and potential it holds. When a business receives a contract from the government they perform the assigned task and they get paid for it. they then pay their suppliers and staff this called the extended supply chain which then goes out and spends the money again this is called the multiplier effect. The 250 million that the Stadium is budgeted to cost will be spent in the Townsville economy many times over the coming years as the benefits continue to work there way through the supply chain.";
var description7 = "Business reach what is known as a steady state this is where they can no longer afford to invest in new staff technology or training as maintain their existence structure requires all their resources. The added benefit of the stadium to the Townsville region then is with this increased spending from the government it gives business the external push they need to continue to grow and improve their business creating a better Townsville for all as the potential capabilities of Townsville increase. This long run effect will increase the total amount of economic activity and all areas of Townsville will benefit.";
var description8 = "Looking at the industry data for Townsville This data can then be used to compare how industries are faring over time or used to compare one sector of the economy to another. In the collected data we have compared the industry data from Townsville the rest of Queensland as a whole and then again to regional Queensland we have also taken data from 2016/17 and compared it to data collected in 2007/08. The data allows us to see how industries have changed over almost 10 years. We learn from the data the construction industry over 10 years has decreased.  The decrease is not a significant change but Townsville’s construction industry relative to Queensland’s is in decline. The north Queensland construction of the stadium will help with the decline of the industry by creating more activity allowing them to train more employees and continue to grow and service the industry.";
var description9 = "The Townsville economy is a diverse and complex system of individual people and business. Supporting our local construction industry helps not only them but because the industry needs uniforms, raw supplies and oncourse people the money the government spends for the stadium actually comes back to help everyone in some small way. The stadium and its location and all of the decisions around it are to bring some to Townsville to foster and ongoing growth cycle that starts at the centre of the city at the stadium and will radiate out as people find jobs increase work capacity and finally financially the construction of the stadium is not just for football fans it’s for us all.";



    function on_card_click(card_id) {

        document.getElementById("card_stats_button_contain").style.display = "block";
        document.getElementById("card_stats_facts_contain").style.display = "none";

    switch(card_id) {
        case "1":
            document.getElementById("modal_body").innerText = description1;
            break;
        case "2":
            document.getElementById("modal_body").innerText = description2;
            break;
        case "3":
            document.getElementById("modal_body").innerText = description3;
            break;
        case "4":
            document.getElementById("modal_body").innerText = description4;
            break;
        case "5":
            document.getElementById("modal_body").innerText = description5;
            break;
        case "6":
            document.getElementById("modal_body").innerText = description6;
            break;
        case "7":
            document.getElementById("modal_body").innerText = description7;
            break;
        case "8":
            document.getElementById("modal_body").innerText = description8;
            break;
        case "9":
            document.getElementById("modal_body").innerText = description9;
            break;
        default:
            document.getElementById("modal_title").innerText = "Data Error!";
    }

}

function on_card_stats_click(num) {


    document.getElementById("card_stats_button_contain").style.display = "none";
    document.getElementById("card_stats_facts_contain").style.display = "block";


    var min = 10;
    var max = 90;

    var random_percentage = Math.random()*(max-min+1)+min;
    random_percentage = parseInt(random_percentage);

        switch (num) {
            case 0:
                console.log(random_percentage);
                document.getElementById("card_stats_facts_contain").innerHTML = "<h4>" + random_percentage + "% of people also knew that</h4>";
                break;
            case 1:
                console.log(random_percentage);
                document.getElementById("card_stats_facts_contain").innerHTML = "<h4>" + random_percentage + "% of people were also skeptical</h4>";
                break;

        }


}

