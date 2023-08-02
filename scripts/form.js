let next_btn_1 = document.getElementById("next_btn_1");
const step1_container_2 = document.getElementById("step1_container_2")
const step2_container_2 = document.getElementById("step2_container_2")
const step3_container_2 = document.getElementById("step3_container_2")

next_btn_1.onclick = () => {
    let empty_field = document.getElementsByClassName("empty_field");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone_number = document.getElementById("phone_number");

    // Hide all error messages initially
    for (let i = 0; i < empty_field.length; i++) {
        empty_field[i].style.display = "none";
    }
    name.style.border = "2px solid rgb(205, 196, 196)"
    email.style.border = "2px solid rgb(205, 196, 196)"
    phone_number.style.border = "2px solid rgb(205, 196, 196)"
    if (name.value === "") {
        empty_field[0].style.display = "block";
        name.style.border = "2px solid red"
    }

    if (email.value === "") {
        empty_field[1].style.display = "block";
        email.style.border = "2px solid red"
    }

    if (phone_number.value === "") {
        empty_field[2].style.display = "block";
        phone_number.style.border = "2px solid red"
    }
    else{
        step1_container_2.style.display = "none"
        step2_container_2.style.display = "block";
        disable_steps()
        enable_step(1)
    }
};

// Functionality for selecting the plans
let selected_plan_name // for plan name
let selected_plan // for plan price summary
let plan_price
let plans = document.getElementsByClassName("plans");
Array.from(plans).forEach((card) => {
    card.onclick = () => {
        Array.from(plans).forEach((card) => {
            card.classList.remove("selected");
        });
        card.classList.add("selected");
        selected_plan = card.querySelector("p").innerText
        selected_plan_name = card.querySelector("h2").innerText
        plan_price = selected_plan.match(/\d+/)[0]
        document.querySelector("#plan_section h2").innerText = selected_plan_name
        document.querySelector("#plan_section p").innerText = selected_plan
        
        console.log(plan_price)
    }
});

// Functionality for selecting the add-ons
let selected_add_ons = []; // Initialize as an empty array to store selected add-ons
let selected_add_ons_price = []; // Initialize as an empty array to store selected add-ons
let total_add_ons_price

let add_ons = document.getElementsByClassName("add_ons");

Array.from(add_ons).forEach((add_on) => {
    add_on.onclick = () => {
        add_on.classList.toggle("selected");
        updateSelectedAddOns(); // Call a function to update the selected add-ons array
    };
});

function updateSelectedAddOns() {
    selected_add_ons = Array.from(document.querySelectorAll(".add_ons.selected h2")).map(add_on => add_on.innerText);
    selected_add_ons_price = Array.from(document.querySelectorAll(".add_ons.selected p")).map(add_on => add_on.innerText);
    selected_add_ons_price = selected_add_ons_price.map(selected_add_ons_price => selected_add_ons_price.match(/\d+/)[0])
    selected_add_ons_price = selected_add_ons_price.map(selected_add_ons_price => parseInt(selected_add_ons_price))
    total_add_ons_price = 0
    for (let i = 0; i < selected_add_ons_price.length; i++) {
        console.log("Current element:", selected_add_ons_price[i]); // Check each element during the loop
        total_add_ons_price += selected_add_ons_price[i];
    }

    let add_ons_section = document.getElementById("add_ons_section");
    let total_price = document.querySelector("#total_section h2:nth-child(2)");
    let html = ""
    for(let i = 0;i <selected_add_ons.length;i++){
        html += `
        <div class="my_add_on">
                <p>${selected_add_ons[i]}</p>
                <p>+$${selected_add_ons_price[i]}/mo</p>
              </div>
        `
    }
    add_ons_section.innerHTML = html
    plan_price = parseInt(plan_price)
    total_price.innerHTML = `$${(plan_price + total_add_ons_price).toString()}/mo`;
}




// Functionality for changing the pages
let next_btn_2 = document.getElementById("next_btn_2")
let next_btn_3 = document.getElementById("next_btn_3")
let back_btn_1 = document.getElementById("back_btn_1") 
let back_btn_2 = document.getElementById("back_btn_2")
let back_btn_3 = document.getElementById("back_btn_3")
let confirm_btn = document.getElementById("confirm_btn")
const steps = document.getElementsByClassName("steps");

function disable_steps() {
    Array.from(steps).forEach(step => {
      const h2Tag = step.querySelector("h2");
      h2Tag.style.backgroundColor = "transparent"; 
    });
  }

function enable_step(step_index){
let steps_arr = Array.from(steps)
steps_arr[step_index].querySelector("h2").style.backgroundColor = "rgb(112, 176, 244)"
}

next_btn_2.onclick = () => {
    disable_steps();
    step2_container_2.style.display = "none"
    step3_container_2.style.display = "block"
    enable_step(2)
}
back_btn_1.onclick = () => {
    step2_container_2.style.display = "none"
    step1_container_2.style.display = "block"
    disable_steps()
    enable_step(0)
}
back_btn_2.onclick = () => {
    step3_container_2.style.display = "none"
    step2_container_2.style.display = "block"
    disable_steps()
    enable_step(1)
}
back_btn_3.onclick = () => {
    step4_container_2.style.display = "none"
    step3_container_2.style.display = "block"
    disable_steps()
    enable_step(2)
}
next_btn_3.onclick = () => {
    disable_steps();
    step3_container_2.style.display = "none"
    step4_container_2.style.display = "block"
    enable_step(3)
}
confirm_btn.onclick = () => {
    disable_steps();
    step4_container_2.style.display = "none"
    step5_container_2.style.display = "block"
    enable_step(3)
    
}

