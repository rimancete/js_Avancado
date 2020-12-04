import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

import { Title, Form } from './styled';

export default function Photos({ match }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [photo, setPhoto] = React.useState('');
  const id = get(match, 'params.id', '');

  React.useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setPhoto(get(data, 'Photos[0].url', ''));
        setIsLoading(false);
      } catch (err) {
        toast.error('Erro ao obter imagem');
        setIsLoading(false);
        history.push('/');
      }
    };
    getData();
  }, [id]);

  const handleChange = async (e) => {
    // recebe a imagem como objeto

    const file = e.target.files[0];
    // criando url do objeto imagem
    const urlPhoto = URL.createObjectURL(file);
    // seta a foto com o arquivo selecionado
    setPhoto(urlPhoto);

    // enviar foto para o servidor
    // simulando form
    const formData = new FormData();
    // setando 'aluno_id' e 'photo' => campos criados no back-end
    formData.append('aluno_id', id);
    formData.append('photo', file);

    // tentando enviar os dados com axios
    try {
      setIsLoading(true);
      // pelo axios envia a url do store => formulário simulado => cabeçalho
      await axios.post('/photos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Foto enviada com sucesso');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const status = get(err, 'response', '');

      toast.error('Erro ao enviar foto. Tente novamente');
      if (status === 401) dispatch(actions.loginFailure());
      history.push(`/aluno/${id}/edit`);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="photo">
          {photo ? <img src={photo} alt="Foto" /> : 'Selecionar'}
          <input
            type="file"
            id="photo"
            accept="image/png, image/jpeg"
            onChange={handleChange}
          />
        </label>
      </Form>
    </Container>
  );
}

Photos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
