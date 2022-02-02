import React, { useState, useRef } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import axios from 'axios'
import InputMask from 'react-input-mask'
import schemaRegister from './schemas/schemaRegister';

const Register = () => {

  const [cepInformation, setCepInformation] = useState(null)

  function enviar(values, actions) {
    console.log(values);
  }

  async function apiCorreios(value) {
    const cep = value.target.value.replace(/[!@#$%_^&*-]/g, "")
    console.log('CEP', cep)
    if (cep.length === 8) {
      await axios(`https://viacep.com.br/ws/${cep}/json/`).then(e => {
        console.log(e)
        setCepInformation(e)
      })
    }
  }

  return (
    <Formik
      validationSchema={schemaRegister}
      onSubmit={enviar}
      validateOnMount
      initialValues={{ nome: '', data_nascimento: '', cpf: '', cep: '', uf: '', cidade: '' }}>
      {({ isValid, handleChange, setFieldValue, setFieldError }) => (
        <Form className='container-form'>

          <div className="container-form__field">
            <label>Nome</label>
            <Field name='nome' type='text' />
            <div className='container-form__field__container-msg'>
              <ErrorMessage name='nome' />
            </div>
          </div>

          <div className="container-form__field">
            <label>Data de Nascimento</label>
            <Field name="data_nascimento" type="date" onChange={handleChange} />
            <div className="container-form-modal__container-msg">
              <ErrorMessage name="data_nascimento" />
            </div>
          </div>

          <div className="container-form__field">
            <label>CPF</label>
            <Field name="cpf" render={({ field }) => (
              <InputMask placeholder="999.999.999-99" {...field} type="text" mask="999.999.999-99" onChange={handleChange} />
            )} />
            <div className="container-form-modal__container-msg">
              <ErrorMessage name="cpf" />
            </div>
          </div>

          <div className="container-form__field">
            <label>CEP</label>
            <Field name="cep" render={({ field }) => (
              <InputMask placeholder="00000-000" {...field} type="text" mask="99999-999" onChange={(e) => {
                handleChange(e)
                apiCorreios(e)
                if (!cepInformation.data.erro) {
                  setFieldValue('uf', cepInformation.data.uf)
                  setFieldValue('cidade', cepInformation.data.localidade)
                  setFieldValue('bairro', cepInformation.data.bairro)
                  setFieldValue('rua', cepInformation.data.logradouro)
                } 
                if (cepInformation.data.erro) {
                  setFieldError('cep', "CEP inválido")
                  setFieldValue('uf', '')
                  setFieldValue('cidade', '')
                  setFieldValue('bairro', '')
                  setFieldValue('rua', '')
                }
                
              }} />
            )} />
            <div className="container-form-modal__container-msg">
              <ErrorMessage name="cep" />
            </div>
          </div>

          <div className="container-form__field">
            <label>UF</label>
            <Field name="uf" onChange={handleChange} placeholder="PR" type="text" />
            <div className="container-form-modal__container-msg">
              <ErrorMessage name="uf" />
            </div>
          </div>

          <div className="container-form__field">
            <label>Cidade</label>
            <Field name="cidade" onChange={handleChange} placeholder="Curitiba" type="text" />
            <div className="container-form-modal__container-msg">
              <ErrorMessage name="cidade" />
            </div>
          </div>

          <div className="container-form__field">
            <label>Bairro</label>
            <Field name="bairro" onChange={handleChange} placeholder="Bairro Novo" type="text" />
            <div className="container-form-modal__container-msg">
              <ErrorMessage name="bairro" />
            </div>
          </div>

          <div className="container-form__field">
            <label>Rua</label>
            <Field name="rua" onChange={handleChange} placeholder="Bairro Novo" type="text" />
            <div className="container-form-modal__container-msg">
              <ErrorMessage name="rua" />
            </div>
          </div>

          <button disabled={!isValid} className={`container-form__button ${isValid && 'container-form__button-go'}`} type="submit">
            Register
          </button>

        </Form>
      )}
    </Formik>
  )
}

export default Register