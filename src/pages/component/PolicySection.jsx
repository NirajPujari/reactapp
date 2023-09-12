// src/components/PolicySection.js
import React, { useState } from "react";
import "./styles/PolicySection.css";

const PolicyData = [
  {
    title: "General",
    context:
      'This policy statement provides information on the obligations and policies of Fitness First Health Clubs, its subsidiaries, affiliates, and associated companies (the "Company") equal to any in the world in respect of the protections they provide to an individual. As such, the Company undertakes to apply, where practicable, those principles and the processes set out herein to its operations globally.',
  },
  {
    title: "Our Corporate Privacy",
    context:
      "The Company's officers, management, and members of staff shall, at all times, respect the confidentiality of and endeavor to keep safe any and all personal data collected and/or stored and/or transmitted and/or used for, or on behalf of, the Company. The Company shall endeavor to ensure all collection and/or storage and/or transmission and/or usage of personal data by the Company shall be done in an appropriate manner for membership applications, and internal purposes. Where an individual legitimately requests access to and/or correction of personal data relating to the individual, held by the Company, then the Company shall provide and/or correct that data in an appropriate time and manner.",
  },
  {
    title: "Statement of Practices",
    context:
      "<h6>Types of Personal Data Collected :</h6><br>For the purpose of carrying on the Company's business, including registration and administration of the Company's related products and services (including relevant online services), you may be requested to provide personal data such as, but not limited to, the following, without which it may not be possible to satisfy your request:<br>1. Your name;<br>2. Correspondence address, and/or billing address;<br>3. Payment details, including credit card and banking information;<br>4. Contact details, including contact name and telephone number or email address<br>5. Your image taken at our premises with a web cam (or like equipment ) for visual identification<br><br>Fitness First may employ other companies or individuals to assist us in providing our services, or to provide certain services such as analysing customer lists, providing marketing assistance or consulting services. These third parties may have access to information needed to perform their function but cannot use that information for other purposes.<br><br>In some instances, you may also be requested to provide certain data that may be used to further improve our products and services and/or better tailor the type of information presented to you. In most cases, this type of data is optional although, where the requested service is a personalised service, or provision of a product or dependant on your providing all requested data, failure to provide the requested data may prevent us from providing the service to you. This type of data includes, but is not limited to:<br>1. Your age.<br>2. Gender.<br>3. Salary range and employment details.<br>4. Education and Profession.<br>5. Hobbies and leisure activities.<br>6. Other related products and services subscribed to you.<br>7. Family and household demographics.<br><br>Some of the Company's Websites may place a \"cookie\" on your machine. For example to provide personalised services and/or maintain your identity across multiple pages within or across one or more sessions. This information may include, but is not limited to, relevant login and authentication details as well as information relating to your activities and preferences across our Websites.<br><br>Under certain circumstances, telephone calls made to our order and/or service hotlines and/or inquiry telephone numbers are recorded for the purposes of quality control, appraisal, as well as staff management and development.<br><br>Unless expressly indicated at the time of calling, such recordings are NOT personal data of the caller and therefore, in respect of the caller, are not subject to the various provisions of the Ordinance and the caller has no rights and/or claims; either statutory, contractual or tortuous, over or to such data. At all times, every care is taken to protect such recordings from inadvertent and/or unauthorized access.",
  },
  {
    title: "Accuracy of Personal Data",
    context:
      "Where possible, we will validate data provided using generally accepted practices and guidelines. This includes the use of check sum verification on some numeric fields such as account numbers or credit card numbers.In some instances, we are able to validate the data provided against pre-existing data held by the Company. In some cases, the Company is required to see original documentation before we may use the personal data such as with Personal Identifiers and/or proof of address.",
  },
  {
    title: "Storage and Retention of Personal Data",
    context:
      "Fitness First will endeavor to take all reasonable steps to keep secure any personal information recorded, and to keep this information accurate and up to date. The information is stored on secure servers if in digital format, or in locked areas if in hardcopy format: these repositories are protected in controlled facilities. In some cases these facilities may be overseas. Fitness First employees and data processors are obliged to respect the confidentiality of any personal information held by Fitness First. However, security of communications over the Internet cannot be guaranteed, and therefore absolute assurance that information will be secure at all times cannot be given. Fitness First will not be held responsible for events arising from unauthorized access to personal information.<br><br>The Company will destroy any personal data it may hold in accordance with our internal retention policy. The policy states that:<br>1. Personal data will only be retained for as long as is necessary to fulfill the original or directly related purpose for which it was collected, unless the personal data is also retained to satisfy any applicable statutory or contractual obligations; and<br>2. Personal data are purged from the Company's electronic, manual, and other filing systems in accordance with specific schedules based on the above criteria and the Company's internal procedures.",
  },
  {
    title: "Disclosure of Personal Data",
    context:
      "All personal data held by the Company will be kept confidential but the Company may, where such disclosure is necessary to satisfy the purpose, or a directly related purpose, for which the data was collected provide such information to the following parties:<br><br>1. Any subsidiaries, holding companies, associated companies, or affiliates of, or companies controlled by, or under common control with the Company;<br>2. Any person or company who is acting for or on behalf of the Company, or jointly with the Company, in respect of the purpose or a directly related purpose for which the data was provided;<br>3. Any other person or company who is under a duty of confidentiality to the Company and has undertaken to keep such information confidential, provided such person or company has a legitimate right to such information; and<br>4. Any financial institutions, charge or credit card issuing companies, credit information or reference bureaux, or collection agencies necessary to establish and support the payment of any services being requested.<br>Personal data may also be disclosed to any person or persons that have a right under Singaporean law to gain access to such information provided they are able to prove their authority to access such information. For example, if the Company were served with a court order demanding certain customer information then the Company would disclose the information to the duly appointed officer of the court or such other persons as the court orders.",
  },
  {
    title: "Transfer of Personal Data Outside of India",
    context:
      "At times it may be necessary and/or prudent for the Company to transfer certain personal data to places outside of India in order to carry out the purposes, or directly related purposes, for which the personal data were collected. Where such a transfer is performed, it will be done so in accordance with Fitness First Global policy, and local legislation such as the Personal Data Protection Act 2010.",
  },
  {
    title: "Security of Personal Data",
    context:
      "Physical records containing personal data are securely stored in locked areas and/or containers when not in use. Computer data are stored on computer systems and storage media to which access is strictly controlled and/or are located within restricted areas. Access to records and data without appropriate management authorization are strictly prohibited. Authorizations are granted only on a \"need to know\" basis that is commensurate with an individual's Company responsibilities and their training. Records of the Company are under the control of assigned information officers who are responsible to ensure the transfer of or access to information is legitimate. Audit records may be produced to validate data modifications in order to verify the data's integrity. There may be violations logging processes for investigation of any unauthorized attempt to access information. Encryption technology, such as SSL, may be employed for the transmission of data collected online.",
  },
  {
    title: "Access and Correction of Personal Data",
    context:
      "Individuals have the right to :<br>1. Check whether the Company holds any personal data relating to them and, if so, obtain copies of such data;<br>2. Require the Company to correct any personal data relating to them which is inaccurate for the purpose for which it is being used.",
  },
  {
    title: "Direct Marketing",
    context:
      "Individuals who submit their personal details to the Company after agreeing to the Company's terms thereby authorize the Company or its representative to contact the individual via phone, email or SMS overriding their NDNC registration. The Company will honor an individual's request not to use his or her personal data for the purposes of direct marketing. Any such request should clearly state details of the personal data in respect of which the request is being made. Specifically, we request that you include the corresponding Company assigned account numbers which are printed on the Company's statements/invoices. Please also state clearly the authority under which you are authorized to make such a request. Unless otherwise instructed as per the above, the Company may use any of the data collected in the normal course of its business for marketing purposes.",
  },
  {
    title: "Fitness First and links to other web sites",
    context:
      "Fitness First provides links to web sites outside of the Fitness First site. These linked sites are not under the control of Fitness First, and Fitness First is not responsible for the conduct of companies linked to the Fitness First web site, nor for the performance or otherwise of any content and/or software contained in such external websites.",
  },
  {
    title: "Change Policy",
    context:
      "Fitness First reserve the right to alter any of the clauses contained herein in compliance with local legislation, to meet its global policy requirements, and for any other purpose deemed necessary by the Company.",
  },
];

const PolicySection = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <div className="policy-list">
        {PolicyData.map((policy, index) => (
          <div
            key={index}
            className={`policy-section ${
              activeSection === index ? "active" : ""
            }`}
          >
            <button
              className="accordion"
              onClick={() => handleAccordionToggle(index)}
            >
              {policy.title}
              <span className="arrow">&#x25BC;</span>
            </button>
            <div className="content">
              <p
                dangerouslySetInnerHTML={{ __html: policy.context }}
                className="context"
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicySection;