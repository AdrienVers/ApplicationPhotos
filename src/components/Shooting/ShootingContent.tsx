import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Photo from "../../assets/Photo.png";

function ShootingContent() {
	return (
		<ShootingContentGlobal>
			<h1>Photos du shooting</h1>
			<div className="ShootingList">
				<div className="ShootingPhoto">
					<Image className="Photo" src={Photo} alt="Photo" />
					<div className="PhotoFilter"></div>
				</div>
				<div className="ShootingPhoto">
					<Image className="Photo" src={Photo} alt="Photo" />
				</div>
				<div className="ShootingPhoto">
					<Image className="Photo" src={Photo} alt="Photo" />
				</div>
				<div className="ShootingPhoto">
					<Image className="Photo" src={Photo} alt="Photo" />
				</div>
				<div className="ShootingPhoto">
					<Image className="Photo" src={Photo} alt="Photo" />
				</div>
				<div className="ShootingPhoto">
					<Image className="Photo" src={Photo} alt="Photo" />
				</div>
				<div className="ShootingPhoto">
					<Image className="Photo" src={Photo} alt="Photo" />
				</div>
				<div className="ShootingPhoto">
					<Image className="Photo" src={Photo} alt="Photo" />
				</div>
			</div>
		</ShootingContentGlobal>
	);
}

export default ShootingContent;

const ShootingContentGlobal = styled.div`
	background-color: rgb(224, 221, 215);

	h1 {
		font-size: 1.7rem;
		padding: 20px 0px 5px 30px;
		margin: 0px;
	}

	.ShootingList {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 20px 10px;
		gap: 20px;

		.ShootingPhoto {
			position: relative;

			&:hover {
				cursor: pointer;

				.PhotoFilter {
					opacity: 1;
					transition: 0.5s;
				}
			}

			.Photo {
				max-width: 300px;
				max-height: 300px;
			}

			.PhotoFilter {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				opacity: 0;
			}
		}
	}
`;
