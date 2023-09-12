// src/components/Web.js
import React from "react";
import "./styles/Web.css";

function Web() {
  return (
    <div className="terms-website">
      <h1>Terms & Conditions For Website</h1>
      <div className="legal-body">
        <h3>Legal Notice</h3>
        <p>
          Visitors to our website are required to accept the following terms and
          conditions in return for the information given about us, our business
          and the services we provide.
        </p>
      </div>
      <div className="condition-body">
        <h3>Conditions of use</h3>
        <ol>
          <li>
            We use our reasonable efforts to include accurate and up-to-date
            information on our web pages. Information is for guidance only and
            is not intended to form any part of a contract and can be subject to
            change without notice. We shall not be liable for any direct,
            indirect, incidental, consequential or cumulative losses or damages
            arising out of the use or inability to use these pages, any errors,
            misrepresentations or omissions on the material contained on them.
          </li>
          <li>
            The information on these web pages has been prepared with reasonable
            care and is believed by us to be legal, honest, decent and truthful
            as of the date of its preparation.
          </li>
          <li>
            You agree that the material downloaded or otherwise accessed through
            the use of our web pages is obtained entirely at your own risk and
            that you will be entirely responsible for any resulting damage to
            software or computer systems and/or any resulting loss of data even
            if we have been advised of the possibility of any such damage.
          </li>
          <li>
            We do not accept any liability in connection with any third party
            websites which may be linked or accessible through our own website
            and we do not endorse or approve the contents of any such site.
          </li>
          <li>
            In relation to a dispute arising out of this website you the user
            and we, Fitness First agree to submit exclusively to the
            jurisdiction of the courts of .
          </li>
          <li>
            Except where expressly stated to the contrary the text and graphics
            in the information contained in this website is the copyright of
            Fitness First. You may download or print out individual selections
            of these web pages only if explicitly used for your own personal
            information and not to be publicly reproduced. Permanent copying or
            storage of whole or part of this website or the information
            contained in it or reproduction or incorporation of any part of it
            in any other work or publication whether on paper or electronic
            media or any other form is expressly prohibited.
          </li>
          <li>
            The entire contents of these web pages remain our property and
            copyright with all rights reserved.
          </li>
        </ol>
      </div>
      <div className="act-body">
        <h3>Data Protection Act 1998 </h3>
        <p>
          Your personal information is personal property and as such we have
          published a separate Privacy Policy on these web pages. Our omission
          to exercise any rights under these conditions of use does not
          constitute a waiver or such right unless expressly accepted by us in
          writing.
        </p>
      </div>
    </div>
  );
}

export default Web;