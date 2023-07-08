import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { MdMail, MdArrowBackIosNew, MdArrowForward } from "react-icons/md";

function Atras() {
  const [showBadge, setShowBadge] = useState(true);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); 
  };
  return (
 
            <strong >
              <a onClick={handleGoBack}>
                <MdArrowBackIosNew /> volver
              </a>
            </strong>
  );
}

export default Atras;
