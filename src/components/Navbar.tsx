import React from "react";
import styled from "@emotion/styled";
import Logo from "../assets/Logo.png";
import Image from "next/image";

function Navbar() {
	return (
		<NavbarGlobal>
			<div className="NavbarLogoContainer">
				<Image className="Logo" src={Logo} alt="Logo" />
			</div>
			<div className="NavbarLinksContainer">
				<span>Galerie</span>
				<span>Vidéos</span>
				<span>Designs</span>
				<span>Blog</span>
				<span>{"Application"}</span>
				<span>Contact</span>
			</div>
			<div className="NavbarButtonContainer">
				{/*  
				<button>{"Se connecter"}</button>
				<button>{"S'inscrire"}</button>
                */}
				<button>{"Mes photos"}</button>
				<button>{"Mon profil"}</button>
			</div>
		</NavbarGlobal>
	);
}

export default Navbar;

const NavbarGlobal = styled.div`
	background-color: rgb(224, 221, 215);
	color: black;
	display: flex;
	align-items: center;

	.NavbarLogoContainer {
		display: flex;
		align-items: center;
		width: 30%;

		.Logo {
			max-width: 50px;
			max-height: 50px;
			margin: 10px 50px;
		}
	}

	.NavbarLinksContainer {
		display: flex;
		align-items: center;
		width: 50%;

		span {
			font-size: 1.05rem;
			padding: 0 20px;
		}
	}

	.NavbarButtonContainer {
		display: flex;
		align-items: center;
		width: 20%;

		button {
			padding: 10px 20px;
			border-radius: 50px;
			border: none;
			box-shadow: inset 0px 0px 0px 0.3px rgba(0, 0, 0, 0.5);
			font-size: 1.05rem;
			margin: 0 10px;

			&:hover {
				cursor: pointer;
			}
		}
	}
`;
