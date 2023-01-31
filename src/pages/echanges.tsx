import Image from "next/image";
import React from "react";
import ExchangeContent from "../components/Echanges/ExchangeContent";
import ExchangeDescription from "../components/Echanges/ExchangeDescription";
import ExchangeNavbar from "../components/Echanges/ExchangeNavbar";

function Echanges() {
	return (
		<>
			<ExchangeNavbar />
			<ExchangeContent />
			<ExchangeDescription />
		</>
	);
}

export default Echanges;
