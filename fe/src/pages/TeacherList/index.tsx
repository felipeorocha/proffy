import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="className">
      <PageHeader title="Esses sao os proffys disponiveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Disciplina</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  )
}

export default TeacherList;
