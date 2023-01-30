import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

function ExchangeNavbar() {
	return (
		<ExchangeNavbarGlobal>
			<p>
				<Link href="/echanges">
					<span>{"Mes échanges"}</span>
				</Link>
			</p>
		</ExchangeNavbarGlobal>
	);
}

export default ExchangeNavbar;

const ExchangeNavbarGlobal = styled.div`
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
