import * as Yup from 'yup';
import {validacaoCPF} from '../utils/validacaoCPF'


export default Yup.object().shape({
  nome: Yup.string().min(4, 'Nome deve ter ao menos 4 caracteres!').required("Nome da empresa é obrigatório!"),
  data_nascimento: Yup.date().required("Data de nascimento é obrigatória!"),
  cpf: Yup.string().matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF incompleto').test("is cpf", "CPF inválido",
    ((cpf) => validacaoCPF(cpf))).required("CPF é obrigatório!"),
  cep: Yup.string().matches(/^[0-9]{5}-[0-9]{3}$/, 'CEP incompleto').required("CEP é obrigatório!"),
  uf: Yup.string().max(2, 'UF deve ter no máximo 2 caracteres')
  .min(2, 'UF deve ter no mínimo 2 caracteres').required('UF é obrigatórioa'),
  cidade: Yup.string().required('Cidade é obrigatória!'),
  bairro: Yup.string().required('Bairro é obrigatório!'),
  rua: Yup.string().required('Bairro é obrigatório!')
});