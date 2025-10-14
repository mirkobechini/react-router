import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header>
            <nav class="navbar navbar-expand-sm bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">My E-commerce</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink to="/" class="nav-link">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/aboutus" class="nav-link">Chi siamo</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/products" class="nav-link">Prodotti</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}