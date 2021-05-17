import { Container, MenuItem, Following, FollowingHeader, InfoContainer, Links } from './styles';
import User from '../User';

function Sidebar() {
	return (
		<Container>
			<MenuItem active>
				<img src="/images/homeIcon.svg"></img>
				<span>Para você</span>
			</MenuItem>
			<MenuItem>
				<img src="/images/peopleIcon.svg"></img>
				<span>Seguindo</span>
			</MenuItem>
			<Following>
				<FollowingHeader>Suas principais contas</FollowingHeader>
				<User
					user={{
						name: 'Thiago Nigro',
						username: 'oprimorico',
						avatar:
							'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1641759273745430~c5_100x100.jpeg?x-expires=1621299600&x-signature=sbabdB2yxW3U02dRCZuRAwVpR4Q%3D',
					}}></User>
			</Following>
			<InfoContainer>
				<Links margin>
					<a>Inicio</a>
					<a>Sobre</a>
					<a>Sala de imprenssa</a>
					<a>Carreira</a>
					<a>ByteDance</a>
				</Links>
				<Links>
					<a>Ajuda</a>
					<a>Segurança</a>
				</Links>
				<Links>
					<a>Diretrizes</a>
					<a>Termos</a>
				</Links>
				<Links margin>
					<a>Privacidade</a>
				</Links>
				<Links margin>
					<a>© 2021 TikTok</a>
				</Links>
			</InfoContainer>
		</Container>
	);
}

export default Sidebar;
