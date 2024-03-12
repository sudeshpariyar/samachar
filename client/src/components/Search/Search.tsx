import React, { Dispatch, useState } from "react";
import "./Search.css";
import ReactModal from "react-modal";
import CustomHeading from "../CustomHeading/CustomHeading";
import CustomButton from "../CustomButton/CustomButton";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "2rem",
    transform: "translate(-50%, -50%)",
    borderRadius: "1rem",
  },
};

const Search = ({
  openModal,
  setModalDisplay,
}: {
  openModal: boolean;
  setModalDisplay: Dispatch<boolean>;
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function closeModal() {
    setModalDisplay(false);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
    navigate(`/search`, { state: { query } });
  };
  return (
    <div className="modal-wrapper">
      <ReactModal
        style={customStyles}
        isOpen={openModal}
        onRequestClose={closeModal}
      >
        <CustomHeading headingLevel="h1">Search News</CustomHeading>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search News here...."
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        <CustomHeading headingLevel="h2">Category News</CustomHeading>
        <div className="search-category-wrapper">
          <CustomButton className="search-button" onClick={closeModal}>
            <Link to="/sports">Sports</Link>
          </CustomButton>
          <CustomButton className="search-button" onClick={closeModal}>
            <Link to="/health">Health</Link>
          </CustomButton>
          <CustomButton className="search-button" onClick={closeModal}>
            <Link to="/political">Political</Link>
          </CustomButton>
          <CustomButton className="search-button" onClick={closeModal}>
            <Link to="/business">Business</Link>
          </CustomButton>
          <CustomButton className="search-button" onClick={closeModal}>
            <Link to="/science">Science</Link>
          </CustomButton>
          <CustomButton className="search-button" onClick={closeModal}>
            <Link to="/entertainment">Entertainment</Link>
          </CustomButton>
        </div>
        <div className="close-icon" onClick={closeModal}>
          <IoCloseCircleOutline color="red" size="40" />
        </div>
      </ReactModal>
      ;
    </div>
  );
};

export default Search;
