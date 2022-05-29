import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// ! accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// ! accordion

const Input = styled("input")({
  display: "none",
});
function StudentEdit({ menuCollapse }) {
  // ! accordion  function
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChanges = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // ! accordion  function
  return (
    <>
      <div
        className="studentEdit"
        style={{
          ...(!menuCollapse && {
            width: "80%",
            marginLeft: "270px",
            transition: "0.3s",
          }),
          ...(menuCollapse && {
            width: " 90%",
            marginLeft: "100px",
            transition: "0.3s",
          }),
        }}
      >
        <h1 className="c-form-title">PERSONAL DETAILS</h1>
        <form
          style={{
            ...(!menuCollapse && {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }),
            ...(menuCollapse && {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }),
          }}
        >
          <div className="c-formBIg c-form-top c-scroll-form">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                padding: " 0 30px",
              }}
            >
              <div className="c-img-upload-box postion-img-upload">
                <div className="c-img-box c-small-img-box">
                  <i class="bx bx-user"></i>
                </div>
                <label htmlFor="contained-button-file">
                  <Input
                    required
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button
                    className="c-form-upload-btn c-upload-postion"
                    variant="contained"
                    component="span"
                  >
                    <i class="bx bx-edit-alt"></i>
                  </Button>
                </label>
                <div className="c-gender-box">
                  <label className="c-form-label c-blue-color">Gender</label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label
                      style={{ marginRight: "10px" }}
                      className="c-form-label"
                    >
                      Male
                    </label>
                    <input
                      style={{ marginRight: "30px" }}
                      className="checkbox-round"
                      type="checkbox"
                    />
                    <label
                      style={{ marginRight: "10px" }}
                      className="c-form-label"
                    >
                      Female
                    </label>
                    <input className="checkbox-round" type="checkbox" />
                  </div>
                </div>
              </div>
              <ul className="c-form-list">
                <li className="c-form-item">
                  <label className="c-form-label c-blue-color">Name</label>
                  <div className="c-form-item-check">
                    <input
                      required
                      placeholder="Enter student’s name"
                      className="c-forms-input"
                      type="text"
                    />
                    <div></div>
                  </div>
                </li>
                <li className="c-form-item">
                  <label className="c-form-label c-blue-color">Surname</label>
                  <div className="c-form-item-check">
                    <input
                      required
                      placeholder="Enter student’s surname"
                      className="c-forms-input"
                      type="text"
                    />
                    <div></div>
                  </div>
                </li>
                <li className="c-form-item">
                  <label className="c-form-label c-blue-color">
                    Middle name
                  </label>
                  <div className="c-form-item-check">
                    <input
                      required
                      placeholder="Enter student’s middle name"
                      className="c-forms-input"
                      type="text"
                    />
                    <div></div>
                  </div>
                </li>
                <li className="c-form-item">
                  <label className="c-form-label c-blue-color">
                    Date birth
                  </label>
                  <div className="c-form-item-check">
                    <input
                      required
                      placeholder="Enter student’s name"
                      className="c-forms-input"
                      type="date"
                    />
                    <div></div>
                  </div>
                </li>
                <li className="c-form-item">
                  <label className="c-form-label c-blue-color">
                    Phone number
                  </label>
                  <div className="c-form-item-check">
                    <input
                      required
                      defaultValue="+998"
                      placeholder="+998 90 000 00 00"
                      className="c-forms-input"
                      type="number"
                      maxLength="13"
                    />
                    <div></div>
                  </div>
                </li>
                <li className="c-form-item">
                  <label className="c-form-label c-blue-color">
                    Nationality
                  </label>
                  <div className="c-form-item-check">
                    <input
                      required
                      placeholder="Choose student’s location"
                      className="c-forms-input"
                      type="text"
                    />
                    <div></div>
                  </div>
                </li>
                <li className="c-form-item ">
                  <label className="c-form-label c-blue-color">
                    Seria Passport
                  </label>
                  <div className="c-form-items">
                    <div style={{ width: "60px", marginRight: "10px" }}>
                      <input
                        required
                        placeholder="AA"
                        maxLength={2}
                        className=" c-forms-input"
                        type="text"
                      />
                    </div>
                    <div style={{ width: "200px" }}>
                      <label></label>
                      <div className="c-form-item-check">
                        <input
                          required
                          maxLength={7}
                          placeholder="1234567"
                          className=" c-forms-input"
                          type="number"
                        />
                        <div></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="c-form-item">
                  <label className="c-form-label c-blue-color">E-mail</label>
                  <div className="c-form-item-check">
                    <input
                      required
                      placeholder="Enter student’s name"
                      className="c-forms-input"
                      type="email"
                    />
                    <div></div>
                  </div>
                </li>
                <li className="c-form-item">
                  <label className="c-form-label c-blue-color">Region</label>
                  <select required className="c-forms-input c-form-select">
                    <option disabled selected>
                      Choose student’s location
                    </option>
                    <option className="c-option" value="1">
                      Olmazor tumani
                    </option>
                    <option className="c-option" value="2">
                      Yunusobod tumani
                    </option>
                    <option className="c-option" value="3">
                      Chilonzor tumani
                    </option>
                    <option className="c-option" value="4">
                      Yakkasaroy tumani
                    </option>
                  </select>
                </li>
                <li className="c-form-item c-selects-item">
                  <label className="c-form-label c-blue-color">Address</label>
                  <div className="c-form-item-check">
                    <input
                      required
                      placeholder="Enter student’s address"
                      className="c-forms-input"
                      type="text"
                    />
                    <div></div>
                  </div>
                </li>
                <li className="c-form-item">
                  <label className="c-form-label c-blue-color">
                    Dad’s phone number
                  </label>
                  <div className="c-form-item-check">
                    <input
                      required
                      placeholder="+998 90 000 00 00"
                      className="c-forms-input"
                      type="number"
                    />
                    <div></div>
                  </div>
                </li>
                <li className="c-form-item">
                  <label className="c-form-label c-blue-color">
                    Mom’s phone number{" "}
                  </label>
                  <div className="c-form-item-check">
                    <input
                      required
                      defaultValue="+998"
                      placeholder="+998 90 000 00 00"
                      className="c-forms-input"
                      type="number"
                    />
                    <div></div>
                  </div>
                </li>
              </ul>

              <div className="c-form-education">
                <h1 className="c-form-title c__form-title">EDUCATION</h1>
                <ul className="c-form-list c-form-lists c__form-list">
                  <li className="c-form-item">
                    <label className="c-form-label c-blue-color">
                      Direction of study
                    </label>
                    <div className="c-form-item-check">
                      <input
                        required
                        placeholder="FrontEnd"
                        className="c-forms-input"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </li>
                  <li className="c-form-item">
                    <label className="c-form-label c-blue-color">Group</label>
                    <div className="c-form-item-check">
                      <input
                        required
                        placeholder="G-21"
                        className="c-forms-input"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </li>
                  <li className="c-form-item">
                    <label className="c-form-label c-blue-color">Teacher</label>
                    <select required className="c-forms-input c-form-select">
                      <option style={{ color: "#999" }} disabled selected>
                        Enter student’s Teacher
                      </option>
                      <option className="c-option" value="1">
                        Beginner
                      </option>
                      <option className="c-option" value="2">
                        Elementry
                      </option>
                      <option className="c-option" value="3">
                        Intermediate
                      </option>
                      <option className="c-option" value="4">
                        Pri-Intermediate
                      </option>
                    </select>
                  </li>
                  <li className="c-form-item">
                    <label className="c-form-label c-blue-color">
                      Studying language
                    </label>
                    <select required className="c-forms-input c-form-select">
                      <option style={{ color: "#999" }} disabled selected>
                        Uzbek
                      </option>
                      <option className="c-option" value="1">
                        English
                      </option>
                      <option className="c-option" value="2">
                        Russian
                      </option>
                      <option className="c-option" value="3">
                        Uzbek
                      </option>
                    </select>
                  </li>
                  <li className="c-form-item">
                    <label className="c-form-label c-blue-color">
                      Time of study
                    </label>
                    <select required className="c-forms-input c-form-select">
                      <option style={{ color: "#999" }} disabled selected>
                        Time of study
                      </option>
                      <option className="c-option" value="1">
                        Beginner
                      </option>
                      <option className="c-option" value="2">
                        Elementry
                      </option>
                      <option className="c-option" value="3">
                        Intermediate
                      </option>
                      <option className="c-option" value="4">
                        Pri-Intermediate
                      </option>
                    </select>
                  </li>
                </ul>
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="c-hr-btn-box c-form-hr-padding">
                        <button
                          className="c-plus-minus-btn"
                          type="button"
                          onClick={handleClick}
                        >
                          {show ? (
                            <i class="bx bxs-plus-circle"></i>
                          ) : (
                            <i class="bx bxs-plus-circle"></i>
                          )}
                        </button>
                        <div className="c-hr c-form-hr"></div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul className="c-form-list c__form-list">
                        <li className="c-form-item">
                          <label className="c-form-label c-blue-color">
                            Graduation
                          </label>
                          <div className="c-form-item-check">
                            <input
                              required
                              placeholder="Enter student’s graduation "
                              className="c-forms-input"
                              type="text"
                            />
                            <div></div>
                          </div>
                        </li>

                        <li className="c-form-item">
                          <label className="c-form-label c-blue-color">
                            Result entering exam
                          </label>
                          <div className="c-form-item-check">
                            <input
                              required
                              placeholder="Enter student’s result "
                              className="c-forms-input"
                              type="text"
                            />
                            <div></div>
                          </div>
                        </li>
                        <li className="c-form-item">
                          <label className="c-form-label c-blue-color">
                            Language
                          </label>
                          <select
                            required
                            className="c-forms-input c-form-select"
                          >
                            <option style={{ color: "#999" }} disabled selected>
                              English
                            </option>
                            <option className="c-option" value="1">
                              English
                            </option>
                            <option className="c-option" value="2">
                              Russian
                            </option>
                            <option className="c-option" value="3">
                              Spain
                            </option>
                            <option className="c-option" value="4">
                              French
                            </option>
                          </select>
                        </li>
                        <li className="c-form-item">
                          <label className="c-form-label c-blue-color">
                            Level language
                          </label>
                          <select
                            required
                            className="c-forms-input c-form-select"
                          >
                            <option style={{ color: "#999" }} disabled selected>
                              Level language
                            </option>
                            <option className="c-option" value="1">
                              Beginner
                            </option>
                            <option className="c-option" value="2">
                              Elementry
                            </option>
                            <option className="c-option" value="3">
                              Intermediate
                            </option>
                            <option className="c-option" value="4">
                              Pri-Intermediate
                            </option>
                          </select>
                        </li>

                        <li className="c-form-item">
                          <label className="c-form-label c-blue-color">
                            Language
                          </label>
                          <select
                            required
                            className="c-forms-input c-form-select"
                          >
                            <option style={{ color: "#999" }} disabled selected>
                              English
                            </option>
                            <option className="c-option" value="1">
                              English
                            </option>
                            <option className="c-option" value="2">
                              Russian
                            </option>
                            <option className="c-option" value="3">
                              Spain
                            </option>
                            <option className="c-option" value="4">
                              French
                            </option>
                          </select>
                        </li>
                        <li className="c-form-item">
                          <label className="c-form-label c-blue-color">
                            Level language
                          </label>
                          <select
                            selected="selected"
                            required
                            className="c-forms-input c-form-select"
                          >
                            <option style={{ color: "#999" }} disabled selected>
                              Level language
                            </option>
                            <option className="c-option" value="1">
                              Beginner
                            </option>
                            <option className="c-option" value="2">
                              Elementry
                            </option>
                            <option className="c-option" value="3">
                              Intermediate
                            </option>
                            <option className="c-option" value="4">
                              Pri-Intermediate
                            </option>
                          </select>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className="c-fomr-payment">
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="c-hr-btn-box c-form-hr-padding">
                        <button
                          className="c-plus-minus-btn"
                          type="button"
                          onClick={handleClick}
                        >
                          {show ? (
                            <i class="bx bxs-plus-circle"></i>
                          ) : (
                            <i class="bx bxs-plus-circle"></i>
                          )}
                        </button>
                        <div className="c-hr c-form-hr"></div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <h1 className="c-form-title c__form-titles">PAYMENT</h1>
                      <ul className="c-form-list c-from-lists">
                        <li className="c-form-item">
                          <label className="c-form-label c-blue-color">
                          Number of Agreement
                          </label>
                          <input
                              required
                              placeholder="AA1234567 "
                              className="c-forms-input"
                              type="text"
                            />
                        </li>
                        <li className="c-form-item">
                          <label className="c-form-label c-blue-color">
                          Amount of payment
                          </label>
                          <input
                              required
                              placeholder="4 000 000 sum "
                              className="c-forms-input"
                              type="text"
                            />
                        </li>

                        <li className="c-form-item">
                          <label className="c-form-label c-blue-color">
                          Paid payment
                          </label>
                          <input
                              required
                              placeholder="2 000 000 sum "
                              className="c-forms-input"
                              type="text"
                            />
                        </li>
                        <li className="c-form-item">
                          <label className="c-form-label c-blue-color">
                          Unpaid payment
                          </label>
                          <input
                              required
                              placeholder="2 000 000 sum "
                              className="c-forms-input"
                              type="text"
                            />
                        </li>
                      </ul>
                      <div className="c-payment-btn-box">
                        <Button className="c-form-upload-btn c-grey-btn">
                          Cancel
                        </Button>
                        <Button className="c-form-upload-btn">Save</Button>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentEdit;
