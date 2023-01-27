class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
            <header class="header fixed-top">
                <nav class="navbar navbar-expand-lg navbar-inverse">
                    <div class="container">
                        <a class="sitename" href="#">SiteName</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about_us">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#blogs">Blogs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#services">Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
		`;
	}
}

customElements.define('header-component', Header);