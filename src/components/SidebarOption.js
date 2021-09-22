import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
	const dispatch = useDispatch();

	// Adds a channel to the database structure in firebase
	const addChannel = () => {
		const channelName = prompt("Please enter the channel Name");
		// Protect against not entering a value
		// If channelName has a value
		if (channelName) {
			// then access the database
			// And add a room in rooms
			db.collection("rooms").add({
				name: channelName,
			});
		}
	};

	// Every time a room is selected, push that room into my redux
	// Redux: Global store where we can access and store variables
	const selectChannel = () => {
		// If there is an id | Will only be the channels created
		// Push the clicked id(chatroom) into the global store
		// Use pushed value for fetching the messages inside that id(chatroom)
		if (id) {
			dispatch(
				enterRoom({
					roomId: id,
				})
			);
		}
	};

	return (
		<div>
			<SidebarOptionContainer
				// If addChannelOption is passed as a prop
				// then trigger the addChannel function
				// else its not there, trigger the selectChannel function instead
				onClick={addChannelOption ? addChannel : selectChannel}
			>
				{/* If a Icon has been passed in/exists -> Render it out */}
				{Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
				{/* If you passed the Icon/isTrue/has a value -> Render the h3 */}
				{/* Else do the thing after : */}
				{Icon ? (
					<h3>{title}</h3>
				) : (
					<SidebarOptionChannel>
						<span>#</span>
						{title}
					</SidebarOptionChannel>
				)}
			</SidebarOptionContainer>
		</div>
	);
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
	display: flex;
	font-size: 12px;
	align-items: center;
	padding-left: 2px;
	cursor: pointer;

	:hover {
		opacity: 0.9;
		background-color: #340e36;
	}

	> h3 {
		font-weight: 500;
	}

	> h3 > span {
		padding: 15px;
	}
`;

const SidebarOptionChannel = styled.h3`
	padding: 10px 0;
	font-weight: 300;
`;
