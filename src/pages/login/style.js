import styled, { keyframes } from 'styled-components';

import BackgroundImg from '../../assets/login/background3.jpg';

const animate1 = keyframes`
  from {
    transform: translateY(-5px);
  }

  to {
    transform: translateY(5px);
  }
`;
const animate2 = keyframes`
  from {
    transform: translateY(-15px);
  }

  to {
    transform: translateY(10px);
  }
`;
const animate3 = keyframes`
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(10px);
  }
`;
const animate4 = keyframes`
  0% {
    opacity: 1;
    transform: translateY(-5px);
  }
  30% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(5px);
  }
`;

export const LoginComponent = styled.div`
	width: 100vw;
	height: calc(100vh - 64px);
	background-image: url(${BackgroundImg});
	box-sizing: border-box;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	.container-login-form {
		width: 70%;
		padding: 20px 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: auto;
		backdrop-filter: blur(5px);
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
		display: grid;
		grid-template-columns: 50% 25%;
		justify-content: space-around;
		border-radius: 10px;
	}
	.login-form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}
	.image-secure {
		position: relative;
		img {
			width: 100%;
		}
		.laptop {
			position: relative;
			animation: ${animate1} 2s linear infinite alternate;
		}
		.character {
			top: 0;
			left: 0;
			position: absolute;
			animation: ${animate2} 2s linear infinite alternate;
		}
		.code {
			top: 0;
			left: 0;
			position: absolute;
			animation: ${animate3} 1.5s linear infinite alternate;
		}
		.screen {
			top: 0;
			left: 0;
			position: absolute;
			animation: ${animate4} 2s linear infinite alternate;
		}
	}
`;
