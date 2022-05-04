import React from "react";
import useForm from "../../hooks/useForm";

export const LoginPage = () => {
  const { form, onChangeForm, errors, span,setSpan, clearFields } = useForm({
    email: "",
    password: ""
  })
  return (
    <div>
      <h4>LOGIN</h4>
      <form>
        <label>Email</label>
        <input type={"email"} name={"email"} required value={form.email} onChange={onChangeForm}/>
        <label>Senha</label>
        <input type={"password"} name={"password"} required value={form.password} onChange={onChangeForm}/>
        <input type={"submit"} value={"Entrar"} />
      </form>
      <div>
        <p>
          Não possui cadastro? <a href="/sign">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};
