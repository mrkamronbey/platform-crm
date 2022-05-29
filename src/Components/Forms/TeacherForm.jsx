import "./Forms.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// ! accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import {useeffect, useRef} from 'react'

// ! accordion

const Input = styled("input")({
  display: "none",
});

function TeacherForm({ menuCollapse }) {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // ! accordion  function
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChanges = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // const checkboxs = useRef()

  // useEffect(()=>{


  // },[checkboxs])

 
  
  // ! accordion  function
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                className="c-froms-tab"
                icon={
                  <input checked className="checkbox-round" type="checkbox" />
                }
                iconPosition="start"
                label="Personal Details"
                value="1"
              />
              <Tab
                className="c-froms-tab"
                icon={<input className="checkbox-round" type="checkbox" />}
                iconPosition="start"
                label="Education"
                value="2"
              />
              <Tab
                className="c-froms-tab"
                icon={<input className="checkbox-round" type="checkbox" />}
                iconPosition="start"
                label="Agreement"
                value="3"
              />
              <Tab
                className="c-froms-tab"
                icon={<input className="checkbox-round" type="checkbox" />}
                iconPosition="start"
                label="Finish"
                value="4"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
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
              <div className="c-formBIg">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <ul className="c-form-list">
                    <li className="c-form-item">
                      <label className="c-form-label">Name</label>
                      <input
                        required
                        placeholder="Enter teacher’s name"
                        className="c-forms-input"
                        type="text"
                      />
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Surname</label>
                      <input
                        required
                        placeholder="Enter teacher’s surname"
                        className="c-forms-input"
                        type="text"
                      />
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Middle name</label>
                      <input
                        required
                        placeholder="Enter teacher’s middle name"
                        className="c-forms-input"
                        type="text"
                      />
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Date birth</label>
                      <input
                        required
                        placeholder="Enter teacher’s name"
                        className="c-forms-input"
                        type="date"
                      />
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Phone number</label>
                      <input
                        required
                        defaultValue="+998"
                        placeholder="+998 90 000 00 00"
                        className="c-forms-input"
                        type="number"
                        maxLength="13"
                      />
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Nationality</label>
                      <input
                        required
                        placeholder="Choose teacher’s location"
                        className="c-forms-input"
                        type="text"
                      />
                    </li>
                    <li className="c-form-item ">
                      <label className="c-form-label">Seria Passport</label>
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
                          <input
                            required
                            maxLength={7}
                            placeholder="1234567"
                            className=" c-forms-input"
                            type="number"
                          />
                        </div>
                      </div>
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">E-mail</label>
                      <input
                        required
                        placeholder="Enter teacher’s name"
                        className="c-forms-input"
                        type="email"
                      />
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Region</label>
                      <select required className="c-forms-input c-form-select">
                        <option disabled selected>
                          Choose teacher’s location
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
                      <label className="c-form-label">Address</label>
                      <input
                        required
                        placeholder="Enter teacher’s address"
                        className="c-forms-input"
                        type="email"
                      />
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Date registration</label>
                      <input
                        required
                        placeholder="Enter teacher’s name"
                        className="c-forms-input"
                        type="date"
                      />
                    </li>
                  </ul>
                </div>
                <div className="c-img-upload-box">
                  <div className="c-img-box">
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
                      className="c-form-upload-btn"
                      variant="contained"
                      component="span"
                    >
                      + Upload image
                    </Button>
                  </label>
                  <div className="c-gender-box">
                    <label className="c-form-label">Gender</label>
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
              </div>
            </form>
          </TabPanel>
          <TabPanel value="2" className="c-scroll-panel">
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
                  flexDirection: "column",
                }),
              }}
            >
              <div className="c-formBIg">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <ul className="c-form-list c-form-lists">
                    <li className="c-form-item">
                      <label className="c-form-label">Direction of study</label>
                      <select required className="c-forms-input c-form-select">
                        <option style={{ color: "#999" }} disabled selected>
                          FrontEnd
                        </option>
                        <option className="c-option" value="1">
                          FrontEnd
                        </option>
                        <option className="c-option" value="2">
                          Backend
                        </option>
                        <option className="c-option" value="3">
                          Android developer
                        </option>
                        <option className="c-option" value="4">
                          IOS developer
                        </option>
                      </select>
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Teaching language</label>
                      <select required className="c-forms-input c-form-select">
                        <option style={{ color: "#999" }} disabled selected>
                          Choose Teaching language
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
                      <label className="c-form-label">Experience</label>
                      <input
                        required
                        placeholder="2 years"
                        className="c-forms-input"
                        type="text"
                      />
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Graduation</label>
                      <input
                        required
                        placeholder="Enter teacher’s graduation"
                        className="c-forms-input"
                        type="text"
                      />
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Agreement duration</label>
                      <input
                        required
                        placeholder="2 years"
                        className="c-forms-input"
                        type="text"
                      />
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Time attendens</label>
                      <select required className="c-forms-input c-form-select">
                        <option style={{ color: "#999" }} disabled selected>
                          Time
                        </option>
                        <option className="c-option" value="1">
                          Full time
                        </option>
                        <option className="c-option" value="1">
                          Part time
                        </option>
                      </select>
                    </li>
                    <li className="c-form-item">
                      <label className="c-form-label">Language</label>
                      <select required className="c-forms-input c-form-select">
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
                      <label className="c-form-label">Level language</label>
                      <select required className="c-forms-input c-form-select">
                        <option style={{ color: "#999" }} disabled selected>
                          Level
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
                      <label className="c-form-label">Language</label>
                      <select required className="c-forms-input c-form-select">
                        <option style={{ color: "#999" }} disabled selected>
                          Russian
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
                      <label className="c-form-label">Level language</label>
                      <select
                        selected="selected"
                        required
                        className="c-forms-input c-form-select"
                      >
                        <option style={{ color: "#999" }} disabled selected>
                          Level
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
                </div>
              </div>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="c-hr-btn-box">
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
                      <div className="c-hr"></div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="c-form-list c-form-lists">
                      <li className="c-form-item">
                        <label className="c-form-label">
                          Direction of study
                        </label>
                        <select
                          required
                          className="c-forms-input c-form-select"
                        >
                          <option  style={{ color: "#999" }} disabled selected>
                            FrontEnd
                          </option>
                          <option className="c-option" value="1">
                            FrontEnd
                          </option>
                          <option className="c-option" value="2">
                            Backend
                          </option>
                          <option className="c-option" value="3">
                            Android developer
                          </option>
                          <option className="c-option" value="4">
                            IOS developer
                          </option>
                        </select>
                      </li>
                      <li className="c-form-item">
                        <label className="c-form-label">
                          Teaching language
                        </label>
                        <select
                          required
                          className="c-forms-input c-form-select"
                        >
                          <option style={{ color: "#999" }} disabled selected>
                            Choose Teaching language
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
                        <label className="c-form-label">Experience</label>
                        <input
                          required
                          placeholder="2 years"
                          className="c-forms-input"
                          type="text"
                        />
                      </li>
                      <li className="c-form-item">
                        <label className="c-form-label">Graduation</label>
                        <input
                          required
                          placeholder="Enter teacher’s graduation"
                          className="c-forms-input"
                          type="text"
                        />
                      </li>
                      <li className="c-form-item">
                        <label className="c-form-label">
                          Agreement duration
                        </label>
                        <input
                          required
                          placeholder="2 years"
                          className="c-forms-input"
                          type="text"
                        />
                      </li>
                      <li className="c-form-item">
                        <label className="c-form-label">Time attendens</label>
                        <select
                          required
                          className="c-forms-input c-form-select"
                        >
                          <option style={{ color: "#999" }} disabled selected>
                            Time
                          </option>
                          <option className="c-option" value="1">
                            Full time
                          </option>
                          <option className="c-option" value="1">
                            Part time
                          </option>
                        </select>
                      </li>
                      <li className="c-form-item">
                        <label className="c-form-label">Language</label>
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
                        <label className="c-form-label">Level language</label>
                        <select
                          required
                          className="c-forms-input c-form-select"
                        >
                          <option style={{ color: "#999" }} disabled selected>
                            Level
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
                        <label className="c-form-label">Language</label>
                        <select
                          required
                          className="c-forms-input c-form-select"
                        >
                          <option style={{ color: "#999" }} disabled selected>
                            Russian
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
                        <label className="c-form-label">Level language</label>
                        <select
                          selected="selected"
                          required
                          className="c-forms-input c-form-select"
                        >
                          <option style={{ color: "#999" }} disabled selected>
                            Level
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
            </form>
          </TabPanel>
          <TabPanel value="3"></TabPanel>
          <TabPanel value="4"></TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
export default TeacherForm;