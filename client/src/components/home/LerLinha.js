
import React from "react";

const LerLinha = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Editar
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Deletar
       </button>
      </td>
    </tr>
  );
};

export default LerLinha;