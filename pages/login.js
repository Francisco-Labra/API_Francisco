import React from "react";
import {useRouter} from 'next/router'

function LoginPage() {

    const router = useRouter()
    return (
        <div>
            <div>
                <button onClick={() => router.push('/api/auth/signin/github')}>
                    Iniciar Sesion
                    </button>
            </div>
        </div>
    )
}

export default LoginPage