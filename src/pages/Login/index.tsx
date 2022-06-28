import LogoCora from '../../assets/images/logo.png';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../../data-access/auth';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export function Login() {
    const { MakeLogin } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full h-screen bg-c_grayscale_100 flex flex-col justify-center items-center">
            <div className="mb-10 flex justify-center items-center">
                <img className="h-24 w-24 rounded-lg" src={LogoCora} alt="Logotipo Cora" />
            </div>

            <Formik
                data-testid="formik"
                initialValues={{ user: '', password: '' }}
                validationSchema={yup.object().shape({
                    user: yup.string().required('Este campo é obrigatório'),
                    password: yup.string().required('Este campo é obrigatório'),
                })}
                onSubmit={values => MakeLogin(values)}
            >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="justify-start w-80">
                            <div className="mb-4">
                                <label className="text-gray-500">usuário:</label>
                                <input
                                    data-testid="user"
                                    className="w-full h-12 bg-gray-100 rounded-md focus:border focus:border-c_primary outline-none p-2"
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
                                <div className="w-full h-12 flex items-center bg-gray-100 pl-1 rounded-md  outline-none">
                                    <input
                                        data-testid="password"
                                        className="w-full h-auto rounded-md bg-gray-100 focus:border focus:border-c_primary outline-none autofill:bg-gray-100 p-2"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                    />
                                    <button
                                        type="button"
                                        className="group outline-none bg-gray-100 p-3 h-auto rounded-md "
                                        onClick={() => setShowPassword(prevState => !prevState)}
                                    >
                                        {showPassword ? (
                                            <AiFillEye
                                                className="text-c_grayscale group-focus:text-c_grayscale_medium"
                                                size={20}
                                            />
                                        ) : (
                                            <AiFillEyeInvisible
                                                className="text-c_grayscale group-focus:text-c_grayscale_medium"
                                                size={20}
                                            />
                                        )}
                                    </button>
                                </div>
                                {errors.password && touched.password && (
                                    <p className="text-red-900 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="bg-c_primary hover:bg-pink-700 focus:bg-pink-700 text-gray-200 hover:text-gray-200 transition-colors w-full rounded-lg h-10 focus:outline-none "
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
