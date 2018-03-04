import React from "react";

import RegisterForm from './register-form';
import AuthForm from './auth-form';

const AuthBlock = () => {
    return (
        <div className="subheader">
            <div className="panel-group">
                <div className="panel panel-default">
                    <div className="panel-heading ">
                        <div className="panel-title ">
                            <a data-toggle="collapse" href="#collapse1">Регистрация | Авторизация</a>
                        </div>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse">
                        <div className="panel-body">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#loginDiv">Войти</a></li>
                                <li><a data-toggle="tab" href="#registrationDiv">Регистрация</a></li>
                            </ul>
                            <div className="tab-content">
                                <AuthForm />
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthBlock;