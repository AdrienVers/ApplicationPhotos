import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Photo from "../../assets/Photo.png";

function EditContent() {
	return (
		<EditContentGlobal>
			<h1>Photos retouchées</h1>
			<div className="EditList">
			<Image className="Photo" src={Photo} alt="Photo" />
				<Image className="Photo" src={Photo} alt="Photo" />
				<Image className="Photo" src={Photo} alt="Photo" />
				<Image className="Photo" src={Photo} alt="Photo" />
				<Image className="Photo" src={Photo} alt="Photo" />
				<Image className="Photo" src={Photo} alt="Photo" />
				<Image className="Photo" src={Photo} alt="Photo" />
				<Image className="Photo" src={Photo} alt="Photo" />
			</div>
		</EditContentGlobal>
	);
}

export default EditContent;

const EditContentGlobal = styled.div`
	background-color: rgb(224, 221, 215);

	h1 {
		font-size: 1.7rem;
		padding: 20px 0px 5px 30px;
		margin: 0px;
	}

	.EditList {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 20px 10px;
		gap: 20px;

		.Photo {
			max-width: 300px;
			max-height: 300px;
		}
	}
`;
