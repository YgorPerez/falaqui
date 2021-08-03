import { useState } from 'react';
import axios from 'axios';

const projectID = 'd599d7f6-46ba-4dc0-8705-6a92a0d8fa67';

const Modal = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			'Project-ID': projectID,
			'User-Name': username,
			'User-Secret': password,
		};

		try {
			await axios.get('https://api.chatengine.io/chats', {
				headers: authObject,
			});

			localStorage.setItem('username', username);
			localStorage.setItem('password', password);

			window.location.reload();
			setError('');
		} catch (err) {
			setError('Oops, credenciais inválidas');
		}
	};

	return (
		<div className='wrapper'>
			<div className='form'>
				<h1 className='title'>Fala Aqui</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className='input'
						placeholder='nome de usuário'
						required
					/>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='input'
						placeholder='senha'
						required
					/>
					<div align='center'>
						<button type='submit' className='button'>
							<span>Comece a conversar</span>
						</button>
					</div>
				</form>
				<h1>{error}</h1>
			</div>
		</div>
	);
};

export default Modal;
