import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';

const projectId = 'd599d7f6-46ba-4dc0-8705-6a92a0d8fa67';

const App = () => {
	if (!localStorage.getItem('username')) return <LoginForm />;

	return (
		<ChatEngine
			height='100vh'
			projectID={projectId}
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			onNewMessage={() =>
				new Audio(
					'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
				).play()
			}
		/>
	);
};

export default App;
