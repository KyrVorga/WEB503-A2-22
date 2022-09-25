function toggleMenu() {
	if (document.getElementById("dropdown-nav").style.display == "block") {
		document.getElementById("dropdown-nav").style.display = "none";
	} else {
		document.getElementById("dropdown-nav").style.display = "block";
	}
}

function toggleSidebar() {
	const sidebar = document.getElementById("sidebar");
	const sidebarButton = document.getElementById("sidebar-menu-button");
	const buttonIcon = sidebarButton.firstElementChild;

	if (document.getElementById("sidebar").style.height == "0px") {
		sidebar.style.height = "40%";
		sidebarButton.style.bottom = "40%";
		buttonIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
	} else {
		sidebar.style.height = "0px";
		sidebarButton.style.bottom = "0px";
		buttonIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
	}
}
