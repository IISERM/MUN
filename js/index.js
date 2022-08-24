
// Navbar toggling code

const toggleBtn = document.querySelector(".toggle-button");
const navbarItems = document.querySelector(".navbar_items");

toggleBtn.addEventListener("click", () => {
    navbarItems.classList.toggle("active");
});

// Schedule toggling code

// const schBtnL = document.querySelector("#btn-l");
// const schBtnR = document.querySelector("#btn-r");
// const schDay1 = document.querySelector("#day-1");
// const schDay2 = document.querySelector("#day-2");

// schBtnL.addEventListener("click", () => {
// 	schDay1.style.display = "block";
// 	schDay2.style.display = "none";
// 	schBtnL.classList.toggle("active-btn");
// 	schBtnR.classList.toggle("active-btn");
// });
	
// schBtnR.addEventListener("click", () => {
// 	schDay1.style.display = "none";
// 	schDay2.style.display = "block";
// 	schBtnL.classList.toggle("active-btn");
// 	schBtnR.classList.toggle("active-btn");
// });

// Expanded Schedule Toggling code
const dayButtons = document.querySelectorAll(".sch-buttons .btn");
let activeDayId = "btn-day-1";

dayButtons.forEach(btn => {

	btn.addEventListener("click", () => {

		dayButtons.forEach(btn => {
			if (btn.classList.contains("active-btn")) {
				btn.classList.remove("active-btn");
			}
		})
		
		document.querySelectorAll("div.event-timeline").forEach(elmt => {
			if (elmt.classList.contains("shown") && elmt.id != activeDayId) {
				elmt.classList.remove("shown");
				elmt.classList.add("hidden");
			}
			else if (elmt.classList.contains("hidden") == false) {
				elmt.classList.add("hidden");
			}
		})
		
		if (btn.classList.contains("active-btn") == false) {
			btn.classList.add("active-btn");
		}
		activeDayId = btn.id;
		console.log(btn.id.split("btn-")[1])
		var schedule = document.querySelector(`div#${btn.id.split("btn-")[1]}`);
		
		if (schedule.classList.contains("hidden")) {
			schedule.classList.remove("hidden");
		}
	})
})

// Accordion code

document.querySelectorAll(".accordion__heading").forEach(elmt => {
  elmt.addEventListener("click", () => {
    const accordionContent = elmt.nextElementSibling;
    elmt.classList.toggle(".accordion__heading--active");
    elmt.querySelector("ion-icon").style.transform = "rotate(180deg)";

    if (elmt.classList.contains(".accordion__heading--active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      // elmt.querySelector("ion-icon").style.transform = "rotate(180deg)";
    } else {
      accordionContent.style.maxHeight = 0;
      elmt.querySelector("ion-icon").style.transform = "rotate(0deg)";
    }

  })
})
