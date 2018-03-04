import React from "react";

const RegisterForm = () => {
    return (
        <div id="registrationDiv" className="tab-pane fade">
            <h3>Создать Аккаунт</h3>
            <div className="" id="register_form_message">&nbsp;</div>
            <div className="form-container">
                <form className="form-horizontal" action="" id="register_form" onSubmit={() => { return false }}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="register_name">Имя:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="register_name" placeholder="Введите Ваше Имя" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="register_login">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="register_login" placeholder="Введите email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="register_password">Пароль:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="register_password" placeholder="Введите пароль" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="register_confirmation">Пароль:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="register_confirmation" placeholder="Подтвердите пароль" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                                <label><input type="checkbox" />Запомнить меня</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" id="register" className="btn btn-default" >Создать</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;