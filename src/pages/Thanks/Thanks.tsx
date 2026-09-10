import { Sidebar } from "../../components/Sidebar/Sidebar"
import './Thanks.css'

export function Thanks () {

    return (
        <div className="thanks-page">
            <Sidebar/>

            <main>
                {/* Aqui deve ser o local que vamos dizer o tempo que a senha foi quebrada pelo John 
                    Vou deixar um texto provisório para ver se vamos mostrar aqui mesmo
                    Se não só deixa um obrigado */}
                <div>
                    <h1>
                        Finalizando o protótipo...
                    </h1>

                    <h2>
                        Agradecemos imensamente sua ajuda!
                    </h2>
                </div>
            </main>
        </div>
    )
}