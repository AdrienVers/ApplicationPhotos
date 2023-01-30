import Image from "next/image";
import React from "react";
import ExchangeContent from "../components/Echanges/ExchangeContent";
import ExchangeNavbar from "../components/Echanges/ExchangeNavbar";

function Echanges() {
	return (
		<>
			<ExchangeNavbar />
			<ExchangeContent />
		</>
	);
}

export default Echanges;
