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

	if (sidebar.style.height == "40%") {
		sidebar.style.height = "0px";
		sidebarButton.style.bottom = "0px";
		buttonIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
	} else {
		sidebar.style.height = "40%";
		sidebarButton.style.bottom = "40%";
		buttonIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
	}
}
