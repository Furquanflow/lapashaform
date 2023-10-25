import React from 'react'
import { Container, Grid, TextField, Typography, FormGroup, Checkbox, FormControlLabel, Button, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material'


//Images
import mainlogo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

const EligibilityVerification = () => {

  const formChange=()=>{
    
    let lastName;
    let  firstName;
    let  middle;
    let  otheLn;
    let  address;
    let aptNo;
    let  city;
    let  state;
    let  zipCode;
    let  dob;
    let  socialSno;
    let  EmpEmail;
    let EmpTno;
    let  citizeOfUsa;
    let  noncitizeOfUsa;
    let  lawFullPr;
    let  noncitizenAuth;
    let  uscis;
    let  formi94;
    let  foreignPass;
    let  signOfEmp;
    let  TodayDate;
    let  lawFullPrTextFeild;     // there was no no label so i used here random label
    let  noncitizenAuthTextField;     // there was no no label so i used here random label
    let  docTitle1;
    let  issueAuth;
    let  docNo;
    let  expdate;
    let  docTitle2;
    let  issueAuth2;
    let  docNo2;
    let  expDate2;
    let  docTitle3;
    let  issueAuth3;
    let  docNo3;
    let  expdate3;
    let  docTitle4;
    let  issueAuth4;
    let  docNo4;
    let  expdate4;
    let  docTitleC;
    let  issueAuthC;
    let  docNoC;
    let  expdateC;
    let addInfoC;
    let  firstDayofEmp;
    let  lastFirstNameOfEmp;
    let  signOfEmpRep;
    let  TodaySDate;
    let  EmpBuss;
    let  EmpBusOrg;
    let  lNamesec1;
    let  fNamesec1;
    let  middleNamesec1;
    let  signOfPre;
    let  DatePre;
    let  lastNamePre;
    let  firstNamePre;
    let  middleNamePre;
    let  AddressPre;
    let  cityPre;
    let  StatePre;
    let  ZipCodePre;
    let  lastNameSBsec1;
    let  firstNameSBsec1;
    let  middleNameSBsec1;
    let  dateOfRehireSB;
    let  lastNameSb;
    let  firstNameSB;
    let  middleNameSB;
    let  docTitleSB;
    let  DocNoSB;
    let  ExpDateSB;
    let  nameOfEmpSB;
    let  signOfEmpSB;
    let  TodayDateSB;
    let  clickhereSB;
    

}
  return (
     <Grid>
      <Grid className='form-section'>
       <Container>
        <Grid className='form-inner'>
        
        <Grid container spacing={2} columns={12} className='flx-box form-hdr'>
        <Grid item xs={6}>
            <img className="brandname" src={mainlogo} alt="" />
        </Grid>
        <Grid item xs={6}>
            <ul className="hdr-date">
             <li>USCIS</li>
             <li>Form I-9</li>
             <li>OMB No.1615-0047</li>
             <li>Expires 07/31/2026</li>
            </ul>
        </Grid>
        </Grid>

        <Grid className='text-box'>
         <h1>Employment Eligibility Verification </h1>
         <h4>Department of Homeland Security </h4>
         <h6>U.S.Citizenship and Immigration Services </h6>
         <p><b>START HERE:</b> Employers must ensure the form instructions are available to employees when completing this form. Employers are liable for failing
          to comply with the requirements for completing this form. See below and the <a className="red-link" href="">Instructions</a>.</p>
          <p>ANTI-DISCRIMINATION NOTICE: All employees can choose which acceptable documentation to present for Form I-9. Employers cannot ask employees for documentation
          to verify information in</p>
          <p><b>Section 1</b>, or specify which acceptable documentation employees must present for</p>
          <p><b>Section 2</b> or Supplement B, Reverification and Rehire. Treating employees differently based on their citizenship, immigration status, or national
           origin may be illegal.</p>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
         <h4>Section 1. Employee Information and Attestation: </h4>
         <p>Employees must complete and sign Section 1 of Form I-9 no later than the first day of employment, but not before accepting a job offer.</p>

        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' value={lastName} onChange={formChange} id="standard-basic" label="Last Name (Family Name)" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' value={firstName}  onChange={formChange}  id="standard-basic" label="First Name (Given Name)" variant="standard" /> 
        </Grid>
        </Grid>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' value={middle}  onChange={formChange}  id="standard-basic" label="Middle Initial (if any)" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' value={otheLn}  onChange={formChange}  id="standard-basic" label="Other Last Names Used (if any)" variant="standard" /> 
        </Grid>
        </Grid>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' value={address}  onChange={formChange}  id="standard-basic" label="Address (Street Number and Name)" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' value={aptNo}  onChange={formChange}  id="standard-basic" label="Apt. Number (if any)" variant="standard" /> 
        </Grid>
        </Grid>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={4}>
        <TextField className='txt-width' value={city}  onChange={formChange}  id="standard-basic" label="City or Town" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={state}  onChange={formChange}  id="standard-basic" label="State" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={zipCode}  onChange={formChange}  id="standard-basic" label="ZIP Code" variant="standard" /> 
        </Grid>
        </Grid>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' value={dob}  onChange={formChange}  id="standard-basic" label="Date of Birth (mm/dd/yyyy)" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' value={socialSno}  onChange={formChange}  id="standard-basic" label="U.S. Social Security Number" variant="standard" /> 
        </Grid>
        </Grid>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' value={EmpEmail}  onChange={formChange}  id="standard-basic" label="Employee's Email Address" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' value={EmpTno}  onChange={formChange}  id="standard-basic" label="Employee's Telephone Number" variant="standard" /> 
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
         <p>I am aware that federal law provides for imprisonment and/or fines for false statements, or the use of false documents, in
          connection with the completion of this form. I attest, under penalty of perjury, that this information, including my selection
           of the box attesting to my citizenship or immigration status, is true and correct.</p>

    
    <FormGroup className='pd-top-btm'>
    <FormControl>
    <label>Check one of the following boxes to attest to your citizenship or immigration status (See page 2 and 3 of the instructions.):</label>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="r1" name="radio-buttons-group">
      <Grid container spacing={3} columns={12} className='flx-box checkbox'>

      <Grid item xs={12}>
        <FormControlLabel value={citizeOfUsa} onChange={formChange}  control={<Radio />} label="1. A citizen of the United States" />
      </Grid> 

      <Grid item xs={12}>
        <FormControlLabel value={noncitizeOfUsa} onChange={formChange} control={<Radio />} label="2. A noncitizen national of the United States (See Instructions.)" />
      </Grid>  

      <Grid item xs={6}>
        <FormControlLabel value={lawFullPr} onChange={formChange} control={<Radio />} label="3. A lawful permanent resident (Enter USCIS or A-Number.)" />
      </Grid>
      <Grid item xs={6}>
        <TextField className='txt-width' value={lawFullPrTextFeild} onChange={formChange} id="standard-basic" label="3. A lawful permanent resident (Enter USCIS or A-Number.)" variant="standard" />
     
      </Grid>

      <Grid item xs={8}>
        <FormControlLabel  value={noncitizenAuth} onChange={formChange} control={<Radio />} label="4. A noncitizen (other than Item Numbers 2. and 3. above) authorized to work until (exp. date, if any)" />
      </Grid>
      <Grid item xs={4}>
        <TextField className='txt-width' value={noncitizenAuthTextField} onChange={formChange}  id="standard-basic" label="4. A noncitizen (other than Item Numbers 2. and 3. above) authorized to work until (exp. date, if any)" variant="standard" />
      </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
    </FormGroup>

          <FormGroup className='pd-top-btm'>
           <label>If you check Item Number 4., enter one of these:</label>
           <Grid container spacing={3} columns={12} className='flx-box checkbox'>
           <Grid item xs={3}>
           <TextField className='txt-width'  value={uscis} onChange={formChange}  id="standard-basic" label="USCIS A-Number" variant="standard" />
            </Grid>
            <Grid item xs={1}>
            <Typography variant='h5'>OR</Typography>
            </Grid>
            <Grid item xs={3}>
            <TextField className='txt-width' value={formi94} onChange={formChange} id="standard-basic" label="Form I-94 Admission Number" variant="standard" />
            </Grid>
            <Grid item xs={1}>
            <Typography variant='h5'>OR</Typography>
            </Grid>
            <Grid item xs={4}>
            <TextField className='txt-width' value={foreignPass} onChange={formChange} id="standard-basic" label="Foreign Passport Number and Country of Issuance" variant="standard" />
            </Grid>  
            <Grid item xs={6}>
            <TextField className='txt-width' value={signOfEmp} onChange={formChange} id="standard-basic" label="Signature of Employee" variant="standard" />
            </Grid>
            <Grid item xs={6}>
            <TextField className='txt-width' value={TodayDate} onChange={formChange} id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" />
            </Grid>  
          </Grid>
          <Typography variant='body' mt={5}>
          If a preparer and/or translator assisted you in completing Section 1, that person MUST complete the Preparer and/or Translator Certification on Page 3
          </Typography>
          </FormGroup>
      
        </Grid>

        <hr></hr>


        <Grid className='text-box txt-fld-space'>
        <h4>Section 2. Employer Review and Verification:</h4>
        <p>Employers or their authorized representative must complete and sign Section 2 within three business days after the employee's first day of employment,
         and must physically examine, or examine consistent with an alternative procedure authorized by the Secretary of DHS, documentation from List A OR a 
         combination of documentation from List B and List C. Enter any additional documentation in the Additional Information box; see Instructions.</p>

       <Grid container spacing={3} columns={12} className='flx-box'>

       <Grid item xs={12}>
        <Typography variant='h5' className='tag'>
         List A
        </Typography>
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' value={docTitle1} onChange={formChange} id="standard-basic" label="Document Title 1" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={issueAuth} onChange={formChange} id="standard-basic" label="Issuing Authority" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={docNo} onChange={formChange} id="standard-basic" label="Document Number (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={expdate} onChange={formChange}  id="standard-basic" label="Expiration Date (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' value={docTitle2} onChange={formChange}  id="standard-basic" label="Document Title 2 (if any)" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={issueAuth2} onChange={formChange}  id="standard-basic" label="Issuing Authority" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={docNo2} onChange={formChange}  id="standard-basic" label="Document Number (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={expDate2} onChange={formChange}  id="standard-basic" label="Expiration Date (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' value={docTitle3} onChange={formChange}  id="standard-basic" label="Document Title 3 (if any)" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={issueAuth3} onChange={formChange}  id="standard-basic" label="Issuing Authority" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={docNo3} onChange={formChange}  id="standard-basic" label="Document Number (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={expdate3} onChange={formChange}  id="standard-basic" label="Expiration Date (if any)" variant="standard" /> 
       </Grid>

       <Grid item xs={12} mt={5}>
        <Typography variant='h5' className='tag'>
        List B
        </Typography>
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' value={docTitle4} onChange={formChange}  id="standard-basic" label="Document Title 4" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={issueAuth4} onChange={formChange} id="standard-basic" label="Issuing Authority" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={docNo3} onChange={formChange} id="standard-basic" label="Document Number (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={expdate4} onChange={formChange} id="standard-basic" label="Expiration Date (if any)" variant="standard" /> 
       </Grid>
       

       <Grid item xs={12} mt={5}>
        <Typography variant='h5' className='tag'>
        List C
        </Typography>
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' value={docTitleC} onChange={formChange} id="standard-basic" label="Document Title 1" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={issueAuthC} onChange={formChange} id="standard-basic" label="Issuing Authority" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={docNoC} onChange={formChange} id="standard-basic" label="Document Number (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={expdateC} onChange={formChange} id="standard-basic" label="Expiration Date (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' value={addInfoC} onChange={formChange} id="standard-basic" label="Additional Information" variant="standard" />
       </Grid>
       <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
       </Grid>



       </Grid>
       </Grid>

       <hr></hr>

       <Grid className='text-box txt-fld-space'>
        <h4>Certification:</h4>
        <p>I attest, under penalty of perjury, that (1) I have examined the documentation presented by the above-named employee, (2) the above-listed documentation
         appears to be genuine and to relate to the employee named, and (3) to the best of my knowledge, the employee is authorized to work in the United States.</p>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={6}>
       <TextField className='txt-width' value={firstDayofEmp} onChange={formChange} id="standard-basic" label="First Day of Employment (mm/dd/yyyy):" variant="standard" />
       </Grid>
       <Grid item xs={6}>
       <TextField className='txt-width' value={lastFirstNameOfEmp} onChange={formChange} id="standard-basic" label="Last Name, First Name and Title of Employer" variant="standard" /> 
       </Grid>
       <Grid item xs={6}>
       <TextField className='txt-width' value={signOfEmpRep} onChange={formChange} id="standard-basic" label="Signature of Employer or Authorized Representative" variant="standard" /> 
       </Grid>
       <Grid item xs={6}>
       <TextField className='txt-width' value={TodaySDate} onChange={formChange} id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' value={EmpBuss} onChange={formChange} id="standard-basic" label="Employer's Business or Organization Name" variant="standard" />
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' value={EmpBusOrg} onChange={formChange} id="standard-basic" label="Employer's Business or Organization Address, City or Town, State, ZIP Code" variant="standard" /> 
       </Grid>
       <Grid item xs={12}>
       <p>For reverification or rehire, complete Supplement B, Reverification and Rehire on Page 4.</p>
       </Grid>
       </Grid>
       </Grid>


    
    <Grid className='table-box'>   
    <Grid container className='flx-box table-box-title'>
        <Grid item xs={12}>
            <Typography variant='h4'>LISTS OF ACCEPTABLE DOCUMENTS</Typography>
            <Typography variant='body'>All documents containing an expiration date must be unexpired.</Typography>
            <Typography variant='body'>Documents extended by the issuing authority are considered unexpired.</Typography>
            <Typography variant='body'>Employees may present one selection from List A or a
            combination of one selection from List B and one selection from List C.</Typography>
            <Typography variant='body'><b>Examples of many of these documents appear in the Handbook for Employers (M-274).</b></Typography>
        </Grid>
    </Grid>  
    <table>

      <tr>
        <th><Typography variant='body'>LIST A</Typography>
        Documents that Establish Both Identity 
        and Employment Authorization</th>
        <th>OR</th>
        <th><Typography variant='body'>LIST B</Typography> Documents that Establish Identity</th>
        <th>AND</th>
        <th><Typography variant='body'>LIST C</Typography>
        Documents that Establish Employment
        Authorization</th>
      </tr>

      <tr>
        <td>1. U.S. Passport or U.S. Passport Card</td>
        <td className='bordernone'></td>
        <td>1. Driver's license or ID card issued by a State or
        outlying possession of the United States
        provided it contains a photograph or
        information such as name, date of birth,
        gender, height, eye color, and address</td>
        <td className='bordernone'></td>
        <td>A Social Security Account Number card,
        unless the card includes one of the following
        restrictions:
         <ul>
         <li>(1) NOT VALID FOR EMPLOYMENT</li>
         <li>(2) VALID FOR WORK ONLY WITH
         INS AUTHORIZATION</li>
          <li>(3) VALID FOR WORK ONLY WITH
          DHS AUTHORIZATION</li>
         </ul>
        </td>
      </tr>

      <tr>
        <td>2. Permanent Resident Card or Alien
        Registration Receipt Card (Form I-551)</td>
        <td className='bordernone'></td>
        <td>2. ID card issued by federal, state or local
        government agencies or entities, provided it
        contains a photograph or information such as
        name, date of birth, gender, height, eye color,
        and address</td>
        <td className='bordernone'></td>
        <td>2. Certification of report of birth issued by the
        Department of State (Forms DS-1350,
          FS-545, FS-240)</td>
      </tr>

      <tr>
        <td>3. Foreign passport that contains a
        temporary I-551 stamp or temporary
        I-551 printed notation on a machinereadable immigrant visa</td>
        <td className='bordernone'></td>
        <td>3. School ID card with a photograph</td>
        <td className='bordernone'></td>
        <td>3. Original or certified copy of birth certificate
        issued by a State, county, municipal
        authority, or territory of the United States
        bearing an official seal</td>
      </tr>

      <tr>
        <td>4. Employment Authorization Document
        that contains a photograph (Form I-766)</td>
        <td className='bordernone'></td>
        <td>4. Voter's registration card</td>
        <td className='bordernone'></td>
        <td>4. Native American tribal document</td>
      </tr>

      <tr>
        <td>5. For an individual temporarily authorized
        to work for a specific employer because
        of his or her status or parole:
         <ul>
          <li>a. Foreign passport; and</li>
          <li>b. Form I-94 or Form I-94A that has
          the following:</li>
          <ol>
           <li>(1) The same name as the
           passport; and</li>
           <li>(2) An endorsement of the
           individual's status or parole as
           long as that period of
           endorsement has not yet
           expired and the proposed
           employment is not in conflict
           with any restrictions or
           limitations identified on the form.</li>
          </ol>
         </ul>
        </td>
        <td className='bordernone'></td>
        <td>5. U.S. Military card or draft record</td>
        <td className='bordernone'></td>
        <td>5. U.S. Citizen ID Card (Form I-197)</td>
      </tr>

      <tr>
        <td>6. Passport from the Federated States of
        Micronesia (FSM) or the Republic of the
        Marshall Islands (RMI) with Form I-94 or
        Form I-94A indicating nonimmigrant
        admission under the Compact of Free
        Association Between the United States
        and the FSM or RMI</td>
        <td className='bordernone'></td>
        <td>6. Military dependent's ID card</td>
        <td className='bordernone'></td>
        <td>6. Identification Card for Use of Resident
        Citizen in the United States (Form I-179)</td>
      </tr>

      <tr>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
        <td>7. U.S. Coast Guard Merchant Mariner Card</td>
        <td className='bordernone'></td>
        <td>7. Employment authorization document
        issued by the Department of Homeland
        Security
        <br></br>
        For examples, see Section 7 and
        Section 13 of the M-274 on
        uscis.gov/i-9-central.
        <br></br>
        The Form I-766, Employment
        Authorization Document, is a List A, Item
        Number 4. document, not a List C
        document.</td>
      </tr>

      <tr>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
        <td>8. Native American tribal document</td>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
      </tr>

      <tr>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
        <td>9. Driver's license issued by a Canadian
        government authority</td>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
      </tr>

      <tr>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
        <td><b>For persons under age 18 who are 
        unable to present a document 
        listed above:</b></td>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
      </tr>

      <tr>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
        <td>10. School record or report card</td>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
      </tr>

      <tr>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
        <td>11. Clinic, doctor, or hospital record</td>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
      </tr>

      <tr>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
        <td>12. Day-care or nursery school record</td>
        <td className='bordernone'></td>
        <td className='bordernone'></td>
      </tr>


    </table>

    <Grid className='grid-title'>
    <Typography variant='h4'>Acceptable Receipts</Typography>
    <Typography variant='body'>May be presented in lieu of a document listed above for a temporary period. 
    For receipt validity dates, see the M-274. </Typography>
    <table>
  <tr>
    <td>
     <ul>
     <li>● Receipt for a replacement of a lost,
     stolen, or damaged List A document.</li>
      <li>● Form I-94 issued to a lawful
      permanent resident that contains an
      I-551 stamp and a photograph of the
      individual.</li>
      <li>● Form I-94 with “RE” notation or
      refugee stamp issued to a refugee.</li>
     </ul>
    </td>
    <td className='bordernone'><b>OR</b></td>
    <td> Receipt for a replacement of a lost, stolen, or 
    damaged List B document.</td>
    <td className='bordernone'></td>
    <td className='bordernone'>Receipt for a replacement of a lost, stolen, or 
    damaged List C document.</td>
  </tr>
    </table>
    <Typography variant='body'><b>*Refer to the Employment Authorization Extensions page on I-9 Central for more information.</b></Typography>
   </Grid>
    </Grid>
    


        

        <Grid container spacing={2} columns={16} className='flx-box'>
        <Grid item xs={8}>
            <img className="brandname" src={mainlogo} alt="" />
        </Grid>
        <Grid item xs={8}>
            <ul className="hdr-date">
             <li>USCIS</li>
             <li>Form I-9</li>
             <li>Supplement A</li>
             <li>OMB No.1615-0047</li>
             <li>Expires 07/31/2026</li>
            </ul>
        </Grid>
        </Grid>

        <Grid className='text-box'>
         <Typography variant='h1'>Supplement A<br></br>
         Preparer and/or Translator Certification for Section 1
         </Typography>
         <h4>Department of Homeland Security </h4>
         <h6>U.S.Citizenship and Immigration Services </h6>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={4}>
        <TextField className='txt-width' value={lNamesec1} onChange={formChange} id="standard-basic" label="Last Name (Family Name) from Section 1." variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={fNamesec1} onChange={formChange} id="standard-basic" label="First Name (Given Name) from Section 1." variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={middleNamesec1} onChange={formChange} id="standard-basic" label="Middle initial (if any) from Section 1." variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
         <p><b>Instructions:</b> This supplement must be completed by any preparer and/or translator who assists an employee in completing Section 1 
         of Form I-9. The preparer and/or translator must enter the employee's name in the spaces provided above. Each preparer or translator 
         must complete, sign, and date a separate certification area. Employers must retain completed supplement sheets with the employee's 
         completed Form I-9. </p>
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>


       <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct. </h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       <TextField className='txt-width' value={signOfPre} onChange={formChange} id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={DatePre} onChange={formChange} id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={lastNamePre} onChange={formChange} id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={firstNamePre} onChange={formChange} id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={middleNamePre} onChange={formChange} id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       <TextField className='txt-width' value={AddressPre} onChange={formChange} id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       <TextField className='txt-width' value={cityPre} onChange={formChange} id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' value={StatePre} onChange={formChange} id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' value={ZipCodePre} onChange={formChange} id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid>

       <hr></hr>

       {/* <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct.</h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid>

       <hr></hr>


       <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct.</h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid>

       <hr></hr>


       <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct.</h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid> */}

       <Grid container spacing={2} columns={16} className='flx-box'>
        <Grid item xs={8}>
            <img className="brandname" src={mainlogo} alt="" />
        </Grid>
        <Grid item xs={8}>
            <ul className="hdr-date">
             <li>USCIS</li>
             <li>Form I-9</li>
             <li>Supplement B</li>
             <li>OMB No.1615-0047</li>
             <li>Expires 07/31/2026</li>
            </ul>
        </Grid>
        </Grid>

        <Grid className='text-box'>
         <Typography variant='h1'>Supplement B<br></br>
         Reverification and Rehire (formerly Section 3) 
         </Typography>
         <h4>Department of Homeland Security </h4>
         <h6>U.S.Citizenship and Immigration Services </h6>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={4}>
        <TextField className='txt-width' value={lastNameSBsec1} onChange={formChange} id="standard-basic" label="Last Name (Family Name) from Section 1." variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={firstNameSBsec1} onChange={formChange} id="standard-basic" label="First Name (Given Name) from Section 1." variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={middleNameSBsec1} onChange={formChange} id="standard-basic" label="Middle initial (if any) from Section 1." variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
         <p><b>Instructions:</b> This supplement replaces Section 3 on the previous version of Form I-9. Only use this page if your employee requires 
         reverification, is rehired within three years of the date the original Form I-9 was completed, or provides proof of a legal name change. Enter 
         the employee's name in the fields above. Use a new section for each reverification or rehire. Review the Form I-9 instructions before 
         completing this page. Keep this page as part of the employee's Form I-9 record. Additional guidance can be found in the  
          <a className="red-link" href=""> Handbook for Employers: Guidance for Completing Form I-9 (M-274)</a></p>
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={2}>
        <TextField className='txt-width' value={dateOfRehireSB} onChange={formChange} id="standard-basic" label="Date of Rehire (if applicable)" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={lastNameSb} onChange={formChange} id="standard-basic" label="Last Name (Family Name)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={firstNameSB} onChange={formChange}  id="standard-basic" label="First Name (Family Name)" variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <TextField className='txt-width' value={middleNameSB} onChange={formChange} id="standard-basic" label="Middle Initial" variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        <b>Reverification:</b> If the employee requires reverification, your employee can choose to present any acceptable List A or List C documentation to show 
        continued employment authorization. Enter the document information in the spaces below.         
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={docTitleSB} onChange={formChange} id="standard-basic" label="Document Title" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={DocNoSB} onChange={formChange} id="standard-basic" label="Document Number (if any)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={ExpDateSB} onChange={formChange}  id="standard-basic" label="Expiration Date (if any) (mm/dd/yyyy)" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        I attest, under penalty of perjury, that to the best of my knowledge, this employee is authorized to work in the United States, and if the 
         employee presented documentation, the documentation I examined appears to be genuine and to relate to the individual who presented it.          
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={nameOfEmpSB} onChange={formChange} id="standard-basic" label="Name of Employer or Authorized Representative" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={signOfEmpSB} onChange={formChange} id="standard-basic" label="Signature of Employer or Authorized Representative" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={TodayDateSB} onChange={formChange} id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" />
        </Grid>

        <Grid item xs={12} mt={4}>
        <Typography variant='body'>
        Additional Information (Initial and date each notation.)           
        </Typography>
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} value={clickhereSB} onChange={formChange}  label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
        </Grid>
        </Grid>
        </Grid>





{/* These section are being used By supplement b form Page. same values aree being called by multiples times below thats why
below section are commented out */}



{/*   
<hr></hr>
        <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={2}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Date of Rehire (if applicable)" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Last Name (Family Name)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Last Name (Family Name)" variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Middle Initial" variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        <b>Reverification:</b> If the employee requires reverification, your employee can choose to present any acceptable List A or List C documentation to show 
        continued employment authorization. Enter the document information in the spaces below.         
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Document Title" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Document Number (if any)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Expiration Date (if any) (mm/dd/yyyy)" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        I attest, under penalty of perjury, that to the best of my knowledge, this employee is authorized to work in the United States, and if the 
         employee presented documentation, the documentation I examined appears to be genuine and to relate to the individual who presented it.          
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Name of Employer or Authorized Representative" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Signature of Employer or Authorized Representative" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width'value={} onChange={formChange}  id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" />
        </Grid>

        <Grid item xs={12} mt={4}>
        <Typography variant='body'>
        Additional Information (Initial and date each notation.)           
        </Typography>
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} value={} onChange={formChange} label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
        </Grid>
        </Grid>
        </Grid> */}

        <hr></hr>

        {/* <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={2}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Date of Rehire (if applicable)" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Last Name (Family Name)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange}  id="standard-basic" label="Last Name (Family Name)" variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Middle Initial" variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        <b>Reverification:</b> If the employee requires reverification, your employee can choose to present any acceptable List A or List C documentation to show 
        continued employment authorization. Enter the document information in the spaces below.         
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Document Title" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Document Number (if any)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Expiration Date (if any) (mm/dd/yyyy)" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        I attest, under penalty of perjury, that to the best of my knowledge, this employee is authorized to work in the United States, and if the 
         employee presented documentation, the documentation I examined appears to be genuine and to relate to the individual who presented it.          
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Name of Employer or Authorized Representative" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Signature of Employer or Authorized Representative" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' value={} onChange={formChange} id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" />
        </Grid>

        <Grid item xs={12} mt={4}>
        <Typography variant='body'>
        Additional Information (Initial and date each notation.)           
        </Typography>
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
        </Grid>
        </Grid>
        </Grid> */}








       <Grid container spacing={3} columns={12} className='btm-button'>
       <Grid item xs={6}></Grid>
       <Grid item xs={6}>
        <Grid className='form-btns'>
         <Button><Link to={'/stepform'} className='cancel-btn'>Cancel</Link></Button>
         <Button><Link to={'/stepform'} className='save-btn'>Save</Link></Button>
        </Grid>
       </Grid>
       </Grid>
       </Grid>
       </Container>
      </Grid>
     </Grid>
  )
}

export default EligibilityVerification