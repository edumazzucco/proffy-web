import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.scss";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/40038109?s=460&u=f67de2a26e9aeea6bc1e7b0268270ef1289e391a&v=4"
          alt="teacher-avatar"
        />
        <div>
          <strong>Eduardo M.</strong>
          <span>Desenvolvimento Web</span>
        </div>
      </header>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <br /> <br />
        Sed veniam eligendi id. Saepe sequi et reiciendis delectus alias maiores
        aperiam cupiditate quas dolorum esse laudantium perspiciatis,
        repudiandae quod amet adipisci.
      </p>

      <footer>
        <p>
          $/hora
          <strong>R$ 150,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
