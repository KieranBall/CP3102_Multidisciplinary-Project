function on_card_click(card_id) {
console.log(card_id);
    document.getElementById("modal_title").innerText = card_id;
    document.getElementById("modal_body").innerText = card_id;

}

