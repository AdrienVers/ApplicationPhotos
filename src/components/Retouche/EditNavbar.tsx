import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

function EditNavbar() {
	return (
		<EditNavbarGlobal>
			<p>
				<Link href="/echanges">
					<span>{"Mes échanges"}</span>
				</Link>
				<i className="fa-solid fa-angle-right" />
				<Link href="/retouches">
					<span>{"Photos retouchées"}</span>
				</Link>
			</p>
		</EditNavbarGlobal>
	);
}

export default EditNavbar;

const EditNavbarGlobal = styled.div`
	padding: 0px 20px;

	p {
		display: flex;
		align-items: center;

		span {
		}

		i {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 4px 8px 0px 8px;
		}
	}
`;
