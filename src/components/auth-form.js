import React from "react";

const AuthForm = () => {
    return (
        <div id="loginDiv" className="tab-pane fade in active">
            <h3>Вход</h3>
            <div className="" id="auth_form_message">&nbsp;</div>
            <div className="form-container">
                <form className="form-horizontal" action="" id="auth_form" onSubmit={() => { return false }}>
                    <div className="hidden-elems">
                        <div className="form-group hidden-elem">
                            <label className="control-label col-sm-2" htmlFor="auth_login" >Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="auth_login" placeholder="Введите email" autoComplete="on" />
                            </div>
                        </div>
                        <div className="form-group hidden-elem">
                            <label className="control-label col-sm-2" htmlFor="auth_password">Пароль:</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="auth_password" placeholder="Введите пароль" />
                            </div>
                        </div>
                        <div className="form-group hidden-elem">
                            <div className="col-sm-offset-2 col-sm-10">
                                <div className="checkbox">
                                    <label><input type="checkbox" />Запомнить меня</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button id="auth" type="submit" className="btn btn-default">Войти</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;