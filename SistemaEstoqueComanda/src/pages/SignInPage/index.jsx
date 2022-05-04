import React from 'react'
import useForm from '../../hooks/useForm';

export const SignInPage = () => {
  const { form, onChangeForm, errors, setErrors, span, setSpan } = useForm({
    nome: "",
    sobrenome:"",
    sexo:"",
    idade: 0,
    tel:"",
    email: "",
    cpf: "",
    password: "",
  });
  return (
    <div>
      <h4>CADASTRO</h4>
      <form method='POST'>
        <label>Nome</label>
        <input type={"text"} name={"nome"} required value={form.nome} onChange={onChangeForm}/>
        <label>Sobrenome</label>
        <input type={"text"} name={"sobrenome"} required value={form.sobrenome} onChange={onChangeForm}/>
        <label>Sexo</label>
        <select onChange={onChangeForm} name={"sexo"} value={form.sexo} required >
          <option value={"masculino"}>Masculino</option>
          <option value={"feminino"}>Feminino</option>
        </select>
        <label>Idade</label>
        <input type={"number"} name={"idade"} required value={form.idade} onChange={onChangeForm}/>
        <label>CPF</label>
        <input type={"text"} name={"cpf"} required value={form.cpf} onChange={onChangeForm}/>
        <label>Telefone</label>
        <input type={"text"} name={"tel"} required value={form.tel} onChange={onChangeForm}/>
        <label>Email</label>
        <input type={"email"} name={"email"} required value={form.email} onChange={onChangeForm}/>
        <label>Senha</label>
        <input type={"password"} name={"password"} required value={form.password} onChange={onChangeForm}/>
        <input type={"submit"} value={"Cadastrar"} />
      </form>
    </div>
  )
}
