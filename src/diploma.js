import React,{useState,useEffect } from 'react';
import { Select, Option, Radio } from "@material-tailwind/react"
import Sidebar from './sidebar';




const Diploma = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  

    const toggleSidebar = () => {
      setIsOpenSidebar(!isOpenSidebar)
    }

    const [picture, setPicture] = useState(null);

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const [files, setFiles] = useState([]);

  const handleFilesChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };
    
    return (
        <>
            <div className="flex h-screen bg-gray-200">
      <Sidebar isOpen={isOpenSidebar} />

        <main className="flex flex-col h-full overflow-y-auto">

            <div className="flex flex-wrap mt-8 mx-8">
              <div className="pl-32 pr-4 pb-4 justify-center">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            First Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 h-10">
                            <input type="text" name="FirstName" id="FirstName"
                                   
                                   className="max-w-lg block w-72 h-128 md:h-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-solid border-gray-300 rounded-md"
                                //    onChange={(e) => {
                                //     setFirstName(e.target.value);
                                //   }}
                                  />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Last Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 h-10">
                            <input type="text" name="LastName" id="LastName"
                                //    onChange={(e) => {
                                //     setLastName(e.target.value);
                                //   }}
                                   className="max-w-lg block w-72 h-128 md:h-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-solid border-gray-300 rounded-md"/>
                        </div>
                    </div>
                    {/* <div className="sm:grid sm:grid-cols-3 sm:gap-2 sm:items-start  sm:pt-5">
                        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Gender
                        </label>
                            <div className="w-72 mt-1 sm:mt-0 sm:col-span-2">
                                <Select label="Select Gender">
                                    <Option value="Male" >Male</Option>
                                    <Option value="Female" >Female</Option>
                                    <Option value="Other" >Other</Option>
                                </Select>
                                </div>

                    </div> */}

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            National ID
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 h-10">
                            <input type="email" name="email" id="emails"
                            placeholder="eg, 22-2039629X22"
                            className="max-w-lg block w-72 h-128 md:h-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-solid border-gray-300 rounded-md"/>
                            </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
      <label htmlFor="nationalid" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
        National ID
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2 flex items-center">
        <label htmlFor="nationalid" className="flex items-center bg-gray-600 px-4 py-2 rounded-md text-white font-medium cursor-pointer hover:bg-gray-800 transition-colors duration-300">
          {picture ? (
            <img src={URL.createObjectURL(picture)} alt="Selected picture" className="h-48 w-48 object-cover mr-0" />
          ) : (
            <div className="bg-gray-200 h-0 w-0 flex items-center justify-center rounded-full mr-4">
            </div>
          )}
          Upload photo
        </label>
        <input id="nationalidt" type="file" accept="image/*" className="hidden" onChange={handlePictureChange} />
      </div>
    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
      <label htmlFor="pictureInput" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
        Passport Photo
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2 flex items-center">
        <label htmlFor="pictureInput" className="flex items-center bg-gray-600 px-4 py-2 rounded-md text-white font-medium cursor-pointer hover:bg-gray-800 transition-colors duration-300">
          {picture ? (
            <img src={URL.createObjectURL(picture)} alt="Selected picture" className="h-48 w-48 object-cover mr-0" />
          ) : (
            <div className="bg-gray-200 h-0 w-0 flex items-center justify-center rounded-full mr-4">
            </div>
          )}
          Upload photo
        </label>
        <input id="pictureInput" type="file" accept="image/*" className="hidden" onChange={handlePictureChange} />
      </div>
    </div>


    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
      <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
        Birth Certificate
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2 flex items-center">
        <input
          id="fileInput"
          type="file"
          accept=".pdf,.doc,.docx,.xls,.xlsx"
          className="hidden"
          onChange={handleFileChange}
        />
        <label htmlFor="fileInput" className="bg-gray-600 px-4 py-2 rounded-md text-white font-medium cursor-pointer hover:bg-gray-800 transition-colors duration-300">
          Select file
        </label>
        {file && <span className="ml-4 text-gray-500">{file.name}</span>}
      </div>
    </div>         

    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
      <label htmlFor="filesInput" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
        High School Certificates
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2 flex items-center">
        <input
          id="filesInput"
          type="file"
          accept=".pdf,.doc,.docx,.xls,.xlsx"
          multiple
          className="hidden"
          onChange={handleFilesChange}
        />
        <label htmlFor="filesInput" className="bg-gray-600  px-4 py-2 rounded-md text-white font-medium cursor-pointer hover:bg-blue-600 transition-colors duration-300">
          Select files
        </label>
        {files.length > 0 && (
          <ul className="ml-4">
            {files.map((file) => (
              <li key={file.name} className="text-gray-500">{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>

    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
      <label htmlFor="file" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
        Recomendation Letter
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2 flex items-center">
        <input
          id="file"
          type="file"
          accept=".pdf,.doc,.docx,.xls,.xlsx"
          className="hidden"
          onChange={handleFileChange}
        />
        <label htmlFor="file" className="bg-gray-600 px-4 py-2 rounded-md text-white font-medium cursor-pointer hover:bg-gray-800 transition-colors duration-300">
          Select file
        </label>
        {file && <span className="ml-4 text-gray-500">{file.name}</span>}
      </div>
    </div> 
      
                    <div className="pt-5">
                        <div className="flex justify-center">
                            <button type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                   
                                    >
                                Apply
                            </button>
                        </div>
                    </div>
              </div> 
            </div>
        </main>
    </div>
        
        </>
    )
}

export default Diploma;