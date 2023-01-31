import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import Link from "next/link";
import { NAVBAR_LINKS } from "./NavbarLinks";

type AnimationProps = {
	isActive: boolean;
};

function Navbar() {
	const [active, setActive] = useState(false);

	return (
		<NavbarGlobal>
			<div className="NavbarLogoContainer">
				<Link href="/">
					<Image className="Logo" src={Logo} alt="logo" />
				</Link>
			</div>
			<div className="NavbarLinksContainer">
				{NAVBAR_LINKS.map((item, index) => (
					<Link key={index} href={item.path} legacyBehavior>
						<a target={item.target} className="TextLink">
							{item.name}
						</a>
					</Link>
				))}
			</div>
			<div className="NavbarButtonContainer">
				<Link href="/echanges">
					{active ? (
						<button onClick={() => setActive(!active)}>{"Mes photos"}</button>
					) : (
						<button>{"Mes photos"}</button>
					)}
				</Link>
			</div>
			<div className="NavbarHamburger">
				{active ? (
					<i
						role="sidebarButton"
						className="fa-solid fa-xmark"
						onClick={() => setActive(!active)}
						style={{ marginLeft: "6px" }}
					/>
				) : (
					<i className="fa-solid fa-bars" onClick={() => setActive(!active)} />
				)}
			</div>
			<SidebarContent isActive={active}>
				<div className="SidebarLinks">
					{NAVBAR_LINKS.map((item, index) => (
						<Link key={index} href={item.path} legacyBehavior>
							<a target={item.target} onClick={() => setActive(!active)}>
								{item.name}
							</a>
						</Link>
					))}
				</div>
			</SidebarContent>
			<SidebarBackground isActive={active} />
		</NavbarGlobal>
	);
}

export default Navbar;

const NavbarGlobal = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	background-color: rgb(224, 221, 215);
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 99;
	align-items: center;
	justify-content: space-between;

	.NavbarLogoContainer {
		display: flex;
		align-items: center;
		margin: 0 50px;

		@media (max-width: 1000px) {
			margin: 0 30px;
		}

		.Logo {
			max-width: 50px;
			max-height: 50px;
		}

		@media (max-width: 900px) {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.NavbarLogoContainer {
				display: flex;
				align-items: center;

				.Logo {
					max-width: 50px;
					max-height: 50px;
				}
			}
		}
	}

	.NavbarLinksContainer {
		display: flex;
		align-items: center;

		@media (max-width: 900px) {
			display: none;
		}

		.TextLink {
			font-size: 1.05rem;
			padding: 0 20px;
			position: relative;

			@media (max-width: 1200px) {
				padding: 0 10px;
			}

			&:after {
				content: "";
				position: absolute;
				bottom: -6.5px;
				left: 10%;
				right: 0;
				width: 80%;
				height: 1.5px;
				transform: scaleY(0);
				background-color: rgb(10, 10, 10);
				transition: transform 0.3s;
			}

			&:hover {
				&:after {
					transform: scaleY(1);
				}
			}
		}
	}

	.NavbarButtonContainer {
		display: flex;
		align-items: center;
		margin: 0 50px;

		@media (max-width: 1000px) {
			margin: 0;
		}

		button {
			padding: 10px 20px;
			border-radius: 50px;
			border: none;
			box-shadow: inset 0px 0px 0px 0.3px rgba(0, 0, 0, 0.5);
			font-size: 1.05rem;
			white-space: nowrap;

			&:hover {
				cursor: pointer;
			}
		}
	}

	.NavbarHamburger {
		display: none;
		margin: 0 50px;

		@media (max-width: 1000px) {
			margin: 0 30px;
		}

		@media (max-width: 900px) {
			display: flex;

			i {
				display: none;
				font-size: 1.5rem;
				color: black;

				padding: 10px;

				@media (max-width: 900px) {
					display: flex;
				}

				&:hover {
					cursor: pointer;
				}
			}
		}
	}
`;

const SidebarContent = styled.div<AnimationProps>`
	display: none;
	z-index: 2;

	@media (max-width: 900px) {
		display: flex;
		position: absolute;
		color: rgb(10, 10, 10);
		top: 80px;
		height: 100vh;
		width: 100%;
		left: 0;
		transition: all 1.4s;
		background-color: transparent;
		transform: ${({ isActive }) =>
			isActive ? "translateX(0)" : "translateX(-100%)"};
	}

	.SidebarLinks {
		display: flex;
		flex-direction: column;
		gap: 20px;
		background-color: white;
		padding: 30px 30px 40px 20px;
		width: 225px;
		height: 100%;

		@media (max-width: 900px) {
			display: flex;
		}
	}
`;

const SidebarBackground = styled.div<AnimationProps>`
	position: absolute;

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		transition: background-color 1.2s ease-in-out;
		background-color: ${({ isActive }) =>
			isActive ? "rgba(0, 0, 0, 0.5)" : "transparent"};
		transform: ${({ isActive }) =>
			isActive ? "translateX(0)" : "translateX(-100%)"};
		top: 80px;
		left: 0px;
		z-index: 1;
	}
`;

/*
import React from "react";
import styled from "@emotion/styled";
import Logo from "../../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
	return (
		<>
			<NavbarGlobal>
				<div className="NavbarLaptop">
					<div className="NavbarLogoContainer">
						<Image className="Logo" src={Logo} alt="Logo" />
					</div>
					<div className="NavbarLinksContainer">
						<span>Galerie</span>
						<span>Vidéos</span>
						<span>Designs</span>
						<span>Blog</span>
						<Link href="/">
							<span>{"Application"}</span>
						</Link>
						<span>Contact</span>
					</div>
					<div className="NavbarButtonContainer">
						<Link href="/echanges">
							<button>{"Mes photos"}</button>
						</Link>
						<button>{"Mon profil"}</button>
					</div>
				</div>
				<div className="NavbarPhone">
					<div className="NavbarLogoContainer">
						<Image className="Logo" src={Logo} alt="Logo" />
					</div>
					<div className="NavbarHamburger">
						<i className="fa-solid fa-bars" />
					</div>
				</div>
			</NavbarGlobal>
		</>
	);
}

export default Navbar;

const NavbarGlobal = styled.div`
	background-color: rgb(224, 221, 215);
	color: black;
	display: flex;
	align-items: center;

	.NavbarLaptop {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;

		@media (max-width: 900px) {
			display: none;
		}

		.NavbarLogoContainer {
			display: flex;
			align-items: center;
			// width: 30%;

			.Logo {
				max-width: 50px;
				max-height: 50px;
				margin: 10px 50px;

				@media (max-width: 1200px) {
					margin: 10px 25px 10px 50px;
				}
			}
		}

		.NavbarLinksContainer {
			display: flex;
			align-items: center;
			// width: 50%;

			span {
				font-size: 1.05rem;
				padding: 0 20px;

				@media (max-width: 1200px) {
					padding: 0 10px;
				}
			}
		}

		.NavbarButtonContainer {
			display: flex;
			align-items: center;
			// width: 20%;
			margin-right: 50px;

			@media (max-width: 1200px) {
				margin-right: 25px;
			}

			button {
				padding: 10px 20px;
				border-radius: 50px;
				border: none;
				box-shadow: inset 0px 0px 0px 0.3px rgba(0, 0, 0, 0.5);
				font-size: 1.05rem;
				margin: 0 10px;
				white-space: nowrap;

				&:hover {
					cursor: pointer;
				}
			}
		}
	}

	.NavbarPhone {
		display: none;
		position: relative;

		@media (max-width: 900px) {
			display: flex;
			align-items: center;
			width: 100%;
			justify-content: space-between;

			.NavbarLogoContainer {
				display: flex;
				align-items: center;

				.Logo {
					max-width: 50px;
					max-height: 50px;
					margin: 10px 25px 10px 50px;
				}
			}

			.NavbarHamburger {
				display: flex;
				align-items: center;
				margin-right: 50px;
				font-size: 1.5rem;
			}
		}
	}
`;
*/
