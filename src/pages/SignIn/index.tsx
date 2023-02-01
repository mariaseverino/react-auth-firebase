import {
    GoogleAuthProvider,
    signInWithPopup,
    User,
    EmailAuthProvider,
} from "firebase/auth";
import { GoogleLogo } from "phosphor-react";
import { useState } from "react";
import { auth } from "../../services/firebase";
import "./styles.scss";

export function SignIn() {
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="user">
                {user.photoURL && (
                    <img src={user.photoURL} alt="foto do usuario" />
                )}
                <strong>{user.displayName} </strong>
                <small>{user.email}</small>
            </div>
            <h1>Acesse sua conta</h1>

            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Mollitia fugiat, nobis quae nisi saepe sunt. Veritatis dicta,
            </span>

            <button type="button" className="btn" onClick={handleGoogleSignIn}>
                <GoogleLogo />
                Entrar com google
            </button>
        </div>
    );
}
