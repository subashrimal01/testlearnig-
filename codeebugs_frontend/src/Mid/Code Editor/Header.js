// Library Imports
import React from "react";
import DropDown from "react-dropdown";


const Header = ({ onChangeLanguage, value, code, runCode, status }) => {
  const options = [
    { value: "java", label: "Java" },
    { value: "python", label: "Python 3" },
    { value: "cpp17", label: "C/C++" },
    { value: "dart", label: "Dart" },
    { value: "kotlin", label: "Kotlin" },
  ];

  console.log(code)
  const download = ()=>{
    var fileName = "myfile.txt";
    var fileContent = code.toString();
    var myFile = new Blob([fileContent], { type: 'text/plain' });
  
    window.URL = window.URL || window.webkitURL;
    var dlBtn = document.getElementById("download");
  
    dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
    dlBtn.setAttribute("download", fileName);
  }

  return (
  
    <div style={{ textAlign: "center", width: "100%" }} className="bg-light mb-5">
      <div className="ml-2 mt-3 bg-dark" style={{ textAlign: 'left',  }}>
        
        <DropDown
          onChange={onChangeLanguage}
          className="nm  ml-3"
          options={options}
          value={value}
          placeholder="Select an option"
        />
        <button
        style={{ fontSize: "12px" }}
          onClick={() => runCode()}
          disabled={status === "Run" ? false : true}
          className="btn-success mr-2 ml-2"
        >
          {status}
        </button>
        <button className="btn-warning mr-2  ml-2 "><a href="#" id="download" onClick={download}>Download Code</a></button>

      </div>
      
    </div>
  );
};

export default Header;
