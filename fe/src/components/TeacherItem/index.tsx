import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/16563382?s=460&u=d67eb3f4f2174beac7862212d56e57f9d11359a9&v=4"
          alt="Avatar"
        />
        <div>
          <strong>Nome</strong>
          <span>Disciplina</span>
        </div>
      </header>
      <p>
        Descricao do professor/tutor
        <br /><br />
        Expericnecia
      </p>
      <footer>
        <p>
          Preco/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
