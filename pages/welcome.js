import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Welcome() {
    const { register, handleSubmit, errors, reset } = useForm();
    const router = useRouter();

    const registerUser = values => {
        localStorage.setItem('user', values);

        console.log(localStorage.getItem('user'));

        router.push('/');
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>{'Lista de Casamento Bárbara & Nilton'}</title>
                <meta name="description" content="Lista de presentes do casamento de Bárbara e Nilton" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h2 className={styles.title}>
                    {'Olá! Bem vindo ao nosso casamento!'}
                </h2>

                <p className={styles.description}>
                    {'Nós, Bárbara e Nilton, estamos felizes por recebê-lo em nosso casamento.'}
                    {'Este é um site onde você pode, se quiser, escolher um presente da nossa lista. '}
                </p>

                <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
                    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                        <h3>{'Preencha os seus dados abaixo:'}</h3>
                        <form
                            onSubmit={handleSubmit(registerUser)}
                            className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Nome</label>
                                <input
                                    type="text"
                                    {...register('name', {
                                        required: {
                                            value: true,
                                            message: 'Informe o seu nome',
                                        },
                                    })}
                                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'ring-2 ring-red-500' : null
                                        }`}
                                    placeholder="Nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="text"
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: 'Informe seu endereço de email',
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'Isso parece muito curto para ser um endereço de email',
                                        },
                                        maxLength: {
                                            value: 120,
                                            message: 'Isso está muito longo',
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Isto não parece certo, verifique se o endereço de email está correto',
                                        },
                                    })}
                                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'ring-2 ring-red-500' : null
                                        }`}
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Telefone</label>
                                <input
                                    type="text"
                                    {...register('phone', {
                                        required: {
                                            value: true,
                                            message: 'Informe seu telefone',
                                        }
                                    })}
                                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                                    placeholder="Phone"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}