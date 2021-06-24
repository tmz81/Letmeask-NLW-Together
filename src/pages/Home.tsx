import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import googleIcon from '../assets/img/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home(){
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()

    async function handCreateRoom(){
        if (!user) {
            await signInWithGoogle()
        }
    
        history.push('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} />
                <strong>Toda pergunta tem uma resposta. </strong>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} />
                    <button onClick={handCreateRoom} className="create-room">
                        <img src={googleIcon} />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}