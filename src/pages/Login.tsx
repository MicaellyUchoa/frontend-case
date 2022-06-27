import { useNavigate } from 'react-router-dom';
import { useAuth } from '../data-access/auth/AuthContext';
import LogoCora from '../assets/images/logo.png';
import { Formik } from 'formik';
import * as yup from 'yup';

export function Login() {
    const navigate = useNavigate();
    const { MakeLogin, signed } = useAuth();

    const handleLogin = async (values: { user: string; password: string }) => {
        await MakeLogin({
            user: values.user,
            password: values.password,
        });
        signed && navigate('/home');
    };

    return (
        <div className="w-full h-screen bg-c_grayscale_100 flex flex-col justify-center items-center">
            <div className="mb-10 flex justify-center items-center">
                <img className="h-24 w-24 rounded-lg" src={LogoCora} alt="Logotipo Cora" />
            </div>

            <Formik
                initialValues={{ user: '', password: '' }}
                validationSchema={yup.object().shape({
                    user: yup.string().required('Este campo é obrigatório'),
                    password: yup.string().required('Este campo é obrigatório'),
                })}
                onSubmit={values => {
                    handleLogin(values);
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="justify-start w-80">
                            <div className="mb-4">
                                <label className="text-gray-500">usuário:</label>
                                <input
                                    className="w-full h-10 border-gray-100 rounded-md focus:outline-none p-2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="user"
                                    value={values.user}
                                />
                                {errors.user && touched.user && (
                                    <p className="text-red-900 text-xs mt-1">{errors.user}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-500">senha:</label>
                                <input
                                    className="w-full h-10 border-gray-100 rounded-md focus:outline-none p-2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="password"
                                    type="password"
                                    value={values.password}
                                />
                                {errors.password && touched.password && (
                                    <p className="text-red-900 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="bg-c_primary hover:bg-pink-700 focus:bg-c_primary text-gray-200 hover:text-gray-200 transition-colors w-full rounded-lg h-10 focus:outline-none "
                            >
                                Entrar
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}
