function toggleNavbar() {
	const navbar = document.getElementById("navbar-items");
	const navbarButton = document.getElementById("menu-button-navbar");
	const buttonIcon = navbarButton.firstElementChild;

	if (navbar.style.margin == "0px") {
		navbar.style.margin = "-5em 0 0 0";
		buttonIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
	} else {
		navbar.style.margin = "0px";
		buttonIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
	}
}

function toggleSidebar() {
	const sidebar = document.getElementById("sidebar");
	const sidebarButton = document.getElementById("menu-button-sidebar");
	const buttonIcon = sidebarButton.firstElementChild;

	if (sidebar.style.height == "60%") {
		sidebar.style.height = "0px";
		sidebarButton.style.bottom = "0px";
		buttonIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
	} else {
		sidebar.style.height = "60%";
		sidebarButton.style.bottom = "60%";
		buttonIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
	}
}

window.addEventListener(
	"resize",
	function (event) {
		if (event.target.innerWidth <= 700) {
			const sidebarButton = document.getElementById(
				"menu-button-sidebar"
			);
			const navbarButton = document.getElementById("menu-button-navbar");
			const navButtonIcon = navbarButton.firstElementChild;
			const sideButtonIcon = sidebarButton.firstElementChild;

			const sidebar = document.getElementById("sidebar");
			const navbar = document.getElementById("navbar-items");

			sidebar.removeAttribute("style");
			sidebarButton.removeAttribute("style");
			navbar.removeAttribute("style");

			navButtonIcon.classList.remove("fa-chevron-up", "fa-chevron-down");
			sideButtonIcon.classList.remove("fa-chevron-up", "fa-chevron-down");
			navButtonIcon.classList.add("fa-chevron-down");
			sideButtonIcon.classList.add("fa-chevron-up");
		}
	},
	true
);
