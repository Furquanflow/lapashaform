import React from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

//Images
import mainlogo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const EmploymentInformationForm = ({ data, formChange }) => {
  const onInfoForm = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Grid>
      <Grid className="form-section">
        <Container>
          <Grid className="form-inner">
            <Grid container spacing={2} columns={12} className="flx-box">
              <Grid item xs={6}>
                <img className="brandname" src={mainlogo} alt="" />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>

            <Grid className="text-box">
              <h1>Company Name New Employee Onboarding Form</h1>
            </Grid>

            <hr></hr>

            <form onSubmit={onInfoForm}>
              <Grid className="text-box txt-fld-space">
                <h4>Personal Information: </h4>
                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.fNamePerInfo}
                      name="fNamePerInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Full Name:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.lnamePerInfo}
                      name="lnamePerInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="City:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.statePerInfo}
                      name="statePerInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="State:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.zipcodePerInfo}
                      name="zipcodePerInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="ZIP Code:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.phoneNoPerInfo}
                      name="phoneNoPerInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Phone Number:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.emailAddPerInfo}
                      name="emailAddPerInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Email Address:"
                      variant="standard"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="txt-width"
                      value={data.addPerInfo}
                      name="addPerInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Address:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <hr></hr>

              <Grid className="text-box txt-fld-space">
                <h4>Emergency Contact Information:</h4>

                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      value={data.emrCnoPerInfo}
                      name="emrCnoPerInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Emergency Contact Name:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      value={data.relaPerInfo}
                      name="relaPerInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Relationship:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      value={data.emrPhoneNoPerInfo}
                      name="emrPhoneNoPerInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Phone Number:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <hr></hr>

              <Grid className="text-box txt-fld-space">
                <h4>Employment Details:</h4>

                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.startDateEmpDet}
                      name="startDateEmpDet"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Start Date:"
                      variant="standard"
                      type="date"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.deptEmpDet}
                      name="deptEmpDet"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Department/Team:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.managerEmpDet}
                      name="managerEmpDet"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Manager/Supervisor:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.empIdEmpDet}
                      name="empIdEmpDet"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Employee ID (if applicable):"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <hr></hr>

              <Grid className="text-box txt-fld-space">
                <h4>Tax Information:</h4>

                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.ssNoTaxInfo}
                      name="ssNoTaxInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Social Security Number:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.depTaxInfo}
                      name="depTaxInfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Department/Team:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>Federal Tax Withholding (W-4) Status:</label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="r1"
                          name="radio-buttons-group"
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.signleTaxInfo}
                                name="signleTaxInfo"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Single"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.marriedTaxInfo}
                                name="marriedTaxInfo"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Married"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.headOfHouseTaxInfo}
                                name="headOfHouseTaxInfo"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Head of Household"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                </Grid>
              </Grid>

              <hr></hr>

              <Grid className="text-box txt-fld-space">
                <h4>Direct Deposit Information:</h4>

                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      value={data.bankNameDDinfo}
                      name="bankNameDDinfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Bank Name:"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      value={data.routNoDDinfo}
                      name="routNoDDinfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Routing Number:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      value={data.accNoDDinfo}
                      name="accNoDDinfo"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Account Number:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <hr></hr>

              <Grid className="text-box txt-fld-space">
                <h4>Benefit Elections:</h4>
                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={6}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>Health Insurance:</label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="r1"
                          name="radio-buttons-group"
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.enrollHI}
                                name="enrollHI"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Enroll"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.declineHI}
                                name="declineHI"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Decline"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>Dental Insurance:</label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="r1"
                          name="radio-buttons-group"
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.enrollDI}
                                name="enrollDI"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Enroll"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.declineDI}
                                name="declineDI"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Decline"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>Vision Insurance:</label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="r1"
                          name="radio-buttons-group"
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.enrollVI}
                                name="enrollVI"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Enroll"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.declineVI}
                                name="declineVI"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Decline"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>Retirement Plan:</label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="r1"
                          name="radio-buttons-group"
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.enrollRP}
                                name="enrollRP"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Enroll"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.declineRP}
                                name="declineRP"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Decline"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                </Grid>
              </Grid>

              <hr></hr>

              <Grid className="text-box txt-fld-space form-points">
                <h4>Acknowledgment of Company Policies:</h4>
                <p>
                  I acknowledge that I have received and read the following
                  company policies and agree to abide by them:
                </p>
                <ul>
                  <li>Employee Handbook</li>
                  <li>Code of Conduct</li>
                  <li>Confidentiality Agreement</li>
                  <li>Safety Guidelines</li>
                </ul>
              </Grid>

              <hr></hr>

              <Grid className="text-box txt-fld-space">
                <h4>Additional Information:</h4>
                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={12}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>
                          Do you have any allergies or medical conditions that
                          the company should be aware of?
                        </label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="r1"
                          name="radio-buttons-group"
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.medConyes}
                                name="medConyes"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="Yes"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value={data.medConNo}
                                name="medConNo"
                                onChange={formChange}
                                required
                                control={<Radio />}
                                label="No If yes, please provide details:"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.conFormsign}
                      name="conFormsign"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Signature:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.conFormDate}
                      name="conFormDate"
                      onChange={formChange}
                      required
                      id="standard-basic"
                      label="Date:"
                      variant="standard"
                      type="date"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>
                      By signing above, I confirm that the information provided
                      is accurate and complete to the best of my knowledge. I
                      understand that I am responsible for reviewing and
                      complying with all company policies and procedures.
                    </p>
                  </Grid>
                </Grid>
              </Grid>

              <hr></hr>

              <Grid className="text-box txt-fld-space">
                <p>
                  This onboarding form covers basic employee information, tax
                  details, direct deposit, benefit elections, and acknowledgment
                  of company policies. You can customize this form to match your
                  company's specific onboarding process and requirements.
                  Additionally, it's important to keep sensitive information
                  secure and compliant with data protection regulations.
                </p>
              </Grid>

              <Grid container spacing={3} columns={12} className="btm-button">
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <Grid className="form-btns">
                    <Button>
                      <Link to={"/stepform"} className="cancel-btn">
                        Cancel
                      </Link>
                    </Button>
                    <Button type="submit" className="save-btn">
                      {/* <Link
                        to={"/stepform"}
                        id="save-value"
                        className="save-btn"
                      > */}
                        Save
                      {/* </Link> */}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default EmploymentInformationForm;
